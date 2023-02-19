import { isFileBufferError, type FileBufferResult } from './file';
import { svgToBlob } from './svg';
import { resize, type Fit, type Vips } from './vips';

export interface TransformResult {
  filename: string
  size: number
  error: string | null
  blob: Blob | null
}

function hasMessage(e: unknown): e is { message: string } {
  return typeof e === 'object' && e !== null && 'message' in e;
}

function errorToErrorMessage(e: unknown): string {
  if (typeof e === 'string') {
    return e;
  }
  if (e instanceof Error) {
    return e.message;
  }
  return 'Unknown error';
}

export interface TransformOptions {
  quality: number
  width: number | null
  height: number | null
  fit: Fit | null
  scale: number | null
}

export async function transformFileBuffer(vips: Vips, files: FileBufferResult[], options: TransformOptions, onProgress: (progress: number) => void): Promise<TransformResult[]> {
  if (files.length === 0) {
    return [];
  }

  onProgress(0)

  const results: TransformResult[] = [];
  for (const [fileIndex, file] of files.entries()) {
    onProgress(fileIndex / files.length);

    if (isFileBufferError(file)) {
      results.push({
        filename: file.name,
        size: 0,
        error: errorToErrorMessage(file.error),
        blob: null,
      })
      continue;
    }
    try {
      let input: ArrayBuffer;
      if (file.type === 'image/svg+xml') {
        input = await svgToBlob(new Blob([file.buffer])).then((b) => b.arrayBuffer());
      } else {
        input = await file.buffer;
      }
      let im = vips.Image.newFromBuffer(input, file.name);
      if ((options.width || options.height) && options.fit) {
        im = resize(vips, im, [options.width ?? 0, options.height ?? 0], options.fit);
      } else if (options.scale) {
        im = im.resize(options.scale, {});
      }
      const buffer = await im.writeToBuffer('.webp', {
        Q: ~~options.quality // to int
      });
      const blob = new Blob([buffer], { type: 'image/webp' });


      results.push({
        filename: file.name,
        size: file.size,
        error: null,
        blob,
      })
    } catch (e) {
      let errorMessage: string | null = null;
      if (hasMessage(e) && e.message.includes('unable to load from buffer')) {
        errorMessage = 'Unsupported image format!';
      } else {
        errorMessage = errorToErrorMessage(e);
      }
      results.push({
        filename: file.name,
        size: file.size,
        error: errorMessage,
        blob: null,
      })
    }
  }

  onProgress(1)
  return results
}
