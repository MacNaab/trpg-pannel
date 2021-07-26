export const AppConfig = {
  site_name: 'TRPG',
  title: 'Witcher TRPG pannel',
  description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
  locale: 'fr',
};

export const URL = "http://localhost/trpg-pannel/api/";

export const Nav = [
  {name: "Menu", href: "/home"},
  {name: "Carte", href: "/map"},
  {name: "Frise", href: "/frise"},
];

export const ColorList = [
  {id: "orange", desc: "Acte", background: "rgb(255, 87, 51)", "borderRight": "7px solid  rgb(255, 87, 51)"},
  {id: "jaune", desc: "Aléatoire", background: "rgb(225, 200, 40)", "borderRight": "7px solid  rgb(225, 200, 40)"},
  {id: "rouge", desc: "Combat", background: "rgb(233, 30, 99)", "borderRight": "7px solid  rgb(233, 30, 99)"},
  {id: "bleu", desc: "Quête", background: "rgb(33, 150, 243)", "borderRight": "7px solid  rgb(33, 150, 243)"},
  {id: "vert", desc: "Rencontre", background: "rgb(16, 204, 82)", "borderRight": "7px solid  rgb(16, 204, 82)"},
];

export const MapList = [
  {id:'c', titre:"Continent", desc:" du Continent.", img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/WitcherMap_4k.jpg", zoom:3, minZoom:2, maxZoom:5 },
  {id:'k', titre:"Korath", desc:" du désert de Korath.", img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/korath_preview.jpg", zoom:3, minZoom:1, maxZoom:4 },
  {id:'s', titre:"Skellige", desc:" des îles Skellige.", img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/skellige_preview.png", zoom:3, minZoom:2, maxZoom:5 },
  {id:'t', titre:"Toussaint", desc:" du Royaume de Toussaint.", img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/toussaint_preview.jpg", zoom:2, minZoom:1, maxZoom:3 },
  {id:'z', titre:"Zerrikanie", desc:" de l'Empire Zerrikanien.", img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/21-07-23-11-50-04_img_zerrikania1.jpg", zoom:3, minZoom:1, maxZoom:4 },
]