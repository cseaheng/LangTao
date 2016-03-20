// JavaScript Document

window.onload=function(){
	
//	var uParent=document.getElementById('main_container');
//	var uNewsli=getClassObj(uParent,"news_li");
//	alert(uNewsli.length);
//console.log(checkscroll());
//滚动加载函数
	var dataInt={data:[{'src':'7.jpg'},{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'}]};
	var datah2={data:[{'inner':'东京值得一去的5间独立书店'},
	{'inner':'台湾一大学蒋介石像遭喷白漆，当地政府：不必大惊小怪'},
	{'inner':'埃科式的自由：你要有些游戏的趣味，不能太当真'},
	{'inner':'解放军仪仗队员入职民航空中安全员：练擒拿格斗学世界地理'}]};
	var datap={data:[{'inner':'独立书店是许多文艺范儿旅行者的必访之地。在东京，就算你不懂日语，这5间有设计讲美感的独立书店也值得一去。'},
	{'inner':'据台湾《联合报》报道，云林科技大学蒋介石铜像是云林县硕果仅存的铜像，昨天有学生发现位于校园云旭楼前方的蒋介石铜像，全身被喷上白漆。'},
	{'inner':'翻开一本小说的扉页，意味着你正在和文本达成默契，你即将经历的诸般体验，在某种程度上是一场幻梦，你要有些游戏的趣味，不能太当真——这才是自由，仅仅在符号的世界里。'},
	{'inner':'航空安全员岗前培训，既包括实战和体能训练，也包括企业文化和职业道德、飞行技术、行业知识、世界地理、法律法规等各方面的课程'}]};

	window.onscroll=function(){
		if(checkscroll()){
			var uParent=document.getElementById('main_container');
			for(var i=0;i<dataInt.data.length;i++){
				var uNewsli=document.createElement("div");
				uNewsli.className="news_li";
				uParent.appendChild(uNewsli);
				var uNewspic=document.createElement("div");
				uNewspic.className="news_pic";
				uNewsli.appendChild(uNewspic);
				var uImg=document.createElement("img");
				uImg.src="./img/"+dataInt.data[i].src;
				uNewspic.appendChild(uImg);
				var uH2=document.createElement("h2");
				uH2.innerHTML=datah2.data[i].inner;
				uNewsli.appendChild(uH2);
				var uP=document.createElement("p");
				uP.innerHTML=datap.data[i].inner;
				uNewsli.appendChild(uP);
			}
		}	
	}
//加载登录框弹出函数
  var oLogin=document.getElementById("btnLogin");
  popLogin(oLogin);
}

//通过父元素和子元素的class名来获取同类子元素的数组
function getClassObj(parent,className){
	var obj=parent.getElementsByTagName("*");
	var pin=[];
	for(var i=0;i<obj.length;i++){
		if(obj[i].className==className){
			pin.push(obj[i]);
		}
	}
	return pin;
}

//检测滚动加载的条件
function checkscroll(){
	var uParent=document.getElementById('main_container');
	var uNewsli=getClassObj(uParent,"news_li");
	var lastliH=uNewsli[uNewsli.length-1].offsetTop+Math.floor(uNewsli[uNewsli.length-1].offsetHeight/2);
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var scrollH=scrollTop+document.documentElement.clientHeight;
	return(lastliH<scrollH)?true:false;
}