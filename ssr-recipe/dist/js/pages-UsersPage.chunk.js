"use strict";exports.id=850,exports.ids=[850],exports.modules={712:(e,r,s)=>{s.r(r),s.d(r,{default:()=>j});var n=s(661),u=s(689),t=s(997);const i=function(e){var r=e.users;return r?(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:r.map((function(e){return(0,t.jsx)("li",{children:(0,t.jsx)(n.Link,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null};var c=s(22),l=s(312),o=s(701);const d=function(){var e=(0,c.useSelector)((function(e){return e.users.users})),r=(0,c.useDispatch)();return(0,u.useEffect)((function(){e||r((0,l.Rf)())}),[r,e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{users:e}),";",(0,t.jsx)(o.p9,{resolve:function(){return r(l.Rf)}})]})},a=function(e){var r=e.user,s=r.email,n=r.name,u=r.username;return(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{children:[u,"(",n,")"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("b",{children:"e-mail : "}),s]})]})},x=function(e){var r=e.id,s=(0,c.useSelector)((function(e){return e.users.user})),n=(0,c.useDispatch)();return(0,o.lm)((function(){return n((0,l.PR)(r))})),(0,u.useEffect)((function(){s&&s.id===parseInt(r,10)||n((0,l.PR)(r))}),[n,r,s]),s?(0,t.jsx)(a,{user:s}):null},f=function(){var e=(0,n.useParams)().id;return(0,t.jsx)(x,{id:e})},j=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{}),(0,t.jsx)(n.Routes,{children:(0,t.jsx)(n.Route,{path:":id",element:(0,t.jsx)(f,{})})})]})}}};