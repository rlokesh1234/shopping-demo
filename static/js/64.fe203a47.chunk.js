(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{2423:function(e,t,a){"use strict";a.r(t);var l=a(11),n=a(12),r=a(15),s=a(13),c=a(14),m=a(0),o=a.n(m),i=a(1),d=a(4),u=a(20),p=a(93),f=a(16),b=a(10),E=a(54),v=a(297),w=a(7),h=a(25),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),m=0;m<n;m++)c[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={dataset:"2017"},a.setDataSet=function(e){a.setState({dataset:e})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,l=t.mainThemeDark,n=t.data,r=t.theme,s=this.state.dataset,c=w.a.merge({},n),m=c.datasets[s].map(function(e){return Object(b.a)({},e,{borderColor:r.palette.secondary.main,backgroundColor:r.palette.secondary.main,pointBackgroundColor:r.palette.secondary.dark,pointHoverBackgroundColor:r.palette.secondary.main,pointBorderColor:r.palette.secondary.contrastText,pointHoverBorderColor:r.palette.secondary.contrastText})});return o.a.createElement(E.MuiThemeProvider,{theme:l},o.a.createElement("div",{className:a.root},o.a.createElement("div",{className:"container relative p-16 sm:p-24 flex flex-row justify-between items-center"},o.a.createElement(d.d,{delay:100},o.a.createElement("div",{className:"flex-col"},o.a.createElement(i.vb,{className:"h2"},"Visitors"),o.a.createElement(i.vb,{className:"h5",color:"textSecondary"},"Unique visitors by month"))),o.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(c.datasets).map(function(t){return o.a.createElement(i.c,{key:t,className:"py-8 px-12",size:"small",onClick:function(){return e.setDataSet(t)},disabled:t===s},t)}))),o.a.createElement("div",{className:"container relative h-200 sm:h-256 pb-16"},o.a.createElement(v.f,{data:{labels:c.labels,datasets:m},options:c.options}))))}}]),t}(m.Component);var g=Object(E.withStyles)(function(e){return{root:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)"}}},{withTheme:!0})(Object(h.a)(function(e){return{mainThemeDark:e.fuse.settings.mainThemeDark}})(x)),N=Object(E.withStyles)(null,{withTheme:!0})(function(e){var t=e.data,a=e.theme,l=t.datasets.map(function(e){return Object(b.a)({},e,{borderColor:a.palette.secondary.main,backgroundColor:a.palette.secondary.main})});return o.a.createElement(i.d,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},o.a.createElement("div",{className:"pr-16"},o.a.createElement(i.vb,{className:"h3",color:"textSecondary"},"Conversion"),o.a.createElement(i.vb,{className:"text-56 font-300 leading-none mt-8"},t.conversion.value)),o.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},o.a.createElement("div",{className:"flex flex-row items-center"},t.conversion.ofTarget>0&&o.a.createElement(i.G,{className:"text-green mr-4"},"trending_up"),t.conversion.ofTarget<0&&o.a.createElement(i.G,{className:"text-red mr-4"},"trending_down"),o.a.createElement(i.vb,null,t.conversion.ofTarget,"%")),o.a.createElement(i.vb,{className:"ml-4 whitespace-no-wrap"},"of target"))),o.a.createElement("div",{className:"h-96 w-100-p"},o.a.createElement(v.a,{data:{labels:t.labels,datasets:l},options:t.options})))});var y=Object(E.withStyles)(null,{withTheme:!0})(Object(u.b)(function(e){return{widgets:e.analyticsDashboardApp.widgets.data}},function(e){return Object(f.c)({},e)})(function(e){var t=e.data,a=e.theme,l=t.datasets.map(function(e){return Object(b.a)({},e,{borderColor:a.palette.secondary.main})});return o.a.createElement(i.d,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"p-16 pb-0 flex flex-row items-end flex-wrap"},o.a.createElement("div",{className:"pr-16"},o.a.createElement(i.vb,{className:"h3",color:"textSecondary"},"Impressions"),o.a.createElement(i.vb,{className:"text-56 font-300 leading-none mt-8"},t.impressions.value)),o.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},o.a.createElement("div",{className:"flex flex-row items-center"},t.impressions.ofTarget>0&&o.a.createElement(i.G,{className:"text-green mr-4"},"trending_up"),t.impressions.ofTarget<0&&o.a.createElement(i.G,{className:"text-red mr-4"},"trending_down"),o.a.createElement(i.vb,null,t.impressions.ofTarget,"%")),o.a.createElement(i.vb,{className:"ml-4 whitespace-no-wrap"},"of target"))),o.a.createElement("div",{className:"h-96 w-100-p"},o.a.createElement(v.f,{data:{labels:t.labels,datasets:l},options:t.options})))})),j=Object(E.withStyles)(null,{withTheme:!0})(function(e){var t=e.data,a=e.theme,l=t.datasets.map(function(e){return Object(b.a)({},e,{borderColor:a.palette.error.main,backgroundColor:a.palette.error.main})});return o.a.createElement(i.d,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"p-16 pb-0 flex flex-row items-end flex-wrap"},o.a.createElement("div",{className:"pr-16"},o.a.createElement(i.vb,{className:"h3",color:"textSecondary"},"Visits"),o.a.createElement(i.vb,{className:"text-56 font-300 leading-none mt-8"},t.visits.value)),o.a.createElement("div",{className:"py-4 text-16 flex flex-row items-center"},o.a.createElement("div",{className:"flex flex-row items-center"},t.visits.ofTarget>0&&o.a.createElement(i.G,{className:"text-green mr-4"},"trending_up"),t.visits.ofTarget<0&&o.a.createElement(i.G,{className:"text-red mr-4"},"trending_down"),o.a.createElement(i.vb,null,t.visits.ofTarget,"%")),o.a.createElement(i.vb,{className:"ml-4 whitespace-no-wrap"},"of target"))),o.a.createElement("div",{className:"h-96 w-100-p"},o.a.createElement(v.a,{data:{labels:t.labels,datasets:l},options:t.options})))}),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),m=0;m<n;m++)c[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={dataset:"today"},a.setDataSet=function(e){a.setState({dataset:e})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,l=t.theme,n=this.state.dataset,r=w.a.merge({},a),s=r.datasets[n].map(function(e,t){var a=l.palette[0===t?"primary":"secondary"];return Object(b.a)({},e,{borderColor:a.main,backgroundColor:a.main,pointBackgroundColor:a.dark,pointHoverBackgroundColor:a.main,pointBorderColor:a.contrastText,pointHoverBorderColor:a.contrastText})});return o.a.createElement(i.d,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"relative p-24 flex flex-row items-center justify-between"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement(i.vb,{className:"h3 sm:h2"},"Visitors & Page views")),o.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(r.datasets).map(function(t){return o.a.createElement(i.c,{key:t,className:"py-8 px-12",size:"small",onClick:function(){return e.setDataSet(t)},disabled:t===n},t)}))),o.a.createElement(i.vb,{className:"relative h-200 sm:h-320 sm:pb-16"},o.a.createElement(v.f,{data:{labels:r.labels,datasets:s},options:r.options})))}}]),t}(m.Component),k=Object(E.withStyles)(null,{withTheme:!0})(O),C=a(1609),T=a.n(C);function S(e){var t=e.text;return o.a.createElement(i.ub,{title:t,placement:"top"},o.a.createElement(i.G,{className:"text-red"},"place"))}var D=Object(E.withStyles)(null,{withTheme:!0})(function(e){var t=e.data;return o.a.createElement(i.d,{className:"w-full h-512 rounded-8 shadow-none border-1"},o.a.createElement(T.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:1,defaultCenter:[17.308688,7.03125],options:{styles:t.styles}},t.markers.map(function(e){return o.a.createElement(S,{key:e.label,text:e.label,lat:e.lat,lng:e.lng})})))}),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),m=0;m<n;m++)c[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={dataset:"Today"},a.setDataSet=function(e){a.setState({dataset:e.target.value})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.theme,l=this.state.dataset,n=w.a.merge({},t),r=n.datasets[l].map(function(e){return Object(b.a)({},e,{borderColor:a.palette.divider,backgroundColor:[a.palette.primary.dark,a.palette.primary.main,a.palette.primary.light],hoverBackgroundColor:[a.palette.secondary.dark,a.palette.secondary.main,a.palette.secondary.light]})});return o.a.createElement(i.d,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"p-16"},o.a.createElement(i.vb,{className:"h1 font-300"},"Sessions by device")),o.a.createElement("div",{className:"h-224 relative"},o.a.createElement(v.d,{data:{labels:n.labels,datasets:r},options:n.options})),o.a.createElement("div",{className:"p-16 flex flex-row items-center justify-center"},n.labels.map(function(e,t){return o.a.createElement("div",{key:e,className:"px-16 flex flex-col items-center"},o.a.createElement(i.vb,{className:"h4",color:"textSecondary"},e),o.a.createElement(i.vb,{className:"h2 font-300 py-8"},n.datasets[l][0].data[t],"%"),o.a.createElement("div",{className:"flex flex-row items-center justify-center"},n.datasets[l][0].change[t]<0&&o.a.createElement(i.G,{className:"text-18 pr-4 text-red"},"arrow_downward"),n.datasets[l][0].change[t]>0&&o.a.createElement(i.G,{className:"text-18 pr-4 text-green"},"arrow_upward"),o.a.createElement("div",{className:"h5"},n.datasets[l][0].change[t],"%")))})),o.a.createElement(i.q,{className:"mx-16"}),o.a.createElement("div",{className:"p-16 flex flex-row items-center justify-between"},o.a.createElement("div",null,o.a.createElement(i.x,{className:""},o.a.createElement(i.bb,{value:l,onChange:this.setDataSet},Object.keys(n.datasets).map(function(e){return o.a.createElement(i.T,{key:e,value:e},e)})))),o.a.createElement(i.c,{size:"small"},"OVERVIEW")))}}]),t}(m.Component),A=Object(E.withStyles)(null,{withTheme:!0})(G),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),m=0;m<n;m++)c[m]=arguments[m];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={tabIndex:0},a.handleChange=function(e,t){a.setState({tabIndex:t})},a.handleChangeIndex=function(e){a.setState({tabIndex:e})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.theme,l=this.state.tabIndex,n=t.datasets[l].map(function(e){return Object(b.a)({},e,{borderColor:a.palette.secondary.main})});return o.a.createElement(i.d,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement(i.a,{position:"static"},o.a.createElement("div",{className:"p-16 pr-4 flex flex-row items-center justify-between"},o.a.createElement("div",{className:"pr-16"},o.a.createElement(i.vb,{className:"h1 font-300",color:"inherit"},"Sales"),o.a.createElement(i.vb,{className:"h5",color:"inherit"},"Lifetime sum of your sales")),o.a.createElement("div",null,o.a.createElement(i.H,{"aria-label":"more",color:"inherit"},o.a.createElement(i.G,null,"more_vert")))),o.a.createElement("div",{className:"p-16 pt-8 flex flex-row justify-between items-end"},o.a.createElement(i.vb,{className:"text-48 font-300 leading-none",color:"inherit"},t.today),o.a.createElement("div",{className:"flex flex-row items-center"},t.change.value>0&&o.a.createElement(i.G,{className:"text-green"},"trending_up"),t.change.value<0&&o.a.createElement(i.G,{className:"text-red"},"trending_down"),o.a.createElement("div",{className:"ml-8"},t.change.value,"(",t.change.percentage,"%)"))),o.a.createElement(i.rb,{value:l,onChange:this.handleChange,variant:"fullWidth"},o.a.createElement(i.jb,{label:"1Day",className:"min-w-0"}),o.a.createElement(i.jb,{label:"1Week",className:"min-w-0"}),o.a.createElement(i.jb,{label:"1Month",className:"min-w-0"}))),o.a.createElement(v.f,{data:{labels:t.labels,datasets:n},options:t.options}))}}]),t}(m.Component),_=Object(E.withStyles)(null,{withTheme:!0})(I),B=Object(E.withStyles)(null,{withTheme:!0})(function(e){var t=e.data;return o.a.createElement(i.d,{className:"w-full rounded-8 shadow-none border-1"},o.a.createElement("div",{className:"p-16 pr-4 flex flex-row items-center justify-between"},o.a.createElement(i.vb,{className:"h1 pr-16"},"Top campaigns"),o.a.createElement("div",null,o.a.createElement(i.H,{"aria-label":"more"},o.a.createElement(i.G,null,"more_vert")))),o.a.createElement("table",{className:"simple clickable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",{className:"text-right"},"Clicks"),o.a.createElement("th",{className:"text-right"},"Conv"))),o.a.createElement("tbody",null,t.rows.map(function(e){return o.a.createElement("tr",{key:e.title},o.a.createElement("td",null,e.title),o.a.createElement("td",{className:"text-right"},e.clicks),o.a.createElement("td",{className:"text-right"},e.conversion))}))),o.a.createElement(i.q,{className:"card-divider w-full"}),o.a.createElement("div",{className:"p-8 pt-16 flex flex-row items-center"},o.a.createElement(i.c,null,"GO TO CAMPAIGNS")))}),H=a(219),W=a(51),P=a.n(W),J="[ANALYTICS DASHBOARD APP] GET WIDGETS";function M(){var e=P.a.get("/api/analytics-dashboard-app/widgets");return function(t){return e.then(function(e){return t({type:J,payload:e.data})})}}var V={data:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(b.a)({},e,{data:Object(b.a)({},t.payload)});default:return e}},U=Object(f.d)({widgets:z}),q=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.getWidgets()}},{key:"render",value:function(){var e=this.props.widgets;return e?o.a.createElement("div",{className:"w-full"},o.a.createElement(g,{data:e.widget1}),o.a.createElement(d.d,{animation:"transition.slideUpIn",delay:200},o.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},o.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},o.a.createElement(d.d,{delay:600},o.a.createElement(i.vb,{className:"p-16 pb-8 text-18 font-300"},"How are your active users trending over time?")),o.a.createElement("div",{className:"flex flex-col sm:flex sm:flex-row pb-32"},o.a.createElement("div",{className:"widget flex w-full sm:w-1/3 p-16"},o.a.createElement(N,{data:e.widget2})),o.a.createElement("div",{className:"widget flex w-full sm:w-1/3 p-16"},o.a.createElement(y,{data:e.widget3})),o.a.createElement("div",{className:"widget w-full sm:w-1/3 p-16"},o.a.createElement(j,{data:e.widget4}))),o.a.createElement(d.d,{delay:600},o.a.createElement(i.vb,{className:"px-16 pb-8 text-18 font-300"},"How many pages your users visit?")),o.a.createElement("div",{className:"widget w-full p-16 pb-32"},o.a.createElement(k,{data:e.widget5})),o.a.createElement(d.d,{delay:600},o.a.createElement(i.vb,{className:"px-16 pb-8 text-18 font-300"},"Where are your users?")),o.a.createElement("div",{className:"widget w-full p-16 pb-32"},o.a.createElement(D,{data:e.widget6}))),o.a.createElement("div",{className:"flex flex-wrap w-full md:w-320 pt-16"},o.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},o.a.createElement(d.d,{delay:600},o.a.createElement(i.vb,{className:"px-16 pb-8 text-18 font-300"},"What are your top devices?")),o.a.createElement("div",{className:"widget w-full p-16"},o.a.createElement(A,{data:e.widget7}))),o.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},o.a.createElement(d.d,{delay:600},o.a.createElement("div",{className:"px-16 pb-8 text-18 font-300"},"How are your sales?")),o.a.createElement("div",{className:"widget w-full p-16"},o.a.createElement(_,{data:e.widget8}))),o.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},o.a.createElement(d.d,{delay:600},o.a.createElement(i.vb,{className:"px-16 pb-8 text-18 font-300 lg:pt-0"},"What are your top campaigns?")),o.a.createElement("div",{className:"widget w-full p-16"},o.a.createElement(B,{data:e.widget9}))))))):null}}]),t}(m.Component);t.default=Object(H.a)("analyticsDashboardApp",U)(Object(p.g)(Object(u.b)(function(e){return{widgets:e.analyticsDashboardApp.widgets.data}},function(e){return Object(f.c)({getWidgets:M},e)})(q)))}}]);