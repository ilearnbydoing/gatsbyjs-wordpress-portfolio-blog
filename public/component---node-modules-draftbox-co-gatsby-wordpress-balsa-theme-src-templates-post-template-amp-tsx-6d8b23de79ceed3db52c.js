(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+Dh2":function(e,t,a){"use strict";a("pJf4"),a("3nLz");var r=a("sbDz"),n=a("q1tI"),i=a.n(n),l=a("TJpk"),o=a.n(l),s=a("CxY0"),c=a.n(s),m=a("nlFS"),d=a.n(m);t.a=function(e){var t,a,n,l,s=e.data,m=e.amp,p=e.location,u=r.data,g=u.site.siteMetadata.siteUrl,f=(u.site.siteMetadata.siteTitle,c.a.resolve(g,p.pathname)),h=null===(t=s.featured_media)||void 0===t||null===(a=t.localFile)||void 0===a||null===(n=a.seo)||void 0===n?void 0:n.fixed.src,E=u.site.siteMetadata,v=h?c.a.resolve(E.siteUrl,h):E.facebookCard.imageUrl?c.a.resolve(E.siteUrl,E.facebookCard.imageUrl):E.coverUrl?c.a.resolve(E.siteUrl,E.coverUrl):null,y=h?c.a.resolve(E.siteUrl,h):E.twitterCard.imageUrl?c.a.resolve(E.siteUrl,E.twitterCard.imageUrl):E.coverUrl?c.a.resolve(E.siteUrl,E.coverUrl):null,w=s.author,U=d.a.map(s.tags,(function(e){return e.name})),b=U[0]||"",M=h?c.a.resolve(E.siteUrl,h):E.coverUrl||E.facebookCard.imageUrl||E.twitterCard.imageUrl?c.a.resolve(E.siteUrl,E.coverUrl||E.facebookCard.imageUrl||E.twitterCard.imageUrl):null,P=E.logoUrl||E.alternateLogoUrl?c.a.resolve(E.siteUrl,E.logoUrl||E.alternateLogoUrl):null,T={"@context":"https://schema.org/","@type":"Article",author:w?{"@type":"Person",name:w.name,image:void 0,sameAs:void 0}:null,keywords:U.length?U.join(", "):void 0,headline:s.plainTitle||E.siteTitle,url:f,datePublished:s.date,dateModified:s.modified,image:M?{"@type":"ImageObject",url:M,width:E.shareImageWidth,height:E.shareImageHeight}:void 0,publisher:{"@type":"Organization",name:E.siteTitle,logo:P?{"@type":"ImageObject",url:P,width:60,height:60}:void 0},description:s.plainExcerpt||E.siteDescription,mainEntityOfPage:{"@type":"WebPage","@id":E.siteUrl}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement("title",null,(l=s.plainTitle)?l.charAt(0).toUpperCase()+l.slice(1):""),!m&&i.a.createElement("link",{rel:"ampHtml",href:f+"/amp"}),i.a.createElement("meta",{name:"description",content:s.plainExcerpt}),!m&&i.a.createElement("link",{rel:"canonical",href:f}),i.a.createElement("meta",{property:"og:site_name",content:E.siteTitle}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:s.plainTitle||E.siteTitle}),i.a.createElement("meta",{property:"og:description",content:s.plainExcerpt||E.siteDescription}),i.a.createElement("meta",{property:"og:url",content:f}),i.a.createElement("meta",{property:"article:published_time",content:new Date(s.date).toISOString()}),i.a.createElement("meta",{property:"article:modified_time",content:new Date(s.modified).toISOString()}),U.map((function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})})),w&&i.a.createElement("meta",{property:"article:author",content:w.name}),i.a.createElement("meta",{name:"twitter:title",content:s.plainTitle||E.siteTitle}),i.a.createElement("meta",{name:"twitter:description",content:s.plainExcerpt||E.siteDescription}),i.a.createElement("meta",{name:"twitter:url",content:f}),w&&i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),w&&i.a.createElement("meta",{name:"twitter:data1",content:w.name}),b&&i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),b&&i.a.createElement("meta",{name:"twitter:data2",content:b}),y&&i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),y&&i.a.createElement("meta",{name:"twitter:image",content:y}),v&&i.a.createElement("meta",{property:"og:image",content:v}),E.twitterCard.username&&i.a.createElement("meta",{name:"twitter:site",content:E.twitterCard.username}),""!==E.facebookCard.appId&&i.a.createElement("meta",{property:"fb:app_id",content:E.facebookCard.appId}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(T,void 0,4))))}},"1/Ks":function(e,t,a){"use strict";a("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},HQAx:function(e,t,a){"use strict";var r=a("P8UN"),n=a("ewoU"),i=a("DFzH"),l=a("kiRH"),o=a("nONw"),s=a("ytzU");r(r.P,"Array",{flatMap:function(e){var t,a,r=i(this);return o(e),t=l(r.length),a=s(r,0),n(a,r,r,t,0,1,e,arguments[1]),a}}),a("Dq1/")("flatMap")},I17o:function(e,t,a){"use strict";var r=a("P8UN"),n=a("pTxf"),i=a("CL53"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*l,"String",{padEnd:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"QzX/":function(e,t,a){"use strict";a("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},ewoU:function(e,t,a){"use strict";var r=a("tuyV"),n=a("BjK0"),i=a("kiRH"),l=a("ot9L"),o=a("sOol")("isConcatSpreadable");e.exports=function e(t,a,s,c,m,d,p,u){for(var g,f,h=m,E=0,v=!!p&&l(p,u,3);E<c;){if(E in s){if(g=v?v(s[E],E,a):s[E],f=!1,n(g)&&(f=void 0!==(f=g[o])?!!f:r(g)),f&&d>0)h=e(t,a,g,i(g.length),h,d-1)-1;else{if(h>=9007199254740991)throw TypeError();t[h]=g}h++}E++}return h}},lizw:function(e,t,a){"use strict";var r=a("P8UN"),n=a("pTxf"),i=a("CL53"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*l,"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},pTxf:function(e,t,a){var r=a("kiRH"),n=a("gd4K"),i=a("ap2Z");e.exports=function(e,t,a,l){var o=String(i(e)),s=o.length,c=void 0===a?" ":String(a),m=r(t);if(m<=s||""==c)return o;var d=m-s,p=n.call(c,Math.ceil(d/c.length));return p.length>d&&(p=p.slice(0,d)),l?p+o:o+p}},sbDz:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://my-blog-230a.netlify.app","siteTitle":"My Blog","metadata":{"title":"My Blog","description":"My Life My Journey"},"twitterCard":{"title":"My Blog","description":"My Life My Journey","imageUrl":"","username":""},"facebookCard":{"title":"My Blog","description":"My Life My Journey","imageUrl":"","appId":""},"siteDescription":"My Life My Journey","language":"en-US","logoUrl":"","iconUrl":"","coverUrl":"","alternateLogoUrl":"","shareImageWidth":1000,"shareImageHeight":523}}}}')},zB44:function(e,t,a){"use strict";a.r(t),a.d(t,"postDataQuery",(function(){return o}));a("pJf4");var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("+Dh2");t.default=function(e){var t,a,r,o=e.data,s=e.location,c=e.pageContext,m=o.wordpressPost;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{data:m,amp:c.amp,location:s}),n.a.createElement("header",{className:"main-header"},n.a.createElement("nav",{className:"blog-title"},n.a.createElement(i.Link,{to:"/",dangerouslySetInnerHTML:{__html:c.title}}))),n.a.createElement("main",{className:"content",role:"main"},n.a.createElement("article",{className:"post tag-getting-started"},n.a.createElement("header",{className:"post-header"},n.a.createElement("h1",{className:"post-title",dangerouslySetInnerHTML:{__html:o.wordpressPost.title}}),n.a.createElement("div",{className:"post-meta"},n.a.createElement("div",{className:"post-meta-avatars"},n.a.createElement("p",{className:"author"},o.wordpressPost.author.name)),n.a.createElement("time",{className:"post-date",dateTime:"{{date format='DD-MM-YYYY'}}"},o.wordpressPost.date)," ")),(null===(t=o.wordpressPost.featured_media)||void 0===t||null===(a=t.localFile)||void 0===a||null===(r=a.childImageSharp)||void 0===r?void 0:r.fluid)&&n.a.createElement("figure",{className:"post-image"},n.a.createElement("img",{src:o.wordpressPost.featured_media.localFile.childImageSharp.fluid.src,alt:o.wordpressPost.title})),n.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:o.wordpressPost.content}}),o.wordpressPost.tags&&o.wordpressPost.tags.length>0&&n.a.createElement("div",{className:"tags"},n.a.createElement("span",null,"Tag:"),n.a.createElement("a",{className:"tag",href:"/tag/"+o.wordpressPost.tags[0].slug},o.wordpressPost.tags[0].name)),n.a.createElement("div",{className:"comment-button-container"},n.a.createElement("button",null,n.a.createElement("a",{href:""+o.wordpressPost.slug},"View original article"))))))};var o="1345076543"},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),n=a("Wadk")(6),i="findIndex",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r(r.P+r.F*l,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(i)}}]);
//# sourceMappingURL=component---node-modules-draftbox-co-gatsby-wordpress-balsa-theme-src-templates-post-template-amp-tsx-6d8b23de79ceed3db52c.js.map