(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},,,,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),l=a.n(i),c=(a(15),a(2)),r=a(3),s=a(6),u=a(4),d=a(5),m=a(1),h=(a(19),a(21),a(23),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return o.a.createElement("button",{id:"lineButton",className:"bring-up-nav",onMouseDown:this.props.handleMouseDown},o.a.createElement("div",{id:"nav-container"},o.a.createElement("div",{className:"toggle-icon"},o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}),o.a.createElement("span",{className:"bar"}))))}}]),t}(n.Component)),b=(a(25),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t="hide";return this.props.menuVisibility&&(t="show"),o.a.createElement("div",{id:"flyoutMenu",onMouseDown:this.props.handleMouseDown,className:t},o.a.createElement("h1",{onMouseDown:this.props.handleMouseDownNav},"Portfolio"),o.a.createElement("h1",null,"About"),o.a.createElement("h1",null,"Contact"))}}]),t}(n.Component)),p=(a(27),function(){return o.a.createElement("div",{id:"card-container"},o.a.createElement("div",{className:"card-top"},o.a.createElement("div",{className:"tut-lang"},"CSS"),o.a.createElement("div",{className:"card-title"},"HOW TO CHANGE THE DEFAULT HYPERLINK STYLE"),o.a.createElement("div",{className:"tut-author"},"Joel "),o.a.createElement("div",{className:"tut-pic"},o.a.createElement("img",{src:"http://0.gravatar.com/avatar/fd93b9c0bdf8ccd4fa47f03ec2dbe29f?s=108&d=mm&r=g",alt:"author-pic"}))),o.a.createElement("div",{className:"card-bottom"},o.a.createElement("p",null," Lorem ipsum")))}),v=(a(29),a(31),function(){return o.a.createElement("div",{className:"search-wrap"},o.a.createElement("input",{type:"search",placeholder:"search skill"}))}),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t="hide";return this.props.portVisibility&&(t="show"),o.a.createElement("div",{id:"portfolio-page",className:t},o.a.createElement(v,null),o.a.createElement(p,null))}}]),t}(n.Component),f=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).toggleMenu=function(){n.setState({navVisible:!n.state.navVisible,portVisible:!1})},n.togglePort=function(){n.setState({navVisible:!1,portVisible:!n.state.portVisible})},n.state={navVisible:!1,portVisible:!1},n.handleMouseDown=n.handleMouseDown.bind(Object(m.a)(Object(m.a)(n))),n.toggleMenu=n.toggleMenu.bind(Object(m.a)(Object(m.a)(n))),n.handleMouseDownNav=n.handleMouseDownNav.bind(Object(m.a)(Object(m.a)(n))),n.togglePort=n.togglePort.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleMouseDown",value:function(e){this.toggleMenu(),console.log("menu bar clicked"),e.stopPropagation()}},{key:"handleMouseDownNav",value:function(e){this.togglePort(),console.log("portfolio clicked"),e.stopPropagation()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"land-header"},o.a.createElement("h3",null,"Joel James")),o.a.createElement("div",{id:"land-title"},o.a.createElement("h1",null,"Front End Web Developer")),o.a.createElement(h,{handleMouseDown:this.handleMouseDown}),o.a.createElement(b,{handleMouseDown:this.handleMouseDown,handleMouseDownNav:this.handleMouseDownNav,menuVisibility:this.state.navVisible}),o.a.createElement("p",{className:"location"},"Melbourne"),o.a.createElement(E,{handleMouseDownNav:!0,portVisibility:this.state.portVisible}),o.a.createElement("div",{id:"bring-up-nav"},o.a.createElement("span",{id:"slide-right"}),o.a.createElement("i",{className:"fa fa-angle-double-right"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.83f1b245.chunk.js.map