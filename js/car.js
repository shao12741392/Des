//购物车表格对象
var table = document.getElementById("tab");
// 购物车中商品的数量
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}
//返回购物
window.showCar=function() {
	location.href="index.html"
}
//继续点餐
window.showShop=function() {
	location.href="index.html"
}

if(localStorage.getItem("array") == null) {
	localStorage.setItem("array", JSON.stringify([]));
	//localStorage.setItem("array",[]);
}
//自动加载数组里的数组到购物车中
window.ad=function() {
	var arr = JSON.parse(localStorage.getItem("array"))
	for(var i = 0; i < arr.length; i++) {
		var tr = table.insertRow(-1);
		tr.insertCell(0).innerHTML = "<input type='checkbox' name='choose' onclick='changeCheck()'>"
		tr.childNodes[0].children[0].checked = arr[i].blo
		tr.insertCell(1).innerHTML = arr[i].name;
		tr.insertCell(2).innerHTML = arr[i].price;
		tr.insertCell(3).innerHTML = "<input type='button' value='-' onclick='subFood(this)'><span>" + arr[i].copies + "</span><input type='button' value='+' onclick='addFood(this)'>"
		tr.insertCell(4).innerHTML = "<input type='button' value='删除' onclick='deleteFood(this)'>"
	}
	changeCheck()
}
//全选
window.checkAll=function(obj) {
	var boxs = document.getElementsByName("choose");
	for(var i = 0; i < boxs.length; i++) {
		boxs[i].checked = obj.checked
	}
	changeCheck();
}
// 根据表格中复选框的状态决定全选按钮是否被选中
window.changeCheck=function() {
	var c = 0;
	var boxs = document.getElementsByName("choose");
	for(var i = 0; i < boxs.length; i++) {
		if(boxs[i].checked) {
			c++
			flag = true;
			var name3 = boxs[i].parentNode.parentNode.children[1].innerHTML
			changeArr(name3, flag)
		} else {
			flag = false;
			var name3 = boxs[i].parentNode.parentNode.children[1].innerHTML
			changeArr(name3, flag)
		}
	}
	document.getElementById("a").checked = c == table.rows.length - 1;
	localStorage.setItem("count", c)
	document.getElementById("count").innerHTML = c
	pay();
}
//勾选框改变本地存储内的是否为勾选内容
function changeArr(name3, flag) {
	var arr = JSON.parse(localStorage.getItem("array"))
	for(var j = 0; j < arr.length; j++) {
		if(arr[j].name == name3) {
			arr[j].blo = flag;
			arr = JSON.stringify(arr)
			localStorage.setItem("array", arr)
		}
	}
}

// 勾选的项目，需要支付的金额
function pay() {
	var money = 0;
	var boxs = document.getElementsByName("choose");
	for(var i = 0; i < boxs.length; i++) {
		if(boxs[i].checked) {			      
			money += parseInt(boxs[i].parentNode.parentNode.cells[2].innerHTML) * parseInt(boxs[i].parentNode.parentNode.cells[3].children[1].innerHTML);
		}
	}
	document.getElementById("m").innerHTML = money;
}

// 删除选中项
window.deleteChecked=function() {
	var boxs = document.getElementsByName("choose");
	arr = JSON.parse(localStorage.getItem("array"))
	for(var i = boxs.length - 1; i >= 0; i--) {
		if(boxs[i].checked) {
			var name2 = boxs[i].parentNode.parentNode.children[1].innerHTML
			for(var j = 0; j < arr.length; j++) {
				if(arr[j].name == name2) {
					sub(j)
				}
			}
			table.deleteRow(i + 1);
		}
	}
	changeCheck()
	pay()
}
// 删除当前行
window.deleteFood=function(obj) {
	var index = obj.parentNode.parentNode.rowIndex; //获得当前行的行号
	table.deleteRow(index);
	var name1 = obj.parentNode.parentNode.children[1].innerHTML
	arr = JSON.parse(localStorage.getItem("array"))
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].name == name1) {
			sub(i)
		}
	}
	changeCheck()
}

function sub(n) {
	arr = JSON.parse(localStorage.getItem("array"))
	for(var j = n; j < arr.length; j++) {
		arr[j] = arr[j + 1]
	}
	arr.length = arr.length - 1
	arrJson = JSON.stringify(arr)
	localStorage.setItem("array", arrJson)
}

//结算消费金额，并删除相应数据
window.settement=function() {
	var pay = document.getElementById("m").innerHTML
	alert("您本次共计消费" + pay + "元")
	var boxs = document.getElementsByName("choose");
	arr = JSON.parse(localStorage.getItem("array"))
	for(var i = boxs.length - 1; i >= 0; i--) {
		if(boxs[i].checked) {
			var name2 = boxs[i].parentNode.parentNode.children[1].innerHTML
			for(var j = 0; j < arr.length; j++) {
				if(arr[j].name == name2) {
					sub(j)
				}
			}
			table.deleteRow(i + 1);
		}
	}
	changeCheck()

}
//+号的添加购物车
window.addFood=function(obj) {
	copies = parseInt(obj.previousElementSibling.innerHTML)
	obj.previousElementSibling.innerHTML = copies + 1
	calculate(obj, 1)
	changeCheck()
}
//-号的删除购物车
window.subFood=function(obj) {
	copies = parseInt(obj.nextSibling.innerHTML)
	if(copies > 1) {
		obj.nextSibling.innerHTML = copies - 1
		calculate(obj, -1)
	}
	changeCheck()
}

function calculate(obj, a) {
	arr = JSON.parse(localStorage.getItem("array"))
	var name4 = obj.parentNode.parentNode.children[1].innerHTML
	for(var j = 0; j < arr.length; j++) {
		if(arr[j].name == name4) {
			arr[j].copies += a;
			arr = JSON.stringify(arr)
			localStorage.setItem("array", arr)
		}
	}
};

require('./style.css');