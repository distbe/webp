/* eslint-disable @typescript-eslint/ban-ts-comment */

export type Vips = typeof import('wasm-vips')

let vipsPromise = null as Promise<Vips> | null;
export function loadVips(): Promise<Vips> {
  if (vipsPromise) {
    return vipsPromise;
  }
  vipsPromise = (async () => {
    const Vips: typeof import('wasm-vips') = await import(
      // @ts-ignore
      '/node_modules/wasm-vips/lib/vips-es6.js'
    ).then((m) => m.default);
    return await Vips()
  })()
  return vipsPromise;
}
