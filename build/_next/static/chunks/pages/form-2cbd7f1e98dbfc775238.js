(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{2702:function(e,t,r){"use strict";r.d(t,{h:function(){return c}});var n=r(5893),o=r(2962),i=r(9008),s=r(1163),a=r(1608),c=function(e){var t=(0,s.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,n.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,n.jsx)(o.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:a.XL.locale,site_name:a.XL.site_name}})]})}},1959:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(5893),o=r(2702),i=r(1608),s=function(e){return(0,n.jsxs)("div",{className:"antialiased w-full text-gray-700",children:[e.meta,(0,n.jsxs)("div",{className:"max-w-screen-lg mx-auto",children:[(0,n.jsx)("div",{className:"py-5 text-xl content",children:e.children}),(0,n.jsxs)("div",{className:"border-t border-gray-300 text-center py-8 text-sm",children:["\xa9 Copyright ",(new Date).getFullYear()," ",i.XL.title,"."]})]})]})},a=r(9227),c=r(7294),l=r(6265);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=c.useState(!1),r=(0,a.Z)(t,2),o=r[0],i=r[1],s=e.form,l=e.setForm,u=s.mdp;return(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("label",{className:"block text-base font-medium leading-relaxed text-blueGray-700",children:"Email Address"}),(0,n.jsx)("input",{type:o?"text":"password",placeholder:"Entrez votre mot de passe",value:u,onChange:function(e){l(d(d({},s),{},{mdp:e.target.value}))},className:"w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500"}),(0,n.jsx)("button",{type:"button",onClick:function(){return i(!o)},className:"inline-flex absolute ml-0 px-4 py-3 font-semibold text-sm text-black hover:text-white transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black focus:bg-blueGray-100 hover:text-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2",children:(0,n.jsx)("div",{className:"flex items-center justify-center",children:o?"Cacher":"Afficher"})})]})}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){var t=e.form,r=e.setForm,o=t.nc;return(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-base font-medium leading-relaxed text-blueGray-700",children:"Nom d'utilisateur"}),(0,n.jsx)("input",{type:"text",placeholder:"Nom du joueur",onChange:function(e){r(h(h({},t),{},{nc:e.target.value}))},value:o,className:"w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500"}),(0,n.jsx)("p",{className:"mt-1 text-xs italic text-black",children:"Votre nom par d\xe9faut."})]})}function x(e){var t=e.err,r=e.setError;return(0,n.jsx)("div",{className:"container items-center px-5 py-12 lg:px-20 absolute",children:(0,n.jsx)("div",{className:"w-full text-red-600 border rounded-lg shadow-xl ",children:(0,n.jsxs)("div",{className:"flex items-center justify-between px-6 py-4 mx-auto ",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-4 icon icon-tabler icon-tabler-alert-triangle",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("circle",{cx:"12",cy:"12",r:"9"}),(0,n.jsx)("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}),(0,n.jsx)("polyline",{points:"11 12 12 12 12 16 13 16"})]}),(0,n.jsxs)("p",{className:"text-sm font-semibold tracking-wide uppercase ",children:[(0,n.jsx)("strong",{children:"Erreur:"})," ",t]})]}),(0,n.jsx)("button",{onClick:function(){r(!1)},className:"p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none",type:"button","aria-label":"Close","aria-hidden":"true",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-circle-x",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("circle",{cx:"12",cy:"12",r:"9"}),(0,n.jsx)("path",{d:"M10 10l4 4m0 -4l-4 4"})]})})]})})})}function g(e){var t=c.useState({nc:"test",mdp:"test"}),r=(0,a.Z)(t,2),o=r[0],s=r[1],l=c.useState(!1),u=(0,a.Z)(l,2),d=u[0],m=u[1],h=c.useState(""),g=(0,a.Z)(h,2),b=g[0],j=g[1],w=c.useState([]),v=(0,a.Z)(w,2),y=v[0],k=v[1];c.useEffect((function(){localStorage.getItem("PJ")&&e.setLogged(!0),fetch(i.Jx+"user/data.json").then((function(e){return e.json()})).then((function(e){k(e)}),(function(e){console.log(e),alert("Une erreur est survenue, consultez la console pour plus d'informations.")}))}),[]);function N(){return d?(0,n.jsx)(x,{err:b,setError:m}):(0,n.jsx)(n.Fragment,{})}return(0,n.jsxs)("div",{children:[(0,n.jsx)(N,{}),(0,n.jsx)("section",{className:"flex flex-col items-center h-screen md:flex-row",children:(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)("div",{className:"flex justify-center px-2 py-6 ",children:(0,n.jsxs)("div",{className:"flex w-full rounded-lg lg:shadow-xl ",children:[(0,n.jsx)("div",{className:"relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12",children:(0,n.jsxs)("div",{className:"relative z-10 m-12 text-left ",children:[(0,n.jsxs)("a",{className:"flex items-center mb-4 font-medium text-blueGray-900 title-font md:mb-10",children:[(0,n.jsx)("div",{className:"w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-purple-500 to-purple-800"}),(0,n.jsx)("h2",{className:"text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400",children:" TRPG-PANNEL "})]}),(0,n.jsx)("h2",{className:"mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font",children:" Connexion "}),(0,n.jsx)("div",{className:"w-full mt-16 mb-8 text-base leading-relaxed text-blueGray-900 sm:md:w-3/3 lg:text-1xl text-justify ",children:"Site pour la gestion cartographique et chronologique de campagne The Witcher TRPG."})]})}),(0,n.jsx)("div",{className:"w-full px-8 py-24 bg-white rounded-lg border-blueGray-100 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s",children:(0,n.jsx)("div",{className:"relative z-10 text-left ",children:(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)(p,{form:o,setForm:s}),(0,n.jsx)(f,{form:o,setForm:s}),(0,n.jsx)("button",{type:"button",disabled:!y[0],onClick:function(){var t=y.find((function(e){return e.nc===o.nc}));t?t.mdp===o.mdp?(localStorage.setItem("PJ",o.nc),m(!1),e.setLogged(!0)):(m(!0),j("Mauvais mot de passe.")):(m(!0),j("Pas d'utilisateur \xe0 ce nom."))},className:"block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black",children:"Se connecter"})]})})})]})})})})]})}var b=function(e){return(0,n.jsx)(s,{meta:(0,n.jsx)(o.h,{title:"Connection",description:"Connectez-vous pour profiter des fonctions !"}),children:(0,n.jsx)(g,{setLogged:e.setLogged})})}},1608:function(e,t,r){"use strict";r.d(t,{XL:function(){return n},Jx:function(){return o},JL:function(){return i},Qn:function(){return s},wQ:function(){return a}});var n={site_name:"TRPG",title:"Witcher TRPG pannel",description:"Starter code for your Nextjs Boilerplate with Tailwind CSS",locale:"fr"},o="http://localhost/trpg-pannel/api/",i=[{name:"Menu",href:"/home"},{name:"Carte",href:"/map"},{name:"Frise",href:"/frise"}],s=[{id:"orange",desc:"Acte",background:"rgb(255, 87, 51)",borderRight:"7px solid  rgb(255, 87, 51)"},{id:"jaune",desc:"Al\xe9atoire",background:"rgb(225, 200, 40)",borderRight:"7px solid  rgb(225, 200, 40)"},{id:"rouge",desc:"Combat",background:"rgb(233, 30, 99)",borderRight:"7px solid  rgb(233, 30, 99)"},{id:"bleu",desc:"Qu\xeate",background:"rgb(33, 150, 243)",borderRight:"7px solid  rgb(33, 150, 243)"},{id:"vert",desc:"Rencontre",background:"rgb(16, 204, 82)",borderRight:"7px solid  rgb(16, 204, 82)"}],a=[{id:"c",titre:"Continent",desc:" du Continent.",img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/WitcherMap_4k.jpg",zoom:3,minZoom:2,maxZoom:5},{id:"k",titre:"Korath",desc:" du d\xe9sert de Korath.",img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/korath_preview.jpg",zoom:3,minZoom:1,maxZoom:4},{id:"s",titre:"Skellige",desc:" des \xeeles Skellige.",img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/skellige_preview.png",zoom:3,minZoom:2,maxZoom:5},{id:"t",titre:"Toussaint",desc:" du Royaume de Toussaint.",img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/toussaint_preview.jpg",zoom:2,minZoom:1,maxZoom:3},{id:"z",titre:"Zerrikanie",desc:" de l'Empire Zerrikanien.",img:"https://www.the-witcher-jdr.fr/fichiers/ressources/maps/21-07-23-11-50-04_img_zerrikania1.jpg",zoom:3,minZoom:1,maxZoom:4}]},1830:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form",function(){return r(1959)}])}},function(e){e.O(0,[175,774,888,179],(function(){return t=1830,e(e.s=t);var t}));var t=e.O();_N_E=t}]);