(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,a,t){e.exports=t(201)},162:function(e,a,t){},163:function(e,a,t){},201:function(e,a,t){"use strict";t.r(a);t(128),t(141),t(144),t(148),t(151);var r=t(0),l=t.n(r),n=t(50),c=t.n(n),o=(t(162),t(31)),i=t(32),s=t(35),m=t(33),d=t(36),u=(t(163),t(16)),b=t(104),g=t.n(b),p=t(105),h=t.n(p),E=t(106),f=t.n(E),v=t(34),N=function(){return l.a.createElement(u.Header,{"aria-label":"Tools Dashboard"},l.a.createElement(u.SkipToContent,null),l.a.createElement(u.HeaderName,{element:v.b,to:"/",prefix:"IBM"},"Cloud - Catalyst Tools"),l.a.createElement(u.HeaderNavigation,{"aria-label":"Repositories"},l.a.createElement(u.HeaderMenuItem,{element:v.b,to:"/repos"},"Repositories")),l.a.createElement(u.HeaderGlobalBar,null,l.a.createElement(u.HeaderGlobalAction,{"aria-label":"Notifications"},l.a.createElement(g.a,null)),l.a.createElement(u.HeaderGlobalAction,{"aria-label":"User Avatar"},l.a.createElement(h.a,null)),l.a.createElement(u.HeaderGlobalAction,{"aria-label":"App Switcher"},l.a.createElement(f.a,null))))},x=t(24),w=t(13),_=t(3),k=t.n(_),y=t(51),O=t(53),j=t(52),D=t(55),C=t(54),P=t(4),T=P.settings.prefix,A=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a,t,r=this.props,n=r.children,c=r.href,o=r.subTitle,i=r.title,s=r.color,m=r.disabled,d=r.aspectRatio,u=r.actionIcon,b=r.className;void 0!==c&&(t="/"===c.charAt(0));var g,p=k()(["".concat(T,"--resource-card")],(e={},Object(w.a)(e,b,b),Object(w.a)(e,"".concat(T,"--resource-card--disabled"),m),Object(w.a)(e,"".concat(T,"--resource-card--dark"),"dark"===s),e)),h=k()(["".concat(T,"--aspect-ratio")],(a={},Object(w.a)(a,"".concat(T,"--aspect-ratio--2x1"),"2:1"===d),Object(w.a)(a,"".concat(T,"--aspect-ratio--1x1"),"1:1"===d),Object(w.a)(a,"".concat(T,"--aspect-ratio--16x9"),"16:9"===d),Object(w.a)(a,"".concat(T,"--aspect-ratio--4x3"),"4:3"===d),a)),E=k()(["".concat(T,"--tile")],["".concat(T,"--tile--clickable")]),f=l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{className:"".concat(T,"--resource-card__subtitle")},o),l.a.createElement("h4",{className:"".concat(T,"--resource-card__title")},i),l.a.createElement("div",{className:"".concat(T,"--resource-card__icon--img")},n),l.a.createElement("div",{className:"".concat(T,"--resource-card__icon--action")},"launch"!==u||m?null:l.a.createElement(y.a,{"aria-label":"Open resource"}),"arrowRight"!==u||m?null:l.a.createElement(j.a,{"aria-label":"Open resource"}),"download"!==u||m?null:l.a.createElement(O.a,{"aria-label":"Download"}),"email"!==u||m?null:l.a.createElement(C.a,{"aria-label":"Email"}),"disabled"===u||!0===m?l.a.createElement(D.a,{"aria-label":"disabled"}):null));return g=!0===m?l.a.createElement("div",{className:E},f):!0===t?l.a.createElement("div",{to:c,className:E},f):l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c,className:E},f),l.a.createElement("div",{className:p},l.a.createElement("div",{className:h},l.a.createElement("div",{className:"".concat(T,"--aspect-ratio--object")},g)))}}]),a}(l.a.Component);A.defaultProps={color:"light",disabled:!1,aspectRatio:"2:1",actionIcon:"launch"};var I=A,R=P.settings.prefix,S=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a,t=this.props,r=t.children,n=t.href,c=t.title,o=t.subTitle,i=t.author,s=t.date,m=t.readTime,d=t.color,u=t.disabled,b=t.actionIcon,g=t.className;void 0!==n&&(a="/"===n.charAt(0));var p,h=k()(["".concat(R,"--article-card")],(e={},Object(w.a)(e,g,g),Object(w.a)(e,"".concat(R,"--article-card--disabled"),u),Object(w.a)(e,"".concat(R,"--article-card--dark"),"dark"===d),e)),E=k()(["".concat(R,"--aspect-ratio")],["".concat(R,"--aspect-ratio--2x1")]),f=k()(["".concat(R,"--tile")],["".concat(R,"--tile--clickable")]),v=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(R,"--article-card__img")},r),l.a.createElement("div",{className:E},l.a.createElement("div",{className:"".concat(R,"--aspect-ratio--object ").concat(R,"--article-card__tile")},o?l.a.createElement("h5",{className:"".concat(R,"--article-card__subtitle")},o):null,c?l.a.createElement("h4",{className:"".concat(R,"--article-card__title")},c):null,l.a.createElement("div",{className:"".concat(R,"--article-card__info")},i?l.a.createElement("p",{className:"".concat(R,"--article-card__author")},i):null,s?l.a.createElement("p",{className:"".concat(R,"--article-card__date")},s):null,m?l.a.createElement("p",{className:"".concat(R,"--article-card__read-time")},m):null),l.a.createElement("div",{className:"".concat(R,"--article-card__icon--action")},"launch"!==b||u?null:l.a.createElement(y.a,{"aria-label":"Open"}),"arrowRight"!==b||u?null:l.a.createElement(j.a,{"aria-label":"Open"}),"download"!==b||u?null:l.a.createElement(O.a,{"aria-label":"Download"}),"email"!==b||u?null:l.a.createElement(C.a,{"aria-label":"Email"}),"disabled"===b||!0===u?l.a.createElement(D.a,{"aria-label":"disabled"}):null))));return p=!0===u?l.a.createElement("div",{className:f},v):!0===a?l.a.createElement("div",{to:n,className:f},v):l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n,className:f},v),l.a.createElement("div",{className:h},p)}}]),a}(l.a.Component);S.defaultProps={color:"light",disabled:!1,actionIcon:""};var F=S,H=t(212),U=t(213),B=t(214),G=t(218),L=t(219),M={selected:0,triggerHref:"#",role:"navigation"},z={href:"#",role:"presentation",tabIndex:0},q=function(){function e(e){var a=[];return e.forEach(function(e,t){a.push(l.a.createElement("div",{className:"bx--no-gutter-md--left bx--col-lg-4 bx--col-md-4"},l.a.createElement(F,{title:e.title,author:e.author,href:e.href,color:e.color,actionIcon:"arrowRight"})))}),a}function a(e){var a=window.location.hostname;return a=(window.location.protocol||"http:")+"//"+a.replace("dashboard",e)}return l.a.createElement("div",{className:"bx--grid bx--grid--full-width landing-page"},l.a.createElement("div",{className:"bx--row landing-page__banner"},l.a.createElement("div",{className:"bx--col-lg-16"},l.a.createElement(H.a,{noTrailingSlash:!0,"aria-label":"Page navigation"},l.a.createElement(U.a,null,l.a.createElement("a",{href:"https://w3.ibm.com/w3publisher/ibm-cloud-garage-catalyst"},"Catalyst Info"))),l.a.createElement("h1",{className:"landing-page__heading"},"Development Cluster Dashboard"))),l.a.createElement("div",{className:"bx--row landing-page__r2"},l.a.createElement("div",{className:"bx--col bx--no-gutter"},l.a.createElement(B.a,Object.assign({},M,{"aria-label":"Tab navigation"}),l.a.createElement(G.a,Object.assign({},z,{label:"Dashboard"}),l.a.createElement("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width"},l.a.createElement("div",{className:"bx--row landing-page__tab-content"},l.a.createElement("div",{className:"bx--col-md-4 bx--col-lg-7"},l.a.createElement("h2",{className:"landing-page__subheading"},"Tools Dashboard"),l.a.createElement("p",{className:"landing-page__p"},"The tools dashboard gives you easy access to the provisioned tools in your development Kubernetes clusters.."),l.a.createElement("img",{className:"landing-page__illo",src:"".concat("","/catalyst-tools-dashboard.svg"),alt:"illustration"}),l.a.createElement("p",null),l.a.createElement("br",null),l.a.createElement(L.a,null,"Learn more...")),l.a.createElement("div",{className:"bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"},l.a.createElement("div",{className:"bx--row resource-card-group"},l.a.createElement("div",{className:"bx--column bx--col-md-4 bx--offset-lg-4 bx--no-gutter-sm"},l.a.createElement(I,{subTitle:"Manage your build pipelines",title:"Jenkins CI",aspectRatio:"2:1",actionIcon:"arrowRight",href:a("jenkins")},"\u200b",l.a.createElement("img",{className:"resource-img",src:"".concat("","/jenkins.png"),alt:"illustration"}),"\u200b")),l.a.createElement("div",{className:"bx--column bx--col-md-4 bx--offset-lg-4 bx--no-gutter-sm"},l.a.createElement(I,{subTitle:"Store your assets and dependencies",title:"Artefactory",actionIcon:"arrorRight",aspectRatio:"2:1",disabled:!0,href:a("artefactory")},"\u200b",l.a.createElement("img",{className:"resource-img",src:"".concat("","/artifactory.png"),alt:"illustration"})))),l.a.createElement("div",{className:"bx--row resource-card-group"},l.a.createElement("div",{className:"bx--column bx--col-md-4 bx--offset-lg-4 bx--no-gutter-sm"},l.a.createElement(I,{subTitle:"Analyse and test your code",title:"SonarQube",aspectRatio:"2:1",actionIcon:"arrowRight",href:a("sonarqube")},"                    \u200b",l.a.createElement("img",{className:"resource-img",src:"".concat("","/sonarqube-dark.png"),alt:"illustration"}))),l.a.createElement("div",{className:"bx--column bx--col-md-4 bx--offset-lg-4 bx--no-gutter-sm"},l.a.createElement(I,{subTitle:"Test your microservice contracts",title:"Pact Testing",aspectRatio:"2:1",href:a("pact")},l.a.createElement("img",{className:"resource-img",src:"".concat("","/pact.png"),alt:"illustration"})))))))),l.a.createElement(G.a,Object.assign({},z,{label:"Activation"}),l.a.createElement("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width"},l.a.createElement("div",{className:"bx--row landing-page__tab-content"},l.a.createElement("div",{className:"bx--col-lg-16"},l.a.createElement("h2",{className:"landing-page__subheading"},"Garage Method Development"),l.a.createElement("br",null),l.a.createElement("p",null,"Use the following links to help you deep dive in IBM Cloud Garage development best practices"),l.a.createElement("br",null),l.a.createElement("div",{className:"bx--row"},e([{title:"Squad Leadership Guide",author:"PDF",href:"/",color:"dark"},{title:"Pairing",author:"PDF",href:"/",color:"dark"},{title:"Testing Overview",author:"PDF",href:"https://github.ibm.com/garage-catalyst/training-manual-student/blob/master/material/Testing/TDD-overview.pdf",color:"dark"},{title:"TDD",author:"PDF",href:"/",color:"dark"},{title:"UI Design",author:"PDF",href:"/",color:"dark"},{title:"Angular/React",author:"PDF",href:"/",color:"dark"},{title:"JavaScript/TypeScript",author:"PDF",href:"/",color:"dark"}])),l.a.createElement("h2",{className:"landing-page__subheading"},"Cloud-native Development"),l.a.createElement("br",null),l.a.createElement("p",null,"Use the following links to help you deep dive in IBM Cloud Garage development best practices"),l.a.createElement("br",null),l.a.createElement("div",{className:"bx--row"},e([{title:"Micro services",author:"PDF",href:"/",color:"dark"},{title:"API Design",author:"PDF",href:"/",color:"dark"},{title:"Pact Testing",author:"PDF",href:"/",color:"dark"},{title:"Cloud Overview",author:"PDF",href:"/",color:"dark"},{title:"Cloud Databases",author:"PDF",href:"/",color:"dark"}])),l.a.createElement("h2",{className:"landing-page__subheading"},"Cloud-native Deployment"),l.a.createElement("br",null),l.a.createElement("p",null,"Use the following links to help you deep dive in IBM Cloud Garage development best practices"),l.a.createElement("br",null),l.a.createElement("div",{className:"bx--row"},e([{title:"Kubernetes",author:"KataCoda",href:"https://www.katacoda.com/courses/kubernetes/launch-single-node-cluster",color:"dark"},{title:"Docker",author:"Web",href:"/",color:"dark"},{title:"Istio",author:"Video",href:"https://www.youtube.com/watch?v=1iyFq2VaL5Y",color:"dark"},{title:"DevOps",author:"PDF",href:"/",color:"dark"},{title:"Helm",author:"PDF",href:"/",color:"dark"},{title:"Helm",author:"PDF",href:"/",color:"dark"}])))))),l.a.createElement(G.a,Object.assign({},z,{label:"Starter Kits"}),l.a.createElement("div",{className:"bx--grid bx--grid--no-gutter bx--grid--full-width"},l.a.createElement("div",{className:"bx--row landing-page__tab-content"},l.a.createElement("div",{className:"bx--col-lg-16"},"Carbon provides styles and components in Vanilla, React, Angular, and Vue for anyone building on the web."))))))),l.a.createElement("div",{className:"bx--row landing-page__r3"},l.a.createElement("div",{className:"bx--col-md-4 bx--col-lg-4"},l.a.createElement("h3",{className:"landing-page__label"},"IBM Garage Links")),l.a.createElement("div",{className:"bx--col-md-4 bx--col-lg-4"},l.a.createElement("a",{href:"https://github.ibm.com/garage-catalyst/planning",rel:"noopener noreferrer",target:"_blank"},"Planning")),l.a.createElement("div",{className:"bx--col-md-4 bx--col-lg-4"},l.a.createElement("a",{href:"https://github.ibm.com/garage-catalyst/planning/blob/master/docs/governance.md",rel:"noopener noreferrer",target:"_blank"},"Contribution")),l.a.createElement("div",{className:"bx--col-md-4 bx--col-lg-4"},l.a.createElement("a",{href:"https://www.ibm.com/cloud/garage/practices/overview",rel:"noopener noreferrer",target:"_blank"},"Garage Method"))))},K=t(64),V=t(107),J=t(108),W=t(216),Q=t(78),Y=t(76),$=t(82),X=t(84),Z=t(79),ee=t(83),ae=t(77),te=t(80),re=t(26),le=t(81),ne=function(e){var a=e.rows,t=e.headers,r=function(e){var t=a.find(function(a){return a.id===e});return t?t.description:""};return l.a.createElement(W.a,{rows:a,headers:t,render:function(e){var a=e.rows,t=e.headers,n=e.getHeaderProps,c=e.getRowProps,o=e.getTableProps;return l.a.createElement(Q.a,{title:"Carbon Repositories",description:"A collection of public Carbon repositories."},l.a.createElement(Y.a,o(),l.a.createElement($.a,null,l.a.createElement(X.a,null,l.a.createElement(Z.a,null),t.map(function(e){return l.a.createElement(ee.a,n({header:e}),e.header)}))),l.a.createElement(ae.a,null,a.map(function(e){return l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement(te.a,c({row:e}),e.cells.map(function(e){return l.a.createElement(re.a,{key:e.id},e.value)})),l.a.createElement(le.a,{colSpan:t.length+1},l.a.createElement("p",null,r(e.id))))}))))}})},ce=t(62),oe=t(61),ie=t(203),se=t(215),me=t(217);function de(){var e=Object(J.a)(["\n  query REPO_QUERY {\n    # Let's use carbon as our organization\n    organization(login: \"carbon-design-system\") {\n      # We'll grab all the repositories in one go. To load more resources\n      # continuously, see the advanced topics.\n      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {\n        totalCount\n        nodes {\n          url\n          homepageUrl\n          issues(filterBy: { states: OPEN }) {\n            totalCount\n          }\n          stargazers {\n            totalCount\n          }\n          releases(first: 1) {\n            totalCount\n            nodes {\n              name\n            }\n          }\n          name\n          updatedAt\n          createdAt\n          description\n          id\n        }\n      }\n    }\n  }\n"]);return de=function(){return e},e}var ue=Object(ce.b)(de()),be=[{key:"name",header:"Name"},{key:"createdAt",header:"Created"},{key:"updatedAt",header:"Updated"},{key:"issueCount",header:"Open Issues"},{key:"stars",header:"Stars"},{key:"links",header:"Links"}],ge=function(e){var a=e.url,t=e.homepageUrl;return l.a.createElement("ul",{style:{display:"flex"}},l.a.createElement("li",null,l.a.createElement(ie.a,{href:a},"GitHub")),t&&l.a.createElement("li",null,l.a.createElement("span",null,"\xa0|\xa0"),l.a.createElement(ie.a,{href:t},"Homepage")))},pe=function(){var e=Object(r.useState)(0),a=Object(K.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)(0),o=Object(K.a)(c,2),i=o[0],s=o[1],m=Object(r.useState)(10),d=Object(K.a)(m,2),u=d[0],b=d[1];return l.a.createElement("div",{className:"bx--grid bx--grid--full-width bx--grid--no-gutter repo-page"},l.a.createElement("div",{className:"bx--row repo-page__r1"},l.a.createElement("div",{className:"bx--col-lg-16"},l.a.createElement(oe.b,{query:ue},function(e){var a=e.loading,r=e.error,c=e.data.organization;if(a)return l.a.createElement(se.a,{columnCount:be.length+1,rowCount:10,headers:be});if(r)return"Error! ".concat(r.message);var o=c.repositories;n(o.totalCount);var m=function(e){return e.map(function(e){return Object(V.a)({},e,{key:e.id,stars:e.stargazers.totalCount,issueCount:e.issues.totalCount,createdAt:new Date(e.createdAt).toLocaleDateString(),updatedAt:new Date(e.updatedAt).toLocaleDateString(),links:l.a.createElement(ge,{url:e.url,homepageUrl:e.homepageUrl})})})}(o.nodes);return l.a.createElement(l.a.Fragment,null,l.a.createElement(ne,{headers:be,rows:m.slice(i,i+u)}),l.a.createElement(me.a,{totalItems:t,backwardText:"Previous page",forwardText:"Next page",pageSize:u,pageSizes:[5,10,15,25],itemsPerPageText:"Items per page",onChange:function(e){var a=e.page,t=e.pageSize;t!==u&&b(t),s(t*(a-1))}}))}))))},he=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement(u.Content,null,l.a.createElement(x.c,null,l.a.createElement(x.a,{exact:!0,path:"/",component:q}),l.a.createElement(x.a,{path:"/repos",component:pe}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=new ce.a({uri:"https://api.github.com/graphql",headers:{authorization:"Bearer ".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN)}});c.a.render(l.a.createElement(oe.a,{client:Ee},l.a.createElement(v.a,null,l.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[127,1,2]]]);
//# sourceMappingURL=main.90bd9060.chunk.js.map