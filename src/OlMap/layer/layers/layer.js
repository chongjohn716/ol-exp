import createStyle from '../style'
import { layerTypes } from '../consts'

const ol = window.ol

/**
 * 图层构造函数
 * @param {Map} map 
 * @param {Object} options 
 *        id:
 *        style: 
 *        type:
 *        visible:
 */
class Layer {
  constructor(options) {
    // if (new.target === Layer) {
    //   throw new Error('本类不能实例化');
    // }
    this.options = options
    this.init(options)
  }

  init({ id, type, style, visible, zIndex, autoClear = true }) {
    if (layerTypes.indexOf(type) === -1) {
      throw new Error('layer type nonsupport: ' + type)
    }

    this.id = id
    this.style = style
    this.type = type
    this.autoClear = autoClear
    style && (this.olStyle = createStyle(style, type))

    this._source = this._createSource()

    this._layer = this._createLayer(zIndex, visible)
  }

  draw(data) {
    this.autoClear && this.clear()
    this._source.addFeatures(this._createFeatures(data))
  }

  remove(id) {
    this._source.removeFeature(this._getFeature(id))
  }

  clear() {
    this._source.clear()
  }

  setStyleById(id, style) {
    let feature = this._getFeature(id)
    feature.setStyle(style)
  }

  destroy() { }

  setVisible(visible) {
    this._layer.setVisible(visible)
  }

  _createLayer(zIndex, visible) {
    return new ol.layer.Vector({
      source: this._source,
      style: this.olStyle,
      zIndex,
      visible
    })
  }

  _createSource() {
    return new ol.source.Vector({
      features: []
    })
  }

  _getFeature(id) {
    return this._source.getFeatureById(id)
  }

  _createFeatures(data) {
    let type = this.type
    return data.map((item, index) => this._createFeature(item, type))
  }

  _createFeature(data, type) {
    let feature = new ol.Feature(this._createGeometry(data))
    feature.set('id', data.id)
    feature.set('data', data)
    data.style && feature.setStyle(createStyle(data.style, type))
    return feature
  }

  _createGeometry(p) {
    return null
  }
}

// dash stroke style 
// lineCap: 'butt',
// lineDash: [2, 2]

export default Layer