import React from  'react'
import styled from  'styled-components'
import { PureCanvas } from  '../lib/canvas'
import { logic } from  './logic'
import { render } from  './render'

import { canvasParams, initalState } from  './constants'


const Row = styled.div`
  display: flex;
  flex-direction: row;
`


const Canvas = new PureCanvas({
  initialState: initalState,
  render: render,
  logic: logic,
  reactEvents: [
    'onMouseDown',
    'onMouseMove',
    'onMouseUp',
  ],
  width: canvasParams.width,
  height: canvasParams.height,
  style: { border: '1px solid #000' }
})


export const Lesson1 = () => {
  const CanvasComponent = Canvas.getComponent()

  return (
    <div>
      <h1>Lesson1</h1>
      <CanvasComponent />
      <Row>
        <button onClick={e => Canvas.handleCusomEvent('clear')}>Clear</button>
        <button onClick={e => Canvas.handleCusomEvent('recognize')}>Recognize</button>
      </Row>
    </div>
  )
}
