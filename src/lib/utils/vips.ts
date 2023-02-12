/* eslint-disable @typescript-eslint/ban-ts-comment */

import type { Image } from 'wasm-vips';

export type Vips = typeof import('wasm-vips')

export type Fit = 'Contain' | 'Cover' | 'Fill' | 'Inside' | 'Outside';

type Size = [width: number, height: number];

let vipsPromise = null as Promise<Vips> | null;
export function loadVips(): Promise<Vips> {
  if (vipsPromise) {
    return vipsPromise;
  }
  vipsPromise = (async () => {
    const Vips: Vips = await import(
      // @ts-ignore
      // 'wasm-vips'
      '/node_modules/wasm-vips/lib/vips-es6.js'
    ).then((m) => m.default);
    return await Vips()
  })()
  return vipsPromise;
}

export function resize(vips: Vips, im: Image, size: Size, fit: Fit): Image {
  const imageSize: Size = [im.width, im.height];
  const [hshrink, vshrink] = shrink(imageSize, size, fit);

  // Kernel
  // nearest: Use nearest neighbour interpolation .
  // cubic: Use a Catmull-Rom spline .
  // mitchell: Use a Mitchell-Netravali spline .
  // lanczos2: Use a Lanczos kernel  with a=2.
  // lanczos3: Use a Lanczos kernel with a=3 (the default).
  im = im.resize(1 / hshrink, {
    vscale: 1 / vshrink,
    kernel: 'lanczos3'
  });
  if (fit === 'Contain') {
    imageSize[0] = im.width;
    imageSize[1] = im.height;
    const [left, top] = embed(imageSize, size);
    const width = Math.max(imageSize[0], size[0]);
    const height = Math.max(imageSize[1], size[1]);
    if (!im.hasAlpha()) {
      const alphaBand = vips.Image.newMatrix(...imageSize)
        .newFromImage(255)
        .cast(im.format);
      im = im.bandjoin(alphaBand);
    }
    im = im.embed(left, top, width, height, {
      extend: 'background',
      background: Array.from<number>({ length: im.bands }).fill(0),
    });
  } else if (fit == 'Cover') {
    imageSize[0] = im.width;
    imageSize[1] = im.height;
    const [left, top] = crop(imageSize, size);
    const width = Math.min(imageSize[0], size[0]);
    const height = Math.min(imageSize[1], size[1]);
    im = im.extractArea(left, top, width, height);
  }
  return im
}

// https://github.com/lovell/sharp/blob/2c465282699432299c478ba00ab825e07d9bdab0/src/common.cc#L957
function shrink([width, height]: Size, [targetWidth, targetHeight]: Size, fit: Fit): Size {
  let hShrink = 1;
  let vShrink = 1;
  if (targetWidth > 0 && targetHeight > 0) {
    // Fixed width and height
    hShrink = width / targetWidth;
    vShrink = height / targetHeight;

    switch (fit) {
      case 'Cover':
      case 'Outside':
        if (hShrink < vShrink) {
          vShrink = hShrink;
        } else {
          hShrink = vShrink;
        }
        break;
      case 'Contain':
      case 'Inside':
        if (hShrink > vShrink) {
          vShrink = hShrink;
        } else {
          hShrink = vShrink;
        }
        break;
      case 'Fill':
        break;
    }
  } else if (targetWidth > 0) {
    hShrink = width / targetWidth;
    if (fit !== 'Fill') {
      vShrink = hShrink;
    }
  } else if (targetHeight > 0) {
    vShrink = height / targetHeight;
    if (fit !== 'Fill') {
      hShrink = vShrink;
    }
  }

  hShrink = Math.min(hShrink, width);
  vShrink = Math.min(vShrink, height);

  return [hShrink, vShrink];
}

function crop([width, height]: Size, [targetWidth, targetHeight]: Size): Size {
  return [
    ~~((width - targetWidth + 1) / 2),
    ~~((height - targetHeight + 1) / 2),
  ]
}

function embed([width, height]: Size, [targetWidth, targetHeight]: Size): Size {
  return [
    ~~((targetWidth - width) / 2),
    ~~((targetHeight - height) / 2),
  ]
}
