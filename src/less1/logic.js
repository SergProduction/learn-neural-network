import { gridSize, gridRectsCount, digits } from './constants'
import { SimplePerceptron } from './simple-perceptron'




const simplePerceptron = new SimplePerceptron(15)

// число 5
simplePerceptron.train(5, digits)


export const logic = (state, event, customEvent) => {
  switch (customEvent) {
    case 'clear': {
      return {
        ...state,
        imageScaledBufferPixels: new Uint8Array(15),
      }
    }
    case 'recognize': {
      const predict = simplePerceptron.predict(state.imageScaledBufferPixels)
      alert(
        predict ? 'YET! It is five!' : 'it is not five'
      )
      return state
    }
  }

  switch (event.type) {
    case 'mousedown': {
      return {
        ...state,
        startedDraw: true
      }
    }
    case 'mousemove': {
      if (state.startedDraw === false) {
        return state
      }
      detectCoordsAndFillImageBuffer(
        state.imageScaledBufferPixels,
        event.nativeEvent.offsetX,
        event.nativeEvent.offsetY
      )
      return { ...state }
    }
    case 'mouseup': {
      console.log(state.imageScaledBufferPixels)
      return {
        ...state,
        startedDraw: false
      }
    }
    default: {
      return state
    }
  }
}

function detectCoordsAndFillImageBuffer(imageScaledBufferPixels, x, y) {
  const scaledX = Math.floor(x / gridSize.rectWidth)
  const scaledY = Math.floor(y / gridSize.rectHeight)
  const indexForXY =  scaledY * gridRectsCount.width + scaledX

  imageScaledBufferPixels[indexForXY] = 1
}