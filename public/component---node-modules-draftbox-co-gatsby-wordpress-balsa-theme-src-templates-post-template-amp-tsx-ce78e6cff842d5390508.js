(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+Dh2":function(e,t,a){"use strict";a("pJf4"),a("3nLz");var r=a("sbDz"),n=a("q1tI"),i=a.n(n),l=a("TJpk"),o=a.n(l),s=a("CxY0"),c=a.n(s),m=a("nlFS"),d=a.n(m);t.a=function(e){var t,a,n,l,s=e.data,m=e.amp,p=e.location,u=r.data,g=u.site.siteMetadata.siteUrl,h=(u.site.siteMetadata.siteTitle,c.a.resolve(g,p.pathname)),f=null===(t=s.featured_media)||void 0===t||null===(a=t.localFile)||void 0===a||null===(n=a.seo)||void 0===n?void 0:n.fixed.src,v=u.site.siteMetadata,E=f?c.a.resolve(v.siteUrl,f):v.facebookCard.imageUrl?c.a.resolve(v.siteUrl,v.facebookCard.imageUrl):v.coverUrl?c.a.resolve(v.siteUrl,v.coverUrl):null,w=f?c.a.resolve(v.siteUrl,f):v.twitterCard.imageUrl?c.a.resolve(v.siteUrl,v.twitterCard.imageUrl):v.coverUrl?c.a.resolve(v.siteUrl,v.coverUrl):null,U=s.author,b=d.a.map(s.tags,(function(e){return e.name})),y=b[0]||"",P=f?c.a.resolve(v.siteUrl,f):v.coverUrl||v.facebookCard.imageUrl||v.twitterCard.imageUrl?c.a.resolve(v.siteUrl,v.coverUrl||v.facebookCard.imageUrl||v.twitterCard.imageUrl):null,T=v.logoUrl||v.alternateLogoUrl?c.a.resolve(v.siteUrl,v.logoUrl||v.alternateLogoUrl):null,k={"@context":"https://schema.org/","@type":"Article",author:U?{"@type":"Person",name:U.name,image:void 0,sameAs:void 0}:null,keywords:b.length?b.join(", "):void 0,headline:s.plainTitle||v.siteTitle,url:h,datePublished:s.date,dateModified:s.modified,image:P?{"@type":"ImageObject",url:P,width:v.shareImageWidth,height:v.shareImageHeight}:void 0,publisher:{"@type":"Organization",name:v.siteTitle,logo:T?{"@type":"ImageObject",url:T,width:60,height:60}:void 0},description:s.plainExcerpt||v.siteDescription,mainEntityOfPage:{"@type":"WebPage","@id":v.siteUrl}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement("title",null,(l=s.plainTitle)?l.charAt(0).toUpperCase()+l.slice(1):""),!m&&i.a.createElement("link",{rel:"ampHtml",href:h+"/amp"}),i.a.createElement("meta",{name:"description",content:s.plainExcerpt}),!m&&i.a.createElement("link",{rel:"canonical",href:h}),i.a.createElement("meta",{property:"og:site_name",content:v.siteTitle}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:s.plainTitle||v.siteTitle}),i.a.createElement("meta",{property:"og:description",content:s.plainExcerpt||v.siteDescription}),i.a.createElement("meta",{property:"og:url",content:h}),i.a.createElement("meta",{property:"article:published_time",content:new Date(s.date).toISOString()}),i.a.createElement("meta",{property:"article:modified_time",content:new Date(s.modified).toISOString()}),b.map((function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})})),U&&i.a.createElement("meta",{property:"article:author",content:U.name}),i.a.createElement("meta",{name:"twitter:title",content:s.plainTitle||v.siteTitle}),i.a.createElement("meta",{name:"twitter:description",content:s.plainExcerpt||v.siteDescription}),i.a.createElement("meta",{name:"twitter:url",content:h}),U&&i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),U&&i.a.createElement("meta",{name:"twitter:data1",content:U.name}),y&&i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),y&&i.a.createElement("meta",{name:"twitter:data2",content:y}),w&&i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),w&&i.a.createElement("meta",{name:"twitter:image",content:w}),E&&i.a.createElement("meta",{property:"og:image",content:E}),v.twitterCard.username&&i.a.createElement("meta",{name:"twitter:site",content:v.twitterCard.username}),""!==v.facebookCard.appId&&i.a.createElement("meta",{property:"fb:app_id",content:v.facebookCard.appId}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(k,void 0,4))))}},"1/Ks":function(e,t,a){"use strict";a("EU/P")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},HQAx:function(e,t,a){"use strict";var r=a("P8UN"),n=a("ewoU"),i=a("DFzH"),l=a("kiRH"),o=a("nONw"),s=a("ytzU");r(r.P,"Array",{flatMap:function(e){var t,a,r=i(this);return o(e),t=l(r.length),a=s(r,0),n(a,r,r,t,0,1,e,arguments[1]),a}}),a("Dq1/")("flatMap")},I17o:function(e,t,a){"use strict";var r=a("P8UN"),n=a("pTxf"),i=a("CL53"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*l,"String",{padEnd:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"QzX/":function(e,t,a){"use strict";a("EU/P")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},ewoU:function(e,t,a){"use strict";var r=a("tuyV"),n=a("BjK0"),i=a("kiRH"),l=a("ot9L"),o=a("sOol")("isConcatSpreadable");e.exports=function e(t,a,s,c,m,d,p,u){for(var g,h,f=m,v=0,E=!!p&&l(p,u,3);v<c;){if(v in s){if(g=E?E(s[v],v,a):s[v],h=!1,n(g)&&(h=void 0!==(h=g[o])?!!h:r(g)),h&&d>0)f=e(t,a,g,i(g.length),f,d-1)-1;else{if(f>=9007199254740991)throw TypeError();t[f]=g}f++}v++}return f}},lizw:function(e,t,a){"use strict";var r=a("P8UN"),n=a("pTxf"),i=a("CL53"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*l,"String",{padStart:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},pTxf:function(e,t,a){var r=a("kiRH"),n=a("gd4K"),i=a("ap2Z");e.exports=function(e,t,a,l){var o=String(i(e)),s=o.length,c=void 0===a?" ":String(a),m=r(t);if(m<=s||""==c)return o;var d=m-s,p=n.call(c,Math.ceil(d/c.length));return p.length>d&&(p=p.slice(0,d)),l?p+o:o+p}},sbDz:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://durgeshgupta.com","siteTitle":"Contact Durgesh Gupta","metadata":{"title":"Durgesh Gupta - Full Stack Web Developer","description":"Freelance web designer, web developer and marketer based in Ambarnath, Thane, Maharashtra"},"twitterCard":{"title":"Contact Durgesh Gupta","description":"Freelance web designer, web developer and marketer based in Ambarnath, Thane, Maharashtra","imageUrl":"","username":""},"facebookCard":{"title":"Contact Durgesh Gupta","description":"Freelance web designer, web developer and marketer based in Ambarnath, Thane, Maharashtra","imageUrl":"","appId":""},"siteDescription":"Freelance web designer, web developer and marketer based in Ambarnath, Thane, Maharashtra","language":"en-US","logoUrl":"","iconUrl":"","coverUrl":"","alternateLogoUrl":"","shareImageWidth":1000,"shareImageHeight":523}}}}')},zB44:function(e,t,a){"use strict";a.r(t),a.d(t,"postDataQuery",(function(){return o}));a("pJf4");var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("+Dh2");t.default=function(e){var t,a,r,o=e.data,s=e.location,c=e.pageContext,m=o.wordpressPost;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,{data:m,amp:c.amp,location:s}),n.a.createElement("header",{className:"main-header"},n.a.createElement("nav",{className:"blog-title"},n.a.createElement(i.Link,{to:"/",dangerouslySetInnerHTML:{__html:c.title}}))),n.a.createElement("main",{className:"content",role:"main"},n.a.createElement("article",{className:"post tag-getting-started"},n.a.createElement("header",{className:"post-header"},n.a.createElement("h1",{className:"post-title",dangerouslySetInnerHTML:{__html:o.wordpressPost.title}}),n.a.createElement("div",{className:"post-meta"},n.a.createElement("div",{className:"post-meta-avatars"},n.a.createElement("p",{className:"author"},o.wordpressPost.author.name)),n.a.createElement("time",{className:"post-date",dateTime:"{{date format='DD-MM-YYYY'}}"},o.wordpressPost.date)," ")),(null===(t=o.wordpressPost.featured_media)||void 0===t||null===(a=t.localFile)||void 0===a||null===(r=a.childImageSharp)||void 0===r?void 0:r.fluid)&&n.a.createElement("figure",{className:"post-image"},n.a.createElement("img",{src:o.wordpressPost.featured_media.localFile.childImageSharp.fluid.src,alt:o.wordpressPost.title})),n.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:o.wordpressPost.content}}),o.wordpressPost.tags&&o.wordpressPost.tags.length>0&&n.a.createElement("div",{className:"tags"},n.a.createElement("span",null,"Tag:"),n.a.createElement("a",{className:"tag",href:"/tag/"+o.wordpressPost.tags[0].slug},o.wordpressPost.tags[0].name)),n.a.createElement("div",{className:"comment-button-container"},n.a.createElement("button",null,n.a.createElement("a",{href:""+o.wordpressPost.slug},"View original article"))))))};var o="1345076543"},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),n=a("Wadk")(6),i="findIndex",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r(r.P+r.F*l,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(i)}}]);
//# sourceMappingURL=component---node-modules-draftbox-co-gatsby-wordpress-balsa-theme-src-templates-post-template-amp-tsx-ce78e6cff842d5390508.js.map