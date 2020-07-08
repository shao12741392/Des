//购物车表格对象
var table=document.getElementById("tab");
// 购物车中商品的数量
if(localStorage.getItem("count")==null){
	localStorage.setItem("count",0)
}

// 显示购物车
window.showCar=function(){
  location.href="car.html"
}
 if(localStorage.getItem("array")==null){
localStorage.setItem("array",JSON.stringify([]));
//localStorage.setItem("array",[]);
 }
 
// 将商品添加到购物车
window.addFoodCar=function(name,price){
	var arr=JSON.parse(localStorage.getItem("array")) 
	var count=JSON.parse(localStorage.getItem("count"))
    if(checkName(name)){  
    	console.log(count)
    	count++;
    	arr.push({name:name,price:price,blo:true,copies:1})  
    	arrJson=JSON.stringify(arr)
    	localStorage.setItem("array",arrJson)
    	localStorage.setItem("count",count)
      document.getElementById("count").innerHTML=count;
    }
}
//判断商品在购物车中是否存在
window.checkName=function(name){
    var arr=JSON.parse(localStorage.getItem("array"))    
    var r=true;
//    var count=JSON.parse(localStorage.getItem("count"))
    for(var i=0;i<arr.length;i++){
        if(name==arr[i].name){
        	arr[i].copies++;
        	arrJson=JSON.stringify(arr);
        	localStorage.setItem("array",arrJson)
//      	if(arr[i].blo==true){
//      		count++
//      		localStorage.setItem("count",count)        		
//      	}
//      	document.getElementById("count").innerHTML=count;
            r=false;
            break;
        }
    }
    return r;
}

window.newBuy=function(){	
	var count=JSON.parse(localStorage.getItem("count"))	
	document.getElementById("count").innerHTML=count;
}

require('./style.css');
