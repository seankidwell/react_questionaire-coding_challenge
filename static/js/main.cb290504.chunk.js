(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(3),r=n.n(s),c=(n(16),n(8)),l=n(4),u=n(5),o=n(6),m=n(10),h=n(7),b=n(9),p=n(1);n(18),n(20);function d(e){return i.a.createElement("div",{className:"form"},e.info)}var f=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={userInput:"",list:[]},e.handleChange=e.handleChange.bind(Object(p.a)(Object(p.a)(e))),e.deleteFrom=e.deleteForm.bind(Object(p.a)(Object(p.a)(e))),e.submit=e.submit.bind(Object(p.a)(Object(p.a)(e))),e}return Object(b.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"deleteForm",value:function(e){var t=this.state.list;t.splice(e,1),this.setState({list:t})}},{key:"submit",value:function(e){e.preventDefault(),this.setState({list:[this.state.userInput].concat(Object(c.a)(this.state.list))}),this.setState({userInput:""})}},{key:"render",value:function(){var e=this,t=this.state.list.map(function(t,n){return i.a.createElement("div",{key:n,className:"wholeForm"},i.a.createElement(d,{info:t}),i.a.createElement("button",{onClick:function(){return e.deleteForm(n)}},"Delete"))});return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Form App"),i.a.createElement("form",{onSubmit:this.submit},i.a.createElement("input",{type:"text",name:"userInput",placeholder:"Type Here",value:this.state.userInput,onChange:this.handleChange}),i.a.createElement("button",null,"Submit")),i.a.createElement("div",{className:"list"},t))}}]),t}(a.Component);r.a.render(i.a.createElement(f,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.cb290504.chunk.js.map