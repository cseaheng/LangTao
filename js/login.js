// JavaScript Document
function popLogin(opopLogin){
	var oMask=document.getElementById("mask");
	var oLoginpanel=document.getElementById("login_panel");
		
		opopLogin.onclick=function(){
	  	oMask.style.display="block";
		oLoginpanel.style.display="block";
	    }
	
	var oClose=document.getElementById("btnclose");
		oMask.onclick=oClose.onclick=function(){
	  	oMask.style.display="none";
		oLoginpanel.style.display="none";
	    }

}
