(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(31)},20:function(e,a,t){},22:function(e,a,t){},24:function(e,a,t){},26:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),i=(t(20),t(5)),o=t(6),s=t(8),d=t(7),m=t(9),u=t(33),h=t(35),p=t(34),v=t(13),f=(t(22),t(24),n.Component,function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={EMAIL:""},t.handleInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(v.a)({},n,r))},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"canvasDots",value:function(){var e=document.querySelector("canvas"),a=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight,e.style.display="block",a.fillStyle="#fff",a.lineWidth=.25,a.strokeStyle="#fff";var t={x:30*e.width/100,y:30*e.height/100},n={nb:90,distance:90,d_radius:100,array:[]};function r(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.vx=-.5+Math.random(),this.vy=-.5+Math.random(),this.radius=Math.random()+1}r.prototype={create:function(){a.beginPath(),a.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),a.fill()},animate:function(){for(var a=0;a<n.nb;a++){var t=n.array[a];t.y<0||t.y>e.height?(t.vx=t.vx,t.vy=-t.vy):(t.x<0||t.x>e.width)&&(t.vx=-t.vx,t.vy=t.vy),t.x+=t.vx,t.y+=t.vy}},line:function(){for(var e=0;e<n.nb;e++)for(var r=0;r<n.nb;r++){var l=n.array[e],c=n.array[r];l.x-c.x<n.distance&&l.y-c.y<n.distance&&l.x-c.x>-n.distance&&l.y-c.y>-n.distance&&l.x-t.x<n.d_radius&&l.y-t.y<n.d_radius&&l.x-t.x>-n.d_radius&&l.y-t.y>-n.d_radius&&(a.beginPath(),a.moveTo(l.x,l.y),a.lineTo(c.x,c.y),a.stroke(),a.closePath())}}},window.onmousemove=function(e){t.x=e.pageX,t.y=e.pageY},t.x=window.innerWidth/2,t.y=window.innerHeight/2,setInterval(function(){a.clearRect(0,0,e.width,e.height);for(var t=0;t<n.nb;t++){n.array.push(new r);var l=n.array[t];l.create()}l.line(),l.animate()},1e3/30)}},{key:"componentDidMount",value:function(){this.canvasDots()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("canvas",{className:"connecting-dots"}),r.a.createElement("div",{className:"header-container text-center"},r.a.createElement("h1",{className:"header-title"},"Look",r.a.createElement("span",{className:"header-title-ar"},"ar")),r.a.createElement("h3",{className:"header-subtitle"},"We're turning augmented reality into a scientific tool"),r.a.createElement("button",{type:"button",className:"btn btn-look","data-toggle":"modal","data-target":"#mc-modal"},"Sign up for updates"))),r.a.createElement("div",{className:"modal fade",id:"mc-modal",tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalCenterTitle"},"Sign up for our mailing list"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},r.a.createElement("span",null,"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{id:"mc_embed_signup"},r.a.createElement("form",{action:"https://app.us19.list-manage.com/subscribe/post?u=93f8f62161d6fac936d34784e&id=0fc8d63267",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},r.a.createElement("div",{id:"mc_embed_signup_scroll"},r.a.createElement("p",{style:{fontSize:14}},"Enter your email address to get updates on the project"),r.a.createElement("div",{className:"mc-field-group"},r.a.createElement("input",{type:"email",defaultValue:"",placeholder:"Your Email",name:"EMAIL",className:"required email",id:"mce-EMAIL",onChange:this.handleInputChange})),r.a.createElement("div",{id:"mce-responses",className:"clear"},r.a.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),r.a.createElement("div",{className:"response",id:"mce-success-response",style:{display:"none"}})),r.a.createElement("div",{style:{position:"absolute",left:-5e3}},r.a.createElement("input",{type:"text",name:"b_93f8f62161d6fac936d34784e_0fc8d63267",tabIndex:"-1",defaultValue:""})),r.a.createElement("div",{className:"clear"},r.a.createElement("input",{disabled:!this.state.EMAIL,type:"submit",defaultValue:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"btn btn-look"}))))))))))}}]),a}(n.Component)),y=(t(26),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"",className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),a}(n.Component)),b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:f}),r.a.createElement(p.a,{component:y})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.e0f47a9a.chunk.js.map