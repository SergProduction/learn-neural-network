import { canvasParams, gridRectsCount, gridSize } from './constants'


export const render = (state, ctx) => {
  if (state.imageScaledBufferPixels.every(i => i === 0)) {
    ctx.clearRect(0, 0, canvasParams.width, canvasParams.height)
  }
  else {
    renderImageScaledBufferPixels(ctx, state.imageScaledBufferPixels)
  }

  renderGrid(ctx)
}

function renderImageScaledBufferPixels(ctx, imageScaledBufferPixels) {
  let index = 0;
  for (let y = 0; y < gridRectsCount.height; y++) {
    for (let x = 0; x < gridRectsCount.width; x++) {
      const isDraw = imageScaledBufferPixels[index]
      if (isDraw) {
        ctx.beginPath()
        ctx.rect(
          x * gridSize.rectWidth,
          y * gridSize.rectHeight,
          gridSize.rectWidth,
          gridSize.rectHeight
        )
        ctx.fill()
        ctx.closePath()
      }
      index++
    }
  }
}


function renderGrid(ctx) {
  ctx.beginPath()
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 1
  
  for (let y = 0; y < gridRectsCount.height; y++) {
    for (let x = 0; x < gridRectsCount.width; x++) {
      ctx.rect(
        x * gridSize.rectWidth,
        y * gridSize.rectHeight,
        gridSize.rectWidth,
        gridSize.rectHeight
      )
    }
  }
  
  ctx.stroke()
  ctx.closePath()  
}