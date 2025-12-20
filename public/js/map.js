// 1. Get Coordinates (with fallback)
let coordinates = [20.5937, 78.9629]; // Default: India
if (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length > 0) {
    coordinates = [listing.geometry.coordinates[1], listing.geometry.coordinates[0]];
}

// 2. Initialize Map
const map = L.map('map').setView(coordinates, 11);

// 3. Add Map Image Layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 4. Add the Red Marker
// Define the red icon
const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Add marker to map
const marker = L.marker(coordinates, { icon: redIcon })
    .addTo(map)
    .bindPopup(`<h4>${listing.location}</h4><p>Exact Location</p>`)
    .openPopup();