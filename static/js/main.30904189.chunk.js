(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(36)},,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=n(1),u=n.n(s),i=n(2),l=n(5),d=n(6),m=n(8),f=n(7),h=n(9),p=(n(18),function(e){var t=e.disabled;return r.a.createElement("div",{className:"ResourceFilter"},r.a.createElement("label",null,"Search:"),r.a.createElement("input",{type:"text",disabled:t}))}),v=(n(20),function(e){var t=e.disabled;return r.a.createElement("div",{className:"ResourceSorter"},r.a.createElement("label",null,"Sort:"),r.a.createElement("select",{disabled:t},r.a.createElement("option",null,"Asdsd")))}),E=(n(22),function(e){return/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)}),b=function(e){var t,n=e.data,a=[];return Object.keys(n).forEach(function(e,c){var o=n[e];0===c?t=o:E(o)||a.push(r.a.createElement("tr",{key:c},r.a.createElement("td",null,e.replace("_"," ")+":"),r.a.createElement("td",null,o)))}),r.a.createElement("div",{className:"Resource"},r.a.createElement("table",null,r.a.createElement("caption",null,t),r.a.createElement("tbody",null,a)))},w=(n(24),function(e){e.resourceName;var t=e.data,n=e.isLoading,a=t.map(function(e,t){return r.a.createElement(b,{key:t,data:e})});return n?r.a.createElement("h2",null,"Loading data..."):r.a.createElement("div",{className:"ResourceContainer"},a)}),g=(n(26),function(e){var t=e.category,n=e.clickHandler;return r.a.createElement("button",{className:"CategoryButton",onClick:n},t)}),k=(n(28),function(e){var t=e.categories,n=e.clickHandler,a=Object.keys(t).map(function(e,t){return r.a.createElement(g,{key:t,category:e,clickHandler:n(e)})});return r.a.createElement("div",{className:"CategoryButtons"},a)}),y=(n(30),function(e){return r.a.createElement("div",{className:"Scroll"},e.children)}),N=(n(32),"https://swapi.co/api/"),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).onResourceSelected=function(){var e=Object(i.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,n.setState({resourceName:a}),n.fetchResource(a);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.fetchResource=function(e){return Object(i.a)(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({isLoading:!0}),t.next=3,fetch(N+e).then(function(e){return e.json()}).then(function(e){return e.results});case 3:a=t.sent,n.setState({resourceData:a,isLoading:!1});case 5:case"end":return t.stop()}},t,this)}))},n.state={resources:{},resourceName:"",resourceData:[],isLoading:!1},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark(function e(){var t=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,fetch(N).then(function(e){return e.json()}).then(function(e){return t.setState({resources:e,isLoading:!1})});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.resources,n=e.resourceName,a=e.resourceData,c=e.isLoading,o=0===a.length;return r.a.createElement("div",null,r.a.createElement("div",{className:"ResourceControls"},r.a.createElement("h1",null,"@ ",r.a.createElement("span",null,"DB")),r.a.createElement(k,{categories:t,clickHandler:this.fetchResource}),r.a.createElement(p,{disabled:o}),r.a.createElement(v,{disabled:o})),r.a.createElement(y,null,r.a.createElement(w,{isLoading:c,resourceName:n,data:a})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(34);o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.30904189.chunk.js.map