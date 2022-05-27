/* const init = () => {
	 const myMap = new ymaps.Map(
		'map',
		{
		  center: [55.7718, 37.6316],
		  zoom: 16,
		  controls: ['smallMapDefaultSet'],
		},
		{},
	 );
	 const myPlacemark = new ymaps.Placemark(
		[55.7724, 37.6252],
		{},
		{
		  iconLayout: 'default#image',
		  iconImageHref: 'img/mark.svg',
		  iconImageSize: [70, 70],
		  iconImageOffset: [-35, -70],
		},
	 );
	 myMap.geoObjects.add(myPlacemark);
  };
  ymaps.ready(init);
*/

const map = L.map('map').setView([55.7726, 37.63], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([55.7724, 37.6252])
	.addTo(map)
	.bindPopup('E-trans')
	.openPopup();
