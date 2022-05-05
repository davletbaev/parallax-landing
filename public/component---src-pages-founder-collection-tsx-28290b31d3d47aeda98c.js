"use strict";(self.webpackChunkparallax_landing=self.webpackChunkparallax_landing||[]).push([[930],{745:function(A,e,a){a.r(e),a.d(e,{default:function(){return Z}});var t={};a.r(t),a.d(t,{container:function(){return w},input:function(){return h},label:function(){return Q},option:function(){return B},thumbnail:function(){return v}});var i=a(7294),n=a(5414),c=a(1587),r=a(5444),s=a(6125),o=a(9262),l=a(1667),d=a(3877),m=a(2562),E=a(3606),g=a(9232),u=a(2406);var p=function(A){var e=A.id,t=(0,i.useRef)(null),n=(0,i.useState)(null),p=n[0],b=n[1],f=(0,g.G)().isDesktop,w=(0,r.useStaticQuery)("1934344438"),B=w.thumbnails.edges.map((function(A){var e=A.node;return{id:e.id,name:e.name,image:(0,s.d)(e.childImageSharp)}})),h=w.images.edges.map((function(A){var e=A.node;return{id:e.id,name:e.name,image:(0,s.d)(e.childImageSharp)}})),v=function(){b(null)},Q=function(){return B.map((function(A,e){if(!A.image)return null;var a,t=h.find((function(e){return A.id===e.id}));return i.createElement(c.E.button,{className:"ArtworkSection-module--trigger--6IRal",key:A.id,onClick:null!=t&&t.image?(a=t.image,function(){console.log("click"),b(a)}):void 0,variants:u.A6.variants,transition:u.A6.options},i.createElement(s.G,{className:"ArtworkSection-module--image--Q-p37",image:A.image,alt:A.name}))}))};return(0,i.useEffect)((function(){t.current&&(p&&!t.current.isOpen&&t.current.openModal(),!p&&t.current.isOpen&&t.current.closeModal())}),[p]),i.createElement(l.Z,{id:e,as:"section"},i.createElement(c.E.div,{className:"ArtworkSection-module--section--RlzRz",variants:{},initial:"initial",animate:"enter",exit:"exit",transition:{staggerChildren:.15}},i.createElement(m._L,{force:15,depth:150,className:"ArtworkSection-module--heading--ix6Ch"},i.createElement(E.X,{type:"h2"},"Artwork Gallery")),i.createElement(m._L,{force:15,depth:100,className:"ArtworkSection-module--gallery--wu9Ql"},i.createElement(c.E.div,{className:"ArtworkSection-module--carousel--pXkwq",variants:u.A6.variants,transition:u.A6.options},f?Q():i.createElement(o.Z,null,Q())))),i.createElement(m.zL,{className:"ArtworkSection-module--background--3FDR+ MainScreen-module--background--zkIaV",variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},i.createElement(s.S,{className:"ArtworkSection-module--backgroundImage--lL4+V MainScreen-module--backgroundImage--QT77X",src:"./artwork.jpg",alt:"",__imageData:a(8383)})),i.createElement(d.Z,{variant:"gallery",ref:t,label:"Lightbox",onClose:v},i.createElement("div",{className:"ArtworkSection-module--lightbox--gvUdN",onClick:v},p&&i.createElement(s.G,{className:"ArtworkSection-module--lightboxImage--QgjJ5",image:p,alt:""}))))},b=a(9425),f=a(3190),w="Thumbnails-module--container--2qcWe",B="Thumbnails-module--option--d2sNH",h="Thumbnails-module--input--N+a7e",v="Thumbnails-module--thumbnail--TEJVq",Q="Thumbnails-module--label--89kMm",x=a.n(f)().bind(t),S=function(A){var e=A.value,a=A.onChange,t=A.options,n=(0,i.useState)(e),c=n[0],r=n[1],l=x("input","visually-hidden"),d=function(A){return function(){r(A),a(A)}},m=t.map((function(A,e){var a=A.label,t=A.thumbnail;return i.createElement("label",{className:B,key:a},i.createElement("input",{className:l,type:"radio",name:a,onChange:d(e),checked:c===e}),i.createElement("span",{className:Q},a),i.createElement(s.G,{className:v,image:t,alt:a}))}));return i.createElement("div",{className:w},i.createElement(o.Z,null,m))},z=a(9547),I=[{label:"Penthouse",videoId:"RYdCuw7L1qk",caption:"RARITY: LEGENDARY",heading:"PENTHOUSE AT THE PRESTIGE",text:["Top suite at the most exclusive high-rise apartment in Parallel City. Breathtaking views and.."],image:"image1"},{label:"Hills Loft",videoId:"RYdCuw7L1qk",caption:"RARITY: RARE",heading:"BOROUGH HILLS LOFT",text:["Cozy in Downtown Broker.","Two stories and X sq ft."],image:"image2"},{label:"Medusa M1",videoId:"RYdCuw7L1qk",caption:"RARITY: LEGENDARY",heading:"MEDUSA M1 FOUNDERS EDITION",text:["Cozy in Downtown Broker.","Two stories and X sq ft."],image:"image3"},{label:"BAUHAUS EVO",videoId:"RYdCuw7L1qk",caption:"RARITY: RARE",heading:"BAUHAUS EVO FOUNDERS EDITION",text:["Cozy in Downtown Broker.","Two stories and X sq ft."],image:"image4"}];var k=function(A){var e=A.id,a=(0,i.useState)(0),t=a[0],n=a[1],o=(0,g.G)().isMobile,d=(0,r.useStaticQuery)("4253088474");console.log(d);var p=d.images.edges.map((function(A){var e=A.node;return{id:e.id,name:e.name,image:(0,s.d)(e.childImageSharp)}})),f=d.thumbnails.edges.map((function(A){var e=A.node;return{id:e.id,image:(0,s.d)(e.childImageSharp)}})),w=I.map((function(A){var e=p.find((function(e){return e.name===A.image}));if(e){var a=f.find((function(A){return A.id===e.id}));return Object.assign({},A,{thumbnail:null==a?void 0:a.image,image:e.image})}return Object.assign({},A,{thumbnail:void 0,image:void 0})}));return i.createElement(l.Z,{id:e,as:"section"},i.createElement(c.E.div,{className:"CarouselSection-module--section--UO6a6",variants:{},initial:"initial",animate:"enter",exit:{opacity:0},transition:{staggerChildren:.15}},i.createElement(c.E.div,{className:"CarouselSection-module--thumbnails--yKtYX",variants:u.Jk.variants,transition:u.Jk.options},i.createElement(S,{options:w,value:t,onChange:n})),i.createElement(b.M,{exitBeforeEnter:!0},i.createElement(i.Fragment,{key:t},i.createElement(m._L,{force:20,depth:75,className:"CarouselSection-module--video--eIq1-"},i.createElement(c.E.div,{variants:u.T8.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.T8.options},i.createElement(z.Z,{videoId:"RYdCuw7L1qk",cover:w[t].image}))),i.createElement(c.E.div,{className:"CarouselSection-module--content--iNMBv",variants:{},initial:"initial",animate:"enter",exit:"exit",transition:{staggerChildren:.15}},i.createElement(m._L,{force:15,depth:175},i.createElement(E.n,{className:"CarouselSection-module--caption--hAzno",size:"small",align:"left"},w[t].caption)),i.createElement(m._L,{force:15,depth:150},i.createElement(E.X,{type:"h3",align:"left",marginBottom:o?"16":"24"},w[t].heading)),i.createElement(m._L,{force:15,depth:50},w[t].text.map((function(A){return i.createElement(E.n,{key:A.slice(10),marginTop:o?"8":"16"},A)})))),w[t].image&&i.createElement(m.zL,{className:"CarouselSection-module--background--nb2c6 MainScreen-module--background--zkIaV",variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},i.createElement(s.G,{key:w[t].label,className:"CarouselSection-module--backgroundImage--ZZXUX MainScreen-module--backgroundImage--QT77X",image:w[t].image,alt:w[t].label}))))))},O=a(7011);var D=function(A){var e=A.id,t=A.questions;return i.createElement(l.Z,{id:e,as:"section"},i.createElement(c.E.div,{className:"FaqSection-module--section--Uedgt",variants:{},initial:"initial",animate:"enter",exit:"exit",transition:{staggerChildren:.15}},i.createElement(m._L,{force:15,depth:50,className:"FaqSection-module--heading--yFQcM"},i.createElement(E.X,{type:"h2"},"FREQUENTLY ASKED QUESTIONS")),i.createElement("div",{className:"FaqSection-module--content--t4kD0"},i.createElement(m._L,{force:15,depth:100},i.createElement(E.n,{marginTop:"24",marginBottom:"24"},"Hit us up on Discord if you have more questions."))),i.createElement(m._L,{force:15,depth:200,className:"FaqSection-module--questions--5Bw-O",variants:u.A6.variants,transition:u.A6.options},i.createElement(O.Z,{items:t}))),i.createElement(m.zL,{className:"FaqSection-module--background--LFwSn MainScreen-module--background--zkIaV",variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},i.createElement(s.S,{className:"FaqSection-module--backgroundImage--OW8r7 MainScreen-module--backgroundImage--QT77X",src:"./faq.jpg",alt:"",__imageData:a(4279)})))},C=a(2223),N=a(2486);var T=function(A){var e=A.id;return i.createElement(C.Z,{id:e,align:"right",variants:{},initial:"initial",animate:"enter",exit:"exit",transition:u.v_.options},i.createElement(m._L,{force:15,depth:150},i.createElement(E.X,{type:"h2",align:"left"},"EACH TRAIT",i.createElement("br",null)," AS SEPARATE NFT")),i.createElement(m._L,{force:15,depth:50},i.createElement(E.n,{marginTop:"24"},"Individual traits within the artwork (such as clothing, vehicle) will be airdropped to holders as separate NFTs upon early access to HELIX."),i.createElement(E.n,null,"Each of these NFT items are “Founder Edition” and will never be minted additionally. If you choose to resell them, it will not affect your ownership of the original artwork NFT."),i.createElement(E.n,null,"Watch the video to get a preview of the items.")),i.createElement(m.zL,{className:N.background,variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},i.createElement(s.S,{className:N.backgroundImage,src:"./feature-1.jpg",alt:"",__imageData:a(9153)})))},L=a(9404),M="MainScreen-module--onlyMobile--NemON";var R=function(A){var e=A.id;return i.createElement(l.Z,{id:e,as:"section",className:"MainScreen-module--section--7pATJ"},i.createElement(c.E.div,{variants:{},initial:"initial",animate:"enter",exit:"exit",transition:{staggerChildren:.3}},i.createElement(m._L,{force:15,depth:50},i.createElement(c.E.p,{className:"MainScreen-module--subheading--CNtlu",variants:u.Jk.variants,transition:u.Jk.options},"Limited Edition")),i.createElement(m._L,{force:15,depth:75},i.createElement(E.X,{type:"h1",className:"MainScreen-module--heading--dwNBG"},"Founder"," ",i.createElement("br",{className:M}),"NFT"," ",i.createElement("br",{className:M}),"Collection")),i.createElement(m._L,{force:15,depth:50},i.createElement(E.n,{size:"large",marginTop:"16",align:"center",variants:u.v_.variants,transition:u.v_.options},"10,000 uniquely generated artworks with exclusive benefits. ",i.createElement("br",null),"Join our Discord for date & price announcement.")),i.createElement(m._L,{force:15,depth:50,className:"MainScreen-module--button--QPJqL"},i.createElement(c.E.div,{variants:u.v_.variants,transition:u.v_.options},i.createElement(L.Z,{href:"#utility"},"Watch NFT Video")))),i.createElement(m.zL,{className:"MainScreen-module--background--0xovu",variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},i.createElement(s.S,{className:"MainScreen-module--backgroundImage--odqAE",src:"./main.jpg",alt:"",__imageData:a(292)})))},F=a(7583),y=a(7221),j="RoadmapSection-module--section--dAhus",P="RoadmapSection-module--button--S-N58",q="RoadmapSection-module--background--RNuI6 MainScreen-module--background--zkIaV",_="RoadmapSection-module--backgroundImage--LeTik MainScreen-module--backgroundImage--QT77X";var U=function(A){var e=A.id,t=(0,g.G)().isTabletOrBigger;return i.createElement(l.Z,{id:e,as:"section"},i.createElement(c.E.div,{className:j,variants:{},initial:"initial",animate:"enter",exit:"exit",transition:{staggerChildren:.15}},i.createElement(m._L,{force:15,depth:150,className:"RoadmapSection-module--heading--GlMd4"},i.createElement(E.X,{type:"h2"},"MINT PRICE & DATE")),i.createElement("div",{className:"RoadmapSection-module--content--BJ-QZ"},i.createElement(m._L,{force:15,depth:50},i.createElement(E.n,{marginTop:"24",marginBottom:"24"},"We will announce the price, date, and format of the NFT sale soon.",i.createElement("br",null),"Join our Discord and Twitter to find out.")),i.createElement(m._L,{force:15,depth:75},i.createElement(c.E.div,{variants:u.v_.variants,transition:u.v_.options},i.createElement(L.Z,{className:P,href:y.RU.discord,variant:"secondary"},"Join Discord"),i.createElement(L.Z,{className:P,href:y.RU.twitter,variant:"secondary"},"Follow Twitter")))),t&&i.createElement(m._L,{force:15,depth:150,className:"RoadmapSection-module--roadmap--1dVfF"},i.createElement(c.E.div,{variants:u.v_.variants,transition:u.v_.options},i.createElement(F.Z,{items:y.d8})))),i.createElement(m.zL,{className:q,variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},i.createElement(s.S,{className:_,src:"./roadmap.jpg",alt:"",__imageData:a(3109)})))};var Y=function(A){var e=A.id;return i.createElement(l.Z,{id:e,as:"section"},i.createElement(m._L,{force:15,depth:150,className:j},i.createElement(c.E.div,{initial:"initial",animate:"enter",exit:"exit",variants:u.T8.variants,transition:u.T8.options},i.createElement(F.Z,{items:y.d8}))),i.createElement(m.zL,{className:q,variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},i.createElement(s.S,{className:_,src:"./roadmap.jpg",alt:"",__imageData:a(3109)})))};var G=function(A){var e=A.id,t=(0,r.useStaticQuery)("1535035749");return i.createElement(l.Z,{id:e,as:"section",className:"TrailerSection-module--section--yWpMj"},i.createElement(m._L,{force:20,depth:75,className:"TrailerSection-module--video--eRSa+"},i.createElement(c.E.div,{variants:u.T8.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.T8.options},i.createElement(z.Z,{videoId:"IPGtQlyBW-U",cover:(0,s.d)(t.cover.childImageSharp)}))),i.createElement(c.E.div,{className:"TrailerSection-module--content--5n1li",variants:{},initial:"initial",animate:"enter",exit:"exit",transition:u.v_.options},i.createElement(m._L,{force:15,depth:75},i.createElement(E.X,{type:"h2",align:"left"},"UNPARALLELED UTILITY")),i.createElement(m._L,{force:15,depth:50},i.createElement(c.E.ul,{className:"TrailerSection-module--list--EOG87",variants:u.v_.variants,transition:u.v_.options},i.createElement("li",null,"1 of 1 uniquely generated collectable artwork"),i.createElement("li",null,"Individual traits airdropped as independent NFT items"),i.createElement("li",null,"Early access to HELIX"),i.createElement("li",null,"Fully playable character in HELIX"),i.createElement("li",null,"Permanent play to earn bonus"),i.createElement("li",null,"Prioritized land ownership")))),i.createElement(m.zL,{className:"TrailerSection-module--background--Kyj30 MainScreen-module--background--zkIaV",variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},i.createElement(s.S,{className:"TrailerSection-module--backgroundImage--muYzh MainScreen-module--backgroundImage--QT77X",src:"./trailer.jpg",alt:"",__imageData:a(736)})))},H=a(8475),Z=function(){var A=(0,g.G)().isMobile;return i.createElement(i.Fragment,null,i.createElement(n.q,{title:y.h_.NFT.title,defer:!1},i.createElement("meta",{name:"description",content:y.h_.NFT.description}),i.createElement("meta",{property:"og:title",content:y.h_.NFT.title}),i.createElement("meta",{property:"og:description",content:y.h_.NFT.description}),i.createElement("meta",{name:"twitter:title",content:y.h_.NFT.title}),i.createElement("meta",{name:"twitter:description",content:y.h_.NFT.description})),i.createElement(H.R,null,i.createElement(R,{id:"main"}),i.createElement(G,{id:"utility"}),i.createElement(T,{id:"feature"}),i.createElement(k,{id:"carousel"}),i.createElement(p,{id:"artwork"}),i.createElement(U,{id:"roadmap"}),A&&i.createElement(Y,{id:"roadmap-mobile"}),i.createElement(D,{id:"faq",questions:y.uh})))}},736:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAEfoPWCrFF//8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDERMhMf/aAAgBAQABBQKe8ik4T2l6oFY0Le//xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIDESH/2gAIAQMBAT8Bq2T6SraZ/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECIf/aAAgBAgEBPwGpSMP/xAAaEAEAAgMBAAAAAAAAAAAAAAABAhEAEBJB/9oACAEBAAY/Ar5cmIntOrjNycptqa//xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAhEEFRgf/aAAgBAQABPyHeT+obclLBKTfuKKw+5IA5LBNXvZxf/9oADAMBAAIAAwAAABAE/wD/xAAYEQEBAAMAAAAAAAAAAAAAAAABAFHB0f/aAAgBAwEBPxArw6G5QDf/xAAYEQEBAAMAAAAAAAAAAAAAAAABACExQf/aAAgBAgEBPxA0TsYav//EABsQAQADAQEBAQAAAAAAAAAAAAEAESFBsTFR/9oACAEBAAE/ELitvfM7k4TGYAAu3Xy4OaGwDDBG44+xAEdAAyfvrP/Z"},"backgroundColor":"#000","images":{"fallback":{"src":"/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/528f3/trailer.jpg","srcSet":"/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/d48ce/trailer.jpg 1024w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/c69c5/trailer.jpg 1440w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/528f3/trailer.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/c07e9/trailer.avif 1024w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/b46b5/trailer.avif 1440w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/68741/trailer.avif 1920w","type":"image/avif","sizes":"(min-width: 1920px) 1920px, 100vw"},{"srcSet":"/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/9cbea/trailer.webp 1024w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/8fb18/trailer.webp 1440w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/f69ed/trailer.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},292:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB5/Jsjkyv/8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAECIh/9oACAEBAAEFAuunl6BM/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAgMBAAAAAAAAAAAAAAAAACEBIDEy/9oACAEBAAY/AsZKRzT/xAAaEAADAQADAAAAAAAAAAAAAAAAAREhQXGB/9oACAEBAAE/IX4hxAbFeg2jSrRq0//aAAwDAQACAAMAAAAQHN//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxBH/8QAHRABAAICAgMAAAAAAAAAAAAAAREhAEExYVFxwf/aAAgBAQABPxBas16j7VZPIWZdzFYKsCChMGSzkqPd4ohqGo8mRFZXZ0Z//9k="},"backgroundColor":"#000","images":{"fallback":{"src":"/static/924ea7a0c36ab1791eb4d97a63f697e9/41519/main.jpg","srcSet":"/static/924ea7a0c36ab1791eb4d97a63f697e9/d48ce/main.jpg 1024w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/c69c5/main.jpg 1440w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/f0133/main.jpg 1920w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/41519/main.jpg 1921w","sizes":"(min-width: 1921px) 1921px, 100vw"},"sources":[{"srcSet":"/static/924ea7a0c36ab1791eb4d97a63f697e9/c07e9/main.avif 1024w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/b46b5/main.avif 1440w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/77874/main.avif 1920w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/f1135/main.avif 1921w","type":"image/avif","sizes":"(min-width: 1921px) 1921px, 100vw"},{"srcSet":"/static/924ea7a0c36ab1791eb4d97a63f697e9/9cbea/main.webp 1024w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/8fb18/main.webp 1440w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/96d9c/main.webp 1920w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/0cff1/main.webp 1921w","type":"image/webp","sizes":"(min-width: 1921px) 1921px, 100vw"}]},"width":1921,"height":1080}')},9153:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwUA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAZhzCixk1f/EABgQAAMBAQAAAAAAAAAAAAAAAAECAxIh/9oACAEBAAEFApTXdHiG2hFuVXrQkhn/AP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB8QAAIBAgcAAAAAAAAAAAAAAAABAhFBAyEiI1Fhkf/aAAgBAQAGPwLcxFFcUqW8NMak12IzVz//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhQXH/2gAIAQEAAT8hbZhtMIoBQdgGVHoTKYDqYDpLFrbrP//aAAwDAQACAAMAAAAQXx//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEAAwADAQAAAAAAAAAAAAABABEhMUGBYf/aAAgBAQABPxAObGyWnFsLzqK/iqMfNSVpZSuz2C+ocW4XAcnKpm9lDC7+M//Z"},"backgroundColor":"#000","images":{"fallback":{"src":"/static/2550dd9a8ce91f9552ce1ca734a1fcbe/528f3/feature-1.jpg","srcSet":"/static/2550dd9a8ce91f9552ce1ca734a1fcbe/d48ce/feature-1.jpg 1024w,\\n/static/2550dd9a8ce91f9552ce1ca734a1fcbe/c69c5/feature-1.jpg 1440w,\\n/static/2550dd9a8ce91f9552ce1ca734a1fcbe/528f3/feature-1.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/2550dd9a8ce91f9552ce1ca734a1fcbe/c07e9/feature-1.avif 1024w,\\n/static/2550dd9a8ce91f9552ce1ca734a1fcbe/b46b5/feature-1.avif 1440w,\\n/static/2550dd9a8ce91f9552ce1ca734a1fcbe/68741/feature-1.avif 1920w","type":"image/avif","sizes":"(min-width: 1920px) 1920px, 100vw"},{"srcSet":"/static/2550dd9a8ce91f9552ce1ca734a1fcbe/9cbea/feature-1.webp 1024w,\\n/static/2550dd9a8ce91f9552ce1ca734a1fcbe/8fb18/feature-1.webp 1440w,\\n/static/2550dd9a8ce91f9552ce1ca734a1fcbe/f69ed/feature-1.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},8383:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBv/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHPtEhygv8A/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIAAxARMjP/2gAIAQEAAQUCQQPlrDpU3//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAIBBQAAAAAAAAAAAAAAAAEQAAISIVFx/9oACAEBAAY/AoKbcbQ4/wD/xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMYH/2gAIAQEAAT8hF18mKLdUSmnpFqWY7T//2gAMAwEAAgADAAAAEHwP/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQMBAT8Qh//EABYRAQEBAAAAAAAAAAAAAAAAAAARQf/aAAgBAgEBPxDUf//EAB4QAQACAgIDAQAAAAAAAAAAAAEAESExUWFBkaGx/9oACAEBAAE/EG1dDTlq/wAiJWLgNiVvpzEYqSk7jIChZxyqPwmqYBKONTb8oL6n/9k="},"backgroundColor":"#000","images":{"fallback":{"src":"/static/5eb5604d6c6247288e77332c095eb19c/528f3/artwork.jpg","srcSet":"/static/5eb5604d6c6247288e77332c095eb19c/d48ce/artwork.jpg 1024w,\\n/static/5eb5604d6c6247288e77332c095eb19c/c69c5/artwork.jpg 1440w,\\n/static/5eb5604d6c6247288e77332c095eb19c/528f3/artwork.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/5eb5604d6c6247288e77332c095eb19c/c07e9/artwork.avif 1024w,\\n/static/5eb5604d6c6247288e77332c095eb19c/b46b5/artwork.avif 1440w,\\n/static/5eb5604d6c6247288e77332c095eb19c/68741/artwork.avif 1920w","type":"image/avif","sizes":"(min-width: 1920px) 1920px, 100vw"},{"srcSet":"/static/5eb5604d6c6247288e77332c095eb19c/9cbea/artwork.webp 1024w,\\n/static/5eb5604d6c6247288e77332c095eb19c/8fb18/artwork.webp 1440w,\\n/static/5eb5604d6c6247288e77332c095eb19c/f69ed/artwork.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},3109:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCBAb/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABLWNijIXhf//EABoQAAICAwAAAAAAAAAAAAAAAAECAAMEERL/2gAIAQEAAQUCGWm2ykWWv3aSZ0xm5//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwGBf//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/Aaf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAQIxAxARITL/2gAIAQEABj8C5Uy+k7YriSbf/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARMSFBcf/aAAgBAQABPyEp6ZBULA1XkOy1guiiSlp9gqn/2gAMAwEAAgADAAAAEEjf/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Qkf/EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/EKP/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFxYYGR/9oACAEBAAE/EG8euiWvXuvMt8NXtwrPPUBRB0HYcHyF0CJTcuCjptK7N9lz/9k="},"backgroundColor":"#000","images":{"fallback":{"src":"/static/a890d4fe16e3bf153d14da85a716827b/528f3/roadmap.jpg","srcSet":"/static/a890d4fe16e3bf153d14da85a716827b/d48ce/roadmap.jpg 1024w,\\n/static/a890d4fe16e3bf153d14da85a716827b/c69c5/roadmap.jpg 1440w,\\n/static/a890d4fe16e3bf153d14da85a716827b/528f3/roadmap.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/a890d4fe16e3bf153d14da85a716827b/c07e9/roadmap.avif 1024w,\\n/static/a890d4fe16e3bf153d14da85a716827b/b46b5/roadmap.avif 1440w,\\n/static/a890d4fe16e3bf153d14da85a716827b/68741/roadmap.avif 1920w","type":"image/avif","sizes":"(min-width: 1920px) 1920px, 100vw"},{"srcSet":"/static/a890d4fe16e3bf153d14da85a716827b/9cbea/roadmap.webp 1024w,\\n/static/a890d4fe16e3bf153d14da85a716827b/8fb18/roadmap.webp 1440w,\\n/static/a890d4fe16e3bf153d14da85a716827b/f69ed/roadmap.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},4279:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBv/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHPtEhygv8A/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIAAxARMjP/2gAIAQEAAQUCQQPlrDpU3//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAIBBQAAAAAAAAAAAAAAAAEQAAISIVFx/9oACAEBAAY/AoKbcbQ4/wD/xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhMYH/2gAIAQEAAT8hF18mKLdUSmnpFqWY7T//2gAMAwEAAgADAAAAEHwP/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQMBAT8Qh//EABYRAQEBAAAAAAAAAAAAAAAAAAARQf/aAAgBAgEBPxDUf//EAB4QAQACAgIDAQAAAAAAAAAAAAEAESExUWFBkaGx/9oACAEBAAE/EG1dDTlq/wAiJWLgNiVvpzEYqSk7jIChZxyqPwmqYBKONTb8oL6n/9k="},"backgroundColor":"#000","images":{"fallback":{"src":"/static/5eb5604d6c6247288e77332c095eb19c/528f3/faq.jpg","srcSet":"/static/5eb5604d6c6247288e77332c095eb19c/d48ce/faq.jpg 1024w,\\n/static/5eb5604d6c6247288e77332c095eb19c/c69c5/faq.jpg 1440w,\\n/static/5eb5604d6c6247288e77332c095eb19c/528f3/faq.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/5eb5604d6c6247288e77332c095eb19c/c07e9/faq.avif 1024w,\\n/static/5eb5604d6c6247288e77332c095eb19c/b46b5/faq.avif 1440w,\\n/static/5eb5604d6c6247288e77332c095eb19c/68741/faq.avif 1920w","type":"image/avif","sizes":"(min-width: 1920px) 1920px, 100vw"},{"srcSet":"/static/5eb5604d6c6247288e77332c095eb19c/9cbea/faq.webp 1024w,\\n/static/5eb5604d6c6247288e77332c095eb19c/8fb18/faq.webp 1440w,\\n/static/5eb5604d6c6247288e77332c095eb19c/f69ed/faq.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')}}]);
//# sourceMappingURL=component---src-pages-founder-collection-tsx-28290b31d3d47aeda98c.js.map