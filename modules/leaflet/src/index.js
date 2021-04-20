import L from 'leaflet'

const map = L.map('map').setView([46.781048, 6.647136], 15)

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

tiles.addTo(map)

const heigStRoch = L.marker([46.781048, 6.647136]).bindPopup('HEIG-VD St-Roch')

heigStRoch.addTo(map)
