(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{2424:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t(12),s=t(15),r=t(13),c=t(14),i=t(0),m=t.n(i),o=t(1),d=t(4),u=t(20),p=t(93),f=t(16),v=t(10),E=t(54),b=t(297),h=t(7),w=t(25),g=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(c)))).state={dataset:"2017"},t.setDataSet=function(e){t.setState({dataset:e})},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.classes,l=a.mainThemeDark,n=a.data,s=a.theme,r=this.state.dataset,c=h.a.merge({},n),i=c.datasets[r].map(function(e){return Object(v.a)({},e,{borderColor:s.palette.secondary.main,backgroundColor:s.palette.secondary.main,pointBackgroundColor:s.palette.secondary.dark,pointHoverBackgroundColor:s.palette.secondary.main,pointBorderColor:s.palette.secondary.contrastText,pointHoverBorderColor:s.palette.secondary.contrastText})});return m.a.createElement(E.MuiThemeProvider,{theme:l},m.a.createElement("div",{className:t.root},m.a.createElement("div",{className:"container relative p-16 sm:p-24 flex flex-row justify-between items-center"},m.a.createElement(d.d,{delay:100},m.a.createElement("div",{className:"flex-col"},m.a.createElement(o.vb,{className:"h2"},"Visitors"),m.a.createElement(o.vb,{className:"h5",color:"textSecondary"},"Unique visitors by month"))),m.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(c.datasets).map(function(a){return m.a.createElement(o.c,{key:a,className:"py-8 px-12",size:"small",onClick:function(){return e.setDataSet(a)},disabled:a===r},a)}))),m.a.createElement("div",{className:"container relative h-200 sm:h-256 pb-16"},m.a.createElement(b.f,{data:{labels:c.labels,datasets:i},options:c.options}))))}}]),a}(i.Component);var N=Object(E.withStyles)(function(e){return{root:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)"}}},{withTheme:!0})(Object(w.a)(function(e){return{mainThemeDark:e.fuse.settings.mainThemeDark}})(g)),y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(c)))).state={dataset:"today"},t.setDataSet=function(e){t.setState({dataset:e})},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.data,l=a.theme,n=this.state.dataset,s=h.a.merge({},t),r=s.datasets[n].map(function(e,a){var t=l.palette[0===a?"primary":"secondary"];return Object(v.a)({},e,{borderColor:t.main,backgroundColor:t.main,pointBackgroundColor:t.dark,pointHoverBackgroundColor:t.main,pointBorderColor:t.contrastText,pointHoverBorderColor:t.contrastText})});return m.a.createElement(o.d,{className:"w-full rounded-8 shadow-none border-1"},m.a.createElement("div",{className:"relative p-24 flex flex-row items-center justify-between"},m.a.createElement("div",{className:"flex flex-col"},m.a.createElement(o.vb,{className:"h3 sm:h2"},"\xa0")),m.a.createElement("div",{className:"flex flex-row items-center"},Object.keys(s.datasets).map(function(a){return m.a.createElement(o.c,{key:a,className:"py-8 px-12",size:"small",onClick:function(){return e.setDataSet(a)},disabled:a===n},a)}))),m.a.createElement(o.vb,{className:"relative h-200 sm:h-320 sm:pb-16"},m.a.createElement(b.f,{data:{labels:s.labels,datasets:r},options:s.options})))}}]),a}(i.Component),x=Object(E.withStyles)(null,{withTheme:!0})(y),j=Object(E.withStyles)(null,{withTheme:!0})(function(e){var a=e.data;return m.a.createElement(o.d,{className:"w-full  rounded-8 shadow-none border-1"},m.a.createElement("table",{className:"simple clickable"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{className:""},"Shop"),m.a.createElement("th",{className:""},"Total"),m.a.createElement("th",{className:""},"Commission"),m.a.createElement("th",{className:""},"Shop Balance"),m.a.createElement("th",{className:""},"Site Balance"),m.a.createElement("th",{className:""},"Paid"),m.a.createElement("th",{className:""},"Created At"))),m.a.createElement("tbody",null,a.data.map(function(e){return m.a.createElement("tr",{key:e.title},m.a.createElement("td",{className:""},e.title),m.a.createElement("td",{className:""},e.total),m.a.createElement("td",{className:""},e.commission),m.a.createElement("td",{className:""},e.balance),m.a.createElement("td",{className:""},e.siteBal),m.a.createElement("td",{className:""},e.status),m.a.createElement("td",{className:""},e.createdAt))}))))}),k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(c)))).state={dataset:"Today"},t.setDataSet=function(e){t.setState({dataset:e.target.value})},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.theme,l=this.state.dataset,n=h.a.merge({},a),s=n.datasets[l].map(function(e){return Object(v.a)({},e,{borderColor:t.palette.divider,backgroundColor:[t.palette.primary.dark,t.palette.primary.main,t.palette.primary.light],hoverBackgroundColor:[t.palette.secondary.dark,t.palette.secondary.main,t.palette.secondary.light]})});return m.a.createElement(o.d,{className:"w-full rounded-8 shadow-none border-1"},m.a.createElement("div",{className:"p-16"},m.a.createElement(o.vb,{className:"h1 font-300"},"Sessions by device")),m.a.createElement("div",{className:"h-224 relative"},m.a.createElement(b.d,{data:{labels:n.labels,datasets:s},options:n.options})),m.a.createElement("div",{className:"p-16 flex flex-row items-center justify-center"},n.labels.map(function(e,a){return m.a.createElement("div",{key:e,className:"px-16 flex flex-col items-center"},m.a.createElement(o.vb,{className:"h4",color:"textSecondary"},e),m.a.createElement(o.vb,{className:"h2 font-300 py-8"},n.datasets[l][0].data[a],"%"),m.a.createElement("div",{className:"flex flex-row items-center justify-center"},n.datasets[l][0].change[a]<0&&m.a.createElement(o.G,{className:"text-18 pr-4 text-red"},"arrow_downward"),n.datasets[l][0].change[a]>0&&m.a.createElement(o.G,{className:"text-18 pr-4 text-green"},"arrow_upward"),m.a.createElement("div",{className:"h5"},n.datasets[l][0].change[a],"%")))})),m.a.createElement(o.q,{className:"mx-16"}),m.a.createElement("div",{className:"p-16 flex flex-row items-center justify-between"},m.a.createElement("div",null,m.a.createElement(o.x,{className:""},m.a.createElement(o.bb,{value:l,onChange:this.setDataSet},Object.keys(n.datasets).map(function(e){return m.a.createElement(o.T,{key:e,value:e},e)})))),m.a.createElement(o.c,{size:"small"},"OVERVIEW")))}}]),a}(i.Component),O=Object(E.withStyles)(null,{withTheme:!0})(k),S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(r.a)(a)).call.apply(e,[this].concat(c)))).state={tabIndex:0},t.handleChange=function(e,a){t.setState({tabIndex:a})},t.handleChangeIndex=function(e){t.setState({tabIndex:e})},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.theme,l=this.state.tabIndex,n=a.datasets[l].map(function(e){return Object(v.a)({},e,{borderColor:t.palette.secondary.main})});return m.a.createElement(o.d,{className:"w-full rounded-8 shadow-none border-1"},m.a.createElement(o.a,{position:"static"},m.a.createElement("div",{className:"p-16 pr-4 flex flex-row items-center justify-between"},m.a.createElement("div",{className:"pr-16"},m.a.createElement(o.vb,{className:"h1 font-300",color:"inherit"},"Marketplace sales"),m.a.createElement(o.vb,{className:"h5",color:"inherit"},"Lifetime sum of your sales")),m.a.createElement("div",null,m.a.createElement(o.H,{"aria-label":"more",color:"inherit"},m.a.createElement(o.G,null,"more_vert")))),m.a.createElement("div",{className:"p-16 pt-8 flex flex-row justify-between items-end"},m.a.createElement(o.vb,{className:"text-48 font-300 leading-none",color:"inherit"},a.today),m.a.createElement("div",{className:"flex flex-row items-center"},a.change.value>0&&m.a.createElement(o.G,{className:"text-green"},"trending_up"),a.change.value<0&&m.a.createElement(o.G,{className:"text-red"},"trending_down"),m.a.createElement("div",{className:"ml-8"},a.change.value,"(",a.change.percentage,"%)"))),m.a.createElement(o.rb,{value:l,onChange:this.handleChange,variant:"fullWidth"},m.a.createElement(o.jb,{label:"1Day",className:"min-w-0"}),m.a.createElement(o.jb,{label:"1Week",className:"min-w-0"}),m.a.createElement(o.jb,{label:"1Month",className:"min-w-0"}))),m.a.createElement(b.f,{data:{labels:a.labels,datasets:n},options:a.options}))}}]),a}(i.Component),C=Object(E.withStyles)(null,{withTheme:!0})(S),D=Object(E.withStyles)(null,{withTheme:!0})(function(e){var a=e.data;return m.a.createElement(o.d,{className:"w-full rounded-8 shadow-none border-1"},m.a.createElement("div",{className:"p-16 pr-4 flex flex-row items-center justify-between"},m.a.createElement(o.vb,{className:"h1 pr-16"},"Top campaigns"),m.a.createElement("div",null,m.a.createElement(o.H,{"aria-label":"more"},m.a.createElement(o.G,null,"more_vert")))),m.a.createElement("table",{className:"simple clickable"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null),m.a.createElement("th",{className:"text-right"},"Clicks"),m.a.createElement("th",{className:"text-right"},"Conv"))),m.a.createElement("tbody",null,a.rows.map(function(e){return m.a.createElement("tr",{key:e.title},m.a.createElement("td",null,e.title),m.a.createElement("td",{className:"text-right"},e.clicks),m.a.createElement("td",{className:"text-right"},e.conversion))}))),m.a.createElement(o.q,{className:"card-divider w-full"}),m.a.createElement("div",{className:"p-8 pt-16 flex flex-row items-center"},m.a.createElement(o.c,null,"GO TO CAMPAIGNS")))}),A=t(5),T=t.n(A),$=Object(E.withStyles)(null,{withTheme:!0})(function(e){var a=e.adminDetails,t=(e.theme,a.Name.split(" "));return m.a.createElement(o.d,{className:"w-full rounded-8 shadow-none border-1"},m.a.createElement("div",{className:"p-16 pb-0 flex flex-row flex-wrap items-end"},m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"mr-20"},m.a.createElement("img",{src:a.img,alt:a.Name})),m.a.createElement("div",{className:"inline-block"},m.a.createElement(o.vb,{component:"h5"}," ",m.a.createElement("span",null,t&&t[0])," "+t[1]),m.a.createElement("div",{className:"listItem"},a&&a.data.map(function(e,a){return m.a.createElement("p",{className:T()(e.class,"p-8"),key:a},m.a.createElement("span",{className:"bg-red p-4 text-white rounded listValue inline-block"},e.value)," "+e.field)}))))))}),B=t(219),P=t(51),I=t.n(P),G="[ANALYTICS DASHBOARD APP] GET WIDGETS";function M(){var e=I.a.get("/api/analytics-dashboard-app/widgets");return function(a){return e.then(function(e){return a({type:G,payload:e.data})})}}var H={data:null,adminData:[{Name:"Shops Statistic",img:"assets/images/admin/staff.png",data:[{field:"Total",value:20,class:"danger"},{field:"Featured",value:4,class:"success"},{field:"Actived",value:9,class:"success"},{field:"InActived",value:11,class:"warning"},{field:"Verified",value:13,class:"success"},{field:"Unverified",value:7,class:"warning"}]},{Name:"Users Statistic",img:"assets/images/admin/staff.png",data:[{field:"Total",value:41,class:"danger"},{field:"Actived",value:41,class:"success"},{field:"InActived",value:0,class:"warning"}]},{Name:"Products Statistic",img:"assets/images/admin/expense.png",data:[{field:"Total",value:54,class:"danger"}]},{Name:"Orders Statistic",img:"assets/images/admin/income.png",data:[{field:"Total",value:47,class:"danger"},{field:"Total Sub Order",value:65,class:"danger"},{field:"Completed",value:26,class:"success"},{field:"Shipping",value:4,class:"success"},{field:"Progressing",value:0,class:"info"},{field:"Pending",value:28,class:"info"},{field:"Refunded",value:2,class:"warning"},{field:"Cancelled",value:5,class:"warning"}]}],campaignData:{rows:[{title:"Furnishing",clicks:"3621",conversion:"90"},{title:"Heavy Equipments",clicks:"703",conversion:"7"},{title:"Construction",conversion:"0",clicks:"532"},{title:"Electronics",clicks:"201",conversion:"8"}]},sellerData:{data:[{title:"Patrick Store",total:"$110.00",commission:"$16.50",balance:"$93.50",siteBal:"$0.00",status:"Approved",createdAt:"May 22, 2019"},{title:"Patrick Store",total:"$768.90",commission:"$115.34",balance:"-$115.34",siteBal:"$115.34",status:"Approved",createdAt:"May 22, 2019"},{title:"Patrick Store",total:"$768.90",commission:"$115.34",balance:"$653.56",siteBal:"$0.00",status:"Approved",createdAt:"May 22, 2019"},{title:"Patrick Store",total:"$419.40",commission:"$62.91",balance:"$356.49",siteBal:"$0.00",status:"Approved",createdAt:"May 21, 2019"},{title:"Patrick Store",total:"$768.90",commission:"$115.34",balance:"$653.56",siteBal:"$0.00",status:"Approved",createdAt:"May 21, 2019"}]}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case G:return Object(v.a)({},e,{data:Object(v.a)({},a.payload)});default:return e}},_=Object(f.d)({widgets:W}),q=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.getWidgets()}},{key:"render",value:function(){var e=this.props,a=e.widgets,t=e.adminData,l=e.campaignData,n=e.sellerData;return a?m.a.createElement("div",{className:"w-full"},m.a.createElement(N,{data:a.widget1}),m.a.createElement(d.d,{animation:"transition.slideUpIn",delay:200},m.a.createElement("div",{className:"flex flex-col md:flex-row sm:p-8 container"},m.a.createElement("div",{className:"flex flex-1 flex-col min-w-0"},m.a.createElement("div",{className:"flex flex-col sm:flex sm:flex-row pb-32"},t&&t.map(function(e,a){return m.a.createElement("div",{className:"widget w-full sm:w-1/4 flex p-16",key:a},m.a.createElement($,{adminDetails:e}))})),m.a.createElement(d.d,{delay:600},m.a.createElement(o.vb,{className:"px-16 pb-8 text-18 font-300"},"Gross Revenues")),m.a.createElement("div",{className:"widget w-full p-16 pb-32"},m.a.createElement(x,{data:a.widget5})),m.a.createElement(d.d,{delay:600},m.a.createElement(o.vb,{className:"px-16 pb-8 text-18 font-300"},"Latest Request Payout of Seller")),m.a.createElement("div",{className:"widget w-full p-16 pb-32"},m.a.createElement(j,{data:n}))),m.a.createElement("div",{className:"flex flex-wrap w-full md:w-320 pt-16"},m.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},m.a.createElement(d.d,{delay:600},m.a.createElement(o.vb,{className:"px-16 pb-8 text-18 font-300"},"What are your top devices?")),m.a.createElement("div",{className:"widget w-full p-16"},m.a.createElement(O,{data:a.widget7}))),m.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},m.a.createElement(d.d,{delay:600},m.a.createElement("div",{className:"px-16 pb-8 text-18 font-300"},"How are your sales?")),m.a.createElement("div",{className:"widget w-full p-16"},m.a.createElement(C,{data:a.widget8}))),m.a.createElement("div",{className:"mb-32 w-full sm:w-1/2 md:w-full"},m.a.createElement(d.d,{delay:600},m.a.createElement(o.vb,{className:"px-16 pb-8 text-18 font-300 lg:pt-0"},"What are your top campaigns sectors?")),m.a.createElement("div",{className:"widget w-full p-16"},m.a.createElement(D,{data:l}))))))):null}}]),a}(i.Component);a.default=Object(B.a)("analyticsDashboardApp",_)(Object(p.g)(Object(u.b)(function(e){var a=e.analyticsDashboardApp;return{widgets:a.widgets.data,adminData:a.widgets.adminData,campaignData:a.widgets.campaignData,sellerData:a.widgets.sellerData}},function(e){return Object(f.c)({getWidgets:M},e)})(q)))}}]);