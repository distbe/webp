
export type FileBufferResult = FileBufferError | FileBuffer

export interface FileBufferError {
  name: string
  error: unknown
}

export interface FileBuffer {
  name: string
  type: string
  size: number
  buffer: ArrayBuffer
}

export function isFileBuffer(result: FileBufferResult): result is FileBuffer {
  return 'buffer' in result
}

export function isFileBufferError(result: FileBufferResult): result is FileBufferError {
  return 'error' in result
}

const isAvailableWebkitGetAsEntry = typeof DataTransferItem !== 'undefined' && 'webkitGetAsEntry' in DataTransferItem.prototype

function isDirectoryEntry(entry: FileSystemEntry): entry is FileSystemDirectoryEntry {
  return entry.isDirectory
}

function isFileEntry(entry: FileSystemEntry): entry is FileSystemFileEntry {
  return entry.isFile
}

async function traverseEntries(entries: (FileSystemEntry | null)[]): Promise<FileBufferResult[]> {
  return Promise.all(entries.map((entry): Promise<FileBufferResult | FileBufferResult[]> => {
    if (!entry) {
      return Promise.resolve([])
    }
    if (isDirectoryEntry(entry)) {
      return new Promise<FileBufferResult[]>((resolve) => {
        const reader = entry.createReader()
        reader.readEntries(entries => {
          resolve(traverseEntries(entries))
        })
      })
    }
    if (isFileEntry(entry)) {
      return new Promise<FileBuffer>((resolve) => {
        entry.file(async (f) => {
          resolve({
            name: entry.fullPath,
            type: f.type,
            size: f.size,
            buffer: await f.arrayBuffer(),
          })
        })
      })
    }
    return Promise.resolve({
      name: entry.fullPath,
      error: new Error('Unknown entry type'),
    })
  })).then(e => e.flat())
}

export async function dataTransferToBuffers(transfer?: DataTransfer | null): Promise<FileBufferResult[]> {
  if (!transfer) {
    return []
  }
  if (!isAvailableWebkitGetAsEntry) {
    return await Promise.all([...transfer.files].map(async (file): Promise<FileBufferResult> => {
      try {
        const buffer = await file.arrayBuffer()
        return {
          name: file.name,
          type: file.type,
          size: file.size,
          buffer
        }
      } catch (e) {
        return {
          name: file.name,
          error: e,
        }
      }
    }))
  }

  return await traverseEntries([...transfer.items].map(item => item.webkitGetAsEntry()))
}
