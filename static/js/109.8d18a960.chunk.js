(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{2333:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(12),r=a(15),o=a(13),i=a(14),c=a(0),s=a.n(c),m=a(1),u=a(54),d=a(4),p=a(5),f=a.n(p),h=a(51),E=a.n(h);function g(e){return s.a.createElement(m.cb,Object.assign({direction:"up"},e))}var w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={data:[],openDialog:!1,dialogData:{title:null,content:null}},a.handleOpenDialog=function(e){a.setState({openDialog:!0,dialogData:e})},a.handleCloseDialog=function(){a.setState({openDialog:!1})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/knowledge-base").then(function(t){e.setState({data:t.data})})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.data,l=a.openDialog,r=a.dialogData;return s.a.createElement("div",{className:"w-full"},s.a.createElement("div",{className:f()(t.header,"flex flex-col items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360")},s.a.createElement(d.d,{animation:"transition.slideUpIn",duration:400,delay:100},s.a.createElement(m.vb,{color:"inherit",className:"text-36 sm:text-56 font-light"},"How can we help?")),s.a.createElement(d.d,{duration:400,delay:600},s.a.createElement(m.vb,{variant:"subtitle1",color:"inherit",className:"opacity-75 mt-16 mx-auto max-w-512"},"Welcome to our knowledge base"))),s.a.createElement("div",null,s.a.createElement(d.e,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap justify-center max-w-xl w-full mx-auto px-16 sm:px-24 py-32"},n.map(function(t){return s.a.createElement("div",{className:"w-full max-w-512 pb-24 md:w-1/2 md:p-16",key:t.id},s.a.createElement(m.d,{elevation:1},s.a.createElement(m.f,null,s.a.createElement(m.vb,{className:"font-medium px-16 pt-8",color:"textSecondary"},t.title),s.a.createElement(m.M,{component:"nav"},t.featuredArticles.map(function(t){return s.a.createElement(m.N,{key:t.id,button:!0,onClick:function(){return e.handleOpenDialog(t)}},s.a.createElement(m.O,{className:"mr-0"},s.a.createElement(m.G,null,"note")),s.a.createElement(m.Q,{primary:t.title}))})),s.a.createElement(m.c,{className:"normal-case w-full justify-start",color:"secondary"},"See all articles (",t.articlesCount,")"))))}))),s.a.createElement(m.l,{open:l,onClose:this.handleCloseDialog,"aria-labelledby":"knowledge-base-document",TransitionComponent:g},s.a.createElement(m.p,null,r.title),s.a.createElement(m.n,null,s.a.createElement(m.o,{dangerouslySetInnerHTML:{__html:r.content}})),s.a.createElement(m.m,null,s.a.createElement(m.c,{onClick:this.handleCloseDialog,color:"primary"},"CLOSE"))))}}]),t}(c.Component);t.default=Object(u.withStyles)(function(e){return{header:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)",color:e.palette.primary.contrastText}}},{withTheme:!0})(w)}}]);