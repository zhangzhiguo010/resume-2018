(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(49)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/mySelf_phpto.4ff92cab.jpg"},function(e,t,a){e.exports=a.p+"static/media/\u7b80\u5386-\u5f20\u6cbb\u56fd-\u5e94\u8058\u524d\u7aef\u5f00\u53d1-2018.b45b7519.pdf"},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(12),r=a.n(c),i=a(1),s=a(2),m=a(4),o=a(3),u=a(5),p=a(6),E=a.n(p),d=a(13),h=a.n(d),f=(a(20),a(22),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={topNavBar_active:!1,navList:[["card","\u4e2a\u4eba\u7b80\u4ecb"],["require","\u5bf9\u6807\u516c\u53f8"],["skill","\u6280\u80fd\u8865\u5145"],["work","\u9879\u76ee\u4f5c\u54c1"],["message","\u7559\u8a00\u677f"]]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.onscroll=function(t){window.scrollY>0?e.setState({topNavBar_active:!0}):e.setState({topNavBar_active:!1})},requestAnimationFrame(function e(t){requestAnimationFrame(e),E.a.update(t)}),this.handleClick=function(e){e.preventDefault();var t=window.scrollY,a=document.getElementById(e.currentTarget.getAttribute("data-name")).offsetTop-80,n=500*Math.abs((a-t)/100)>800&&500,l={y:t};new E.a.Tween(l).to({y:a},n).easing(E.a.Easing.Quartic.Out).onUpdate(function(){window.scrollTo(0,l.y)}).start()}}},{key:"render",value:function(){var e=this,t=h()({topNavBar_wrapper:!0,topNavBar_active:this.state.topNavBar_active});return l.a.createElement("div",{className:t},l.a.createElement("div",{className:"logo"},l.a.createElement("span",{className:"resumeHint"},"RS"),l.a.createElement("span",{className:"nameHint"},"zzg")),l.a.createElement("ul",{className:"nav",ref:function(t){return e.navRef=t}},this.state.navList.map(function(t,a){return l.a.createElement("li",{key:a,"data-name":t[0],onClick:e.handleClick},l.a.createElement(v,{content:t[1]}))})))}}]),t}(n.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.content;return l.a.createElement("a",{href:"#"},e)}}]),t}(n.Component),b=(a(24),a(26),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"card_wrapper",id:"card"},l.a.createElement("main",null,l.a.createElement("figure",{className:"main_lf"},l.a.createElement("img",{src:a(28),alt:"\u5c55\u793a\u5934\u50cf"})),l.a.createElement("div",{className:"main_rt"},l.a.createElement("a",{href:a(29),download:!0,className:"download_resume"},"\u4e0b\u8f7d\u7b80\u5386"),l.a.createElement("a",{href:"https://zhangzhiguo010.github.io/resume-2018/build/index.html",className:"resume_webLink"},"\u5728\u7ebf\u7b80\u5386\uff0c\u8bf7\u70b9\u51fb\uff01"),l.a.createElement("span",{className:"welcome"},"Hello ",l.a.createElement("span",{className:"triangle"})),l.a.createElement("h1",{className:"myName"},"\u5f20\u6cbb\u56fd"),l.a.createElement("p",{className:"myIntroduce"},"\u5e94\u8058\u524d\u7aef\u5f00\u53d1\u5de5\u7a0b\u5e08"),l.a.createElement("hr",null),l.a.createElement("dl",null,l.a.createElement("dt",null,"\u5e74\u9f84"),l.a.createElement("dd",null,"26"),l.a.createElement("dt",null,"\u7c4d\u8d2f/\u6c42\u804c\u5730"),l.a.createElement("dd",null,"\u5317\u4eac"),l.a.createElement("dt",null,"\u90ae\u7bb1"),l.a.createElement("dd",null,"360737368@qq.com"),l.a.createElement("dt",null,"\u624b\u673a/\u5fae\u4fe1\u53f7"),l.a.createElement("dd",null,"15611563050"),l.a.createElement("dt",null,"\u671f\u671b\u85aa\u8d44"),l.a.createElement("dd",null,"7k ~ 9k")))),l.a.createElement("footer",{className:"media"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"iconfont icon-github"})),l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"iconfont icon-weibo"})),l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"iconfont icon-qq"}))))}}]),t}(n.Component)),g=(a(30),a(32),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={textContent:[["#f6ab84","\u5b66\u5386/\u4e13\u4e1a\uff1a","\u672c\u79d1\u3001\u8ba1\u7b97\u673a/\u901a\u4fe1","\u4e2d\u5317\u5927\u5b66\uff08\u5168\u65e5\u5236 \u4e00\u672c\uff09","\u5149\u4fe1\u606f\u79d1\u5b66\u4e0e\u6280\u672f\u4e13\u4e1a"],["#db8471","\u6280\u672f\uff1a","HTML\u3001CSS\u3001JS","\u638c\u63e1\u826f\u597d","\u66fe\u6df1\u5165\u7814\u7a76\u300aCSS\u6743\u5a01\u6307\u5357\u300b\u3001\u300aJS\u6743\u5a01\u6307\u5357\u300b\u3001\u300aJS\u9ad8\u7a0b\u300b\u7b49\u5927\u90e8\u5934\u4e66\u7c4d\uff0c\u5e76\u8ba4\u771f\u505a\u4e86\u6574\u7406"],["#af5b6a","\u6846\u67b6\uff1a","React\u3001Vue\u3001Angular","\u638c\u63e1\u826f\u597d","\u4e3b\u8981\u7528React\uff08\u624b\u52a8\u5b9e\u73b0\u8fc7Redux\u3001connect\u51fd\u6570\u548cthunk\u4e2d\u95f4\u4ef6\u6e90\u7801\uff09\u3001Vue\u548cAngular\u6d45\u663e\u4e86\u89e3\uff08\u8f85\u52a9React\u7684\u5b66\u4e60\uff09"],["#6c3755","\u5de5\u7a0b\u5316\uff1a","webpack","\u57fa\u672c\u638c\u63e1","\u6211\u901a\u5e38\u7528create-react-app\u547d\u4ee4\u81ea\u52a8\u521b\u5efa\u9879\u76ee\uff0c\u6309\u9700\u5b89\u88c5\u5176\u4ed6\u63d2\u4ef6\uff0c\u5982\u679c\u662f\u539f\u751fJS\u9879\u76ee\uff0c\u6211\u624d\u624b\u52a8\u914d\u7f6e\u6574\u5957webpack"],["#452243","\u5de5\u4f5c\u7ecf\u9a8c\uff1a","1~3\u5e74","\u4e00\u5e74\u7ecf\u9a8c","\u81ea\u5b66\u7f16\u7a0b\uff0c\u4e0a\u534a\u5e74\u521d\u6b65\u4e86\u89e3\u884c\u4e1a\u77e5\u8bc6\uff0c\u4e0b\u534a\u5e74\u8f9e\u804c\u81ea\u5b665\u4e2a\u6708\uff0c\u671f\u95f4\u4e00\u76f4\u770b\u4e66\u770b\u89c6\u9891\uff0c\u6a21\u4eff\u4e00\u4e9b\u6210\u719f\u7684\u9879\u76ee"]]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"require_wrapper",id:"require"},l.a.createElement("h2",null,"\u5bf9\u6807\u516c\u53f8"),l.a.createElement("ul",{className:"header"},l.a.createElement("li",{className:"headLi",key:"0"},l.a.createElement("div",{className:"headli_lf"},"\u516c\u53f8\u8981\u6c42\uff08\u5173\u952e\u5b57\uff09"),l.a.createElement("div",{className:"headli_rt"},"\u6211\u7684\u4e2a\u4eba\u60c5\u51b5")),this.state.textContent.map(function(e,t){return l.a.createElement("li",{key:t+1},l.a.createElement(N,{index:t+1,color:e[0],keyWord:e[1],companyRequire:e[2],mySituationTop:e[3],mySituationBottom:e[4]}))})))}}]),t}(n.Component)),N=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.index,a=e.color,n=e.keyWord,c=e.companyRequire,r=e.mySituationTop,i=e.mySituationBottom;return l.a.createElement("div",{className:"requireItem"},l.a.createElement("div",{className:"keyWord",style:{backgroundColor:a}},l.a.createElement("p",{className:"index"},t,"\u3001"),l.a.createElement("p",{className:"content"},n)),l.a.createElement("div",{className:"companyRequire"},c),l.a.createElement("div",{className:"mySituation"},l.a.createElement("p",null,r),l.a.createElement("p",null,i)))}}]),t}(n.Component),k=(a(34),a(36),function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"worksList",id:"work"},l.a.createElement("h2",null,"\u9879\u76ee\u4f5c\u54c1"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("figure",null,l.a.createElement("div",{className:"img work1"}),l.a.createElement("figcaption",null,l.a.createElement("h3",null,"\u624b\u673a\u7aef\u7f51\u6613\u4e91\u97f3\u4e50(\u5143\u7d20JavaScript)"),l.a.createElement("hr",null),l.a.createElement("div",{className:"descript"},l.a.createElement("p",null,"\u63cf\u8ff0\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u8fd9\u662f\u4e00\u4e2a\u97f3\u4e50\u64ad\u653e\u5668\u9879\u76ee"),l.a.createElement("p",{className:"descript-content"},"\u5b83\u5b9e\u73b0\u4e86\u641c\u7d22\u6b4c\u66f2\u3001\u64ad\u653e\u6b4c\u66f2\u3001\u64ad\u653e\u6b4c\u8bcd\u3001\u6dfb\u52a0\u6b4c\u5355\u7b49\u529f\u80fd"),l.a.createElement("p",null,"\u6280\u672f\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u524d\u7aef\uff1a\u4f7f\u7528\u539f\u751fJavaScript\u6765\u5904\u7406DOM\u64cd\u4f5c\uff0c\u4f7f\u7528MVC\u6846\u67b6\u8fdb\u884c\u6a21\u5757\u5316"),l.a.createElement("p",{className:"descript-content"},"\u540e\u53f0\uff1a\u5728\u4e03\u725b\u4e91\u5b58\u50a8\u6b4c\u66f2\u548c\u56fe\u7247,leancloud\u5b58\u50a8\u6b4c\u5355\u548c\u6b4c\u66f2\u540d"),l.a.createElement("p",null,"\u4eae\u70b9\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u624b\u673a\u7aef\u64ad\u653e\uff0c\u4f7f\u7528\u4e86@media\u5a92\u4f53\u67e5\u8be2\u505a\u5230\u54cd\u5e94\u5f0f\u5e03\u5c40")),l.a.createElement("hr",null),l.a.createElement("div",{className:"works-footer"},l.a.createElement("a",{href:"https://pinggu010.com/src/index.html",target:"_blank"},l.a.createElement("span",{className:"button"},"\u624b\u673a\u7aef\u9875\u9762")),l.a.createElement("a",{href:"https://github.com/zhangzhiguo010/163-Music",target:"_blank"},l.a.createElement("div",{className:"button"},"\u6e90\u7801\u94fe\u63a5")))))),l.a.createElement("li",null,l.a.createElement("figure",null,l.a.createElement("div",{className:"img work2"}),l.a.createElement("figcaption",null,l.a.createElement("h3",null,"\u5373\u65f6\u901a\u8baf(React\u6846\u67b6)"),l.a.createElement("hr",null),l.a.createElement("div",{className:"descript"},l.a.createElement("p",null,"\u63cf\u8ff0\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u8fd9\u662f\u4e00\u4e2a\u5373\u65f6\u804a\u5929\u9879\u76ee"),l.a.createElement("p",{className:"descript-content"},"\u5b83\u5b9e\u73b0\u4e86\u767b\u5f55\u3001\u6ce8\u518c\u3001\u6dfb\u52a0\u597d\u53cb\u3001\u5373\u65f6\u804a\u5929\u7b49\u529f\u80fd"),l.a.createElement("p",null,"\u6280\u672f\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u524d\u7aef\uff1a\u4f7f\u7528react\u6846\u67b6\u7528\u5230React\u3001React-redux\u3001React-router\u7b49\u6280\u672f"),l.a.createElement("p",{className:"descript-content"},"\u540e\u53f0\uff1a\u8c03\u7528\u73af\u4fe1SDK\u63d0\u4f9b\u7684API\u6765\u8fdb\u884c\u767b\u5f55\u6ce8\u518c\uff0c\u6dfb\u52a0\u597d\u53cb\uff0c\u6d88\u606f\u6536\u53d1"),l.a.createElement("p",null,"\u4eae\u70b9\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u754c\u9762\u6837\u5f0f\u6a21\u4eff\u5fae\u4fe1\u5ba2\u6237\u7aef\u3002")),l.a.createElement("hr",null),l.a.createElement("div",{className:"works-footer"},l.a.createElement("a",{href:"https://zhangzhiguo010.github.io/WeChat-2018/build/index.html#/login",target:"_blank"},l.a.createElement("div",{className:"button"},"\u9884\u89c8\u94fe\u63a5")),l.a.createElement("a",{href:"https://github.com/zhangzhiguo010/WeChat-2018",target:"_blank"},l.a.createElement("div",{className:"button"},"\u6e90\u7801\u94fe\u63a5")))))),l.a.createElement("li",null,l.a.createElement("figure",null,l.a.createElement("div",{className:"img work3"}),l.a.createElement("figcaption",null,l.a.createElement("h3",null,"\u5c0f\u5c0f\u753b\u677f"),l.a.createElement("hr",null),l.a.createElement("div",{className:"descript"},l.a.createElement("p",null,"\u63cf\u8ff0\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u8fd9\u662f\u4e00\u4e2a\u5c0f\u5c0f\u753b\u677f"),l.a.createElement("p",{className:"descript-content"},"\u5b83\u5b9e\u73b0\u4e86\u5728\u7ebf\u753b\u753b\uff0c\u9009\u62e9\u753b\u7b14\u989c\u8272\uff0c\u7c97\u7ec6\u4ee5\u53ca\u4fdd\u5b58\u56fe\u753b\u5230\u672c\u5730\u7b49\u529f\u80fd"),l.a.createElement("p",null," \u6280\u672f\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u4f7f\u7528\u539f\u751f\u7684Canvas\u6807\u7b7e"),l.a.createElement("p",null," \u4eae\u70b9\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u624b\u673a\u7aef\u3001\u7535\u8111\u7aef\u90fd\u53ef\u4ee5\u4f7f\u7528\u54e6\uff01")),l.a.createElement("hr",null),l.a.createElement("div",{className:"works-footer"},l.a.createElement("a",{href:"https://zhangzhiguo010.github.io/drawingBoard-2018-11/build/index.html",target:"_blank"},l.a.createElement("div",{className:"button"},"\u9884\u89c8\u94fe\u63a5")),l.a.createElement("a",{href:"https://github.com/zhangzhiguo010/drawingBoard-2018-11",target:"_blank"},l.a.createElement("div",{className:"button"},"\u6e90\u7801\u94fe\u63a5")))))),l.a.createElement("li",null,l.a.createElement("figure",null,l.a.createElement("div",{className:"img work4"}),l.a.createElement("figcaption",null,l.a.createElement("h3",null,"\u52a8\u6001\u751f\u6210\u76ae\u5361\u4e18"),l.a.createElement("hr",null),l.a.createElement("div",{className:"descript"},l.a.createElement("p",null,"\u63cf\u8ff0\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u8fd9\u662f\u4e00\u53ea\u7528css\u753b\u7684\u76ae\u5361\u4e18."),l.a.createElement("p",{className:"descript-content"},"\u4f60\u53ef\u4ee5\u770b\u5230\u76ae\u5361\u4e18\u7684\u751f\u6210\u8fc7\u7a0b."),l.a.createElement("p",null," \u6280\u672f\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u4f7f\u7528CSS3\u52a8\u753b\u3002"),l.a.createElement("p",null," \u4eae\u70b9\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u8fd9\u662f\u4e00\u53ea\u840c\u840c\u7684\u76ae\u5361\u4e18\uff01")),l.a.createElement("hr",null),l.a.createElement("div",{className:"works-footer"},l.a.createElement("a",{href:"https://zhangzhiguo010.github.io/pikachu-2018/build/index.html",target:"_blank"},l.a.createElement("div",{className:"button"},"\u9884\u89c8\u94fe\u63a5")),l.a.createElement("a",{href:"https://github.com/zhangzhiguo010/pikachu-2018",target:"_blank"},l.a.createElement("div",{className:"button"},"\u6e90\u7801\u94fe\u63a5")))))),l.a.createElement("li",null,l.a.createElement("figure",null,l.a.createElement("div",{className:"img work5"}),l.a.createElement("figcaption",null,l.a.createElement("h3",null,"\u8f6e\u64ad\u56fe\uff08\u81ea\u5df1\u5c01\u88c5\u7684\u7ec4\u4ef6\uff09"),l.a.createElement("hr",null),l.a.createElement("div",{className:"descript"},l.a.createElement("p",null,"\u63cf\u8ff0\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u6a21\u4eff\u7231\u5947\u827a\u7684\u8f6e\u64ad\u56fe"),l.a.createElement("p",{className:"descript-content"},"\u5b83\u5b9e\u73b0\u4e86\u81ea\u52a8\u8f6e\u64ad\u3001\u9f20\u6807\u79fb\u5165\u60ac\u505c\uff0c\u79fb\u51fa\u7ee7\u7eed\u81ea\u52a8\u64ad\u653e\u7b49\u529f\u80fd"),l.a.createElement("p",null," \u4eae\u70b9\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u6211\u5c01\u88c5\u6210\u4e86\u7ec4\u4ef6\uff0c\u8c03\u7528\u51fd\u6570\u4f20\u5165\u63a7\u5236\u53c2\u6570\u5373\u53ef\u4f7f\u7528")),l.a.createElement("hr",null),l.a.createElement("div",{className:"works-footer"},l.a.createElement("a",{href:"https://zhangzhiguo010.github.io/scrollPicture-2018/index.html",target:"_blank"},l.a.createElement("div",{className:"button"},"\u9884\u89c8\u94fe\u63a5")),l.a.createElement("a",{href:"https://github.com/zhangzhiguo010/scrollPicture-2018",target:"_blank"},l.a.createElement("div",{className:"button"},"\u6e90\u7801\u94fe\u63a5")))))),l.a.createElement("li",null,l.a.createElement("figure",null,l.a.createElement("div",{className:"img work6"}),l.a.createElement("figcaption",null,l.a.createElement("h3",null,"\u5c0f\u5c0f\u5bfc\u822a"),l.a.createElement("hr",null),l.a.createElement("div",{className:"descript"},l.a.createElement("p",null,"\u63cf\u8ff0\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u8fd9\u662f\u4e00\u4e2a\u5f88\u7b80\u6d01\u7684\u5bfc\u822a\u9875\u9762"),l.a.createElement("p",null," \u4eae\u70b9\uff1a"),l.a.createElement("p",{className:"descript-content"},"\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u559c\u597d\u7f16\u8f91\u5404\u4e2a\u6309\u952e\u8bbf\u95ee\u7684\u7f51\u7ad9")),l.a.createElement("hr",null),l.a.createElement("div",{className:"works-footer"},l.a.createElement("a",{href:"https://zhangzhiguo010.github.io/keyboard-2018/index.html",target:"_blank"},l.a.createElement("div",{className:"button"},"\u9884\u89c8\u94fe\u63a5")),l.a.createElement("a",{href:"https://github.com/zhangzhiguo010/keyboard-2018",target:"_blank"},l.a.createElement("div",{className:"button"},"\u6e90\u7801\u94fe\u63a5"))))))))}}]),t}(n.Component)),y=(a(11),a(8)),j=a.n(y),O=a(14),w=a.n(O),S=(a(39),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={content:[["HTML5 & CSS3 & JavaScript","\u80fd\u72ec\u7acb\u5236\u4f5c\u7cbe\u7f8e\u7f51\u9875\uff0c\u638c\u63e1HTML5\u8bed\u4e49\u5316\uff0c\u638c\u63e1CSS3\u52a8\u753b\u3001\u8fc7\u6e21\u6548\u679c\u7b49\u5e38\u7528\u6280\u672f"],["\u79fb\u52a8\u7aef\u9875\u9762","\u638c\u63e1\u767e\u5206\u6bd4\u3001\u5f39\u6027\u548c\u54cd\u5e94\u5f0f\u7b49\u5e03\u5c40\uff0c\u77e5\u9053\u4ed6\u4eec\u7684\u4f18\u52a3\u77ed\u957f\uff0c\u53ef\u5728\u5404\u79cd\u5c3a\u5bf8\u8bbe\u5907\u4e0a\u6b63\u786e\u9009\u7528"],["\u524d\u7aef\u6846\u67b6","\u77e5\u6653\u524d\u7aef\u4ee3\u7801\u98ce\u683c\u7684\u53d8\u8fc1\u5386\u7a0b\uff0c\u4e86\u89e3\u4e09\u5927\u6846\u67b6\u95f4\u7684\u4e0d\u540c\uff0c\u76ee\u524d\u7528\u7684\u662fReact\uff0cRedux\u638c\u63e1\u5230\u6e90\u7801\u7ea7\u522b"],["\u5176\u4ed6\u4fe1\u606f","\u638c\u63e1jQuery\u3001HTTP\u4f20\u8f93\u534f\u8bae\u3001\u7b80\u5355\u7684\u547d\u4ee4\u884c\u3001\u57fa\u672c\u7684webpack\u4f7f\u7528\uff0c\u5e73\u5e38\u4f7f\u7528GitHub\u4ed3\u5e93\u5b58\u50a8\u4ee3\u7801"]]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){w()(j.a),j.a.chart("skillChart",{chart:{polar:!0,type:"line"},pane:{size:"80%"},xAxis:{categories:["\u5de5\u7a0b\u5316&\u4ee3\u7801\u98ce\u683c","React&Redux","HTTP","\u7b97\u6cd5&\u6570\u636e\u7ed3\u6784","JavaScript","HTML&CSS"],tickmarkPlacement:"on",lineWidth:0},yAxis:{gridLineInterpolation:"polygon",lineWidth:0,min:0},tooltip:{shared:!0,pointFormat:'<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'},legend:{align:"right",verticalAlign:"top",y:70,layout:"vertical"},series:[{name:"\u5b66\u4e60\u76ee\u6807",data:[100,100,100,100,100,100],pointPlacement:"on",color:"#efe5ac"},{name:"\u638c\u63e1\u60c5\u51b5",data:[110,90,80,70,120,120],pointPlacement:"on",color:"red"}],credits:{enabled:!1}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"skillChart_wrapper",id:"skill"},l.a.createElement("h2",null,"\u6280\u80fd\u8865\u5145"),l.a.createElement("main",null,l.a.createElement("div",{className:"skillDescription"},this.state.content.map(function(e,t){return l.a.createElement(C,{key:t,title:e[0],detail:e[1]})})),l.a.createElement("div",{id:"skillChart",className:"skillChart"})))}}]),t}(n.Component)),C=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.detail;return l.a.createElement("div",{className:"skill_row"},l.a.createElement("h3",null,t),l.a.createElement("p",null,a))}}]),t}(n.Component),_=a(7),z=a.n(_);function x(e){return new z.a.Query(e).find()}z.a.init({appId:"Wwznshss8YtSAktaYBWks0Lt-gzGzoHsz",appKey:"cptsnlLS3yriPqudT9fDc65u"});a(41),a(43);var R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={visitorInput:"",visitorMessage:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;x("MyResume").then(function(t){e.setState({visitorMessage:t})}),this.handleInput=function(t){e.setState({visitorInput:t.target.value})},this.handleSubmit=function(t){var a,n,l=e.state.visitorInput;t.preventDefault(),e.state.visitorInput.trim()&&(a="MyResume",n={message:l},(new(a=z.a.Object.extend(a))).save(n)).then(function(t){x("MyResume").then(function(t){e.setState({visitorInput:"",visitorMessage:t})})})}}},{key:"render",value:function(){var e=this.state,t=e.visitorInput,a=e.visitorMessage;return l.a.createElement("div",{className:"message_wrapper",id:"message"},l.a.createElement("h2",null,"\u7559\u8a00\u677f"),l.a.createElement("div",{className:"visitorInput"},l.a.createElement("textarea",{required:!0,value:t,onChange:this.handleInput}),l.a.createElement("input",{type:"submit",value:"\u53d1\u8868\u8bc4\u8bba",onClick:this.handleSubmit})),l.a.createElement("ul",null,a.slice(-5).reverse().map(function(e){var t=e.id,a=e.attributes.message;return l.a.createElement("li",{key:t},l.a.createElement(M,{message:a}))})))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.message;return l.a.createElement("div",{className:"messageItem"},l.a.createElement("div",{className:"photo"},l.a.createElement("i",{className:"iconfont icon-visitor"})),l.a.createElement("div",{className:"visitor"},l.a.createElement("p",{className:"visitor_name"},"\u533f\u540d\u8bc4\u8bba"),l.a.createElement("p",{className:"visitor_message"},e)))}}]),t}(n.Component),I=(a(45),a(47),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app_wrapper"},l.a.createElement(f,null),l.a.createElement("figure",{className:"banner"}),l.a.createElement("div",{className:"main"},l.a.createElement(b,null),l.a.createElement(g,null),l.a.createElement(S,null),l.a.createElement(k,null),l.a.createElement(R,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,2,1]]]);
//# sourceMappingURL=main.2cb311dc.chunk.js.map