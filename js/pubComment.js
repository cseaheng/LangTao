// JavaScript Document
function pubComment(){
  var oComText=document.getElementById("com_text");
  if(oComText.value!=""){
	  var oComment=document.getElementById("news_comment");
	  var oComLi=document.createElement("div");
	  oComLi.id="com_list";
	  oComLi.innerHTML="<div class='headpro'><img src='./img/head.jpg'/></div>";
	  oComment.appendChild(oComLi);
	  
	  var oUser=document.createElement("h5");
	  oUser.innerHTML="预设用户";
	  oComLi.appendChild(oUser);
	  
	  var oP=document.createElement("p");
	  oP.innerHTML=oComText.value;
	  oComLi.appendChild(oP);
  }
  else{alert("输入内容不能为空！");}
}