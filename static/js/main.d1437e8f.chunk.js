(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(58)},,,,,,function(e,t,a){},,,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){var n={"./JSCheatSheet.old.png":30,"./JSCheatSheet.png":31,"./blog.png":32,"./fancyCats.old.png":33,"./fancyCats.png":34,"./hiraganaflash.png":35,"./portfolio.old.png":36,"./portfolio.png":37,"./product.old.png":38,"./product.png":39,"./productlaunch.old.png":40,"./productlaunch.png":41,"./shoppinglist.png":42};function i(e){var t=o(e);return a(t)}function o(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=29},function(e,t,a){e.exports=a.p+"static/media/JSCheatSheet.old.45f404fb.png"},function(e,t,a){e.exports=a.p+"static/media/JSCheatSheet.d7823f23.png"},function(e,t,a){e.exports=a.p+"static/media/blog.68825cfa.png"},function(e,t,a){e.exports=a.p+"static/media/fancyCats.old.8616a36b.png"},function(e,t,a){e.exports=a.p+"static/media/fancyCats.56a0e054.png"},function(e,t,a){e.exports=a.p+"static/media/hiraganaflash.ba6c748b.png"},function(e,t,a){e.exports=a.p+"static/media/portfolio.old.a750ee7a.png"},function(e,t,a){e.exports=a.p+"static/media/portfolio.7c8b4371.png"},function(e,t,a){e.exports=a.p+"static/media/product.old.063824ae.png"},function(e,t,a){e.exports=a.p+"static/media/product.6f7e97ce.png"},function(e,t,a){e.exports=a.p+"static/media/productlaunch.old.26ec9618.png"},function(e,t,a){e.exports=a.p+"static/media/productlaunch.f416ad21.png"},function(e,t,a){e.exports=a.p+"static/media/shoppinglist.d3782aea.png"},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/bits (Medium).6e915a40.jpg"},function(e,t,a){e.exports=a.p+"static/media/campaign (Medium).0a954614.jpg"},function(e,t,a){e.exports=a.p+"static/media/live (Medium).6fe58dd3.jpg"},function(e,t,a){e.exports=a.p+"static/media/watchnphone (Medium).8a1e0c32.jpg"},function(e,t,a){e.exports=a.p+"static/media/wide-smile.9b38b28f.png"},function(e,t,a){e.exports=a.p+"static/media/think (Medium).48e592ba.jpg"},function(e,t,a){e.exports=a.p+"static/media/workhard (Medium).58f8784e.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),s=a.n(o),c=(a(17),a(2)),r=a(3),l=a(6),p=a(4),u=a(5),h=a(1),d=(a(21),a(8),a(24),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){return i.a.createElement("button",{id:"lineButton",className:"bring-up-nav",onMouseDown:this.props.handleMouseDown},i.a.createElement("div",{id:"nav-container"},i.a.createElement("div",{className:"toggle-icon"},i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"}),i.a.createElement("span",{className:"bar"}))))}}]),t}(n.Component)),m=(a(26),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t="hide";return(this.props.aboutVisibility||this.props.menuVisibility)&&(t="show"),i.a.createElement("div",{id:"flyoutMenu",onMouseDown:this.props.handleMouseDown,className:t},i.a.createElement("div",{className:"close",onMouseDown:this.props.handleMouseDown}),i.a.createElement("h1",{onMouseDown:this.props.handleMouseDownNav},"Portfolio"),i.a.createElement("h1",{onMouseDown:this.props.handleMouseDownAbout},"About"),i.a.createElement("h1",null,"Contact"))}}]),t}(n.Component)),g=(a(9),function(e){e.id;var t=e.lang,n=e.name,o=e.url,s=e.source,c=e.picPath,r=e.impactStatement;return i.a.createElement("div",{id:"card-container"},i.a.createElement("div",{className:"card-top"},i.a.createElement("div",{className:"tut-lang"},i.a.createElement("sup",null,t)),i.a.createElement("div",{className:"card-title"},n),i.a.createElement("div",{className:"card-ref"},i.a.createElement("p",null,r),i.a.createElement("a",{href:"".concat(s),title:"Click to view source"},i.a.createElement("i",{className:"fa fa-github"})))),i.a.createElement("div",{className:"card-bottom"},i.a.createElement("a",{href:"".concat(o)},i.a.createElement("img",{src:a(29)("./".concat(c,".png")),alt:"portfolio-site-snapshot"}))))}),b=(a(43),function(e){return e.cardData.map(function(e,t){return i.a.createElement(g,{key:e.id,lang:e.lang.join(" "),name:e.name,url:e.url,source:e.source,picPath:e.picPath,impactStatement:e.impactStatement})})}),f=(a(45),a(47),function(e){var t=e.searchChange,a=e.killLinkOnSearch;return i.a.createElement("div",{className:"search-wrap"},i.a.createElement("input",{type:"search",placeholder:'Start typing a language, eg. "gatsbyJS"',onChange:t,onMouseOver:a}))}),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t="hide";this.props.portVisibility&&(t="show");var a=this.props.handleMouseDownNav;return this.props.screenSize<982&&(a=this.props.smallScreen),i.a.createElement("div",{id:"portfolio-page",className:t,onMouseDown:a},i.a.createElement("div",{className:"back-and-search"},i.a.createElement("div",{className:"close",onMouseDown:this.props.handleMouseDownNav}),i.a.createElement(f,{searchChange:this.props.searchChange,killLinkOnSearch:this.props.killLinkOnSearch})),i.a.createElement(b,{cardData:this.props.cardData}))}}]),t}(n.Component),S=(a(49),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(e){var t="hide";this.props.aboutVisibility&&(t="show");var n=this.props.handleMouseDownNav;return i.a.createElement("div",{id:"about-page",className:t,onMouseDown:n},i.a.createElement("div",{className:"landing-picture-background"},i.a.createElement("div",{className:"close",onMouseDown:this.props.handleMouseDownNav}),i.a.createElement("div",null,i.a.createElement("h3",null,"About me")),i.a.createElement("div",null,i.a.createElement("h1",null,"Focus, enthusiasm, energy, commitment."))),i.a.createElement("div",{className:"white-space-blurb"},i.a.createElement("p",null,"Joel James is a User Experience and front end developer based in Melbourne. He plans, creates and grows authentic digital experiences for companies and individuals looking to have a positive impact on their customers lives.")),i.a.createElement("div",{id:"img-grid"},i.a.createElement("img",{className:"one",src:a(51),alt:"books-and-gadgets"}),i.a.createElement("img",{className:"two",src:a(52),alt:""}),i.a.createElement("img",{className:"three",src:a(53),alt:""}),i.a.createElement("img",{className:"four",src:a(54),alt:""}),i.a.createElement("img",{className:"five",src:a(55),alt:""}),i.a.createElement("img",{className:"six",src:a(56),alt:""}),i.a.createElement("img",{className:"seven",src:a(57),alt:""})))}}]),t}(n.Component)),w=[{id:1,lang:["#ReactJS","#JavaScript","#HTML","#CSS Flexbox","#CSS Grid"],name:"Personal Portfolio",url:"https://jayfiled.github.io/joeljames/",source:"https://github.com/jayfiled/joeljames",picPath:"portfolio",impactStatement:"A React portfolio to showcase my recent work and a way of getting in touch"},{id:2,lang:["#DOM manip","#JavaScript","#HTML","#CSS Flexbox","#CSS Grid"],name:"Japanese Hiragana Flash Card App",url:"https://jayfiled.github.io/HiraganaFlash/",source:"https://github.com/jayfiled/HiraganaFlash",picPath:"hiraganaflash",impactStatement:"My kids needed to brush up on their \ud83c\udf8c, so I solved that problem with this app"},{id:3,lang:["#ReactJS","#JavaScript","#tachyons","#HTML","#CSS Flexbox","#JS promises"],name:"React Cats",url:"https://jayfiled.github.io/fancyCats/",source:"https://github.com/jayfiled/fancyCats/tree/master",picPath:"fancyCats",impactStatement:"Fetch JSON from a Robohash API and feed in via props to a list of cards"},{id:4,lang:["#JavaScript","#HTML","#CSS"],name:"Javascript Cheat Sheet",url:"https://jayfiled.github.io/JScheat/",source:"https://github.com/jayfiled/JScheat",picPath:"JSCheatSheet",impactStatement:"Created as a place to quickly check and consolidate JS learnings"},{id:5,lang:["#ReactJS","#GatsbyJS","#JavaScript","#HTML","#CSS"],name:"Personal blog site",url:"https://jaysite.netlify.com/",source:"https://github.com/jayfiled/webSite",picPath:"blog",impactStatement:"Built so I can teach what I learn and have a log for my progress"},{id:6,lang:["#HTML","#CSS Flexbox","#CSS Grid"],name:"Mobile phone product landing page",url:"https://jayfiled.github.io/product-landing-page/",source:"https://github.com/jayfiled/product-landing-page",picPath:"product",impactStatement:"Showcases my minimalist and clean design approach"},{id:8,lang:["#DOM manip","#JavaScript","#HTML","#CSS"],name:"DOM 'to-do' shopping list",url:"https://jayfiled.github.io/ZeroToMasteryProjects/projects/shoppingList/index.html",source:"https://github.com/jayfiled/ZeroToMasteryProjects/blob/master/projects/shoppingList",picPath:"shoppinglist",impactStatement:"Solved the problem of missing paper lists"},{id:7,lang:["#HTML","#CSS Flexbox"],name:"Watch product landing page",url:"https://jayfiled.github.io/ZeroToMasteryProjects/projects/productLanding/index.html",source:"https://github.com/jayfiled/ZeroToMasteryProjects/tree/master/projects/productLanding",picPath:"productlaunch",impactStatement:"A simple landing page to tally interest via survey for a watch product"}],j=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e,a))).toggleMenu=function(){n.setState({navVisible:!n.state.navVisible,portVisible:!1})},n.togglePort=function(){n.setState({navVisible:!0,portVisible:!n.state.portVisible})},n.handleMouseDownAbout=function(e){n.setState({aboutVisible:!n.state.aboutVisible})},n.killLinkOnSearch=function(e){console.log("Input field hovered!"),n.setState({portVisible:!0})},n.onSearchChange=function(e){n.setState({searchField:e.target.value})},n.state={navVisible:!1,portVisible:!1,aboutVisible:!1,searchField:"",screenSize:window.screen.width},n.handleMouseDown=n.handleMouseDown.bind(Object(h.a)(Object(h.a)(n))),n.toggleMenu=n.toggleMenu.bind(Object(h.a)(Object(h.a)(n))),n.handleMouseDownNav=n.handleMouseDownNav.bind(Object(h.a)(Object(h.a)(n))),n.togglePort=n.togglePort.bind(Object(h.a)(Object(h.a)(n))),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleMouseDown",value:function(e){this.toggleMenu(),e.stopPropagation()}},{key:"handleMouseDownNav",value:function(e){this.togglePort(),e.stopPropagation()}},{key:"handleMouseOver",value:function(e){this.setState({screenSize:421})}},{key:"smallScreen",value:function(){console.log("You've clicked the background on a small screen")}},{key:"render",value:function(){var e=this.state.searchField,t=w.filter(function(t){return t.lang.join(" ").toLowerCase().includes(e.toLowerCase())});return i.a.createElement("div",{className:"main-wrapper"},i.a.createElement("div",{id:"land-header"},i.a.createElement("h3",null,"Joel James")),i.a.createElement("div",{id:"land-title"},i.a.createElement("h1",null,"Front End Web Developer")),i.a.createElement(d,{handleMouseDown:this.handleMouseDown}),i.a.createElement(m,{handleMouseDown:this.handleMouseDown,handleMouseDownNav:this.handleMouseDownNav,handleMouseDownAbout:this.handleMouseDownAbout,menuVisibility:this.state.navVisible}),i.a.createElement("p",{className:"location"},"Melbourne"),i.a.createElement(v,{handleMouseDownNav:this.handleMouseDownNav,portVisibility:this.state.portVisible,cardData:t,searchChange:this.onSearchChange,smallScreen:this.smallScreen,screenSize:this.state.screenSize,killLinkOnSearch:this.killLinkOnSearch}),i.a.createElement(S,{handleMouseDownAbout:this.handleMouseDownAbout,aboutVisibility:this.state.aboutVisible}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.d1437e8f.chunk.js.map