(this["webpackJsonpnews-api-react"]=this["webpackJsonpnews-api-react"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),s=a(2),u=a.n(s),o=a(3),i=a(1),m="https://newsapi.org/v2/",h="bbfc4fc1127c4a29bea8a09fd411eefe",p=c.a.createContext(),g=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(!0),g=Object(i.a)(s,2),b=g[0],f=g[1],E=Object(n.useState)(!1),v=Object(i.a)(E,2),d=v[0],O=v[1],j=Object(n.useState)(""),y=Object(i.a)(j,2),S=y[0],_=y[1],k=Object(n.useState)("en"),x=Object(i.a)(k,2),N=x[0],I=x[1],w=Object(n.useState)("publishedAt"),C=Object(i.a)(w,2),P=C[0],A=C[1],L=Object(n.useState)(1),F=Object(i.a)(L,2),D=F[0],T=F[1],B=Object(n.useState)(1),M=Object(i.a)(B,2),V=M[0],z=M[1],R=Object(n.useState)(!1),q=Object(i.a)(R,2),J=q[0],K=q[1],U=Object(n.useState)(!1),G=Object(i.a)(U,2),H=G[0],Q=G[1],W=Object(n.useState)(""),X=Object(i.a)(W,2),Y=X[0],Z=X[1],$=Object(n.useState)([]),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],ne=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}({searchValue:r,searchInArticles:b,searchInSources:d}),ce=void 0===ne?[]:ne,re=ce.searchInArticles,le=ce.searchInSources,se=ce.searchValue,ue=function(){var e=Object(o.a)(u.a.mark((function e(t){var a,n,c,r,l,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,c=n.status,r=n.totalResults,l=n.articles,s=n.message,"ok"===c?(z(Math.ceil(r/10)),ae(l)):(Q(!0),Z(s)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),e.t0&&(Q(!0),Z(e.t0.message));case 18:return e.prev=18,K(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=b&&""!==r.trim()?"everything":"top-headlines",t=new URL("".concat(m).concat(e)),a={q:b?r:"",sources:S,language:N,sortBy:P,apiKey:h,pageSize:10,page:D};Object.keys(a).forEach((function(e){return t.searchParams.append(e,a[e])})),void 0!==re&&void 0!==se&&(""===r&&re!==b||!b&&se!==r||le!==d)||ue(t)}),[r,S,N,P,D,b,d,re,le,se]),c.a.createElement(p.Provider,{value:{sortBy:P,page:D,lastPage:V,isLoading:J,hasErrored:H,errorMessage:Y,articles:te,searchInArticles:b,searchInSources:d,setSortBy:A,language:N,searchValue:r,setPage:T,setSearchValue:l,setSource:_,setLanguage:I,setSearchInArticles:f,setSearchInSources:O}},e.children)},b=(p.Consumer,a(12),function(){var e=Object(n.useContext)(p).setSearchValue,t=Object(n.useRef)(null),a=null;return c.a.createElement("section",{className:"search",role:"search"},c.a.createElement("form",{onSubmit:function(n){n.preventDefault(),clearTimeout(a),e(t.current.value)}},c.a.createElement("fieldset",null,c.a.createElement("label",{htmlFor:"search",className:"search__label"},c.a.createElement("i",{className:"material-icons search__icon"},"search"),c.a.createElement("input",{ref:t,type:"search",placeholder:"Search...",onChange:function(t){clearTimeout(a);var n=t.target.value;a=setTimeout((function(){e(n)}),1e3)}})))))}),f=(a(13),function(){var e=(new Date).toLocaleDateString();return c.a.createElement("header",{className:"header"},c.a.createElement("aside",null,c.a.createElement("h1",{className:"header__title"},"News"),c.a.createElement("time",{dateTime:e},e)),c.a.createElement(b,null))}),E=(a(14),function(){var e=Object(n.useContext)(p),t=e.searchInArticles,a=e.searchInSources,r=e.setSortBy,l=e.setLanguage,s=e.setSearchInArticles,u=e.setSearchInSources;return c.a.createElement("section",{className:"toolbar"},c.a.createElement("div",{className:"toolbar__item"},c.a.createElement("label",null,"Search by:"),c.a.createElement("div",{className:"toolbar__item__checkbox"},c.a.createElement("input",{type:"checkbox",checked:t,name:"search_by",value:"Articles",onChange:function(e){s(e.target.checked)}}),c.a.createElement("span",null,"articles")),c.a.createElement("div",{className:"toolbar__item__checkbox"},c.a.createElement("input",{type:"checkbox",checked:a,name:"search_by",value:"Sources",onChange:function(e){u(e.target.checked)}}),c.a.createElement("span",null,"sources"))),c.a.createElement("div",{className:"toolbar__item"},c.a.createElement("label",{htmlFor:"sortBy-select"},"Sort by:"),c.a.createElement("select",{name:"sortBy",onChange:function(e){var t=e.target.value;r(t)}},[{key:0,text:"Latest",value:"publishedAt"},{key:1,text:"Top",value:"relevancy"},{key:2,text:"Popular",value:"popularity"}].map((function(e){return c.a.createElement("option",{key:e.key,value:e.value},e.text)})))),c.a.createElement("div",{className:"toolbar__item"},c.a.createElement("label",{htmlFor:"language-select"},"Language:"),c.a.createElement("select",{name:"language",onChange:function(e){var t=e.target.value;l(t)}},[{key:0,text:"English",value:"en"},{key:1,text:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",value:"ar"},{key:2,text:"Deutsch",value:"de"},{key:3,text:"Espa\xf1ol",value:"es"},{key:4,text:"Fran\xe7ais",value:"fr"},{key:5,text:"\u05e2\u05d1\u05e8\u05d9\u05ea",value:"he"},{key:6,text:"Italiano",value:"it"},{key:7,text:"Nederlands",value:"nl"},{key:8,text:"Norsk",value:"no"},{key:9,text:"Portugu\xeas",value:"pt"},{key:10,text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",value:"ru"},{key:11,text:"Davvis\xe1megiella",value:"se"},{key:13,text:"\u4e2d\u6587",value:"zh"}].map((function(e){return c.a.createElement("option",{key:e.key,value:e.value},e.text)})))))}),v=(a(15),function(e){var t=e.article,a=new Date(t.publishedAt);return c.a.createElement("article",{className:"article"},c.a.createElement("h3",{className:"article__title"},c.a.createElement("a",{href:t.url},t.title)),t.description&&c.a.createElement("summary",{className:"article__description"},c.a.createElement("p",null,t.description),(t.author||t.publishedAt)&&c.a.createElement("mark",null,t.author&&c.a.createElement("span",{className:"article__author"},t.author),t.publishedAt&&c.a.createElement("time",null,a.toLocaleString()))),t.content&&c.a.createElement("p",{className:"article__content"},t.content),t.urlToImage&&c.a.createElement("figure",{className:"article__figure"},c.a.createElement("img",{src:t.urlToImage,alt:""})))}),d=function(e){var t=e.articles;return c.a.createElement(n.Fragment,null,t.map((function(e){return c.a.createElement(v,{key:"".concat(e.url,"_").concat(e.publishedAt,"_").concat(e.source.name),article:e})})))},O=(a(16),function(e){var t=e.page,a=e.pageSize,n=e.lastPage,r=e.setPage,l=e.className;return c.a.createElement("div",{className:"pagination ".concat(l)},c.a.createElement("span",null,"".concat(a," per page")),c.a.createElement("input",{className:"pagination__input",type:"number",min:"1",max:n,value:t,onChange:function(e){var t=e.target.value;r(t>n?n:t<1?1:t)}}),c.a.createElement("span",null,"/ ".concat(n)),c.a.createElement("span",{className:"pagination__buttons"},c.a.createElement("button",{className:"pagination__button-left",onClick:function(){return r(parseInt(t)-1)},disabled:t<2},"\xab"),c.a.createElement("button",{className:"pagination__button-right",onClick:function(){return r(parseInt(t)+1)},disabled:t>n-1},"\xbb")))}),j=(a(17),function(){return c.a.createElement("div",{className:"lds-ripple"},c.a.createElement("div",null),c.a.createElement("div",null))}),y=function(){var e=Object(n.useContext)(p),t=e.articles,a=e.page,r=e.lastPage,l=e.setPage,s=e.hasErrored,u=e.isLoading,o=e.errorMessage;return c.a.createElement("section",null,u&&c.a.createElement(j,null),s&&c.a.createElement(n.Fragment,null,c.a.createElement("p",null," Sorry an error occured while loading the articles. "),c.a.createElement("p",null," ","".concat(o)," ")),!u&&!s&&c.a.createElement(n.Fragment,null,c.a.createElement(d,{articles:t}),c.a.createElement(O,{className:"pagination-centered",page:a,pageSize:10,lastPage:r,setPage:l})))},S=(a(18),function(e){var t=e.source,a=t.id,r=t.name,l=t.description,s=t.category,u=Object(n.useContext)(p).setSource;return c.a.createElement("div",{className:"source",onClick:function(e){e.preventDefault(),u(a)}},c.a.createElement("h3",null,r),c.a.createElement("span",{className:"source__category"},s),c.a.createElement("p",null,l))}),_=function(e){var t=e.sources;return c.a.createElement(n.Fragment,null,t.map((function(e){return c.a.createElement(S,{key:"".concat(e.id,"_").concat(e.name,"_").concat(e.language),source:e})})))},k=function(){var e=Object(n.useContext)(p),t=e.language,a=e.searchValue,r=e.isLoading,l=e.hasErrored,s=e.searchInSources,g=Object(n.useState)([]),b=Object(i.a)(g,2),f=b[0],E=b[1],v=Object(n.useState)(1),d=Object(i.a)(v,2),y=d[0],S=d[1],k=Object(n.useState)(1),x=Object(i.a)(k,2),N=x[0],I=x[1],w=Object(n.useState)([]),C=Object(i.a)(w,2),P=C[0],A=C[1],L=Object(n.useState)(!1),F=Object(i.a)(L,2),D=F[0],T=F[1],B=Object(n.useState)(!1),M=Object(i.a)(B,2),V=M[0],z=M[1],R=Object(n.useState)(""),q=Object(i.a)(R,2),J=q[0],K=q[1];Object(n.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var a,n,c,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),a=new URL("".concat(m,"sources")),n={apiKey:h,language:t},Object.keys(n).forEach((function(e){return a.searchParams.append(e,n[e])})),e.prev=3,e.next=6,fetch(a);case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,l=r.sources,E(l),I(Math.ceil(l.length/8)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),e.t0&&(z(!0),K(e.t0.message));case 18:return e.prev=18,T(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[3,15,18,21]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.useEffect)((function(){s&&function(){if(a.length>0){var e=f.filter((function(e){return e.id.indexOf(a)>-1||e.name.indexOf(a)>-1||e.category.indexOf(a)>-1||e.description.indexOf(a)>-1}));A(e),I(Math.ceil(e.length/8))}else A([]),I(Math.ceil(f.length/8))}()}),[a,f,s]);var U=void 0!==a&&a.length>0&&s?P:f;return c.a.createElement("aside",null,!r&&D&&c.a.createElement(j,null),!l&&V&&c.a.createElement(n.Fragment,null,c.a.createElement("p",null," Sorry an error occured while loading the sources. "),c.a.createElement("p",null," ","".concat(J)," ")),!D&&!V&&c.a.createElement(n.Fragment,null,c.a.createElement(O,{className:"pagination-centered",page:y,pageSize:8,lastPage:N,setPage:S}),c.a.createElement(_,{sources:void 0!==U?U.slice(8*(y-1),8*(y-1)+8):[]})))},x=(a(19),function(){return c.a.createElement(g,null,c.a.createElement(f,null),c.a.createElement("main",{className:"main"},c.a.createElement(E,null),c.a.createElement(y,null),c.a.createElement(k,null)))});a(20);l.a.render(c.a.createElement(x,null),document.querySelector("#root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.cb80a9a3.chunk.js.map