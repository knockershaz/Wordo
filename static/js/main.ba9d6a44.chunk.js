(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1)),m=(a(15),{button:{height:"15px",border:"2px solid black",borderRadius:"24px",backgroundColor:"red",margin:"0px 5px"},button1:{height:"15px",border:"2px solid black",borderRadius:"24px",backgroundColor:"blue",margin:"0px 5px"},button2:{height:"15px",border:"2px solid black",borderRadius:"24px",backgroundColor:"green",margin:"0px 5px"}});function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("button",{style:m.button}),l.a.createElement("button",{style:m.button1}),l.a.createElement("button",{style:m.button2}),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",for:"flexSwitchCheckDefault"},"Enable Modes")))))}i.defaultProps={title:"SetTitle"};a(17);function u(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){o(e.target.value)},id:"exampleFormControlTextarea1",rows:"8",placeholder:"Enter text here",style:{backgroundColor:"dark"===e.mode?"#343a40":"white",color:"dark"===e.mode?"white":"black",resize:"none"}})),l.a.createElement("div",{className:"cont"},l.a.createElement("button",{className:"btn btn-dark",onClick:function(){var e=r.toUpperCase();o(e)}},"Convert to uppercase"),l.a.createElement("button",{className:"btn btn-dark mx-2  butto",onClick:function(){var e=r.toLowerCase();o(e)}},"Convert to LowerCase"),l.a.createElement("button",{className:"btn btn-dark mx-2 butto",onClick:function(){o("")}},"Clear text"),l.a.createElement("button",{className:"btn btn-dark mx-2 butto",onClick:function(){var e=document.getElementById("exampleFormControlTextarea1");e.select(),e.setSelectionRange(0,9999),navigator.clipboard.writeText(e.value)}},"Copy text"),l.a.createElement("button",{className:"btn btn-dark mx-2 butto",onClick:function(){var e=r.split(/[ ]+/);o(e.join(" "))}},"Remove WhiteSpace"),l.a.createElement("button",{className:"btn btn-dark mx-2 butto",onClick:function(){var e=r.match(/[0-9]{10}/g),t=e.toString();o(t),document.getElementById("preview").innerHTML="".concat(e.length," Number found"),document.getElementById("preview").style.color="green"}},"Extract Number"),l.a.createElement("button",{className:"btn btn-dark mx-2 butto",onClick:function(){var e=r.match(/\w+@gmail.com/g),t=e.toString();o(t),document.getElementById("preview").innerHTML="".concat(e.length," emails found"),document.getElementById("preview").style.color="green"}},"Extract email"))),l.a.createElement("div",{className:"container my-3"},l.a.createElement("h2",null,"Your text summary : "),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," minutes to read"),l.a.createElement("h2",null,"Preview : "),l.a.createElement("p",{id:"preview"}),l.a.createElement("p",null,r.length>0?r:"Enter text above to preview here")))}var s=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"TextUtills",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#343a40",document.body.style.color="white"):(r("light"),document.body.style.backgroundColor="white",document.body.style.color="black")}}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(u,{heading:"Enter the text below",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,20)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null))),d()},4:function(e,t,a){e.exports=a(19)}},[[4,3,2]]]);
//# sourceMappingURL=main.ba9d6a44.chunk.js.map