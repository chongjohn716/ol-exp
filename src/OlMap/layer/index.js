import PolygonLayer from './layers/polygon-layer'
import PointLayer from './layers/point-layer'
import LineLayer from './layers/line-layer'
import GeoJsonLayer from './layers/geojson-layer'

/**
 * 创建图层工厂函数
 * @param {Object} options
 * @returns {Layer|SubLayer} layer 
 */
function createLayer(options) {
  let layer

  switch (options.type) {
    case 'polygon':
      layer = new PolygonLayer(options)
      break;
    case 'line':
      layer = new LineLayer(options)
      break
    case 'geojson':
      layer = new GeoJsonLayer(options)
      break
    default:
      layer = new PointLayer(options)
      break;
  }

  return layer
}

export {
  createLayer
}

export default {
  createLayer
}
