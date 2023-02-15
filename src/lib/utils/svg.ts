
export function svgImageSize(svg: string) {
  const width = svg.match(/width="(\d+)"/)?.[1]
  const height = svg.match(/height="(\d+)"/)?.[1]
  if (!width || !height) {
    const match = svg.match(/viewBox="0 0 (\d+) (\d+)"/)
    if (match) {
      return { width: +match[1], height: +match[2] }
    }
  }
  return { width: width ? +width : 0, height: height ? +height : 0 }
}

export async function svgToBlob(file: Blob): Promise<Blob> {
  const svg = await file.text()
  const { width, height } = svgImageSize(svg)
  const url = await new Promise<string>((resolve) => {
    const image = new Image()
    const xml = window.btoa(unescape(encodeURIComponent(svg)))
    image.src = 'data:image/svg+xml;base64,' + xml
    image.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = width ?? 640
      canvas.height = height ?? 480
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(image, 0, 0, width ?? 640, height ?? 480)
      }
      resolve(canvas.toDataURL('image/png'))
    }
  })

  const parts = url.split(';base64,');
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: "image/png" });
}
