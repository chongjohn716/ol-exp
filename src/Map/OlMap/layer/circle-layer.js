import Layer from './layer'

let ol = window.ol

class CircleLayer extends Layer {
  _createGeometry({ center, radius }) {
    return new ol.geom.Circle(center, radius)
  }
}

export default CircleLayer
