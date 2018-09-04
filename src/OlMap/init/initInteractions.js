const ol = window.ol

export default function initInteractions(map) {
  // var hoverInteraction = new ol.interaction.Select({
  //   condition: ol.events.condition.pointerMove,
  //   style: function (feature) {
  //     // console.log(feature)
  //   }
  // });

  var selectInteraction = new ol.interaction.Select({
    condition: function (p) {
      return ol.events.condition.click(p)
    }
    // ,
    // style: function (feature) {
    //   console.log('selectInteraction: ', feature)
    // }
  });

  selectInteraction.on('select', function (e) {
    console.log('select:', e)
  })

  // map.addInteraction(hoverInteraction)
  map.addInteraction(selectInteraction)
}