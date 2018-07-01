import React, { Component } from 'react'
import olMap from './olMap'

class Map extends Component {

  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    olMap.render(this.$el)
    let map = window.giscomp = this.map = olMap
    map.draw()

    // this.map = new ol.Map({
    //   layers: [
    //     new ol.layer.Tile({
    //       source: new ol.source.OSM()
    //     })
    //   ],
    //   target: this.$el,
    //   controls: ol.control.defaults({
    //     attributionOptions: {
    //       collapsible: false
    //     }
    //   }),
    //   view: new ol.View({
    //     center: [0, 0],
    //     zoom: 2
    //   })
    // })
    // var url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' +
    //   'Specialty/ESRI_StateCityHighway_USA/MapServer';
    // // this.map.map.addLayer(
    // //   new window.ol.layer.Image({
    // //     source: new ol.source.ImageArcGISRest({
    // //       ratio: 1,
    // //       params: {},
    // //       url: url
    // //     })
    // //   })
    // // )
  }

  render() {
    return (
      <div className="ol-map-wraper" ref={el => this.$el = el}></div>
    )
  }
}

export default Map
