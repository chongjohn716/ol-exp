import Layer from './layer'

let ol = window.ol

class LineLayer extends Layer {
  _createGeometry({ start, end }) {
    return new ol.geom.LineString([start, end])
  }
}

export default LineLayer
