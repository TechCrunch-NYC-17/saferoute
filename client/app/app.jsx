import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { connect } from 'react-redux'
// import {WebScene, SceneView} from 'arcgis'
import {WebScene} from 'esri/webscene'
import {SceneView} from 'esri/views/sceneview'

class App extends Component {
  constructor (props) {
    super(props)
    this.scene = new WebScene({
      portalItem: {
        id: '3a9976baef9240ab8645ee25c7e9c096'
      }
    })
  }

  componentDidMount () {
    this.view = new SceneView({
      map: this.scene,
      container: 'sceneView',
      padding: {
        top: 40
      }
    })
  }

  render () {
    return (
      <div>
        <div id='sceneView' />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
