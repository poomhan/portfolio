(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),i=n(1),a=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://github.com/poomhan",j="HP.",h="Hannarong Poosomnam",b="Junior Software Developer",m="A Business Development who is experienced in marketing, finance, and investment for over ten years, I am a knowledge enthusiast who is transitioning to a Software Developer.",u="https://drive.google.com/file/d/15VQYf7XRLAReKWDK5D39CgRDOK53fAhL/view?usp=sharing",d={linkedin:"https://www.linkedin.com/in/hannarong-poosomnam-440149160/",github:"https://github.com/poomhan"},p=[{name:"Project Colmar Academy",description:"creating responsive website using HTML and CSS",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com/poomhan/Colmar",livePreview:"https://colmar-k6iha8eil-poomhan.vercel.app/"},{name:"Health Tracker Website",description:"creating interactive and reponsive website which tracks exercise activity using JavaScript, ReactJS, ExpressJS, using MERN stack with login capability and MongoDB",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://final-project-kwfgmu9a4-poomhan.vercel.app/sign-in"},{name:"Jamming",description:"Creating responsive website which allows users to create playlist and save to Spotify; linking the website to Spotify's API",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com/poomhan/jsd-jammming-assessment-class",livePreview:"http://poomhan.surge.sh/"}],O=["HTML","CSS","JavaScript","TypeScript","React","Redux","Material UI","Git","MongoDB","SQL","Python"],x="poomhan@mail.com",f=n(16),v=n.n(f),g=n(14),k=n.n(g),N=n(18),_=n.n(N),w=n(17),S=n.n(w),C=(n(28),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(k.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(S.a,{}):Object(a.jsx)(_.a,{})})]})}),y=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(C,{})]})}),P=n(11),R=n.n(P),A=n(19),E=n.n(A),T=(n(33),function(){var e=h,t=b,n=m,c=u,s=d;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(R.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(E.a,{})})]})]})]})}),D=n(7),J=n.n(D),L=n(20),M=n.n(L),H=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(R.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(M.a,{})})]})}),I=(n(36),function(){return p.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(a.jsx)(H,{project:e},J()())}))})]}):null}),B=(n(37),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),K=n(21),Q=n.n(K),W=(n(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(Q.a,{fontSize:"large"})})}):null}),Y=(n(39),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),z=(n(40),function(){return Object(a.jsx)("footer",{className:"footer"})}),F=(n(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(y,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(T,{}),Object(a.jsx)(I,{}),Object(a.jsx)(B,{}),Object(a.jsx)(Y,{})]}),Object(a.jsx)(W,{}),Object(a.jsx)(z,{})]})});n(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.489ee871.chunk.js.map