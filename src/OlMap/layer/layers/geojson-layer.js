import Layer from './layer'

let ol = window.ol

class GeoJsonLayer extends Layer {
  draw() {
    this.autoClear && this.clear()
  }

  _createSource() {
    return new ol.source.Vector({
      url: '/country.geojson',
      format: new ol.format.GeoJSON()
    })
  }
}

export default GeoJsonLayer
