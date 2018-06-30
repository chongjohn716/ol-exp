import Layer from './layer'

let ol = window.ol

class PointLayer extends Layer {
  _createGeometry({ lng, lat }) {
    return new ol.geom.Point([lng, lat])
  }
}

export default PointLayer
