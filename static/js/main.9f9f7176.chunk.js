(this["webpackJsonpemp-dir-react"]=this["webpackJsonpemp-dir-react"]||[]).push([[0],{13:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(2),a=c(14),n=c.n(a),i=c(4),o=c.n(i),l=c(15),d=c(16),h=c(17),u=c(20),j=c(19);c(27);var m=function(e){return Object(r.jsx)("h1",{className:"title",children:e.children})},b=function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"",children:Object(r.jsx)("img",{alt:e.name,src:e.image})}),Object(r.jsx)("td",{className:"",children:e.first}),Object(r.jsx)("td",{className:"",children:e.last}),Object(r.jsx)("td",{className:"",children:e.age})]})},p=(c(28),function(e){return Object(r.jsx)("form",{children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(r.jsx)("input",{onChange:e.handleSearch,value:e.searchTerm,name:"search",type:"text",className:"form-control",placeholder:"Search By Name",id:"search"})]})})}),f=c(18),O=(c(13),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(d.a)(this,c);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={employees:[],unTouchedList:[],searchTerm:"",direction:""},e.handleSearch=function(t){var c=t.target.value,r=e.state.unTouchedList.filter((function(e){return e.name.first.toLowerCase().includes(c.toLowerCase())||e.name.last.toLowerCase().includes(c.toLowerCase())}));e.setState({employees:r,searchTerm:c})},e.handleAgeSort=function(t,c){var r=e.state.employees.sort((function(r,s){var a=r[t][c],n=s[t][c];return"asc"!==e.state.direction?a<n?-1:a>n?1:0:a>n?-1:a<n?1:0})),s="asc"!==e.state.direction?"asc":"dec";e.setState({employees:r,direction:s})},e.handleFirstSort=function(t,c){var r=e.state.employees.sort((function(r,s){var a=r[t][c].toLowerCase(),n=s[t][c].toLowerCase();return"asc"!==e.state.direction?a<n?-1:a>n?1:0:a>n?-1:a<n?1:0})),s="asc"!==e.state.direction?"asc":"dec";e.setState({employees:r,direction:s})},e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(l.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.get)("https://randomuser.me/api/?results=30&nat=us");case 2:c=t.sent,e.setState({employees:c.data.results,unTouchedList:c.data.results});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this,t=this.state.employees;return Object(r.jsxs)("div",{className:"wrap",children:[console.log(t),Object(r.jsx)(m,{children:"Employees"}),Object(r.jsx)(p,{handleSearch:this.handleSearch,searchTerm:this.state.searchTerm}),Object(r.jsx)("div",{className:"tableHolder",children:Object(r.jsxs)("table",{className:"table table-striped ",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Picture"}),Object(r.jsx)("th",{scope:"col",className:"click",onClick:function(){return e.handleFirstSort("name","first")},children:"First"}),Object(r.jsx)("th",{scope:"col",className:"click",onClick:function(){return e.handleFirstSort("name","last")},children:"Last"}),Object(r.jsx)("th",{scope:"col",className:"click",onClick:function(){return e.handleAgeSort("dob","age")},children:"Age"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(b,{first:e.name.first,image:e.picture.medium,age:e.dob.age,last:e.name.last},e.login.username)}))})]})})]})}}]),c}(s.Component));c(47);n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.9f9f7176.chunk.js.map