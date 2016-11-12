function getElementsByClass (className) {
	var classElements = []
	var allElements = document.getElementsByTagName('*')
	for (var i = 0; i < allElements.length; i++) {
		if (allElements[i].className == className) {
			classElements.push(allElements[i])
		}
	}
	return classElements
}

function getClassName (className) {
	var classElements = []
	var allElements = document.getElementsByTagName('*')
	for (var i = 0; i < allElements.length; i++) {
		if (allElements[i].className.indexOf(className) != -1) {
			classElements.push(allElements[i])
		}
	}
	return classElements
}

// 选项卡
var sidebar_items = getClassName('background-sidebar-items')
var management_items = getClassName('management-items')

for (var i = 0; i < sidebar_items.length; i++) {
	sidebar_items[i].index = i
	sidebar_items[i].onclick = function () {
		// console.log(this.index)
		for (var i = 0; i < sidebar_items.length; i++) {
			sidebar_items[i].className = 'background-sidebar-items'
			management_items[i].style.display = 'none'
		}
		sidebar_items[this.index].className = 'background-sidebar-items active'
		management_items[this.index].style.display = 'block'
	}
}

// sidebar_items[4].click()

console.log(sidebar_items.length)

// 产品管理的修改，删除
	var delete_btn = getElementsByClass('background-delete-btn')
	var revise_btn = getElementsByClass('background-revise-btn')
	var cancle_btn = getElementsByClass('background-delete-cancel')[0]
	var delete_box = getElementsByClass('background-delete-product-masking')[0]
	var revise_box = getElementsByClass('background-revise-product-masking')[0]
	var cancle_btn_re = getElementsByClass('background-section-cancle')[0]

	var other_products = getElementsByClass('background-revise-product-normal-style')
	var other_products_masking = getElementsByClass('background-revise-product-update-masking')[1]

	// other_products[other_products.length - 1].onmousemove = function () {
	// 	other_products_masking.style.display = 'block'
	// }

	// other_products[other_products.length - 1].onmouseout = function () {
	// 	other_products_masking.style.display = 'none'
	// }
	
	cancle_btn.onclick = function () {
		delete_box.style.display = 'none'
	}

	cancle_btn_re.onclick = function () {
		revise_box.style.display = 'none'
	}

	for (var i = 0; i < delete_btn.length; i++) {
		delete_btn[i].onclick = function () {
			delete_box.style.display = 'block'
		}
	}

	for (var i = 0; i < revise_btn.length; i++) {
		revise_btn[i].onclick = function () {
			revise_box.style.display = 'block'
		}
	}

	// console.log(cancle_btn_re)

// 团队介绍上传蒙板
var team_update = getElementsByClass('background-team-product-update-photo')
var team_update_masking = getElementsByClass('background-team-product-update-masking')

for (var i = 0; i < team_update.length; i++) {
	team_update[i].index = i
	team_update[i].onmousemove = function () {
		team_update_masking[this.index].style.display = 'block'
	}
	team_update[i].onmouseout = function () {
		team_update_masking[this.index].style.display = 'none'
	}
}

// 团队介绍段落换行处理
var introduction = getElementsByClass('background-team-introduction')[0]
console.log(introduction)
introduction.onkeyup = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0]
	if (e && e.keyCode == 13) {
		console.log('enter')
		var value = introduction.value
		value = value.replace(/\n$/gi, '\n       ')
		introduction.value = value
		console.log(value)
	}
}

// 首页图片，背景轮播上传蒙板
var background_ = getElementsByClass('background-publish-product-update-photo')
var background_masking = getElementsByClass('background-publish-product-update-masking')
for (var i = 0; i < background_.length; i++) {
	background_[i].index = i
	background_[i].onmousemove = function () {
		background_masking[this.index].style.display = 'block'
	}
	background_[i].onmouseout = function () {
		background_masking[this.index].style.display = 'none'
	}
}
console.log(background_masking)

// 分类管理修改
var revise = getElementsByClass('background-classify-revise-btn')
var revise_box = getElementsByClass('background-classify-revise-masking')[0]
var revise_cancle = getElementsByClass('background-classify-revise-cancle')[0]
console.log(revise)
for (var i = 0; i < revise.length; i++) {
	revise[i].index = i
	revise[i].onclick = function () {
		revise_box.style.display = 'block'
	}
}

revise_cancle.onclick = function () {
	revise_box.style.display = 'none'
}

var add = getElementsByClass('bakcground-classify-add-btn')[0]
var add_box = getElementsByClass('background-classify-revise-masking')[1]
var add_cancle = getElementsByClass('background-classify-add-cancle')[0]

add.onclick = function () {
	add_box.style.display = 'block'
}

add_cancle.onclick = function () {
	add_box.style.display = 'none'
}