


let ol = window.ol

const def = {
  fontSize: '12px',
  fontFamily: 'Microsoft YaHei',
  font: '14px "Microsoft YaHei", sans-serif'
}

// TODO: 拆分开来

function createStyle({
  fill = 'rgba(0, 0, 255, 0.1)',
  strokeColor = 'blue',
  strokeWidth = 2,
  text = '圣诞节开发',
  textColor = '#fff'
} = {}) {
  return new ol.style.Style({
    image: new ol.style.Circle({

    }),
    stroke: new ol.style.Stroke({
      color: strokeColor,
      width: strokeWidth,
    }),
    fill: new ol.style.Fill({
      color: fill
    }),
    text: text && new ol.style.Text({
      text: text,
      // overflow: true,
      font: def.font,
      // placement: 'point',
      // textAlign: 'center',
      fill: new ol.style.Fill({
        color: textColor
      })
    })
  })
}

export default createStyle