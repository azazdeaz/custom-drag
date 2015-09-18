import React from 'react'
import Playground from '@azazdeaz/component-playground'
import demoSources from './demoSources'
import customDrag from 'custom-drag'

function radDiff(a, b) {
  var PI = Math.PI
  var TAU = 2 * PI
  var d = Math.abs(a - b) % TAU
  var r = d > PI ? TAU - d : d
  var sign = (a - b >= 0 && a - b <= 180) || (a - b <=-180 && a- b>= -360) ? 1 : -1
  return r * sign
}

class Center {
  render() {
    return <div style={{
        ...this.props.style,
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {this.props.children}
    </div>
  }
}

export default class Demo extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func
  }

  constructor(params) {
    super(params)
    this.state = {
      demoName: this.props.params.name
    }
  }

  componentDidMount() {
    window.onNameParamChange = name => {
      this.setState({demoName: name})
    }
  }
  render() {
    var {demoName} = this.state

    return <Playground
      key = {demoName}
      noRender = {false}
      es6Console = {false}
      codeText = {demoSources[demoName]}
      scope = {{
        React,
        GSAP,
        Radium,
        Spring,
        customDrag,
        radDiff,
        GS_GREEN: '#88ce02',
        Center
      }}/>
  }
}
