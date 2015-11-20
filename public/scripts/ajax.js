var Ajax = function(){
	var me = this;
	
	this.createHttpRequestObject = function(){
		if(window.XMLHttpRequest){
			return new XMLHttpRequest();
		}else if(window.ActiveXObject){
			try{
				return new ActiveXObject("Msxm12.XMLHTTP");
			}catch(e){
				try{
					return new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch(e){
					
				}
			}
		}
		return null;
	};
	
	this.request = this.createHttpRequestObject();
	
	this.processRespone = function(callBack){
		if(me.request.readyState == 4){
			if(me.request.status == 200){
				callBack(me.request.responseText);
			}
		}
	};
	
	this.parseParmeter = function(obj){
		var newParameter = '';
		for(var element in obj){
			newParameter += element+'=' + obj[element]+'&';
		};
		return newParameter.substring(0,newParameter.length - 1);	
	};
	
	this.post = function(url,parameter,callback){
		var parameterStr = this.parseParmeter(parameter);
		if(!this.request){
			this.request = this.createHttpRequestObject();
		}
		this.request.onreadystatechange = function(respone){
			me.processRespone(callback);
		};
		this.request.open("POST",url,true);
		this.request.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
		this.request.send(parameterStr);
	};
};

window.global.ajax = new Ajax();