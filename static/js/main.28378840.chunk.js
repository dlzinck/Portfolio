(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/portfolio-header.07770787.jpg"},function(e,t,a){e.exports=a.p+"static/media/profilepic.4995a6a5.jpg"},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){var n={"./Away.jpg":15,"./Password-Generator.jpg":16,"./Text-Editor-(PWA).jpg":17,"./Work-Day-Scheduler.jpg":18};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=14},function(e,t,a){e.exports=a.p+"static/media/Away.003bc9ee.jpg"},function(e,t,a){e.exports=a.p+"static/media/Password-Generator.d8aec594.jpg"},function(e,t,a){e.exports=a.p+"static/media/Text-Editor-(PWA).4c7658df.jpg"},function(e,t,a){e.exports=a.p+"static/media/Work-Day-Scheduler.4eed8f71.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),i=(a(13),a(1)),o=a(6),m=a.n(o);var s=function(e){return r.a.createElement("header",{className:"flex-row space-between px-1"},r.a.createElement("h1",null,"Drew Zinck II"),r.a.createElement("img",{src:m.a,alt:"code background"}),e.children)};function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var p=function(e){var t=e.pages,a=void 0===t?[]:t,l=e.setCurrentPage,c=e.currentPage;return Object(n.useEffect)((function(){document.title=u(c.name)}),[c]),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},a.map((function(e){return r.a.createElement("li",{className:"mx-5 ".concat(c.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){return l(e)}},u(e.name)))}))))},E=function(e){return r.a.createElement("div",null,e.children)},f=a(7),h=a.n(f);var g=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("div",{className:"profile-img my-5"},r.a.createElement("img",{src:h.a,alt:"profile piture of myself"})),r.a.createElement("p",null,"Former trucker turned developer. Learn to code right? I have finished the 12-week Full-Stack Web Developer Bootcamp at the University of Arizona where our instructors taught us the latest industry-driven full-stack MERN curriculum."),r.a.createElement("p",null,"Since 2016 I have driven an 18 wheeler across the United States delivering freight and customer service. That all changed in early 2022 once I began my journey into a new career as a developer."),r.a.createElement("p",null,"Instead of driving on the open road in my captain's chair I now use a different kind of chair, Secret Labs to be exact. I spend a lot of time learning about this new career path and developing the skills needed to excel wherever my path takes me. When I am not in my new captain\u2019s chair I spend my time reading, playing the ocasional video games, going to the gym, and yes I still go on the occasional long drives!")))};var v=function(e){var t=e.project,n=t.name,l=t.repo,c=t.link,i=t.description;return r.a.createElement("div",{className:"project",key:n},r.a.createElement("img",{src:a(14)("./".concat(n,".jpg")),alt:d(n),className:"project-bg"}),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,r.a.createElement("a",{href:c},d(n))," ",r.a.createElement("a",{href:l},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,i)))};var b=function(){var e=Object(n.useState)([{name:"Away",description:"React",link:"https://dlzinck.github.io/Away/",repo:"https://github.com/dlzinck/Away"},{name:"Text-Editor-(PWA)",description:"Node/Webpack",link:"https://github.com/dlzinck/Super-Awesome-Text-Editor",repo:"https://github.com/dlzinck/Super-Awesome-Text-Editor"},{name:"Password-Generator",description:"HTML/CSS/JS",link:"https://dlzinck.github.io/Password_Generator/",repo:"https://github.com/dlzinck/Password_Generator"},{name:"Work-Day-Scheduler",description:"Node/MySQL & Object Relational Mapping",link:"https://dlzinck.github.io/Work_Day_Scheduler/",repo:"https://github.com/dlzinck/Work_Day_Scheduler"}]),t=Object(i.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},t.map((function(e,t){return r.a.createElement(v,{project:e,key:"project"+t})}))))},k=a(2),w=a(3);var y=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),m=o[0],s=o[1],u=a.name,d=a.email,p=a.message,E=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);s(t?"":"Your email is invalid.")}else e.target.value.length?s(""):s("".concat(e.target.name," is required."));m||(l(Object(w.a)(Object(w.a)({},a),{},Object(k.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return r.a.createElement("section",null,r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),m||console.log("Submit Form",a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:u,onBlur:E})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:d,onBlur:E})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:p,onBlur:E})),m&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},m)),r.a.createElement("button",{type:"submit"},"Submit")))};var j=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"Download my ",r.a.createElement("a",{href:"https://drive.google.com/file/d/1OsX-h8yp0KYSx10TUShkRfd5Tt-YgQtN/view?usp=sharing"},"resume")),r.a.createElement("h3",null,"Front-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"responsive design"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Bootstrap")),r.a.createElement("h3",null,"Back-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"APIs"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"MySQL, Sequelize"),r.a.createElement("li",null,"MongoDB, Mongoose"),r.a.createElement("li",null,"REST"),r.a.createElement("li",null,"GraphQL"))))};var S=function(e){var t=e.currentPage;return r.a.createElement("section",null,r.a.createElement("h2",null,u(t.name)),r.a.createElement(E,null,function(){switch(t.name){case"about me":return r.a.createElement(g,null);case"portfolio":return r.a.createElement(b,null);case"contact":return r.a.createElement(y,null);case"resume":return r.a.createElement(j,null);default:return r.a.createElement(g,null)}}()))};var x=function(){return r.a.createElement("footer",{className:"flex-row px-1"},[{name:"fab fa-github",link:"https://github.com/dlzinck"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/drewzinckii/"}].map((function(e){return r.a.createElement("a",{href:e.link,key:e.name,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.name}))})))};var N=function(){var e=Object(n.useState)([{name:"about me"},{name:"portfolio"},{name:"contact"},{name:"resume"}]),t=Object(i.a)(e,1)[0],a=Object(n.useState)(t[0]),l=Object(i.a)(a,2),c=l[0],o=l[1];return r.a.createElement("div",null,r.a.createElement(s,null,r.a.createElement(p,{pages:t,setCurrentPage:o,currentPage:c})),r.a.createElement("main",null,r.a.createElement(S,{currentPage:c})),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.28378840.chunk.js.map