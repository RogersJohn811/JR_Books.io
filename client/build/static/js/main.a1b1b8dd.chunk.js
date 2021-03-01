(this["webpackJsonpjr_books.io"]=this["webpackJsonpjr_books.io"]||[]).push([[0],{24:function(e,a,t){},38:function(e,a,t){e.exports=t(66)},66:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(14),r=t.n(o),s=t(72),c=t(79),m=t(73),i=t(80),u=t(71),h=t(10),E=t(69),d=t(70);var p=function(e){return console.log(e),e.books.map(a=>l.a.createElement(c.a,{key:a.id},l.a.createElement(c.a.Header,null,l.a.createElement("h3",null,a.volumeInfo.title),l.a.createElement("p",{className:"lead"},a.volumeInfo.authors&&a.volumeInfo.authors.length>1?a.volumeInfo.authors.join(" & "):a.volumeInfo.authors)),l.a.createElement(c.a.Body,null,l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement("img",{className:"img-fluid",alt:"Book thumbnail",src:a.volumeInfo.imageLinks?a.volumeInfo.imageLinks.thumbnail:"https://img.icons8.com/cute-clipart/64/000000/no-image.png"}),l.a.createElement("br",null),l.a.createElement("a",{href:a.volumeInfo.previewLink,target:"_blank",rel:"noreferrer"},l.a.createElement(u.a,{variant:"danger",className:"px-2 mt-2"},l.a.createElement(h.b,null))),l.a.createElement(u.a,{variant:"danger",className:"px-2 ml-1 mt-2",onClick:e.save},l.a.createElement(h.c,null))),l.a.createElement(d.a,null,l.a.createElement("p",{className:"lead"},a.volumeInfo.description))))))},g=(t(24),t(15)),k=t.n(g),v={getBook:function(e){return k.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&key=AIzaSyDrahnrWwfTZcCcOo8EBVfxgt_zJZpJHqI"))},saveBook:function(e){return k.a.post("/api/books",e)},getSavedBooks:()=>k.a.get("/api/books"),deleteBook:e=>k.a.delete("/api/books/"+e)};class b extends l.a.Component{constructor(...e){super(...e),this.state={books:[],searchTerm:""},this.handleInputChange=e=>{const a=e.target,t=a.name,n=a.value;this.setState({[t]:n})},this.handleFormSubmit=e=>{e.preventDefault(),this.getBook()},this.getBook=()=>{const e=this.state.searchTerm.replace(/ /g,"%20").toLowerCase();console.log(e),v.getBook(e).then(e=>{this.setState({books:e.data.items})}).catch(e=>console.log(e))},this.saveBook=e=>{v.saveBook({_id:e.id,title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link}).then(console.log("Posted")).catch(e=>console.log(e))}}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(c.a,null,l.a.createElement(c.a.Header,{className:"header-img"}),l.a.createElement(c.a.Body,null,l.a.createElement("h3",{className:"text-center"},"Search for Books"),l.a.createElement(m.a,{className:"mb-3"},l.a.createElement(i.a,{value:this.state.search,onChange:this.handleInputChange,placeholder:"The Joy Luck Club",name:"searchTerm"}),l.a.createElement(m.a.Append,null,l.a.createElement(u.a,{variant:"success",onClick:this.handleFormSubmit},l.a.createElement(h.d,null)))))),this.state.books.length?l.a.createElement(p,{books:this.state.books,save:this.saveBook}):l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("p",{className:"lead font-italic"},"No results to display"))))}}var f=b;var N=function(e){return console.log(e),e.books.map(e=>l.a.createElement(c.a,{key:e.id},l.a.createElement(c.a.Header,null,l.a.createElement("h3",null,e.title),l.a.createElement("p",{className:"lead"},e.authors&&e.authors.length>1?e.authors.join(" & "):e.authors)),l.a.createElement(c.a.Body,null,l.a.createElement(E.a,null,l.a.createElement(d.a,null,l.a.createElement("img",{className:"img-fluid",alt:"Book thumbnail",src:e.image?e.image:"https://img.icons8.com/cute-clipart/64/000000/no-image.png"}),l.a.createElement("br",null),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(u.a,{variant:"danger",className:"px-2 mt-2"},l.a.createElement(h.b,null))),l.a.createElement(u.a,{variant:"danger",className:"px-2 ml-1 mt-2"},l.a.createElement(h.e,null))),l.a.createElement(d.a,null,l.a.createElement("p",{className:"lead"},e.description))))))};class B extends l.a.Component{constructor(...e){super(...e),this.state={books:[]},this.componentDidMount=()=>{this.getSavedBooks()},this.getSavedBooks=()=>{v.getSavedBooks().then(e=>{this.setState({books:e.data}),console.log(this.state.books)}).catch(e=>console.log(e))}}render(){return l.a.createElement(s.a,null,l.a.createElement(c.a,null,l.a.createElement(c.a.Header,{className:"header-img"}),l.a.createElement(c.a.Body,null,l.a.createElement("h3",{className:"text-center"},"Your saved books"))),this.state.books.length?l.a.createElement(N,{books:this.state.books}):l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("p",{className:"lead font-italic"},"No results to display")))}}var w=B,S=t(74),I=t(75),y=t(76);function x(){return l.a.createElement("div",null,l.a.createElement(I.a,{bg:"light",expand:"lg"},l.a.createElement(I.a.Brand,{className:"brand",href:"#home"},l.a.createElement(S.a,{to:"/",className:"/"===window.location.pathname||"/"===window.location.pathname?"nav-link active":"nav-link"},l.a.createElement(h.a,{className:"blue"}),l.a.createElement("span",{className:"red"}," Google "),l.a.createElement("span",{className:"yellow"},"Book "),l.a.createElement("span",{className:"green"},"Search "))),l.a.createElement(y.a,{className:"ml-auto"},l.a.createElement(y.a.Link,null,l.a.createElement(S.a,{to:"/saved",className:"/Saved"===window.location.pathname||"/"===window.location.pathname?"nav-link active":"nav-link"},"Saved Books")))))}var C=t(77),L=t(78);var _=function(){return l.a.createElement(C.a,null,l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(L.a,{exact:!0,path:"/",component:f}),l.a.createElement(L.a,{path:"/Saved",component:w})))};t(65);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a1b1b8dd.chunk.js.map