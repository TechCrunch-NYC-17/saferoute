import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map } from 'react-arcgis'

class App extends Component {

  render () {
    return (
      <div>
        <Map
          style={{ width: '100vw', height: '100vh' }}
          mapProperties={{ basemap: 'satellite' }}          
        />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
