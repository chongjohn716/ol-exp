import Layer from './layer'

let ol = window.ol

class PolygonLayer extends Layer {
  _createGeometry(data) {
    return new ol.geom.Polygon(data.coordinates)
  }
}

export default PolygonLayer
