async function getBaseMap(elemId, lat, lon, zoom = 13) {
    const map = L.map(elemId).setView([lat, lon], zoom);

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });
    tileLayer.addTo(map);

    return map;
}