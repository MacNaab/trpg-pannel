(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{1976:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return u}});var r=o(5893),t=o(9227),s=o(7294),l=o(1608),a=o(5171),i=o.n(a);function u(e){var n=s.useState(null),o=(0,t.Z)(n,2),a=o[0],u=o[1],c=s.useState(!1),d=(0,t.Z)(c,2),p=d[0],h=d[1],f=s.useState(""),m=(0,t.Z)(f,2),v=m[0],g=m[1];return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"m-5 flex justify-center gap-10",children:[(0,r.jsx)("span",{className:"p-3 border rounded-md cursor-pointer hover:border-gray-800 hover:bg-gray-100",onClick:function(){e.setMenu("menu")},children:"Retour au Menu principal"}),(0,r.jsx)("span",{className:"p-3 border rounded-md cursor-pointer bg-green-500 hover:border-green-800 hover:bg-green-600",onClick:function(){console.log(a,v);var e={href:v,data:a};fetch(l.Jx+"update.php",{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e)}),(function(e){console.log(e),alert("Une erreur c'est produite durant l'envoie des donn\xe9es, plus d'information dans la console.")}))},children:"Valider les changements"})]}),(0,r.jsx)("div",{className:"m-5",children:(0,r.jsxs)("select",{className:"w-48 rounded border p-1 m-auto flex",onChange:function(e){var n=e.target.value;!p&&h(!0),g(n+".json"),fetch(l.Jx+n+".json").then((function(e){return e.json()})).then((function(e){u(e),h(!1)}),(function(e){console.log(e),alert("Une erreur est survenu, consultez la console pour plus d'informations")}))},defaultValue:"",disabled:p,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"S\xe9lectionnez une base de donn\xe9e"}),(0,r.jsx)("option",{value:"timeline/data",children:"Timeline"}),(0,r.jsxs)("optgroup",{label:"Cartes",children:[(0,r.jsx)("option",{value:"map/c",children:"Continent"}),(0,r.jsx)("option",{value:"map/k",children:"Korath"}),(0,r.jsx)("option",{value:"map/s",children:"Skellige"}),(0,r.jsx)("option",{value:"map/t",children:"Toussaint"}),(0,r.jsx)("option",{value:"map/z",children:"Zerrikanie"})]})]})}),(0,r.jsx)("div",{className:"m-5",children:a?(0,r.jsx)(i(),{src:a,theme:"google",iconStyle:"square",onEdit:function(e){u(e.updated_src)},onDelete:function(e){u(e.updated_src)},onAdd:function(e){u(e.updated_src)}}):null})]})}}}]);