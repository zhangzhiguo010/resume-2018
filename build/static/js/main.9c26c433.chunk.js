(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/mySelf_phpto.4ff92cab.jpg"},function(e,t,a){},,,,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/\u5f20\u6cbb\u56fd \u6c42\u804c\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08.3e71bcef.pdf"},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){var n={"./163music.jpg":39,"./canvas\u753b\u677f.jpg":40,"./chat\u804a\u5929.jpg":41,"./keyboard.jpg":42,"./mySelf_phpto.jpg":11,"./photo.jpg":43,"./topBarBgImg.jpg":44,"./\u76ae\u5361\u4e18.jpg":45,"./\u8f6e\u64ad.jpg":46};function r(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=38},function(e,t,a){e.exports=a.p+"static/media/163music.21cc930c.jpg"},function(e,t,a){e.exports=a.p+"static/media/canvas\u753b\u677f.f6052f3e.jpg"},function(e,t,a){e.exports=a.p+"static/media/chat\u804a\u5929.5f123b0d.jpg"},function(e,t,a){e.exports=a.p+"static/media/keyboard.db19e935.jpg"},function(e,t,a){e.exports=a.p+"static/media/photo.c44dce0a.jpg"},function(e,t,a){e.exports=a.p+"static/media/topBarBgImg.bf6e10c6.jpg"},function(e,t,a){e.exports=a.p+"static/media/\u76ae\u5361\u4e18.9e9a0918.jpg"},function(e,t,a){e.exports=a.p+"static/media/\u8f6e\u64ad.e90ab7ea.jpg"},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),l=a(1),o=a(2),s=a(4),u=a(3),m=a(5),p=a(6),h=a.n(p),d=a(14),f=a.n(d),v=(a(21),a(23),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={topNavBar_active:!1,navList:[["card","\u4e2a\u4eba\u7b80\u4ecb"],["require","\u5bf9\u6807\u516c\u53f8"],["skill","\u6280\u80fd\u8865\u5145"],["workItem","\u9879\u76ee\u4f5c\u54c1"],["message","\u7559\u8a00\u677f"]]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.onscroll=function(t){window.scrollY>0?e.setState({topNavBar_active:!0}):e.setState({topNavBar_active:!1})},requestAnimationFrame(function e(t){requestAnimationFrame(e),h.a.update(t)}),this.handleClick=function(e){e.preventDefault();var t=window.scrollY,a=document.getElementById(e.currentTarget.getAttribute("data-name")).offsetTop-80,n=500*Math.abs((a-t)/100)>800&&500,r={y:t};new h.a.Tween(r).to({y:a},n).easing(h.a.Easing.Quartic.Out).onUpdate(function(){window.scrollTo(0,r.y)}).start()}}},{key:"render",value:function(){var e=this,t=f()({topNavBar_wrapper:!0,topNavBar_active:this.state.topNavBar_active});return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"resumeHint"},"RS"),r.a.createElement("span",{className:"nameHint"},"zzg")),r.a.createElement("ul",{className:"nav",ref:function(t){return e.navRef=t}},this.state.navList.map(function(t,a){return r.a.createElement("li",{key:a,"data-name":t[0],onClick:e.handleClick},r.a.createElement(b,{content:t[1]}))})))}}]),t}(n.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.content;return r.a.createElement("a",{href:"#"},e)}}]),t}(n.Component),g=(a(25),a(27),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card_wrapper",id:"card"},r.a.createElement("main",null,r.a.createElement("figure",{className:"main_lf"},r.a.createElement("img",{src:a(11),alt:"\u5c55\u793a\u5934\u50cf"})),r.a.createElement("div",{className:"main_rt"},r.a.createElement("a",{href:a(29),download:!0,className:"download_resume"},"\u4e0b\u8f7d\u7b80\u5386"),r.a.createElement("a",{href:"https://zhangzhiguo010.github.io/resume-2018/build/index.html",className:"resume_webLink"},"\u5728\u7ebf\u7b80\u5386\uff0c\u8bf7\u70b9\u51fb\uff01"),r.a.createElement("span",{className:"welcome"},"Hello ",r.a.createElement("span",{className:"triangle"})),r.a.createElement("h1",{className:"myName"},"\u5f20\u6cbb\u56fd"),r.a.createElement("p",{className:"myIntroduce"},"\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08"),r.a.createElement("hr",null),r.a.createElement("dl",null,r.a.createElement("dt",null,"\u5e74\u9f84"),r.a.createElement("dd",null,"26"),r.a.createElement("dt",null,"\u7c4d\u8d2f/\u6c42\u804c\u5730"),r.a.createElement("dd",null,"\u5317\u4eac"),r.a.createElement("dt",null,"\u90ae\u7bb1"),r.a.createElement("dd",null,"360737368@qq.com"),r.a.createElement("dt",null,"\u624b\u673a/\u5fae\u4fe1\u53f7"),r.a.createElement("dd",null,"15611563050"),r.a.createElement("dt",null,"\u671f\u671b\u85aa\u8d44"),r.a.createElement("dd",null,"7k ~ 9k")))),r.a.createElement("footer",{className:"media"},r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"iconfont icon-github"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"iconfont icon-weibo"})),r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"iconfont icon-qq"}))))}}]),t}(n.Component)),E=(a(30),a(32),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={textContent:[["#f6ab84","\u5b66\u5386/\u4e13\u4e1a\uff1a","\u672c\u79d1\u3001\u8ba1\u7b97\u673a/\u901a\u4fe1","\u4e2d\u5317\u5927\u5b66\uff08\u5168\u65e5\u5236 \u4e00\u672c\uff09","\u5149\u4fe1\u606f\u79d1\u5b66\u4e0e\u6280\u672f\u4e13\u4e1a"],["#db8471","\u6280\u672f\uff1a","HTML\u3001CSS\u3001JS","\u638c\u63e1\u826f\u597d","\u66fe\u6df1\u5165\u7814\u7a76\u300aCSS\u6743\u5a01\u6307\u5357\u300b\u3001\u300aJS\u6743\u5a01\u6307\u5357\u300b\u3001\u300aJS\u9ad8\u7a0b\u300b\u7b49\u5927\u90e8\u5934\u4e66\u7c4d\uff0c\u5e76\u8ba4\u771f\u505a\u4e86\u6574\u7406"],["#af5b6a","\u6846\u67b6\uff1a","React\u3001Vue\u3001Angular","\u638c\u63e1\u826f\u597d","\u4e3b\u8981\u7528React\uff08\u624b\u52a8\u5b9e\u73b0\u8fc7Redux\u3001connect\u51fd\u6570\u548cthunk\u4e2d\u95f4\u4ef6\u6e90\u7801\uff09\u3001Vue\u548cAngular\u6d45\u663e\u4e86\u89e3\uff08\u8f85\u52a9React\u7684\u5b66\u4e60\uff09"],["#6c3755","\u5de5\u7a0b\u5316\uff1a","webpack","\u57fa\u672c\u638c\u63e1","\u6211\u901a\u5e38\u7528create-react-app\u547d\u4ee4\u81ea\u52a8\u521b\u5efa\u9879\u76ee\uff0c\u6309\u9700\u5b89\u88c5\u5176\u4ed6\u63d2\u4ef6\uff0c\u5982\u679c\u662f\u539f\u751fJS\u9879\u76ee\uff0c\u6211\u624d\u624b\u52a8\u914d\u7f6e\u6574\u5957webpack"],["#452243","\u5de5\u4f5c\u7ecf\u9a8c\uff1a","1~3\u5e74","\u4e00\u5e74\u7ecf\u9a8c","\u81ea\u5b66\u7f16\u7a0b\uff0c\u4e0a\u534a\u5e74\u521d\u6b65\u4e86\u89e3\u884c\u4e1a\u77e5\u8bc6\uff0c\u4e0b\u534a\u5e74\u8f9e\u804c\u81ea\u5b665\u4e2a\u6708\uff0c\u671f\u95f4\u4e00\u76f4\u770b\u4e66\u770b\u89c6\u9891\uff0c\u6a21\u4eff\u4e00\u4e9b\u6210\u719f\u7684\u9879\u76ee"]]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"require_wrapper",id:"require"},r.a.createElement("h2",null,"\u5bf9\u6807\u516c\u53f8"),r.a.createElement("ul",{className:"header"},r.a.createElement("li",{className:"headLi",key:"0"},r.a.createElement("div",{className:"headli_lf"},"\u516c\u53f8\u8981\u6c42\uff08\u5173\u952e\u5b57\uff09"),r.a.createElement("div",{className:"headli_rt"},"\u6211\u7684\u4e2a\u4eba\u60c5\u51b5")),this.state.textContent.map(function(e,t){return r.a.createElement("li",{key:t+1},r.a.createElement(j,{index:t+1,color:e[0],keyWord:e[1],companyRequire:e[2],mySituationTop:e[3],mySituationBottom:e[4]}))})))}}]),t}(n.Component)),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.index,a=e.color,n=e.keyWord,i=e.companyRequire,c=e.mySituationTop,l=e.mySituationBottom;return r.a.createElement("div",{className:"requireItem"},r.a.createElement("div",{className:"keyWord",style:{backgroundColor:a}},r.a.createElement("p",{className:"index"},t,"\u3001"),r.a.createElement("p",{className:"content"},n)),r.a.createElement("div",{className:"companyRequire"},i),r.a.createElement("div",{className:"mySituation"},r.a.createElement("p",null,c),r.a.createElement("p",null,l)))}}]),t}(n.Component),k=(a(34),a(36),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={workItem:[["163music","\uff08\u4eff\uff09\u7f51\u6613\u4e91\u97f3\u4e50","\u63cf\u8ff0\uff1a\u8fd9\u662f\u4e00\u4e2a\u97f3\u4e50\u64ad\u653e\u5668\u9879\u76ee\uff0c\u5b83\u5b9e\u73b0\u4e86\u641c\u7d22\u6b4c\u66f2\u3001\u64ad\u653e\u6b4c\u66f2\u3001\u64ad\u653e\u6b4c\u8bcd\u3001\u6dfb\u52a0\u6b4c\u5355\u7b49\u529f\u80fd\u3002   \u6280\u672f\uff1a\u4f7f\u7528\u539f\u751fJS\u5904\u7406DOM\u64cd\u4f5c\uff0c\u4f7f\u7528MVC\u8fdb\u884c\u6a21\u5757\u5316\uff0c\u4f7f\u7528ES6\u7c7b\u7cbe\u7b80\u4ee3\u7801\u3002   \u4eae\u70b9\uff1a\u624b\u673a\u7aef\u64ad\u653e\uff0c\u4f7f\u7528@media\u5a92\u4f53\u67e5\u8be2\u505a\u5230\u54cd\u5e94\u5f0f\u5e03\u5c40","https://zhangzhiguo010.github.io/163-Music/src/index.html","https://github.com/zhangzhiguo010/163-Music"],["canvas\u753b\u677f","canvas\u753b\u677f","\u63cf\u8ff0\uff1a\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8ecanvas\u7684\u7b80\u6613\u753b\u677f\u3002\u529f\u80fd\u4e0a\u5b9e\u73b0\u4e86\u753b\u753b\u3001\u6e05\u7a7a\u753b\u5e03\u3001\u4f5c\u54c1\u4e0b\u8f7d\u7b49\u529f\u80fd\uff0c\u753b\u7b14\u7684\u989c\u8272\u548c\u7c97\u7ec6\u53ef\u9009\u3002\u4eae\u70b9\uff1a\u624b\u673a\u7aef\u548c\u7535\u8111\u7aef\u90fd\u53ef\u4ee5\u4f7f\u7528","https://zhangzhiguo010.github.io/drawingBoard-2018-11/build/index.html","https://github.com/zhangzhiguo010/drawingBoard-2018-11"],["\u76ae\u5361\u4e18","\u52a8\u6001\u751f\u6210\u76ae\u5361\u4e18","\u63cf\u8ff0\uff1a\u8be5\u4f5c\u54c1\u53ef\u5728\u9875\u9762\u4e0a\u5b9e\u73b0\u4ee3\u7801\u548c\u4f5c\u54c1\u7684\u540c\u6b65\u5c55\u793a\uff0c\u5feb\u4e2d\u6162\u4e09\u6863\u901f\u5ea6\u53ef\u624b\u52a8\u8c03\u8282\u3002","https://zhangzhiguo010.github.io/pikachu-2018/build/index.html","https://github.com/zhangzhiguo010/pikachu-2018"],["keyboard","\u952e\u76d8\u7279\u6548","\u7b80\u4ecb\uff1a\u8fd9\u662f\u7528\u539f\u751fJavaScript\u5199\u7684\u4e00\u4e2a\u952e\u76d8\u7279\u6548\uff0c\u70b9\u51fb\u952e\u76d8\u4e0a\u6309\u952e\uff0c\u9875\u9762\u4f1a\u81ea\u52a8\u6253\u5f00\uff0c\u7f51\u9875\u4e0a\u952e\u76d8\u5bf9\u5e94\u7684\u7f51\u5740\u53ef\u4ee5\u968f\u610f\u7f16\u8f91","https://zhangzhiguo010.github.io/keyboard-2018/index.html","https://github.com/zhangzhiguo010/keyboard-2018"],["chat\u804a\u5929","\u5373\u65f6\u804a\u5929","\u63cf\u8ff0\uff1a\u8fd9\u662f\u4e00\u4e2a\u53ca\u65f6\u804a\u5929\u7684\u9879\u76ee\uff0c\u529f\u80fd\u4e0a\u5b9e\u73b0\u4e86\u767b\u5f55\u3001\u6ce8\u518c\u3001\u6dfb\u52a0\u597d\u53cb\u3001\u53ca\u65f6\u804a\u5929\u7b49\u3002  \u6280\u672f\uff1a\u524d\u7aef\u4f7f\u7528React\u6846\u67b6\uff0c\u7528\u5230\u4e86react-redux\u3001react-router\u3001thunk\u4e2d\u95f4\u4ef6\u7b49\u3002  \u4eae\u70b9\uff1a\u754c\u9762\u6837\u5f0f\u6a21\u4eff\u5fae\u4fe1\u5ba2\u6237\u7aef","https://zhangzhiguo010.github.io/WeChat-2018/build/index.html","https://github.com/zhangzhiguo010/WeChat-2018"],["\u8f6e\u64ad","\u65e0\u7f1d\u8f6e\u64ad\u7ec4\u4ef6","\u7b80\u4ecb\uff1a\u8fd9\u662f\u7528\u539f\u751fJavaScript\u5c01\u88c5\u7684\u4e00\u4e2a\u65e0\u7f1d\u8f6e\u64ad\u7ec4\u4ef6\uff0c\u4f7f\u7528\u8005\u53ea\u9700\u5f15\u5165\u6587\u4ef6\u540e\u8c03\u7528\u51fd\u6570\u5e76\u4f20\u5165\u7279\u5b9a\u63a7\u5236\u53c2\u6570\u5373\u53ef","https://zhangzhiguo010.github.io/scrollPicture-2018/index.html","https://github.com/zhangzhiguo010/scrollPicture-2018"]]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"workItem_wrapper",id:"workItem"},r.a.createElement("h2",null,"\u9879\u76ee\u4f5c\u54c1"),r.a.createElement("ul",null,this.state.workItem.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(y,{name:e[0],title:e[1],content:e[2],previewLink:e[3],codeLink:e[4]}))})))}}]),t}(n.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.title,i=e.content,c=e.previewLink,l=e.codeLink;return r.a.createElement("div",{className:"wil_wrapper"},r.a.createElement("figure",{className:"wil_lf"},r.a.createElement("img",{src:a(38)("./".concat(t,".jpg")),alt:""})),r.a.createElement("div",{className:"wil_rt"},r.a.createElement("h3",null,n),r.a.createElement("p",null,i),r.a.createElement("div",{className:"outsideLink"},r.a.createElement("a",{href:c,target:"_blank",className:"previewLink"},"\u9884\u89c8\u94fe\u63a5"),r.a.createElement("a",{href:l,target:"_blank",className:"codeLink"},"\u4ee3\u7801\u94fe\u63a5"))))}}]),t}(n.Component),O=(a(12),a(8)),N=a.n(O),w=a(15),S=a.n(w),x=(a(48),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={content:[["HTML5 & CSS3 & JavaScript","\u80fd\u72ec\u7acb\u5236\u4f5c\u7cbe\u7f8e\u7f51\u9875\uff0c\u638c\u63e1HTML5\u8bed\u4e49\u5316\uff0c\u638c\u63e1CSS3\u52a8\u753b\u3001\u8fc7\u6e21\u6548\u679c\u7b49\u5e38\u7528\u6280\u672f"],["\u79fb\u52a8\u7aef\u9875\u9762","\u638c\u63e1\u767e\u5206\u6bd4\u3001\u5f39\u6027\u548c\u54cd\u5e94\u5f0f\u7b49\u5e03\u5c40\uff0c\u77e5\u9053\u4ed6\u4eec\u7684\u4f18\u52a3\u77ed\u957f\uff0c\u53ef\u5728\u5404\u79cd\u5c3a\u5bf8\u8bbe\u5907\u4e0a\u6b63\u786e\u9009\u7528"],["\u524d\u7aef\u6846\u67b6","\u77e5\u6653\u524d\u7aef\u4ee3\u7801\u98ce\u683c\u7684\u53d8\u8fc1\u5386\u7a0b\uff0c\u4e86\u89e3\u4e09\u5927\u6846\u67b6\u95f4\u7684\u4e0d\u540c\uff0c\u76ee\u524d\u7528\u7684\u662fReact\uff0cRedux\u638c\u63e1\u5230\u6e90\u7801\u7ea7\u522b"],["\u5176\u4ed6\u4fe1\u606f","\u638c\u63e1jQuery\u3001HTTP\u4f20\u8f93\u534f\u8bae\u3001\u7b80\u5355\u7684\u547d\u4ee4\u884c\u3001\u57fa\u672c\u7684webpack\u4f7f\u7528\uff0c\u5e73\u5e38\u4f7f\u7528GitHub\u4ed3\u5e93\u5b58\u50a8\u4ee3\u7801"]]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){S()(N.a),N.a.chart("skillChart",{chart:{polar:!0,type:"line"},pane:{size:"80%"},xAxis:{categories:["\u5de5\u7a0b\u5316&\u4ee3\u7801\u98ce\u683c","React&Redux","HTTP","\u7b97\u6cd5&\u6570\u636e\u7ed3\u6784","JavaScript","HTML&CSS"],tickmarkPlacement:"on",lineWidth:0},yAxis:{gridLineInterpolation:"polygon",lineWidth:0,min:0},tooltip:{shared:!0,pointFormat:'<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'},legend:{align:"right",verticalAlign:"top",y:70,layout:"vertical"},series:[{name:"\u5b66\u4e60\u76ee\u6807",data:[100,100,100,100,100,100],pointPlacement:"on",color:"#efe5ac"},{name:"\u638c\u63e1\u60c5\u51b5",data:[110,90,80,70,120,120],pointPlacement:"on",color:"red"}],credits:{enabled:!1}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"skillChart_wrapper",id:"skill"},r.a.createElement("h2",null,"\u6280\u80fd\u8865\u5145"),r.a.createElement("main",null,r.a.createElement("div",{className:"skillDescription"},this.state.content.map(function(e,t){return r.a.createElement(z,{key:t,title:e[0],detail:e[1]})})),r.a.createElement("div",{id:"skillChart",className:"skillChart"})))}}]),t}(n.Component)),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.detail;return r.a.createElement("div",{className:"skill_row"},r.a.createElement("h3",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),C=a(7),_=a.n(C);function I(e){return new _.a.Query(e).find()}_.a.init({appId:"Wwznshss8YtSAktaYBWks0Lt-gzGzoHsz",appKey:"cptsnlLS3yriPqudT9fDc65u"});a(50),a(52);var M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={visitorInput:"",visitorMessage:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;I("MyResume").then(function(t){e.setState({visitorMessage:t})}),this.handleInput=function(t){e.setState({visitorInput:t.target.value})},this.handleSubmit=function(t){var a,n,r=e.state.visitorInput;t.preventDefault(),e.state.visitorInput.trim()&&(a="MyResume",n={message:r},(new(a=_.a.Object.extend(a))).save(n)).then(function(t){I("MyResume").then(function(t){e.setState({visitorInput:"",visitorMessage:t})})})}}},{key:"render",value:function(){var e=this.state,t=e.visitorInput,a=e.visitorMessage;return r.a.createElement("div",{className:"message_wrapper",id:"message"},r.a.createElement("h2",null,"\u7559\u8a00\u677f"),r.a.createElement("div",{className:"visitorInput"},r.a.createElement("textarea",{required:!0,value:t,onChange:this.handleInput}),r.a.createElement("input",{type:"submit",value:"\u53d1\u8868\u8bc4\u8bba",onClick:this.handleSubmit})),r.a.createElement("ul",null,a.slice(-5).reverse().map(function(e){var t=e.id,a=e.attributes.message;return r.a.createElement("li",{key:t},r.a.createElement(L,{message:a}))})))}}]),t}(n.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.message;return r.a.createElement("div",{className:"messageItem"},r.a.createElement("div",{className:"photo"},r.a.createElement("i",{className:"iconfont icon-visitor"})),r.a.createElement("div",{className:"visitor"},r.a.createElement("p",{className:"visitor_name"},"\u533f\u540d\u8bc4\u8bba"),r.a.createElement("p",{className:"visitor_message"},e)))}}]),t}(n.Component),B=(a(54),a(56),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app_wrapper"},r.a.createElement(v,null),r.a.createElement("figure",{className:"banner"}),r.a.createElement("div",{className:"main"},r.a.createElement(g,null),r.a.createElement(E,null),r.a.createElement(x,null),r.a.createElement(k,null),r.a.createElement(M,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,2,1]]]);
//# sourceMappingURL=main.9c26c433.chunk.js.map