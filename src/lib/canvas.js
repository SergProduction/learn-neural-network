import React, { useEffect, useRef } from  'react'


export class PureCanvas {
  constructor({
    initialState={},
    render=s=>s,
    logic=s=>s,
    reactEvents=[],
    customEvents=s=>s,
    style={},
    width=100,
    height=100
  }) {
    this.state = initialState
    this.render = render
    this.logic = logic
    this.reactEvents = reactEvents
    this.customEvents = customEvents
    this.style = style
    this.width = width
    this.height = height
    this.ctx = null
  }

  getComponent() {
    return this.component.bind(this)
  }

  handleEvents(event) {
    const newState = this.logic(this.state, event, null)
    if (newState !== this.state) {
      this.render(newState, this.ctx)
      this.state = newState
    }
  }

  handleCusomEvent(event) {
    const newState = this.logic(this.state, null, event)
    if (newState !== this.state) {
      this.render(newState, this.ctx)
      this.state = newState
    }
  }

  component() {
    const canvasRef = useRef(null)
  
    useEffect(() => {
      const ctx = canvasRef.current.getContext('2d')
      this.ctx = ctx
      this.render(this.state, ctx)
    }, [])

    const reactEventWithHandlers = this.reactEvents.reduce((acc, eventName) => ({ ...acc, [eventName]: this.handleEvents.bind(this) }), {})

    return React.createElement(
      'canvas',
      {
        ref: canvasRef,
        width: this.width,
        height: this.height,
        style: this.style,
        ...reactEventWithHandlers
      }
    )
  }
}