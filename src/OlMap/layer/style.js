


let ol = window.ol

const def = {
  fontSize: '12px',
  fontFamily: 'Microsoft YaHei',
  font: '14px "Microsoft YaHei", sans-serif'
}

const { Style, Fill, Circle, Text, Stroke } = ol.style

/**
 * 
 * @param {Object} config 
 *        color
 *        fill = 'rgba(0, 0, 255, 0.1)'
 *        strokeColor = 'blue'
 *        strokeWidth = 2
 *        text
 *        textColor = '#fff'
 * @param {String} type 图层类型
 */
function createStyle(
  config = {}, type

) {
  let style

  mixColor(config)

  switch (type) {
    case 'point':
      style = cricleStyle(config)
      break
    case 'line':
    case 'polygon':
    default:
      style = lineStyle(config)
      break;
  }

  style.text = textStyle(config)

  return new Style(style)
}

function mixColor(config) {
  let color
  if (!(color = config.color)) return

  config.fill = config.fill || color
  config.strokeColor = config.strokeColor || color
}

function textStyle({ text, textColor = '#fff' }) {
  // TODO: num 0 
  return text && new Text({
    text: text,
    // overflow: true,
    font: def.font,
    // placement: 'point',
    // textAlign: 'center',
    fill: new Fill({
      color: textColor
    })
  })
}

function cricleStyle({
  fill = 'rgba(0, 0, 255, 0.1)',
  strokeColor = 'blue',
  strokeWidth = 1,
  radius = 10
}) {

  let fillStyle = new Fill({
    color: fill
  })

  let strokeStyle = new Stroke({
    color: strokeColor,
    width: strokeWidth,
  })

  return {
    image: new Circle({
      radius,
      fill: fillStyle,
      stroke: strokeStyle
    }),
  }
}

function lineStyle({
  fill = 'rgba(0, 0, 255, 0.1)',
  strokeColor = 'blue',
  strokeWidth = 2
}) {
  let fillStyle = new Fill({
    color: fill
  })

  let strokeStyle = new Stroke({
    color: strokeColor,
    width: strokeWidth,
  })

  return {
    stroke: strokeStyle,
    fill: fillStyle
  }
}

export default createStyle