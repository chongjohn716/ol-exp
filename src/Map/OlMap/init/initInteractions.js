const ol = window.ol

export default function initInteractions(map) {
  var hoverInteraction = new ol.interaction.Select({
    condition: ol.events.condition.pointerMove,
    style: function (feature) {
      debugger
      console.log(feature)
    }
  });

  var selectInteraction = new ol.interaction.Select({
    style: function (feature) {
      console.log(feature)
      debugger
    }
  });

  map.addInteraction(hoverInteraction)
  map.addInteraction(selectInteraction)
}