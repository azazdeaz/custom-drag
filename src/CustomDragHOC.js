import React from 'react'
import ReactDOM from 'react-dom'
import createDragger from './createCustomDrag'
import Monitor from './Monitor'

export default (options, collect) => {
  //TODO warn for missing options
  return ComposedComponent => class CustomDragHOC extends React.Component {
    constructor(props) {
      super(props)
    }

    dragItemRef = dragComponent => {
      if (typeof dragComponent === 'function') {
        this.__originalRef = dragComponent
        return this.dragItemRef
      }

      if (dragComponent) {
        let dragNode = ReactDOM.findDOMNode(dragComponent)
        this.dragger = createDragger(dragNode, options, this.composedComponent)
      }
      else {
        this.dragger.dispose()
      }

      if (this.__originalRef) {
        this.__originalRef(dragComponent)
      }
    }

    handleComposedComonentRef = (component) => {
      if (component && component.composedComponent) {
        component = component.composedComponent
      }
      this.composedComponent = component

      if (this.dragger) {
        this.dragger.receiveComponent(component)
      }
    }

    getConnect() {
      return {
        getDragRef: () => this.dragItemRef,
        getFakeDownFunc: () => this.dragger && this.dragger.fakeDown
      }
    }

    getMonitor() {
      return this.dragger ? this.dragger.getMonitor() : new Monitor()
    }

    render() {
      var collectedProps = typeof collect === 'function' ?
        collect(this.getConnect(), this.getMonitor()) :
        {draggerRef: this.dragItemRef}

      return <ComposedComponent
        {...this.props}
        {...collectedProps}
        ref = {this.handleComposedComonentRef}/>
    }
  }
}
