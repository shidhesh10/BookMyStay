// 1. Get Coordinates (Keep your existing logic)
let coordinates = [20.5937, 78.9629]; // Default: India
if (listing.geometry && listing.geometry.coordinates && listing.geometry.coordinates.length > 0) {
    coordinates = [listing.geometry.coordinates[1], listing.geometry.coordinates[0]];
}

// 2. Define the Map Layers
// Layer A: Standard Streets (OpenStreetMap)
const streetLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Layer B: Satellite View (Esri World Imagery)
const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// 3. Initialize Map with Default Layer
const map = L.map('map', {
    center: coordinates,
    zoom: 11,
    layers: [streetLayer] // Start with Street view active
});

// 4. Add the "Layer Control" Toggle Button (Top-Right)
const baseMaps = {
    "Street Map": streetLayer,
    "Satellite": satelliteLayer
};
L.control.layers(baseMaps).addTo(map);


// --- YOUR MARKER CODE (Kept exactly as you liked it) ---
const customIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const marker = L.marker(coordinates, { icon: customIcon })
    .addTo(map)
    .bindPopup(`<h4>${listing.location}</h4><p>Exact Location</p>`);

// Hover Logic
let timer;

marker.on('mouseover', function() {
    if (timer) clearTimeout(timer);
    this.openPopup();
});

marker.on('mouseout', function() {
    const self = this;
    timer = setTimeout(function() {
        self.closePopup();
    }, 2000); 
});

marker.on('popupopen', function() {
    const popupContent = document.querySelector('.leaflet-popup-content-wrapper');
    if (popupContent) {
        popupContent.addEventListener('mouseenter', () => {
            if (timer) clearTimeout(timer);
        });
        popupContent.addEventListener('mouseleave', () => {
            timer = setTimeout(() => {
                marker.closePopup();
            }, 300);
        });
    }
});