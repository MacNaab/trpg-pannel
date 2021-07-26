import L from 'leaflet';

// https://github.com/pointhi/leaflet-color-markers
const GoldIcon = new L.Icon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]});
const VioletIcon = new L.Icon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]});
const RougeIcon = new L.Icon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]});
const VertIcon = new L.Icon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]});
const OrangeIcon = new L.Icon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]});
const JauneIcon = new L.Icon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]});
const GrisIcon = new L.Icon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]});
const NoirIcon = new L.Icon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]});
const BleuIcon = new L.Icon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',iconSize: [25, 41],iconAnchor: [12, 41],popupAnchor: [1, -34],shadowSize: [41, 41]});

const MarkerIconList = [
    {id: "Gold", marker: GoldIcon},
    {id: "Violet", marker: VioletIcon},
    {id: "Rouge", marker: RougeIcon},
    {id: "Vert", marker: VertIcon},
    {id: "Orange", marker: OrangeIcon},
    {id: "Jaune", marker: JauneIcon},
    {id: "Gris", marker: GrisIcon},
    {id: "Noir", marker: NoirIcon},
    {id: "Bleu", marker: BleuIcon},
];

export default MarkerIconList;