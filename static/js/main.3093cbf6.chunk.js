(this["webpackJsonpreact-carsharing"]=this["webpackJsonpreact-carsharing"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i,r,c,a=n(0),s=n.n(a),l=n(15),o=n.n(l),d=(n(26),n(11)),u=n(8),b=n(3),j=(n(27),n(9)),O=n(1),h=function(e){var t=e.content,n=e.title,i=e.subtitle,r=e.but;return Object(O.jsx)("div",{className:"slide",style:{background:"url(".concat(t,") 100% 100% no-repeat"),backgroundSize:"cover"},children:Object(O.jsxs)("div",{className:"slide__content",children:[Object(O.jsx)("h2",{className:"slide__title",children:n}),Object(O.jsx)("p",{className:"slide__subtitle",children:i}),Object(O.jsx)("button",{className:"slide__button",style:{background:"".concat(r)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})})},m=function(e){var t=e.transition,n=e.translate,i=e.width,r=e.content;return Object(O.jsx)("div",{className:"slider__content",style:{transform:"translateX(-".concat(n,"px)"),transition:"transform ease-out ".concat(t,"s"),width:"".concat(i,"px")},children:r.map((function(e){return Object(O.jsx)(h,{content:e.slide,title:e.title,subtitle:e.subtitle,but:e.button},e.slide)}))})},f=n.p+"static/media/right-arrow.7591c327.svg",C=n.p+"static/media/left-arrow.1752ae91.svg",v=function(e){var t=e.direction,n=e.handleClick,i=s.a.useState(window.screen.width),r=Object(u.a)(i,2),c=r[0],a=r[1];s.a.useEffect((function(){a(window.screen.width),c<1285&&b(-10)}),[]);var l=s.a.useState(5),o=Object(u.a)(l,2),d=o[0],b=o[1];return Object(O.jsxs)("div",{className:"container",onClick:n,children:[Object(O.jsx)("div",{className:"container__arrow",style:"right"===t?{right:"".concat(d,"px"),transform:"translateX(2)"}:{left:"".concat(d,"px"),transform:"translateX(-2)"},children:Object(O.jsx)("img",{src:"right"===t?f:C,alt:"right"})}),Object(O.jsx)("div",{className:"container__arrow-line",style:"left"===t?{left:"0"}:{right:"0"}})]})},x=function(e){var t=e.active;return Object(O.jsx)("span",{className:"dots__dot",style:t?{background:"#0EC261"}:{background:"white"}})},g=function(e){var t=e.slides,n=e.activeIndex;return Object(O.jsx)("div",{className:"slider__dots dots",children:t.map((function(e,t){return Object(O.jsx)(x,{active:n===t},e.slide)}))})},p=n(10),_=function(e){var t,n=e.content,i=s.a.useState(window.screen.width),r=Object(u.a)(i,2),c=r[0],l=r[1],o=Object(p.c)((function(e){return e.main.isMenu}));switch(s.a.useEffect((function(){l(window.screen.width)}),[]),!0){case c<=1018:t=370;break;case c<=1200:t=410;break;case c<=1285:t=500;break;case c<=1440:t=600;break;default:t=688}var d=Object(a.useState)({activeIndex:0,translate:0,transition:.45}),b=Object(u.a)(d,2),h=b[0],f=b[1],C=h.translate,x=h.transition,_=h.activeIndex;return Object(O.jsxs)("div",{className:"slider",children:[o&&Object(O.jsx)("div",{className:"slider__fone"}),Object(O.jsx)(m,{translate:C,transition:x,width:c*n.length,content:n}),Object(O.jsx)(v,{direction:"left",handleClick:function(){if(0===_)return f(Object(j.a)(Object(j.a)({},h),{},{translate:(n.length-1)*t,activeIndex:n.length-1}));f(Object(j.a)(Object(j.a)({},h),{},{activeIndex:_-1,translate:(_-1)*t}))}}),Object(O.jsx)(v,{direction:"right",handleClick:function(){if(_===n.length-1)return f(Object(j.a)(Object(j.a)({},h),{},{translate:0,activeIndex:0}));f(Object(j.a)(Object(j.a)({},h),{},{activeIndex:_+1,translate:(_+1)*t}))}}),Object(O.jsx)(g,{slides:n,activeIndex:_})]})},w=[n.p+"static/media/slide-1.9369f2aa.png",n.p+"static/media/slide-3.4e22dc96.png",n.p+"static/media/slide-2.ea68d8b3.png",n.p+"static/media/slide-4.be695f13.png"],A=["\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430","\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430","\u0411\u0435\u043d\u0437\u0438\u043d","\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435"],N=["\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445.","\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f","\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0451\u0442","\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e"],y=[{slide:w[0],title:A[0],subtitle:N[0],button:"linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)"},{slide:w[1],title:A[1],subtitle:N[1],button:"linear-gradient(90deg, #132949 0%, #0C7B67 100%)"},{slide:w[2],title:A[2],subtitle:N[2],button:"linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"},{slide:w[3],title:A[3],subtitle:N[3],button:"linear-gradient(90deg, #281349 0%, #720C7B 100%)"}],E=(n(34),function(){return Object(O.jsxs)("div",{className:"location",children:[Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAINSURBVHgBfVPLbcJAELWX35VUEKcD6AA6gAqIJSR+B6AC0wFwAARCMqkgdACpAFIBpIJw5Z83y4y1cmxWGs3uzuybN5+1rdDyfT97PB4rSqnS/X7P4SoLOdi2vcV5cbvdvhqNxj78zjYP0+m0A+Xx47h1gAxrtVrPvFQGCBn6BILIa2KUTqdf8MAmDUYFyIKDePDv/2PETLQBIJ16vT6MozOZTN4RRAe8Xq/dZrM50IxgcKDbcSBsDxbqQ3Uq0z6RSPTFTqkVIA4V0gQhlpBfRN9B7zh1AVtzmhbsmoQCaoUvFiZ9qRdkT4GoLuPxuCM+SOuDtyX9nltspVKpb3ECeJAqiv2GraTimax460hqutWu6x7EScAzmYyOCrAlm8Jjod/M5/NXZR7EivzXpE+nkzcajXKz2WzApr340OAKcLVa/VE0sXS4XC4lcTqfz10O0EkmkxswbLOpKz4IUmD2OqhCKzVtGkBxarVaW9znuTMUaEkDaaRIrNusF1oTRaDvrNCAPVs8lD6lioBF+nuKioyDpkxdCQ9gBIgDEI/TGsgHDj4tBu7TeszEHn8rb3ZRFrFH/VbUVaoNBrgotuDT4rFr8fCRM3clEoT8oF3THgBxikV2yqFuG0mTtAkidTGBbCu6BivrMbHk3GNx4kAigQQMhffBoBA4Yt7Q1XIUSCyQLDTAYzYDzFD3me8fehg3I4Xh86sAAAAASUVORK5CYII=",alt:"\u0413\u043e\u0440\u043e\u0434"})," ",Object(O.jsx)("span",{className:"location__city",children:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"})]})}),I=function(e){return{type:"SET_MENU",payload:e}},k=function(e){e.toggleBM,e.lineMenu;var t=Object(p.b)(),n=Object(a.useState)(!1),i=Object(u.a)(n,2),r=(i[0],i[1],Object(p.c)((function(e){return e.main.isMenu})));console.log(r);return Object(O.jsxs)("div",{className:"burger-menu",onClick:function(){t(I(!r))},children:[Object(O.jsx)("div",{className:r?"burger-menu__line burger-menu_first-line active":"burger-menu__line burger-menu_first-line"}),Object(O.jsx)("div",{className:r?"burger-menu__line burger-menu_second-line active":"burger-menu__line burger-menu_second-line"}),Object(O.jsx)("div",{className:r?"burger-menu__line burger-menu_third-line active":"burger-menu__line burger-menu_third-line"}),Object(O.jsx)("div",{className:r?"burger-menu__line burger-menu_forth-line active":"burger-menu__line burger-menu_forth-line"})]})},B=function(){var e=s.a.useState(window.screen.width),t=Object(u.a)(e,2),n=t[0],i=t[1];return s.a.useEffect((function(){i(window.screen.width)}),[]),Object(O.jsxs)("div",{className:"main",children:[Object(O.jsxs)("div",{className:"content",children:[Object(O.jsxs)("div",{className:"content__up",children:[n<401&&Object(O.jsx)(k,{}),Object(O.jsx)("h1",{className:"title",children:"Need for drive"}),Object(O.jsx)(E,{})]}),Object(O.jsxs)("div",{className:"content__center",children:[Object(O.jsx)("div",{className:"content__title",children:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"}),Object(O.jsx)("div",{className:"content__subtitle title",children:"Need for drive"}),Object(O.jsx)("div",{className:"content__text",children:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(O.jsx)("button",{className:"content__button",children:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(O.jsxs)("div",{className:"content__down",children:[Object(O.jsx)("div",{className:"copy",children:"\xa9 2016-2019 \xabNeed for drive\xbb"}),Object(O.jsx)("div",{className:"tel",children:Object(O.jsx)("a",{href:"tel:+74952342244",children:"8 (495) 234-22-44"})})]})]}),Object(O.jsx)("div",{className:"slider",children:Object(O.jsx)(_,{content:y})})]})},S=(n(35),["title","titleId"]);function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},M.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function V(e,t){var n=e.title,s=e.titleId,l=R(e,S);return a.createElement("svg",M({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),n?a.createElement("title",{id:s},n):null,i||(i=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z",fill:"white"})),r||(r=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.2353 9.00445C15.3839 9.00422 15.5438 9.00429 15.7164 9.00437L16.0008 9.00445C18.2792 9.00445 18.5493 9.01263 19.449 9.05352C20.281 9.09156 20.7326 9.23059 21.0334 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9465 12.551C22.9874 13.4505 22.9963 13.7208 22.9963 15.9981C22.9963 18.2755 22.9874 18.5457 22.9465 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4522 22.9827 12.5526 22.9418C11.7206 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2854 22.3081 9.98669 22.0094C9.68802 21.7107 9.50313 21.427 9.34811 21.0286C9.23131 20.7281 9.09211 20.2766 9.05424 19.4446C9.01335 18.545 9.00517 18.2748 9.00517 15.996C9.00517 13.7172 9.01335 13.4484 9.05424 12.5488C9.09228 11.7168 9.23131 11.2653 9.34811 10.9645C9.50278 10.5662 9.68802 10.2818 9.98669 9.98313C10.2854 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7206 9.08854 12.5526 9.05032C13.3398 9.01476 13.6449 9.0041 15.2353 9.00232V9.00445ZM20.5559 10.4213C19.9905 10.4213 19.5319 10.8795 19.5319 11.445C19.5319 12.0103 19.9905 12.469 20.5559 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.421 20.5559 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5806 11.6179 16.0006 11.6178C18.4207 11.6178 20.3824 13.58 20.3824 16.0001C20.3824 18.4202 18.4209 20.3815 16.0008 20.3815C13.5807 20.3815 11.6185 18.4202 11.6185 16.0001Z",fill:"white"})),c||(c=a.createElement("path",{d:"M16.0008 13.1556C17.5717 13.1556 18.8453 14.4291 18.8453 16.0001C18.8453 17.571 17.5717 18.8446 16.0008 18.8446C14.4298 18.8446 13.1563 17.571 13.1563 16.0001C13.1563 14.4291 14.4298 13.1556 16.0008 13.1556Z",fill:"white"})))}var T,D=a.forwardRef(V),P=(n.p,["title","titleId"]);function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},X.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function U(e,t){var n=e.title,i=e.titleId,r=z(e,P);return a.createElement("svg",X({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,T||(T=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z",fill:"white"})))}var q,F=a.forwardRef(U),Z=(n.p,["title","titleId"]);function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},L.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Q(e,t){var n=e.title,i=e.titleId,r=K(e,Z);return a.createElement("svg",L({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},r),n?a.createElement("title",{id:i},n):null,q||(q=a.createElement("path",{d:"M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z",fill:"white"})))}var H=a.forwardRef(Q),G=(n.p,function(){return Object(O.jsxs)("div",{className:"menu",children:[Object(O.jsxs)("ul",{className:"menu__items",children:[Object(O.jsx)(d.b,{to:"#",children:Object(O.jsx)("li",{className:"menu__item",children:"\u041f\u0410\u0420\u041a\u041e\u0412\u041a\u0410"})}),Object(O.jsx)(d.b,{to:"#",children:Object(O.jsx)("li",{className:"menu__item",children:"\u0421\u0422\u0420\u0410\u0425\u041e\u0412\u041a\u0410"})}),Object(O.jsx)(d.b,{to:"#",children:Object(O.jsx)("li",{className:"menu__item",children:"\u0411\u0415\u041d\u0417\u0418\u041d"})}),Object(O.jsx)(d.b,{to:"#",children:Object(O.jsx)("li",{className:"menu__item",children:"\u041e\u0411\u0421\u041b\u0423\u0416\u0418\u0412\u0410\u041d\u0418\u0415"})})]}),Object(O.jsxs)("ul",{className:"social-networks",children:[Object(O.jsx)("li",{className:"social-networks__item",children:Object(O.jsx)(F,{})}),Object(O.jsx)("li",{className:"social-networks__item",children:Object(O.jsx)(H,{})}),Object(O.jsx)("li",{className:"social-networks__item",children:Object(O.jsx)(D,{})})]})]})});var Y=function(){var e=Object(p.c)((function(e){return e.main.isMenu})),t=s.a.useState("Rus"),n=Object(u.a)(t,2),i=n[0],r=n[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{className:"left-line",children:[Object(O.jsx)(k,{}),!e&&Object(O.jsx)("div",{className:"left-line__language",onClick:function(){r("Eng"===i?"Rus":"Eng")},children:i})]}),e&&Object(O.jsx)(G,{}),Object(O.jsx)(b.c,{children:Object(O.jsx)(b.a,{exact:!0,path:"/react-carsharing",render:function(){return Object(O.jsx)(B,{})}})})]})},J=n(13),W=n(21),$={isMenu:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return"SET_MENU"===t.type?Object(j.a)(Object(j.a)({},e),{},{isMenu:t.payload}):e},te=Object(J.b)({main:ee}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.c,ie=Object(J.d)(te,ne(Object(J.a)(W.a)));o.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(d.a,{children:Object(O.jsx)(p.a,{store:ie,children:Object(O.jsx)(Y,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3093cbf6.chunk.js.map