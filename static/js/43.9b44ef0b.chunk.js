(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1584:function(e,t,a){"use strict";var n=a(51),r=a.n(n),c="[ACADEMY APP] GET COURSES",o="[ACADEMY APP] GET CATEGORIES",u="[ACADEMY APP] SET COURSES SEARCH TEXT",l="[ACADEMY APP] SET COURSES CATEGORY FILTER";function s(){var e=r.a.get("/api/academy-app/courses");return function(t){return e.then(function(e){return t({type:c,payload:e.data})})}}function i(){var e=r.a.get("/api/academy-app/categories");return function(t){return e.then(function(e){return t({type:o,payload:e.data})})}}function p(e){return{type:u,searchText:e.target.value}}function d(e){return{type:l,category:e.target.value}}var f=a(10),m=a(46),h="[ACADEMY APP] GET COURSE",v="[ACADEMY APP] SAVE COURSE",E="[ACADEMY APP] UPDATE COURSE";function b(e){var t=r.a.get("/api/academy-app/course",{params:e});return function(e){return t.then(function(t){return e({type:h,payload:t.data})})}}function y(e){return function(t,a){var n=a().academyApp.course.id;r.a.post("/api/academy-app/course/update",Object(f.a)({id:n},e)).then(function(e){return t(Object(m.H)({message:"Course Updated"})),t({type:E,payload:e.data})})}}a.d(t,"c",function(){return c}),a.d(t,"a",function(){return o}),a.d(t,"f",function(){return u}),a.d(t,"e",function(){return l}),a.d(t,"j",function(){return s}),a.d(t,"h",function(){return i}),a.d(t,"l",function(){return p}),a.d(t,"k",function(){return d}),a.d(t,"b",function(){return h}),a.d(t,"d",function(){return v}),a.d(t,"g",function(){return E}),a.d(t,"i",function(){return b}),a.d(t,"m",function(){return y})},1651:function(e,t,a){"use strict";var n=a(16),r=a(10),c=a(1584),o={data:[],categories:[],searchText:"",categoryFilter:"all"},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:return Object(r.a)({},e,{data:t.payload});case c.a:return Object(r.a)({},e,{categories:t.payload});case c.f:return Object(r.a)({},e,{searchText:t.searchText});case c.e:return Object(r.a)({},e,{categoryFilter:t.category});default:return e}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b:case c.d:return Object(r.a)({},t.payload);case c.g:return Object(r.a)({},e,t.payload);default:return e}},s=Object(n.d)({courses:u,course:l});t.a=s},2309:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),c=a(15),o=a(13),u=a(14),l=a(0),s=a.n(l),i=a(1),p=a(54),d=a(4),f=a(219),m=a(25),h=a(1598),v=a.n(h),E=a(62),b=a(24),y=a(16),g=a(1651),C=a(1584),A=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).handleChangeActiveStep=function(e){a.props.updateCourse({activeStep:e+1})},a.handleNext=function(){a.props.updateCourse({activeStep:a.props.course.activeStep+1})},a.handleBack=function(){a.props.updateCourse({activeStep:a.props.course.activeStep-1})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getCourse(this.props.match.params)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.course&&0===this.props.course.activeStep&&this.props.updateCourse({activeStep:1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.course,r=n&&0!==n.activeStep?n.activeStep:1;return s.a.createElement(d.s,{classes:{content:"flex flex-col flex-auto overflow-hidden",header:"h-72 min-h-72"},header:s.a.createElement("div",{className:"flex flex-1 items-center px-16 lg:px-24"},s.a.createElement(i.F,{lgUp:!0},s.a.createElement(i.H,{onClick:function(t){return e.pageLayout.toggleLeftSidebar()},"aria-label":"open left sidebar"},s.a.createElement(i.G,null,"menu"))),s.a.createElement(i.H,{className:"mr-16",to:"/apps/academy/courses",component:b.a},s.a.createElement(i.G,null,"arrow_back")),n&&s.a.createElement(i.vb,{className:"flex-1 text-20"},n.title)),content:n&&s.a.createElement("div",{className:"flex flex-1 relative overflow-hidden"},s.a.createElement(d.t,{className:"w-full overflow-auto"},s.a.createElement(v.a,{className:"overflow-hidden",index:r-1,enableMouseEvents:!0,onChangeIndex:this.handleChangeActiveStep},n.steps.map(function(e,t){return s.a.createElement("div",{className:"flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64",key:e.id},s.a.createElement(i.W,{className:"w-full max-w-lg rounded-8 p-16 md:p-24",elevation:1},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})))}))),s.a.createElement("div",{className:"flex justify-center w-full absolute pin-l pin-r pin-b pb-16 md:pb-32"},s.a.createElement("div",{className:"flex justify-between w-full max-w-xl px-8"},s.a.createElement("div",null,1!==r&&s.a.createElement(i.v,{className:"",color:"secondary",onClick:this.handleBack},s.a.createElement(i.G,null,"chevron_left"))),s.a.createElement("div",null,r<n.steps.length?s.a.createElement(i.v,{className:"",color:"secondary",onClick:this.handleNext},s.a.createElement(i.G,null,"chevron_right")):s.a.createElement(i.v,{className:a.successFab,to:"/apps/academy/courses",component:b.a},s.a.createElement(i.G,null,"check")))))),leftSidebarContent:n&&s.a.createElement(i.hb,{classes:{root:"bg-transparent"},activeStep:r-1,orientation:"vertical"},n.steps.map(function(t,n){return s.a.createElement(i.fb,{key:t.id,onClick:function(){return e.handleChangeActiveStep(n)}},s.a.createElement(i.gb,{classes:{root:a.stepLabel}},t.title))})),innerScroll:!0,onRef:function(t){e.pageLayout=t}})}}]),t}(l.Component);t.default=Object(f.a)("academyApp",g.a)(Object(p.withStyles)(function(e){return{stepLabel:{cursor:"pointer!important"},successFab:{background:E.green[500]+"!important",color:"white!important"}}},{withTheme:!0})(Object(m.a)(function(e){return{course:e.academyApp.course}},function(e){return Object(y.c)({getCourse:C.i,updateCourse:C.m},e)})(A)))}}]);