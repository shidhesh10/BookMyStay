// 1. Initialize the map
// We use listing.geometry.coordinates which is [Long, Lat]
// Leaflet expects [Lat, Long], so we reverse the order: [1], [0]
var map = L.map('map').setView([listing.geometry.coordinates[1], listing.geometry.coordinates[0]], 9);

// 2. Add the tile layer (The map skin)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 3. Add a Red Marker
var marker = L.marker([listing.geometry.coordinates[1], listing.geometry.coordinates[0]])
    .addTo(map)
    .bindPopup(`<h4>${listing.location}</h4><p>Exact location provided after booking</p>`)
    .openPopup();