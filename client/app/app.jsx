import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { connect } from 'react-redux'
import ArcGIS from 'arcgis'
// import SceneView from 'esri/views/SceneView'
// import WebScene from 'esri/WebScene'
// import 'dojo/dom'
// import 'dojo/domReady!'

class App extends Component {
  constructor (props) {
    super(props)
    this.scene = new ArcGIS.WebScene({
      portalItem: {
        id: '3a9976baef9240ab8645ee25c7e9c096'
      }
    })

    this.view = new ArcGIS.SceneView({
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
        <div id='webScene' />
        <div id='sceneView' />
      </div>

    )
  }
}

ReactDOM.render('root', <App />)
