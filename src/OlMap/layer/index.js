import PolygonLayer from './polygon-layer'
import PointLayer from './point-layer'
import LineLayer from './line-layer'

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
    // case 'point':
    // layer = new PointLayer(options)
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
