(this["webpackJsonpreact-carsharing"]=this["webpackJsonpreact-carsharing"]||[]).push([[0],{2:function(e,t,n){e.exports={title:"pages_title__1l9Rm","left-line":"pages_left-line__3uX7X",language:"pages_language__2myry",main:"pages_main__2tboW",content:"pages_content__7C3aO",content__up:"pages_content__up__1f_rr",break:"pages_break__1code",content__title:"pages_content__title__BLFPc",content__subtitle:"pages_content__subtitle__3rGd-",content__text:"pages_content__text__YIBrQ",content__button:"pages_content__button__2pOeK",content__down:"pages_content__down__2FP75",copy:"pages_copy__38ycq",tel:"pages_tel__IpM6e","slider-container":"pages_slider-container___nFaY",slider:"pages_slider__h7X0d",slider__fone:"pages_slider__fone__165tj",slider__content:"pages_slider__content__1b6KP",slide:"pages_slide__3x2Bj",slide__background:"pages_slide__background__fE1tc",slide__content:"pages_slide__content__2hRwI",slide__title:"pages_slide__title__3jcqZ",slide__subtitle:"pages_slide__subtitle__7E6Ab",slide__button:"pages_slide__button__3s1my",slider__arrow:"pages_slider__arrow__3yZvJ",slider__dots:"pages_slider__dots__2VoZy",dots__dot:"pages_dots__dot__2GGl7","container__arrow-line":"pages_container__arrow-line__39jxg",right:"pages_right__3kxwi",left:"pages_left__1Rd-P","arrow-line":"pages_arrow-line__ljoIG",container__arrow:"pages_container__arrow__3tMbk","burger-menu":"pages_burger-menu__310c7","burger-menu__line":"pages_burger-menu__line__2mcYA","burger-menu_first-line":"pages_burger-menu_first-line__hwhAR",active:"pages_active__22TO_","burger-menu_second-line":"pages_burger-menu_second-line__3c9WS","burger-menu_third-line":"pages_burger-menu_third-line__1H6fA","burger-menu_forth-line":"pages_burger-menu_forth-line__2Oexd",content__center:"pages_content__center__27zbG"}},21:function(e,t,n){},22:function(e,t,n){e.exports={location:"Location_location__2iz1_",location__city:"Location_location__city__3P2nP"}},24:function(e,t,n){e.exports={"lds-ring":"Loader_lds-ring__2askt"}},42:function(e,t,n){"use strict";n.r(t);var a,r,i,c=n(0),s=n.n(c),l=n(18),_=n.n(l),o=n(21),d=n.n(o),u=n(12),b=n(14),j=n(4),g=n(2),O=n.n(g),h=n(6),m=n(1),f=function(e){var t=e.content,n=e.title,a=e.subtitle,r=e.but;return Object(m.jsxs)("div",{className:O.a.slide,style:{background:"url(".concat(t,")")},children:[Object(m.jsx)("div",{className:O.a.slide__background}),Object(m.jsxs)("article",{className:O.a.slide__content,children:[Object(m.jsx)("h2",{className:O.a.slide__title,children:n}),Object(m.jsx)("p",{className:O.a.slide__subtitle,children:a}),Object(m.jsx)("button",{className:O.a.slide__button,style:{background:"".concat(r)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})]})},x=function(e){var t=e.transition,n=e.translate,a=e.width,r=e.content;return Object(m.jsx)("div",{className:O.a.slider__content,style:{transform:"translateX(-".concat(n,"px)"),transition:"transform ease-out ".concat(t,"s"),width:"".concat(a,"px")},children:r.map((function(e){return Object(m.jsx)(f,{content:e.slide,title:e.title,subtitle:e.subtitle,but:e.button},e.slide)}))})},p=n.p+"static/media/right-arrow.7591c327.svg",v=n.p+"static/media/left-arrow.1752ae91.svg",C=n(5),w=n.n(C),A=function(e){var t=e.direction,n=e.handleClick;return Object(m.jsxs)("div",{className:O.a.container,onClick:n,children:[Object(m.jsx)("div",{className:"right"===t?w()(O.a.container__arrow,O.a.right):w()(O.a.container__arrow,O.a.left),children:Object(m.jsx)("img",{src:"right"===t?p:v,alt:"arrow"})}),Object(m.jsx)("div",{className:"right"===t?w()(O.a["container__arrow-line"],O.a.right):w()(O.a["container__arrow-line"],O.a.left)})]})},N=function(e){var t=e.active,n=e.onPress,a=e.index,r=e.activeIndex;return Object(m.jsx)("span",{className:O.a.dots__dot,style:t?{background:"#0EC261"}:{background:"white"},onClick:function(){return n(r,a)}})},y=function(e){var t=e.slides,n=e.activeIndex,a=e.onPress;return Object(m.jsx)("div",{className:w()(O.a.slider__dots,O.a.dots),children:t.map((function(e,t){return Object(m.jsx)(N,{active:n===t,onPress:a,index:t,activeIndex:n},e.slide)}))})},k=function(e){var t=e.content,n=e.handleWidth,a=Object(c.useState)(688),r=Object(b.a)(a,2),i=r[0],s=r[1],l=Object(c.useState)(window.screen.width),_=Object(b.a)(l,2),o=_[0],d=_[1],u=function(){switch(!0){case window.innerWidth<=1014:s(380);break;case window.innerWidth<=1145:s(410);break;case window.innerWidth<=1285:s(500);break;case window.innerWidth<=1356:s(600);break;default:s(688)}n(window.innerWidth)};Object(c.useEffect)((function(){window.addEventListener("resize",u),d(window.screen.width)})),Object(c.useEffect)((function(){N()}),[o]);var j=Object(c.useState)({activeIndex:0,translate:0,transition:.45}),g=Object(b.a)(j,2),f=g[0],p=g[1],v=f.translate,C=f.transition,w=f.activeIndex,N=function(){return p(Object(h.a)(Object(h.a)({},f),{},{activeIndex:w,translate:w*i}))};return Object(m.jsxs)("div",{className:O.a.slider,children:[Object(m.jsx)(x,{translate:v,transition:C,width:o*t.length,content:t}),Object(m.jsx)(A,{direction:"left",handleClick:function(){if(0===w)return p(Object(h.a)(Object(h.a)({},f),{},{translate:(t.length-1)*i,activeIndex:t.length-1}));p(Object(h.a)(Object(h.a)({},f),{},{activeIndex:w-1,translate:(w-1)*i}))}}),Object(m.jsx)(A,{direction:"right",handleClick:function(){if(w===t.length-1)return p(Object(h.a)(Object(h.a)({},f),{},{translate:0,activeIndex:0}));p(Object(h.a)(Object(h.a)({},f),{},{activeIndex:w+1,translate:(w+1)*i}))}}),Object(m.jsx)(y,{slides:t,activeIndex:w,onPress:function(e,t){p(Object(h.a)(Object(h.a)({},f),{},{activeIndex:t,translate:t*i}))}})]})},E=[n.p+"static/media/slide-1.9369f2aa.png",n.p+"static/media/slide-3.4e22dc96.png",n.p+"static/media/slide-2.ea68d8b3.png",n.p+"static/media/slide-4.be695f13.png"],I=["\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430","\u0411\u0435\u043d\u0437\u0438\u043d","\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435"],M=["\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445.","\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f","\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0451\u0442","\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e"],B=[{slide:E[0],title:I[0],subtitle:M[0],button:"linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)"},{slide:E[1],title:I[1],subtitle:M[1],button:"linear-gradient(90deg, #132949 0%, #0C7B67 100%)"},{slide:E[2],title:I[2],subtitle:M[2],button:"linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"},{slide:E[3],title:I[3],subtitle:M[3],button:"linear-gradient(90deg, #281349 0%, #720C7B 100%)"}],R=n(22),S=n.n(R),P=function(){return Object(m.jsxs)("address",{className:S.a.location,children:[Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAINSURBVHgBfVPLbcJAELWX35VUEKcD6AA6gAqIJSR+B6AC0wFwAARCMqkgdACpAFIBpIJw5Z83y4y1cmxWGs3uzuybN5+1rdDyfT97PB4rSqnS/X7P4SoLOdi2vcV5cbvdvhqNxj78zjYP0+m0A+Xx47h1gAxrtVrPvFQGCBn6BILIa2KUTqdf8MAmDUYFyIKDePDv/2PETLQBIJ16vT6MozOZTN4RRAe8Xq/dZrM50IxgcKDbcSBsDxbqQ3Uq0z6RSPTFTqkVIA4V0gQhlpBfRN9B7zh1AVtzmhbsmoQCaoUvFiZ9qRdkT4GoLuPxuCM+SOuDtyX9nltspVKpb3ECeJAqiv2GraTimax460hqutWu6x7EScAzmYyOCrAlm8Jjod/M5/NXZR7EivzXpE+nkzcajXKz2WzApr340OAKcLVa/VE0sXS4XC4lcTqfz10O0EkmkxswbLOpKz4IUmD2OqhCKzVtGkBxarVaW9znuTMUaEkDaaRIrNusF1oTRaDvrNCAPVs8lD6lioBF+nuKioyDpkxdCQ9gBIgDEI/TGsgHDj4tBu7TeszEHn8rb3ZRFrFH/VbUVaoNBrgotuDT4rFr8fCRM3clEoT8oF3THgBxikV2yqFuG0mTtAkidTGBbCu6BivrMbHk3GNx4kAigQQMhffBoBA4Yt7Q1XIUSCyQLDTAYzYDzFD3me8fehg3I4Xh86sAAAAASUVORK5CYII=",alt:"\u0413\u043e\u0440\u043e\u0434"})," ",Object(m.jsx)("span",{className:S.a.location__city,children:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"})]})},T=function(e){var t=e.isMenu,n=e.setMenu;return Object(m.jsxs)("div",{className:O.a["burger-menu"],onClick:function(){n(!t)},children:[Object(m.jsx)("div",{className:t?w()(O.a["burger-menu__line"],O.a["burger-menu_first-line"],O.a.active):w()(O.a["burger-menu__line"],O.a["burger-menu_first-line"])}),Object(m.jsx)("div",{className:t?w()(O.a["burger-menu__line"],O.a["burger-menu_second-line"],O.a.active):w()(O.a["burger-menu__line"],O.a["burger-menu_second-line"])}),Object(m.jsx)("div",{className:t?w()(O.a["burger-menu__line"],O.a["burger-menu_third-line"],O.a.active):w()(O.a["burger-menu__line"],O.a["burger-menu_third-line"])}),Object(m.jsx)("div",{className:t?w()(O.a["burger-menu__line"],O.a["burger-menu_forth-line"],O.a.active):w()(O.a["burger-menu__line"],O.a["burger-menu_forth-line"])})]})},V=n(24),L=n.n(V),D=function(){return Object(m.jsxs)("div",{className:L.a["lds-ring"],children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})},z=n(13),G=function(e){return{type:"SET_LOADING",payload:e}},X=function(e){return{type:"SET_LANGUAGE",payload:e}},U=function(e){var t=e.isMenu,n=e.setMenu,a=Object(z.b)(),r=Object(z.c)((function(e){return e.main.isLoading})),i=Object(c.useState)(window.screen.width),s=Object(b.a)(i,2),l=s[0],_=s[1];return Object(m.jsxs)("div",{className:O.a.main,children:[Object(m.jsxs)("div",{className:O.a.content,children:[Object(m.jsxs)("header",{className:O.a.content__up,children:[l<543&&Object(m.jsx)("div",{children:Object(m.jsx)(T,{setMenu:n,isMenu:t})}),Object(m.jsx)("h1",{className:O.a.title,children:"Need for drive"}),l<543&&Object(m.jsx)("div",{className:O.a.break}),Object(m.jsx)(P,{})]}),Object(m.jsxs)("section",{className:O.a.content__center,children:[Object(m.jsx)("div",{className:O.a.content__title,children:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"}),Object(m.jsx)("div",{className:w()(O.a.content__subtitle,O.a.title),children:"Need for drive"}),Object(m.jsx)("div",{className:O.a.content__text,children:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(m.jsx)(u.b,{to:"/react-carsharing/order",children:Object(m.jsx)("button",{className:O.a.content__button,onClick:function(){return a(G(!0))},children:r?Object(m.jsx)(D,{}):"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(m.jsxs)("footer",{className:O.a.content__down,children:[Object(m.jsx)("div",{className:O.a.copy,children:"\xa9 2016-2019 \xabNeed for drive\xbb"}),Object(m.jsx)("div",{className:O.a.tel,children:Object(m.jsx)("a",{href:"tel:+74952342244",children:"8 (495) 234-22-44"})})]})]}),Object(m.jsx)("div",{className:O.a["slider-container"],children:Object(m.jsx)(k,{content:B,handleWidth:_})})]})},Z=["title","titleId"];function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},q.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function W(e,t){var n=e.title,s=e.titleId,l=F(e,Z);return c.createElement("svg",q({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),n?c.createElement("title",{id:s},n):null,a||(a=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z",fill:"white"})),r||(r=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.2353 9.00445C15.3839 9.00422 15.5438 9.00429 15.7164 9.00437L16.0008 9.00445C18.2792 9.00445 18.5493 9.01263 19.449 9.05352C20.281 9.09156 20.7326 9.23059 21.0334 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9465 12.551C22.9874 13.4505 22.9963 13.7208 22.9963 15.9981C22.9963 18.2755 22.9874 18.5457 22.9465 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4522 22.9827 12.5526 22.9418C11.7206 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2854 22.3081 9.98669 22.0094C9.68802 21.7107 9.50313 21.427 9.34811 21.0286C9.23131 20.7281 9.09211 20.2766 9.05424 19.4446C9.01335 18.545 9.00517 18.2748 9.00517 15.996C9.00517 13.7172 9.01335 13.4484 9.05424 12.5488C9.09228 11.7168 9.23131 11.2653 9.34811 10.9645C9.50278 10.5662 9.68802 10.2818 9.98669 9.98313C10.2854 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7206 9.08854 12.5526 9.05032C13.3398 9.01476 13.6449 9.0041 15.2353 9.00232V9.00445ZM20.5559 10.4213C19.9905 10.4213 19.5319 10.8795 19.5319 11.445C19.5319 12.0103 19.9905 12.469 20.5559 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.421 20.5559 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5806 11.6179 16.0006 11.6178C18.4207 11.6178 20.3824 13.58 20.3824 16.0001C20.3824 18.4202 18.4209 20.3815 16.0008 20.3815C13.5807 20.3815 11.6185 18.4202 11.6185 16.0001Z",fill:"white"})),i||(i=c.createElement("path",{d:"M16.0008 13.1556C17.5717 13.1556 18.8453 14.4291 18.8453 16.0001C18.8453 17.571 17.5717 18.8446 16.0008 18.8446C14.4298 18.8446 13.1563 17.571 13.1563 16.0001C13.1563 14.4291 14.4298 13.1556 16.0008 13.1556Z",fill:"white"})))}var K,Q=c.forwardRef(W),H=(n.p,["title","titleId"]);function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Y.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $(e,t){var n=e.title,a=e.titleId,r=J(e,H);return c.createElement("svg",Y({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,K||(K=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z",fill:"white"})))}var ee,te=c.forwardRef($),ne=(n.p,["title","titleId"]);function ae(){return ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ae.apply(this,arguments)}function re(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ie(e,t){var n=e.title,a=e.titleId,r=re(e,ne);return c.createElement("svg",ae({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,ee||(ee=c.createElement("path",{d:"M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z",fill:"white"})))}var ce=c.forwardRef(ie),se=(n.p,function(){var e=Object(z.b)(),t=Object(z.c)((function(e){return e.main.language}));return Object(m.jsx)("div",{className:O.a.language,onClick:function(){return e(X("Rus"===t?"Eng":"Rus"))},children:t})}),le=n(9),_e=n.n(le),oe=function(){var e=Object(j.f)();return Object(m.jsxs)("nav",{className:_e.a.menu,children:[Object(m.jsxs)("div",{className:_e.a.menu__left,children:[Object(m.jsxs)("ul",{className:_e.a.menu__items,children:[Object(m.jsx)("li",{className:_e.a.menu__item,children:Object(m.jsx)(u.b,{to:"#",children:"\u041f\u0410\u0420\u041a\u041e\u0412\u041a\u0410"})}),Object(m.jsx)("li",{className:_e.a.menu__item,children:Object(m.jsx)(u.b,{to:"#",children:"\u0421\u0422\u0420\u0410\u0425\u041e\u0412\u041a\u0410"})}),Object(m.jsx)("li",{className:_e.a.menu__item,children:Object(m.jsx)(u.b,{to:"#",children:"\u0411\u0415\u041d\u0417\u0418\u041d"})}),Object(m.jsx)("li",{className:_e.a.menu__item,children:Object(m.jsx)(u.b,{to:"#",children:"\u041e\u0411\u0421\u041b\u0423\u0416\u0418\u0412\u0410\u041d\u0418\u0415"})})]}),Object(m.jsxs)("ul",{className:_e.a["social-networks"],children:[Object(m.jsx)("a",{href:"https://telegram.org/",children:Object(m.jsx)("li",{className:_e.a["social-networks__item"],children:Object(m.jsx)(te,{})})}),Object(m.jsx)("a",{href:"https://www.facebook.com/",children:Object(m.jsx)("li",{className:_e.a["social-networks__item"],children:Object(m.jsx)(ce,{})})}),Object(m.jsx)("a",{href:"https://www.instagram.com/",children:Object(m.jsx)("li",{className:_e.a["social-networks__item"],children:Object(m.jsx)(Q,{})})})]}),Object(m.jsx)("div",{className:_e.a.language,children:Object(m.jsx)(se,{})})]}),"/react-carsharing"===e.location.pathname&&Object(m.jsx)("div",{className:_e.a.menu__right})]})},de=function(e){var t=e.isMenu,n=e.setMenu;return Object(m.jsxs)("div",{className:O.a["left-line"],children:[Object(m.jsx)(T,{setMenu:n,isMenu:t}),!t&&Object(m.jsx)(se,{})]})},ue=function(){var e=Object(z.b)();return Object(c.useEffect)((function(){e(G(!1))}),[e]),Object(m.jsx)("div",{children:"OrderOrderOrder"})};var be=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{className:d.a.App,children:[n&&Object(m.jsx)(oe,{}),Object(m.jsx)(de,{setMenu:a,isMenu:n}),Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{exact:!0,path:"/react-carsharing",render:function(){return Object(m.jsx)(U,{setMenu:a,isMenu:n})}}),Object(m.jsx)(j.a,{exact:!0,path:"/react-carsharing/order",render:function(){return Object(m.jsx)(ue,{})}})]})]})},je=n(16),ge=n(27),Oe={isLoading:!1,language:"Rus"},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(h.a)(Object(h.a)({},e),{},{isLoading:t.payload});case"SET_LANGUAGE":return Object(h.a)(Object(h.a)({},e),{},{language:t.payload});default:return e}},me=Object(je.b)({main:he}),fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.c,xe=Object(je.d)(me,fe(Object(je.a)(ge.a)));_.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(u.a,{children:Object(m.jsx)(z.a,{store:xe,children:Object(m.jsx)(be,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={menu:"Menu_menu__3_0Et",menu__left:"Menu_menu__left__2ZIZB",menu__right:"Menu_menu__right__1aT8I",menu__item:"Menu_menu__item__TUDB-",language:"Menu_language__yh2nw","social-networks":"Menu_social-networks__tqWp4","social-networks__item":"Menu_social-networks__item__2av2E"}}},[[42,1,2]]]);
//# sourceMappingURL=main.53951edc.chunk.js.map