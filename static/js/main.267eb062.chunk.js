(this["webpackJsonprick-and-morty-react"]=this["webpackJsonprick-and-morty-react"]||[]).push([[0],{12:function(e,t,a){e.exports={Modal_Wrapper:"Modal_Modal_Wrapper__35qKe",Modal_Body:"Modal_Modal_Body__2Q-go",Modal_Title:"Modal_Modal_Title__2_y7F",Modal_Image:"Modal_Modal_Image__3u_L0",Modal_CloseBtn:"Modal_Modal_CloseBtn__1nsAf"}},14:function(e,t,a){e.exports={CharacterItem:"CharactersItem_CharacterItem__PRQ0H",CharacterItem_ImageWrapper:"CharactersItem_CharacterItem_ImageWrapper__1GzXb",CharacterItem_Image:"CharactersItem_CharacterItem_Image__3dlGR",CharacterItem_InfoWrapper:"CharactersItem_CharacterItem_InfoWrapper__3gRzF",CharacterItem_Name:"CharactersItem_CharacterItem_Name__3R7dD",CharacterItem_InfoText:"CharactersItem_CharacterItem_InfoText__1Xjq4",CharacterItem_Actions:"CharactersItem_CharacterItem_Actions__3yDZn",CharacterItem_Btn:"CharactersItem_CharacterItem_Btn__jOOEU"}},21:function(e,t,a){e.exports={HomePage:"HomePage_HomePage__2cPEp",HomePage_Container:"HomePage_HomePage_Container__1wLL-",HomePage_ContentWrapper:"HomePage_HomePage_ContentWrapper__2fD8I",HomePage_ContentItem:"HomePage_HomePage_ContentItem__b2Jhm",HomePage_Footer:"HomePage_HomePage_Footer__WKQ2D"}},26:function(e,t,a){e.exports={AppBar:"AppBar_AppBar__1kkiM",AppBar_Container:"AppBar_AppBar_Container__64Qs6",AppBar_LogoWrapper:"AppBar_AppBar_LogoWrapper__v-PuS",AppBar_LogoImage:"AppBar_AppBar_LogoImage__23Qw2"}},29:function(e,t,a){e.exports={FilterInput:"FilterInput_FilterInput__23CY3"}},48:function(e,t,a){e.exports={CharactersList:"CharactersList_CharactersList__1LtpR"}},5:function(e,t,a){e.exports={Pagination_Wrapper:"Pagination_Pagination_Wrapper__60DyX",Pagination_Separator:"Pagination_Pagination_Separator__iPwtC",Pagination_Item:"Pagination_Pagination_Item__27tWw",Pagination_Item_Active:"Pagination_Pagination_Item_Active__VqKkZ",Pagination_Nav:"Pagination_Pagination_Nav__1skTs"}},60:function(e,t,a){},7:function(e,t,a){e.exports={Filter:"Filter_Filter__1hJWz",Filter_Title:"Filter_Filter_Title__1xvKE",Filter_Item:"Filter_Filter_Item__1GY1Y",Filter_Actions:"Filter_Filter_Actions__1q4q-",Filter_Btn:"Filter_Filter_Btn__2dxHZ",Filter_Btn_Apply:"Filter_Filter_Btn_Apply__15bX7",Filter_Btn_Clear:"Filter_Filter_Btn_Clear__28KZa"}},98:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a(17),s=a.n(c),i=a(23),l=a(20),o=(a(59),a(60),a(4)),_=a(3),u=a(21),d=a.n(u),p=l.c,j=a(18),m=a(25),h=a.n(m),b=a(33);!function(e){e.SET_IS_LOADING="SET_IS_LOADING",e.SET_ERROR="SET_ERROR",e.SET_CHARACTERS="SET_CHARACTERS",e.SET_PAGES_COUNT="SET_PAGES_COUNT",e.SET_CURRENT_PAGE="SET_CURRENT_PAGE",e.SET_SELECTED_CHARACTER="SET_SELECTED_CHARACTER",e.SET_IS_MODAL_OPEN="SET_IS_MODAL_OPEN"}(n||(n={}));var O,g=a(46),C=a(47),v=a(34),I=a.n(v),x=function(){function e(){Object(g.a)(this,e)}return Object(C.a)(e,null,[{key:"getCharacters",value:function(e){return I.a.get("https://rickandmortyapi.com/api/character/",{params:Object(_.a)(Object(_.a)({},e),{},{gender:"All"===e.gender?"":e.gender,status:"All"===e.status?"":e.status})})}},{key:"getSingleCharacter",value:function(e){return I.a.get("https://rickandmortyapi.com/api/character/".concat(e))}}]),e}(),f={setCharacters:function(e){return{type:n.SET_CHARACTERS,payload:e}},setSelectedCharacter:function(e){return{type:n.SET_SELECTED_CHARACTER,payload:e}},setIsLoading:function(e){return{type:n.SET_IS_LOADING,payload:e}},setError:function(e){return{type:n.SET_ERROR,payload:e}},setPagesCount:function(e){return{type:n.SET_PAGES_COUNT,payload:e}},setCurrentPage:function(e){return{type:n.SET_CURRENT_PAGE,payload:e}},setIsModalOpen:function(e){return{type:n.SET_IS_MODAL_OPEN,payload:e}},fetchCharacters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1};return function(){var t=Object(b.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(f.setIsLoading(!0)),a(f.setError("")),t.next=5,x.getCharacters(e);case 5:n=t.sent,a(f.setPagesCount(n.data.info.pages)),a(f.setCharacters(n.data.results)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a(f.setError("Nothing found"));case 13:return t.prev=13,a(f.setIsLoading(!1)),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(e){return t.apply(this,arguments)}}()},fetchSingleCharacter:function(e){return function(){var t=Object(b.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.getSingleCharacter(e);case 3:n=t.sent,a(f.setSelectedCharacter(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}};!function(e){e.SET_FILTER_DATA="SET_FILTER_DATA"}(O||(O={}));var E,N={setFilterData:function(e){return{type:O.SET_FILTER_DATA,payload:e}}},P=Object(_.a)(Object(_.a)({},f),N),A=function(){var e=Object(l.b)();return Object(j.b)(P,e)},T=a(22),S=a(15),y=a.n(S),F=a(7),R=a.n(F),L=a(51),M=a(1),k=function(e){var t=e.options,a=e.onChange,n=e.value,r=e.name;return Object(M.jsxs)(M.Fragment,{children:[r&&Object(M.jsx)("span",{children:r}),Object(M.jsx)(L.a,{value:n.value?n:t[0],options:t,defaultValue:t[0],isSearchable:!1,onChange:a})]})},B=a(29),H=a.n(B),D=function(e){var t=e.label,a=e.value,n=e.placeholder,r=e.onChange;return Object(M.jsx)("div",{className:H.a.FilterInput_Wrapper,children:Object(M.jsxs)("label",{children:[!!t&&Object(M.jsx)("span",{className:H.a.FilterInput_Label,children:t}),Object(M.jsx)("input",{className:H.a.FilterInput,type:"text",value:a,onChange:r,placeholder:n})]})})},W=function(){var e=p((function(e){return e.filter})),t=e.statusOptions,a=e.genderOptions,n=A(),c=n.setFilterData,s=n.setCurrentPage,i=Object(r.useState)(""),l=Object(T.a)(i,2),o=l[0],_=l[1],u=Object(r.useState)(""),d=Object(T.a)(u,2),j=d[0],m=d[1],h=Object(r.useState)(""),b=Object(T.a)(h,2),O=b[0],g=b[1],C=Object(r.useState)(""),v=Object(T.a)(C,2),I=v[0],x=v[1],f=Object(r.useState)(""),E=Object(T.a)(f,2),N=E[0],P=E[1];return Object(M.jsxs)("div",{className:R.a.Filter,children:[Object(M.jsx)("div",{className:R.a.Filter_Header,children:Object(M.jsx)("h5",{className:R.a.Filter_Title,children:"Characters filter"})}),Object(M.jsxs)("div",{className:R.a.Filter_Body,children:[Object(M.jsx)("div",{className:R.a.Filter_Item,children:Object(M.jsx)(k,{options:t,onChange:function(e){(null===e||void 0===e?void 0:e.value)&&m(e.value)},value:{value:j,label:j},name:"Status"})}),Object(M.jsx)("div",{className:R.a.Filter_Item,children:Object(M.jsx)(k,{options:a,onChange:function(e){(null===e||void 0===e?void 0:e.value)&&g(e.value)},value:{value:O,label:O},name:"Gender"})}),Object(M.jsx)("div",{className:R.a.Filter_Item,children:Object(M.jsx)(D,{value:o,onChange:function(e){_(e.target.value)},label:"Name",placeholder:"Enter part of name"})}),Object(M.jsx)("div",{className:R.a.Filter_Item,children:Object(M.jsx)(D,{value:N,onChange:function(e){P(e.target.value)},label:"Type",placeholder:"Enter part of type"})}),Object(M.jsx)("div",{className:R.a.Filter_Item,children:Object(M.jsx)(D,{value:I,onChange:function(e){x(e.target.value)},label:"Species",placeholder:"Enter part of species"})})]}),Object(M.jsxs)("div",{className:R.a.Filter_Actions,children:[Object(M.jsx)("button",{className:y()(R.a.Filter_Btn,R.a.Filter_Btn_Apply),onClick:function(){s(1),c({name:o,species:I,type:N,gender:O,status:j})},children:"Apply"}),Object(M.jsx)("button",{className:y()(R.a.Filter_Btn,R.a.Filter_Btn_Clear),onClick:function(){m(""),g(""),_(""),P(""),x(""),c({})},children:"Clear All"})]})]})},G=a(48),w=a.n(G),U=a(14),q=a.n(U),K=function(e){var t,a=e.character,n=e.onClick;return Object(M.jsxs)("div",{className:q.a.CharacterItem,children:[Object(M.jsx)("div",{className:q.a.CharacterItem_ImageWrapper,children:Object(M.jsx)("img",{className:q.a.CharacterItem_Image,src:a.image,alt:a.name})}),Object(M.jsxs)("div",{className:q.a.CharacterItem_InfoWrapper,children:[Object(M.jsx)("h4",{className:q.a.CharacterItem_Name,children:a.name}),Object(M.jsxs)("span",{className:q.a.CharacterItem_InfoText,children:[(t=a.status,t.charAt(0).toUpperCase()+t.slice(1))," - ",a.species]}),Object(M.jsxs)("span",{className:q.a.CharacterItem_InfoText,children:["Gender: ",a.gender]}),Object(M.jsxs)("span",{className:q.a.CharacterItem_InfoText,children:["Type: ",a.type?a.type:"No info"]}),Object(M.jsx)("div",{className:q.a.CharacterItem_Actions,children:Object(M.jsx)("button",{className:q.a.CharacterItem_Btn,onClick:function(){return n(a.id)},children:"View Details"})})]})]})},Q=function(e){var t=e.characters,a=A(),n=a.fetchSingleCharacter,r=a.setIsModalOpen,c=function(e){n(e),r(!0)};return Object(M.jsx)("div",{className:w.a.CharactersList,children:t.map((function(e){return Object(M.jsx)(K,{character:e,onClick:c},e.id)}))})},J=a(24),X=a(5),Z=a.n(X),z=function(e){var t=e.currentPage,a=e.totalPages,n=e.onPageChange;return 1===a?null:Object(M.jsxs)("div",{className:Z.a.Pagination_Wrapper,children:[1!==t&&Object(M.jsx)("button",{onClick:function(){return n(t-1)},type:"button",className:y()(Z.a.Pagination_Item,Z.a.Pagination_Nav),children:"<"}),Object(M.jsx)("button",{onClick:function(){return n(1)},type:"button",className:y()(Z.a.Pagination_Item,Object(J.a)({},Z.a.Pagination_Item_Active,1===t)),children:1}),t>3&&Object(M.jsx)("div",{className:Z.a.Pagination_Separator,children:"..."}),t===a&&a>3&&Object(M.jsx)("button",{onClick:function(){return n(t-2)},type:"button",className:Z.a.Pagination_Item,children:t-2}),t>2&&Object(M.jsx)("button",{onClick:function(){return n(t-1)},type:"button",className:Z.a.Pagination_Item,children:t-1}),1!==t&&t!==a&&Object(M.jsx)("button",{onClick:function(){return n(t)},type:"button",className:y()(Z.a.Pagination_Item,Z.a.Pagination_Item_Active),children:t}),t<a-1&&Object(M.jsx)("button",{onClick:function(){return n(t+1)},type:"button",className:Z.a.Pagination_Item,children:t+1}),1===t&&a>3&&Object(M.jsx)("button",{onClick:function(){return n(t+2)},type:"button",className:Z.a.Pagination_Item,children:t+2}),t<a-2&&Object(M.jsx)("div",{className:Z.a.Pagination_Separator,children:"..."}),Object(M.jsx)("button",{onClick:function(){return n(a)},type:"button",className:y()(Z.a.Pagination_Item,Object(J.a)({},Z.a.Pagination_Item_Active,t===a)),children:a}),t!==a&&Object(M.jsx)("button",{onClick:function(){return n(t+1)},type:"button",className:y()(Z.a.Pagination_Item,Z.a.Pagination_Nav),children:">"})]})},V=a(12),Y=a.n(V),$=function(e){var t=e.character,a=e.onClose;return Object(M.jsx)("div",{className:Y.a.Modal_Wrapper,onClick:a,children:Object(M.jsxs)("div",{className:Y.a.Modal_Body,onClick:function(e){return e.stopPropagation()},children:[Object(M.jsx)("button",{className:Y.a.Modal_CloseBtn,onClick:a}),Object(M.jsx)("h4",{className:Y.a.Modal_Title,children:null===t||void 0===t?void 0:t.name}),Object(M.jsx)("div",{className:Y.a.Modal_ImageWrapper,children:Object(M.jsx)("img",{className:Y.a.Modal_Image,src:null===t||void 0===t?void 0:t.image,alt:null===t||void 0===t?void 0:t.name})}),Object(M.jsxs)("ul",{className:Y.a.Modal_InfoList,children:[Object(M.jsxs)("li",{className:Y.a.Modal_InfoList_Item,children:[Object(M.jsx)("span",{children:"ID: "}),Object(M.jsx)("span",{children:null===t||void 0===t?void 0:t.id})]}),Object(M.jsxs)("li",{className:Y.a.Modal_InfoList_Item,children:[Object(M.jsx)("span",{children:"Status: "}),Object(M.jsx)("span",{children:null===t||void 0===t?void 0:t.status})]}),Object(M.jsxs)("li",{className:Y.a.Modal_InfoList_Item,children:[Object(M.jsx)("span",{children:"Gender: "}),Object(M.jsx)("span",{children:null===t||void 0===t?void 0:t.gender})]}),Object(M.jsxs)("li",{className:Y.a.Modal_InfoList_Item,children:[Object(M.jsx)("span",{children:"Species: "}),Object(M.jsx)("span",{children:null===t||void 0===t?void 0:t.species})]}),Object(M.jsxs)("li",{className:Y.a.Modal_InfoList_Item,children:[Object(M.jsx)("span",{children:"Type: "}),Object(M.jsx)("span",{children:(null===t||void 0===t?void 0:t.type)?t.type:"No info"})]})]})]})})},ee=function(){var e=A(),t=e.fetchCharacters,a=e.setCurrentPage,n=e.setIsModalOpen,c=e.setSelectedCharacter,s=p((function(e){return e.characters})),i=s.characters,l=s.pagesCount,o=s.isLoading,u=s.error,j=s.currentPage,m=s.isModalOpen,h=s.selectedCharacter,b=p((function(e){return e.filter})).filterData;Object(r.useEffect)((function(){t(Object(_.a)(Object(_.a)({},b),{},{page:j}))}),[j,b]);return Object(M.jsxs)("div",{className:d.a.HomePage_Container,children:[m&&Object(M.jsx)($,{character:h,onClose:function(){n(!1),c({})}}),Object(M.jsxs)("div",{className:d.a.HomePage_ContentWrapper,children:[Object(M.jsx)("div",{className:d.a.HomePage_ContentItem,children:Object(M.jsx)(W,{})}),Object(M.jsxs)("div",{className:d.a.HomePage_ContentItem,children:[o&&Object(M.jsx)("h1",{children:"Loading..."}),u&&Object(M.jsx)("h1",{children:u}),!o&&!u&&Object(M.jsx)(Q,{characters:i})]})]}),Object(M.jsx)("div",{className:d.a.HomePage_Footer,children:!u&&Object(M.jsx)(z,{currentPage:j,totalPages:l,onPageChange:function(e){a(e)}})})]})};!function(e){e.HOME="/"}(E||(E={}));var te=[{path:"/",component:ee,exact:!0}],ae=function(){return Object(M.jsxs)(o.d,{children:[te.map((function(e){return Object(M.jsx)(o.b,{path:e.path,component:e.component,exact:e.exact},e.path)})),Object(M.jsx)(o.a,{to:"/"})]})},ne=a.p+"static/media/logo.394fe7bc.jpg",re=a(26),ce=a.n(re),se=function(){return Object(M.jsx)("div",{className:ce.a.AppBar,children:Object(M.jsx)("div",{className:ce.a.AppBar_Container,children:Object(M.jsx)("div",{className:ce.a.AppBar_LogoWrapper,children:Object(M.jsx)(i.b,{to:E.HOME,children:Object(M.jsx)("img",{className:ce.a.AppBar_LogoImage,src:ne,alt:"Rick and Morty logo"})})})})})};var ie=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(se,{}),Object(M.jsx)(ae,{})]})},le=a(50),oe={isLoading:!1,error:"",characters:[],pagesCount:0,currentPage:1,isModalOpen:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_IS_LOADING:return Object(_.a)(Object(_.a)({},e),{},{isLoading:t.payload});case n.SET_ERROR:return Object(_.a)(Object(_.a)({},e),{},{error:t.payload});case n.SET_CHARACTERS:return Object(_.a)(Object(_.a)({},e),{},{characters:t.payload});case n.SET_PAGES_COUNT:return Object(_.a)(Object(_.a)({},e),{},{pagesCount:t.payload});case n.SET_CURRENT_PAGE:return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.payload});case n.SET_IS_MODAL_OPEN:return Object(_.a)(Object(_.a)({},e),{},{isModalOpen:t.payload});case n.SET_SELECTED_CHARACTER:return Object(_.a)(Object(_.a)({},e),{},{selectedCharacter:t.payload});default:return e}},ue={genderOptions:[{value:"All",label:"All"},{value:"Male",label:"Male"},{value:"Female",label:"Female"},{value:"Unknown",label:"Unknown"},{value:"Genderless ",label:"Genderless"}],statusOptions:[{value:"All",label:"All"},{value:"Alive",label:"Alive"},{value:"Dead",label:"Dead"},{value:"Unknown",label:"Unknown"}],filterData:{type:"",name:"",species:"",status:"",gender:""}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return t.type===O.SET_FILTER_DATA?Object(_.a)(Object(_.a)({},e),{},{filterData:t.payload}):e},pe=Object(j.c)({characters:_e,filter:de}),je=Object(j.d)(pe,Object(j.a)(le.a));s.a.render(Object(M.jsx)(l.a,{store:je,children:Object(M.jsx)(i.a,{children:Object(M.jsx)(ie,{})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.267eb062.chunk.js.map