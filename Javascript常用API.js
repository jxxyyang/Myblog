//Javascript常用API//
//1. 元素查找
/*
	//node
	document.getElementById(id); 
	document.querySelector(selector); //document.querySelector('#test div');
	document.doctype
	document.documentElement;
	document.head
	document.title
	document.body
	
	//node list
	document.getElementsByClassName(className);
	document.getElementsByName(name)
	document.getElementsByTagName(tagName)
	document.getElementByTagNameNS(namespace, name);
	document.querySelectorAll(selectors)//
	document.links
	document.scripts
	document.images
	document.forms
*/

//class 操作
/*	
	//add class
    e1.className += ' ' + className;
	
	//has class
	function hasClass(el, className) { 
		return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
	
	//toggle class
	function toggleClass(e1, className) {
		var classes  = e1.className.split(' ');
		var existingIndex  =  -1;
		for(var i = classes.length; i++;) {
			if(classes[i] == className) {
				existingIndex = i;
			}
			if(existingIndex >= 0) {
				classes.splice(existingIndex, 1);
			}else {
				classes.push(className);
			}
		}
		
		el.className = classes.join(' ');
	}
	
	function removeClass(e1, className) {
		e1.className = e1.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), '');
	}
	
	//ie 10
	el.classList.add(className);
	el.classList.removeClass(className);
	e1.classList.container(className);
	e1.classList.toggle(className);
*/

//节点操作
/*
	//创建
	var el = document.createElement(name);
	//复制
	el.cloneNode(true);
	
	parent.appendChild(el);
	
	//父节点
	el.parentNode;
	
	//删除节点
	el.parentNode.removeChild(el)
	
	//兄弟节点
	var siblings = Array.prototype.filter.call(el.parentNode.children, function(child){
		return child !== el;
	});
*/

//属性操作
/*
	el.getAttribute('alt');
	el.setAttribute('alt', 'xxoo');
*/

//内容操作
/*
	//获取元素内容
	el.innerHTML
	//设置元素内容
	el.innerHTML = string;
	
	//获取元素内容，包含元素本身
	el.outerHTML;
	el.outerHTML = string
	
	//ie8
	el.innerText;
	//ie9+
	el.innerContent
	el.innerText = string;
	el.innerContent = string;
*/

//位置
/*
	//元素在页面上的偏移量
	//el.getBoundingClientRect()
	var rect = el.getBoundingClientRect();
	return {
		top: rect.top + document.body.scrollTop,
		left: rect.left + document.body.scrollLeft
	};
	
	//元素自身宽, 高，包含border，padding
	el.offsetWidth
	el.offsetHeight
	//元素左边框至包含元素内边框之间的像素距离
	el.offsetLeft
	el.offsetTop
	
	//在没有滚动条的情况下，元素内容的总宽度
	scrollHeight
	scrollWidth
	scrollLeft
	scrollTop
	
	
	//视口大小
	//ie9
	var pageWidth = window.innerWidth,
		pageHeight = window.innerHeight;
	if(typeof pageWidth != "number") {
		//ie8
		if(document.compatMode == "CSS1Compat") {
			pageWidth = document.documentElement.clientWidth;
			pageHeight = document.documentElement.clientHeight;
		}else {
			//ie6 混杂模式
			pageWidth = document.body.clientWidth;
			pageHeight = document.body.clientHeight;
		}
	}
*/

//事件
/*
	//ie9
	el.addEventListener(eventName, handler, booleans) // booleans默认为false，（时间冒泡阶段执行，） ture（事件在捕捉阶段执行）

	//ie8
	el.attachEvent('on'+eventName, function(){
		handle.call(el);
	});
	
	//移除事件
	//ie9
	el.removeEventListener(eventName, handle);

	//ie8
	el.detachEvent('on'+ eventName, handle);
	
	//事件触发
	if(document.createEvent) {
		//ie9+
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);
		el.dispatchEvent(event);
	}else {
		//ie8
		el.fireEvent("onchange")
	}
	
	//event对象
	var event = window.event || event;
	
	//事件的目标节点
	var target = window.target || event.srcElement;
	
	//事件代理
	ul.addEventListener('click', function(event) {
		if(event.target.tagName.toLowerCase === "LI") {
			console.log(event.target.innerHTML)
		}
	})
*/

//DOM加载完毕
/*
	function ready(fn) {
		if(document.readyState != 'loading') {
			//ie9+
			document.addEventListener('DOMContentLoaded', fn);
		}else {
			document.attachEvent('onreadystatechange', function() {
				if(document.readyState != 'loading') {
					fn();
				}
			})
		}
	}
*/

//绑定上下文
/*
	//ie8
	fn.apply(context, arguments);
	//ie9
	fn.bind(context)
*/



