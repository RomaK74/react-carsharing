(this["webpackJsonpreact-carsharing"]=this["webpackJsonpreact-carsharing"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(15),a=n.n(i),s=(n(26),n(11)),l=n(3),o=n(9),d=(n(27),n(6)),u=n(1),j=function(e){var t=e.content,n=e.title,c=e.subtitle,r=e.but;return Object(u.jsxs)("div",{className:"slide",style:{background:"url(".concat(t,")")},children:[Object(u.jsx)("div",{className:"slide__background"}),Object(u.jsxs)("article",{className:"slide__content",children:[Object(u.jsx)("h2",{className:"slide__title",children:n}),Object(u.jsx)("p",{className:"slide__subtitle",children:c}),Object(u.jsx)("button",{className:"slide__button",style:{background:"".concat(r)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})]})},b=function(e){var t=e.transition,n=e.translate,c=e.width,r=e.content;return Object(u.jsx)("div",{className:"slider__content",style:{transform:"translateX(-".concat(n,"px)"),transition:"transform ease-out ".concat(t,"s"),width:"".concat(c,"px")},children:r.map((function(e){return Object(u.jsx)(j,{content:e.slide,title:e.title,subtitle:e.subtitle,but:e.button},e.slide)}))})},O=n.p+"static/media/right-arrow.7591c327.svg",f=n.p+"static/media/left-arrow.1752ae91.svg";function h(){return window.innerWidth}var m,x,C,v=function(e){var t=e.direction,n=e.handleClick,c=r.a.useState(h),i=Object(o.a)(c,2),a=i[0],s=i[1],l=r.a.useState(5),d=Object(o.a)(l,2),j=d[0],b=d[1];return r.a.useEffect((function(){s(h),a<1285&&b(-10)}),[a]),Object(u.jsxs)("div",{className:"container",onClick:n,children:[Object(u.jsx)("div",{className:"container__arrow",style:"right"===t?{right:"".concat(j,"px"),transform:"translateX(2)"}:{left:"".concat(j,"px"),transform:"translateX(-2)"},children:Object(u.jsx)("img",{src:"right"===t?O:f,alt:"arrow"})}),Object(u.jsx)("div",{className:"container__arrow-line",style:"left"===t?{left:"0"}:{right:"0"}})]})},g=function(e){var t=e.active,n=e.onPress,c=e.index,r=e.activeIndex;return Object(u.jsx)("span",{className:"dots__dot",style:t?{background:"#0EC261"}:{background:"white"},onClick:function(){return n(r,c)}})},p=function(e){var t=e.slides,n=e.activeIndex,c=e.onPress;return Object(u.jsx)("div",{className:"slider__dots dots",children:t.map((function(e,t){return Object(u.jsx)(g,{active:n===t,onPress:c,index:t,activeIndex:n},e.slide)}))})},_=n(10),w=function(e){var t=e.content,n=r.a.useState(window.screen.width),i=Object(o.a)(n,2),a=i[0],s=i[1],l=r.a.useState(688),j=Object(o.a)(l,2),O=j[0],f=j[1];r.a.useEffect((function(){s(window.screen.width)}),[]),r.a.useEffect((function(){switch(!0){case a<=1014:f(380);break;case a<=1145:f(410);break;case a<=1285:f(500);break;case a<=1356:f(600);break;default:f(688)}console.log(a,O)}),[window.screen.width,O]);var h=Object(_.c)((function(e){return e.main.isMenu})),m=Object(c.useState)({activeIndex:0,translate:0,transition:.45}),x=Object(o.a)(m,2),C=x[0],g=x[1],w=C.translate,A=C.transition,N=C.activeIndex;return Object(u.jsxs)("div",{className:"slider",children:[h&&Object(u.jsx)("div",{className:"slider__fone"}),Object(u.jsx)(b,{translate:w,transition:A,width:a*t.length,content:t}),Object(u.jsx)(v,{direction:"left",handleClick:function(){if(0===N)return g(Object(d.a)(Object(d.a)({},C),{},{translate:(t.length-1)*O,activeIndex:t.length-1}));g(Object(d.a)(Object(d.a)({},C),{},{activeIndex:N-1,translate:(N-1)*O}))}}),Object(u.jsx)(v,{direction:"right",handleClick:function(){if(N===t.length-1)return g(Object(d.a)(Object(d.a)({},C),{},{translate:0,activeIndex:0}));g(Object(d.a)(Object(d.a)({},C),{},{activeIndex:N+1,translate:(N+1)*O}))}}),Object(u.jsx)(p,{slides:t,activeIndex:N,onPress:function(e,t){g(Object(d.a)(Object(d.a)({},C),{},{activeIndex:t,translate:t*O}))}})]})},A=[n.p+"static/media/slide-1.9369f2aa.png",n.p+"static/media/slide-3.4e22dc96.png",n.p+"static/media/slide-2.ea68d8b3.png",n.p+"static/media/slide-4.be695f13.png"],N=["\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430","\u0411\u0435\u043d\u0437\u0438\u043d","\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435"],y=["\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445.","\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f","\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0451\u0442","\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e"],E=[{slide:A[0],title:N[0],subtitle:y[0],button:"linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)"},{slide:A[1],title:N[1],subtitle:y[1],button:"linear-gradient(90deg, #132949 0%, #0C7B67 100%)"},{slide:A[2],title:N[2],subtitle:y[2],button:"linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"},{slide:A[3],title:N[3],subtitle:y[3],button:"linear-gradient(90deg, #281349 0%, #720C7B 100%)"}],I=(n(34),function(){return Object(u.jsxs)("address",{className:"location",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAINSURBVHgBfVPLbcJAELWX35VUEKcD6AA6gAqIJSR+B6AC0wFwAARCMqkgdACpAFIBpIJw5Z83y4y1cmxWGs3uzuybN5+1rdDyfT97PB4rSqnS/X7P4SoLOdi2vcV5cbvdvhqNxj78zjYP0+m0A+Xx47h1gAxrtVrPvFQGCBn6BILIa2KUTqdf8MAmDUYFyIKDePDv/2PETLQBIJ16vT6MozOZTN4RRAe8Xq/dZrM50IxgcKDbcSBsDxbqQ3Uq0z6RSPTFTqkVIA4V0gQhlpBfRN9B7zh1AVtzmhbsmoQCaoUvFiZ9qRdkT4GoLuPxuCM+SOuDtyX9nltspVKpb3ECeJAqiv2GraTimax460hqutWu6x7EScAzmYyOCrAlm8Jjod/M5/NXZR7EivzXpE+nkzcajXKz2WzApr340OAKcLVa/VE0sXS4XC4lcTqfz10O0EkmkxswbLOpKz4IUmD2OqhCKzVtGkBxarVaW9znuTMUaEkDaaRIrNusF1oTRaDvrNCAPVs8lD6lioBF+nuKioyDpkxdCQ9gBIgDEI/TGsgHDj4tBu7TeszEHn8rb3ZRFrFH/VbUVaoNBrgotuDT4rFr8fCRM3clEoT8oF3THgBxikV2yqFuG0mTtAkidTGBbCu6BivrMbHk3GNx4kAigQQMhffBoBA4Yt7Q1XIUSCyQLDTAYzYDzFD3me8fehg3I4Xh86sAAAAASUVORK5CYII=",alt:"\u0413\u043e\u0440\u043e\u0434"})," ",Object(u.jsx)("span",{className:"location__city",children:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"})]})}),k=function(e){return{type:"SET_MENU",payload:e}},B=function(e){e.toggleBM,e.lineMenu;var t=Object(_.b)(),n=Object(_.c)((function(e){return e.main.isMenu}));return Object(u.jsxs)("div",{className:"burger-menu",onClick:function(){t(k(!n))},children:[Object(u.jsx)("div",{className:n?"burger-menu__line burger-menu_first-line active":"burger-menu__line burger-menu_first-line"}),Object(u.jsx)("div",{className:n?"burger-menu__line burger-menu_second-line active":"burger-menu__line burger-menu_second-line"}),Object(u.jsx)("div",{className:n?"burger-menu__line burger-menu_third-line active":"burger-menu__line burger-menu_third-line"}),Object(u.jsx)("div",{className:n?"burger-menu__line burger-menu_forth-line active":"burger-menu__line burger-menu_forth-line"})]})},S=(n(35),function(){return Object(u.jsxs)("div",{className:"lds-ring",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})}),M=function(){var e=r.a.useState(window.screen.width),t=Object(o.a)(e,2),n=t[0],c=t[1],i=r.a.useState(!1),a=Object(o.a)(i,2),l=a[0],d=a[1];return r.a.useEffect((function(){c(window.screen.width)}),[]),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("header",{className:"content__up",children:[n<402&&Object(u.jsx)(B,{}),Object(u.jsx)("h1",{className:"title",children:"Need for drive"}),Object(u.jsx)(I,{})]}),Object(u.jsxs)("section",{className:"content__center",children:[Object(u.jsx)("div",{className:"content__title",children:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"}),Object(u.jsx)("div",{className:"content__subtitle title",children:"Need for drive"}),Object(u.jsx)("div",{className:"content__text",children:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(u.jsx)(s.b,{to:"/order",children:Object(u.jsx)("button",{className:"content__button",onClick:function(){return d(!l)},children:l?Object(u.jsx)(S,{}):"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(u.jsxs)("footer",{className:"content__down",children:[Object(u.jsx)("div",{className:"copy",children:"\xa9 2016-2019 \xabNeed for drive\xbb"}),Object(u.jsx)("div",{className:"tel",children:Object(u.jsx)("a",{href:"tel:+74952342244",children:"8 (495) 234-22-44"})})]})]}),Object(u.jsx)("div",{className:"slider-container",children:Object(u.jsx)(w,{content:E})})]})},R=(n(40),["title","titleId"]);function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},V.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function P(e,t){var n=e.title,r=e.titleId,i=T(e,R);return c.createElement("svg",V({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,m||(m=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z",fill:"white"})),x||(x=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.2353 9.00445C15.3839 9.00422 15.5438 9.00429 15.7164 9.00437L16.0008 9.00445C18.2792 9.00445 18.5493 9.01263 19.449 9.05352C20.281 9.09156 20.7326 9.23059 21.0334 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9465 12.551C22.9874 13.4505 22.9963 13.7208 22.9963 15.9981C22.9963 18.2755 22.9874 18.5457 22.9465 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4522 22.9827 12.5526 22.9418C11.7206 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2854 22.3081 9.98669 22.0094C9.68802 21.7107 9.50313 21.427 9.34811 21.0286C9.23131 20.7281 9.09211 20.2766 9.05424 19.4446C9.01335 18.545 9.00517 18.2748 9.00517 15.996C9.00517 13.7172 9.01335 13.4484 9.05424 12.5488C9.09228 11.7168 9.23131 11.2653 9.34811 10.9645C9.50278 10.5662 9.68802 10.2818 9.98669 9.98313C10.2854 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7206 9.08854 12.5526 9.05032C13.3398 9.01476 13.6449 9.0041 15.2353 9.00232V9.00445ZM20.5559 10.4213C19.9905 10.4213 19.5319 10.8795 19.5319 11.445C19.5319 12.0103 19.9905 12.469 20.5559 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.421 20.5559 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5806 11.6179 16.0006 11.6178C18.4207 11.6178 20.3824 13.58 20.3824 16.0001C20.3824 18.4202 18.4209 20.3815 16.0008 20.3815C13.5807 20.3815 11.6185 18.4202 11.6185 16.0001Z",fill:"white"})),C||(C=c.createElement("path",{d:"M16.0008 13.1556C17.5717 13.1556 18.8453 14.4291 18.8453 16.0001C18.8453 17.571 17.5717 18.8446 16.0008 18.8446C14.4298 18.8446 13.1563 17.571 13.1563 16.0001C13.1563 14.4291 14.4298 13.1556 16.0008 13.1556Z",fill:"white"})))}var D,X=c.forwardRef(P),U=(n.p,["title","titleId"]);function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},z.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function F(e,t){var n=e.title,r=e.titleId,i=q(e,U);return c.createElement("svg",z({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,D||(D=c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z",fill:"white"})))}var Z,L=c.forwardRef(F),K=(n.p,["title","titleId"]);function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},Q.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function G(e,t){var n=e.title,r=e.titleId,i=H(e,K);return c.createElement("svg",Q({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,Z||(Z=c.createElement("path",{d:"M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z",fill:"white"})))}var Y=c.forwardRef(G),J=(n.p,function(){var e=r.a.useState("Rus"),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)("div",{className:"language",onClick:function(){c("Eng"===n?"Rus":"Eng")},children:n})}),W=function(){return Object(u.jsxs)("nav",{className:"menu",children:[Object(u.jsxs)("ul",{className:"menu__items",children:[Object(u.jsx)(s.b,{to:"#",children:Object(u.jsx)("li",{className:"menu__item",children:"\u041f\u0410\u0420\u041a\u041e\u0412\u041a\u0410"})}),Object(u.jsx)(s.b,{to:"#",children:Object(u.jsx)("li",{className:"menu__item",children:"\u0421\u0422\u0420\u0410\u0425\u041e\u0412\u041a\u0410"})}),Object(u.jsx)(s.b,{to:"#",children:Object(u.jsx)("li",{className:"menu__item",children:"\u0411\u0415\u041d\u0417\u0418\u041d"})}),Object(u.jsx)(s.b,{to:"#",children:Object(u.jsx)("li",{className:"menu__item",children:"\u041e\u0411\u0421\u041b\u0423\u0416\u0418\u0412\u0410\u041d\u0418\u0415"})})]}),Object(u.jsxs)("ul",{className:"social-networks",children:[Object(u.jsx)("a",{href:"https://telegram.org/",children:Object(u.jsx)("li",{className:"social-networks__item",children:Object(u.jsx)(L,{})})}),Object(u.jsx)("a",{href:"https://www.facebook.com/",children:Object(u.jsx)("li",{className:"social-networks__item",children:Object(u.jsx)(Y,{})})}),Object(u.jsx)("a",{href:"https://www.instagram.com/",children:Object(u.jsx)("li",{className:"social-networks__item",children:Object(u.jsx)(X,{})})})]}),Object(u.jsx)(J,{})]})},$=function(){var e=Object(_.c)((function(e){return e.main.isMenu}));return Object(u.jsxs)("div",{className:"left-line",children:[Object(u.jsx)(B,{}),!e&&Object(u.jsx)(J,{})]})};var ee=function(){var e=Object(_.c)((function(e){return e.main.isMenu}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)($,{}),e&&Object(u.jsx)(W,{}),Object(u.jsx)(l.c,{children:Object(u.jsx)(l.a,{exact:!0,path:"/react-carsharing",render:function(){return Object(u.jsx)(M,{})}})})]})},te=n(13),ne=n(21),ce={isMenu:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;return"SET_MENU"===t.type?Object(d.a)(Object(d.a)({},e),{},{isMenu:t.payload}):e},ie=Object(te.b)({main:re}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.c,se=Object(te.d)(ie,ae(Object(te.a)(ne.a)));a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(_.a,{store:se,children:Object(u.jsx)(ee,{})})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.c0e5575f.chunk.js.map