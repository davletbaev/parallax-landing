"use strict";(self.webpackChunkparallax_landing=self.webpackChunkparallax_landing||[]).push([[741],{3298:function(A,e,a){a.d(e,{R:function(){return l}});var t=a(7294),i=a(9425),n=a(5444),r=a(9499),c=a(9232),s=a(8816),l=function(A){var e=A.children,a=t.Children.toArray(e).filter(t.isValidElement),l=(0,t.useRef)(!0),o=(0,t.useRef)(),E=(0,t.useRef)(!0),d=(0,t.useRef)(),m=(0,t.useRef)(0),f=(0,t.useRef)(0),u=(0,t.useRef)(200),p=(0,t.useRef)(!0),b=(0,t.useRef)(!1),w=(0,t.useRef)(a.length),v=(0,r.useLocation)(),B=(0,c.G)().isMobile,g=(0,s.h)(),h=g.currentSectionId,x=g.currentSectionIndex,Q=g.setCurrentSectionId,z=g.setCurrentSectionIndex;(0,t.useEffect)((function(){var A;p.current=x<w.current-1,b.current=x>0;var e=null===(A=a[x])||void 0===A?void 0:A.props.id;Q(e)}),[x,B]),(0,t.useEffect)((function(){return function(){d.current&&clearTimeout(d.current)}}),[]);var C=(0,t.useCallback)((function(){p.current&&z(x+1)}),[x]),_=(0,t.useCallback)((function(){b.current&&z(x-1)}),[x]),O=(0,t.useCallback)((function(A){z(Math.max(0,Math.min(A,w.current)))}),[]);return(0,t.useEffect)((function(){var A=function(A){var e=Date.now(),a=e-m.current<u.current,t=f.current>0!=A.deltaY>0,i=Math.abs(A.deltaY)<Math.abs(f.current);(t||!a||!i)&&E.current&&(E.current=!1,m.current=e,f.current=A.deltaY,d.current=setTimeout((function(){E.current=!0}),2e3),A.deltaY>=1?C():_())},e=function(A){o.current=A.changedTouches[0]},a=function(A){if(o.current&&E.current){E.current=!1,d.current=setTimeout((function(){E.current=!0}),2e3);var e=A.changedTouches[0],a=o.current.clientY-e.clientY,t=o.current.clientX-e.clientX;Math.abs(a)<Math.abs(t)||(a>30?C():a<-30&&_())}};return window.addEventListener("wheel",A),window.addEventListener("touchstart",e),window.addEventListener("touchend",a),function(){window.removeEventListener("wheel",A),window.removeEventListener("touchstart",e),window.removeEventListener("touchend",a)}}),[C,_]),(0,t.useEffect)((function(){var A=v.hash.slice(1),e=a.findIndex((function(e){return e.props.id===A}));e>0?O(e):v.hash||O(0)}),[v.hash]),(0,t.useEffect)((function(){(0,n.navigate)("#"+h,{replace:l.current}),l.current&&(l.current=!1)}),[h]),t.createElement(i.M,{exitBeforeEnter:!0},a[x])}},6158:function(A,e,a){a.r(e),a.d(e,{default:function(){return O}});var t=a(7294),i=a(5414),n=a(2525),r=a(7134),c=a(8151),s=a(1118),l=a(1587),o=a(6125),E=a(9404),d=a(1667),m=a(2562),f=a(3606),u=a(2406);var p=function(A){var e=A.id;return t.createElement(d.Z,{id:e,as:"section",className:"m_b"},t.createElement(l.E.div,{variants:{},initial:"initial",animate:"enter",exit:"exit",transition:{staggerChildren:.3}},t.createElement(m._L,{force:15,depth:50},t.createElement(l.E.p,{className:"m_s",variants:u.Jk.variants,transition:u.Jk.options},"Limited Edition")),t.createElement(m._L,{force:15,depth:75},t.createElement(f.X,{type:"h1",className:"m_h"},"Founder"," ",t.createElement("br",{className:"m_t"}),"NFT"," ",t.createElement("br",{className:"m_t"}),"Collection")),t.createElement(m._L,{force:15,depth:50},t.createElement(f.n,{size:"large",marginTop:"16",align:"center",variants:u.v_.variants,transition:u.v_.options},"10,000 uniquely generated artworks with exclusive benefits. ",t.createElement("br",null),"Join our Discord for date & price announcement.")),t.createElement(m._L,{force:15,depth:50,className:"m_n"},t.createElement(l.E.div,{variants:u.v_.variants,transition:u.v_.options},t.createElement(E.Z,{href:"#utility"},"Watch NFT Video")))),t.createElement(m.zL,{className:"m_f",variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},t.createElement(o.S,{className:"m_g",src:"./main.jpg",alt:"",__imageData:a(292)})))},b=a(7583),w=a(7221),v=a(9232),B="f_f h_f",g="f_g h_g";var h=function(A){var e=A.id,i=(0,v.G)().isTabletOrBigger;return t.createElement(d.Z,{id:e,as:"section"},t.createElement(l.E.div,{className:"f_b",variants:{},initial:"initial",animate:"enter",exit:"exit",transition:{staggerChildren:.15}},t.createElement(m._L,{force:15,depth:150,className:"f_h"},t.createElement(f.X,{type:"h2"},"MINT PRICE & DATE")),t.createElement("div",{className:"f_c"},t.createElement(m._L,{force:15,depth:50},t.createElement(f.n,{marginTop:"24",marginBottom:"24"},"We will announce the price, date, and format of the NFT sale soon.",t.createElement("br",null),"Join our Discord and Twitter to find out.")),t.createElement(m._L,{force:15,depth:75},t.createElement(l.E.div,{variants:u.v_.variants,transition:u.v_.options},t.createElement(E.Z,{className:"f_n",href:w.RU.discord,variant:"secondary"},"Join Discord"),t.createElement(E.Z,{className:"f_n",href:w.RU.twitter,variant:"secondary"},"Follow Twitter")))),i&&t.createElement(m._L,{force:15,depth:150,className:"f_m"},t.createElement(l.E.div,{variants:u.v_.variants,transition:u.v_.options},t.createElement(b.Z,{items:w.d8})))),t.createElement(m.zL,{className:B,variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},t.createElement(o.S,{className:g,src:"./roadmap.jpg",alt:"",__imageData:a(3109)})))};var x=function(A){var e=A.id;return t.createElement(d.Z,{id:e,as:"section"},t.createElement(m._L,{force:15,depth:150,className:"f_b"},t.createElement(l.E.div,{initial:"initial",animate:"enter",exit:"exit",variants:u.T8.variants,transition:u.T8.options},t.createElement(b.Z,{items:w.d8}))),t.createElement(m.zL,{className:B,variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},t.createElement(o.S,{className:g,src:"./roadmap.jpg",alt:"",__imageData:a(3109)})))},Q=a(5444),z=a(9547);var C=function(A){var e=A.id,i=(0,Q.useStaticQuery)("1535035749");return t.createElement(d.Z,{id:e,as:"section",className:"n_b"},t.createElement(m._L,{force:20,depth:75,className:"n_C"},t.createElement(l.E.div,{variants:u.T8.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.T8.options},t.createElement(z.Z,{videoId:"RYdCuw7L1qk",cover:(0,o.d)(i.cover.childImageSharp)}))),t.createElement(l.E.div,{className:"n_c",variants:{},initial:"initial",animate:"enter",exit:"exit",transition:u.v_.options},t.createElement(m._L,{force:15,depth:75},t.createElement(f.X,{type:"h2",align:"left"},"UNPARALLELED UTILITY")),t.createElement(m._L,{force:15,depth:50},t.createElement(l.E.ul,{className:"n_J",variants:u.v_.variants,transition:u.v_.options},t.createElement("li",null,"1 of 1 uniquely generated collectable artwork"),t.createElement("li",null,"Individual traits airdropped as independent NFT items"),t.createElement("li",null,"Early access to HELIX"),t.createElement("li",null,"Fully playable character in HELIX"),t.createElement("li",null,"Permanent play to earn bonus"),t.createElement("li",null,"Prioritized land ownership")))),t.createElement(m.zL,{className:"n_f h_f",variants:u.A6.variants,initial:"initial",animate:"enter",exit:"exit",transition:u.A6.options},t.createElement(o.S,{className:"n_g h_g",src:"./trailer.jpg",alt:"",__imageData:a(736)})))},_=a(3298),O=function(){var A=(0,v.G)().isMobile;return t.createElement(t.Fragment,null,t.createElement(i.q,{title:w.h_.NFT.title,defer:!1},t.createElement("meta",{name:"description",content:w.h_.NFT.description}),t.createElement("meta",{property:"og:title",content:w.h_.NFT.title}),t.createElement("meta",{property:"og:description",content:w.h_.NFT.description}),t.createElement("meta",{name:"twitter:title",content:w.h_.NFT.title}),t.createElement("meta",{name:"twitter:description",content:w.h_.NFT.description})),t.createElement(_.R,null,t.createElement(p,{id:"main"}),t.createElement(C,{id:"utility"}),t.createElement(s.Z,{id:"feature"}),t.createElement(r.Z,{id:"carousel"}),t.createElement(n.Z,{id:"artwork"}),t.createElement(h,{id:"roadmap"}),A&&t.createElement(x,{id:"roadmap-mobile"}),t.createElement(c.Z,{id:"faq",questions:w.uh})))}},736:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAEfoPWCrFF//8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDERMhMf/aAAgBAQABBQKe8ik4T2l6oFY0Le//xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIDESH/2gAIAQMBAT8Bq2T6SraZ/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECIf/aAAgBAgEBPwGpSMP/xAAaEAEAAgMBAAAAAAAAAAAAAAABAhEAEBJB/9oACAEBAAY/Ar5cmIntOrjNycptqa//xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAhEEFRgf/aAAgBAQABPyHeT+obclLBKTfuKKw+5IA5LBNXvZxf/9oADAMBAAIAAwAAABAE/wD/xAAYEQEBAAMAAAAAAAAAAAAAAAABAFHB0f/aAAgBAwEBPxArw6G5QDf/xAAYEQEBAAMAAAAAAAAAAAAAAAABACExQf/aAAgBAgEBPxA0TsYav//EABsQAQADAQEBAQAAAAAAAAAAAAEAESFBsTFR/9oACAEBAAE/ELitvfM7k4TGYAAu3Xy4OaGwDDBG44+xAEdAAyfvrP/Z"},"backgroundColor":"#000","images":{"fallback":{"src":"/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/528f3/trailer.jpg","srcSet":"/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/d48ce/trailer.jpg 1024w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/c69c5/trailer.jpg 1440w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/528f3/trailer.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/c07e9/trailer.avif 1024w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/b46b5/trailer.avif 1440w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/68741/trailer.avif 1920w","type":"image/avif","sizes":"(min-width: 1920px) 1920px, 100vw"},{"srcSet":"/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/9cbea/trailer.webp 1024w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/8fb18/trailer.webp 1440w,\\n/static/ab9055e4d5f7b9b3e9ca0cc50cd92a76/f69ed/trailer.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')},292:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB5/Jsjkyv/8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAECIh/9oACAEBAAEFAuunl6BM/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAgMBAAAAAAAAAAAAAAAAACEBIDEy/9oACAEBAAY/AsZKRzT/xAAaEAADAQADAAAAAAAAAAAAAAAAAREhQXGB/9oACAEBAAE/IX4hxAbFeg2jSrRq0//aAAwDAQACAAMAAAAQHN//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxBH/8QAHRABAAICAgMAAAAAAAAAAAAAAREhAEExYVFxwf/aAAgBAQABPxBas16j7VZPIWZdzFYKsCChMGSzkqPd4ohqGo8mRFZXZ0Z//9k="},"backgroundColor":"#000","images":{"fallback":{"src":"/static/924ea7a0c36ab1791eb4d97a63f697e9/41519/main.jpg","srcSet":"/static/924ea7a0c36ab1791eb4d97a63f697e9/d48ce/main.jpg 1024w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/c69c5/main.jpg 1440w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/f0133/main.jpg 1920w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/41519/main.jpg 1921w","sizes":"(min-width: 1921px) 1921px, 100vw"},"sources":[{"srcSet":"/static/924ea7a0c36ab1791eb4d97a63f697e9/c07e9/main.avif 1024w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/b46b5/main.avif 1440w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/77874/main.avif 1920w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/f1135/main.avif 1921w","type":"image/avif","sizes":"(min-width: 1921px) 1921px, 100vw"},{"srcSet":"/static/924ea7a0c36ab1791eb4d97a63f697e9/9cbea/main.webp 1024w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/8fb18/main.webp 1440w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/96d9c/main.webp 1920w,\\n/static/924ea7a0c36ab1791eb4d97a63f697e9/0cff1/main.webp 1921w","type":"image/webp","sizes":"(min-width: 1921px) 1921px, 100vw"}]},"width":1921,"height":1080}')},3109:function(A){A.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCBAb/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABLWNijIXhf//EABoQAAICAwAAAAAAAAAAAAAAAAECAAMEERL/2gAIAQEAAQUCGWm2ykWWv3aSZ0xm5//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwGBf//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/Aaf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAQIxAxARITL/2gAIAQEABj8C5Uy+k7YriSbf/8QAGhABAAMBAQEAAAAAAAAAAAAAAQARMSFBcf/aAAgBAQABPyEp6ZBULA1XkOy1guiiSlp9gqn/2gAMAwEAAgADAAAAEEjf/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Qkf/EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/EKP/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFxYYGR/9oACAEBAAE/EG8euiWvXuvMt8NXtwrPPUBRB0HYcHyF0CJTcuCjptK7N9lz/9k="},"backgroundColor":"#000","images":{"fallback":{"src":"/static/a890d4fe16e3bf153d14da85a716827b/528f3/roadmap.jpg","srcSet":"/static/a890d4fe16e3bf153d14da85a716827b/d48ce/roadmap.jpg 1024w,\\n/static/a890d4fe16e3bf153d14da85a716827b/c69c5/roadmap.jpg 1440w,\\n/static/a890d4fe16e3bf153d14da85a716827b/528f3/roadmap.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/a890d4fe16e3bf153d14da85a716827b/c07e9/roadmap.avif 1024w,\\n/static/a890d4fe16e3bf153d14da85a716827b/b46b5/roadmap.avif 1440w,\\n/static/a890d4fe16e3bf153d14da85a716827b/68741/roadmap.avif 1920w","type":"image/avif","sizes":"(min-width: 1920px) 1920px, 100vw"},{"srcSet":"/static/a890d4fe16e3bf153d14da85a716827b/9cbea/roadmap.webp 1024w,\\n/static/a890d4fe16e3bf153d14da85a716827b/8fb18/roadmap.webp 1440w,\\n/static/a890d4fe16e3bf153d14da85a716827b/f69ed/roadmap.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')}}]);
//# sourceMappingURL=component---src-pages-nft-foundation-tsx-f6f286edda16acd6e5e4.js.map