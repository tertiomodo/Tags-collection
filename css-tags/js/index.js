const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
});

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 7
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [55.8, 37.8]
    }
  });
  var myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
    iconLayout: 'default#image',
    iconImageHref: './assets/svg/eevee.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });
myMap.geoObjects.add(myPlacemark);
myMap.geoObjects.add(myGeoObject); 
}