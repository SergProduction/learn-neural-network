export const canvasParams = {
  width: 120,
  height: 200
}


export const gridRectsCount = {
  width: 3,
  height: 5,
}


export const gridSize = {
  rectWidth: canvasParams.width / gridRectsCount.width,
  rectHeight: canvasParams.height / gridRectsCount.height
}

export const initalState = {
  clear: false,
  startedDraw: false,
  imageScaledBufferPixels: new Uint8Array(15),
}


const zero  = Uint8Array.from([1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1])
const one   = Uint8Array.from([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1])
const two   = Uint8Array.from([1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1])
const tree  = Uint8Array.from([1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1])
const four  = Uint8Array.from([1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1])
const five  = Uint8Array.from([1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1])
const six   = Uint8Array.from([1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1])
const seven = Uint8Array.from([1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1])
const eight = Uint8Array.from([1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1])
const nine  = Uint8Array.from([1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1])


export const digits = [
  zero,
  one,
  two,
  tree,
  four,
  five,
  six,
  seven,
  eight,
  nine
]