"use strict";(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8826:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>x,default:()=>u,getServerSideProps:()=>f,getStaticPaths:()=>p,getStaticProps:()=>h,reportWebVitals:()=>m,routeModule:()=>S,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>g});var a=r(7093),o=r(5244),i=r(1323),l=r(1106),s=r(2166),d=r(8435),c=e([l,s]);[l,s]=c.then?(await c)():c;let u=(0,i.l)(d,"default"),h=(0,i.l)(d,"getStaticProps"),p=(0,i.l)(d,"getStaticPaths"),f=(0,i.l)(d,"getServerSideProps"),x=(0,i.l)(d,"config"),m=(0,i.l)(d,"reportWebVitals"),g=(0,i.l)(d,"unstable_getStaticProps"),y=(0,i.l)(d,"unstable_getStaticPaths"),b=(0,i.l)(d,"unstable_getStaticParams"),j=(0,i.l)(d,"unstable_getServerProps"),P=(0,i.l)(d,"unstable_getServerSideProps"),S=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:s.default,Document:l.default},userland:d});n()}catch(e){n(e)}})},5007:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>l});var a=r(997),o=r(3139),i=e([o]);o=(i.then?(await i)():i)[0];let l=()=>a.jsx(o.Global,{styles:`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
    `});n()}catch(e){n(e)}})},687:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>c});var a=r(997),o=r(968),i=r.n(o),l=r(1914),s=r(2210),d=e([l,s]);[l,s]=d.then?(await d)():d;let c=({children:e,router:t})=>(0,a.jsxs)(s.Box,{as:"main",pb:8,children:[(0,a.jsxs)(i(),{children:[a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1 "}),a.jsx("title",{children:"Daniel Rodriguez - Portfolio"})]}),a.jsx(l.Z,{path:t.asPath}),a.jsx(s.Container,{maxW:"container.md",pt:14,children:e})]});n()}catch(e){n(e)}})},3469:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>p});var a=r(997),o=r(1664),i=r.n(o);r(5675);var l=r(2210),s=r(4115),d=r(1836),c=r.n(d),u=e([l,s]);[l,s]=u.then?(await u)():u;let h=s.default.span`
font_weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img{
    transform: rotate(20deg);
}
`,p=()=>a.jsx(i(),{href:"/",children:(0,a.jsxs)(h,{children:[a.jsx(c(),{style:{fontSize:20}})," ",a.jsx(l.Text,{color:(0,l.useColorModeValue)("gray.800","whiteAlpha.900"),fontFamily:"M PLUS Rounded 1c",fontWeight:"bold",ml:3,children:"Daniel Rodriguez"})]})});n()}catch(e){n(e)}})},1914:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>f});var a=r(997),o=r(3469),i=r(1664),l=r.n(i),s=r(5828),d=r.n(s),c=r(1716),u=r(2210),h=e([o,c,u]);[o,c,u]=h.then?(await h)():h;let p=({href:e,path:t,children:r})=>{let n=t===e,o=(0,u.useColorModeValue)("gray200","whiteAlpha.900");return a.jsx(l(),{href:e,children:a.jsx(u.Link,{p:2,bg:n?"glassTeal":void 0,color:n?"#202023":o,children:r})})},f=e=>{let{path:t}=e;return a.jsx(u.Box,{position:"fixed",as:"nav",w:"100%",bg:(0,u.useColorModeValue)("#ffffff40","#20202380"),style:{backdropFilter:"blue(10px"},zIndex:1,...e,children:(0,a.jsxs)(u.Container,{display:"flex",p:2,maxW:"container.md",wrap:"wrap",align:"center",justify:"space-between",children:[a.jsx(u.Flex,{align:"center",mr:5,children:a.jsx(u.Heading,{as:"h1",size:"lg",letterSpacing:"tighter",children:a.jsx(o.Z,{})})}),(0,a.jsxs)(u.Stack,{direction:{base:"column",md:"row"},display:{base:"none",md:"flex"},width:{base:"full",md:"auto"},alignItems:"center",flexGrow:1,mt:{base:4,nmd:0},children:[a.jsx(p,{href:"/works",path:t,children:"Works"}),a.jsx(p,{href:"/posts",path:t,children:"Posts"})]}),(0,a.jsxs)(u.Box,{flex:1,align:"right",children:[a.jsx(c.Z,{}),a.jsx(u.Box,{ml:2,display:{base:"inline-block",md:"none"},children:(0,a.jsxs)(u.Menu,{children:[a.jsx(u.MenuButton,{as:u.IconButton,icon:a.jsx(d(),{}),variant:"outline","aria-label":"Options"}),(0,a.jsxs)(u.MenuList,{children:[a.jsx(l(),{href:"/",passHref:!0,children:a.jsx(u.MenuItem,{as:u.Link,children:"About"})}),a.jsx(l(),{href:"/works",passHref:!0,children:a.jsx(u.MenuItem,{as:u.Link,children:"Works"})}),a.jsx(l(),{href:"/posts",passHref:!0,children:a.jsx(u.MenuItem,{as:u.Link,children:"Posts"})}),a.jsx(l(),{href:"/posts",passHref:!0,children:a.jsx(u.MenuItem,{as:u.Link,href:"https://github.com/danielarodval/danielarodval.github.io",children:"View Source"})})]})]})})]})]})})};n()}catch(e){n(e)}})},1716:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>u});var a=r(997),o=r(2210),i=r(3003),l=r.n(i),s=r(6718),d=r.n(s),c=e([o]);o=(c.then?(await c)():c)[0];let u=()=>{let{toggleColorMode:e}=(0,o.useColorMode)();return a.jsx(o.IconButton,{"aria-label":"Toggle theme",colorScheme:(0,o.useColorModeValue)("purple","orange"),icon:(0,o.useColorModeValue)(a.jsx(l(),{}),a.jsx(d(),{})),onClick:e})};n()}catch(e){n(e)}})},939:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>l});var a=r(2210),o=r(149),i=e([a,o]);[a,o]=i.then?(await i)():i;let l=(0,a.extendTheme)({config:{initialColorMode:"dark",useSystemColorMode:!0},styles:{global:e=>({body:{bg:(0,o.mode)("#f0e7db","#202023")(e)}})},components:{Heading:{variants:{"section-title":{textDecoration:"underline",fontSize:20,textUnderlineOffset:6,textDecorationColor:"#525252",textDecorationThickness:4,marginTop:3,marginBottom:4}}},Link:{baseStyle:e=>({color:(0,o.mode)("#3d7aed","#ff63c3")(e),textUnderlineOffset:3})}},fonts:{heading:"'M PLUS Rounded 1c'"},colors:{grassTeal:"#88ccca"}});n()}catch(e){n(e)}})},8435:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(167),a=n._(r(6689)),o=n._(r(4764)),i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let s={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class d extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||i[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:s.error},a.default.createElement(o.default,null,a.default.createElement("title",null,e?e+": "+r:"Application error: a client-side exception has occurred")),a.default.createElement("div",{style:s.desc},a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?a.default.createElement("h1",{className:"next-error-h1",style:s.h1},e):null,a.default.createElement("div",{style:s.wrap},a.default.createElement("h2",{style:s.h2},this.props.title||e?r:a.default.createElement(a.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}d.displayName="ErrorPage",d.getInitialProps=l,d.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2166:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>u});var a=r(997),o=r(6689),i=r(2210),l=r(687),s=r(5007),d=r(939),c=e([i,l,s,d]);[i,l,s,d]=c.then?(await c)():c;let u=({Component:e,pageProps:t,router:r})=>(0,a.jsxs)(i.ChakraProvider,{theme:d.Z,children:[a.jsx(s.Z,{}),a.jsx(l.Z,{router:r,children:(0,o.createElement)(e,{...t,key:r.route})})]});n()}catch(e){n(e)}})},1106:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>c});var a=r(997),o=r(2210),i=r(6859),l=r.n(i),s=r(939),d=e([o,s]);[o,s]=d.then?(await d)():d;class c extends l(){render(){return(0,a.jsxs)(i.Html,{lang:"en",children:[a.jsx(i.Head,{}),(0,a.jsxs)("body",{children:[a.jsx(o.ColorModeScript,{initialColorMode:s.Z.config.initialColorMode}),a.jsx(i.Main,{}),a.jsx(i.NextScript,{})]})]})}}n()}catch(e){n(e)}})},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1836:e=>{e.exports=require("@mui/icons-material/AnalyticsRounded")},3003:e=>{e.exports=require("@mui/icons-material/DarkModeRounded")},6718:e=>{e.exports=require("@mui/icons-material/LightModeRounded")},5828:e=>{e.exports=require("@mui/icons-material/MenuRounded")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},2210:e=>{e.exports=import("@chakra-ui/react")},149:e=>{e.exports=import("@chakra-ui/theme-tools")},3139:e=>{e.exports=import("@emotion/react")},4115:e=>{e.exports=import("@emotion/styled")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[617,61,859],()=>r(8826));module.exports=n})();