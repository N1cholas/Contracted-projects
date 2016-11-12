function getElementsByClass(className) {
	var classElements = []
	var allElements = document.getElementsByTagName('*')
	for (var i = 0; i < allElements.length; i++) {
		if (allElements[i].className == className) {
			classElements.push(allElements[i])
		}
	}
	return classElements
}

(function () {
	var products = getElementsByClass('home-implicit-product');
	var deteils = getElementsByClass('home-implicit-product-detail');
	var photos = getElementsByClass('home-implicit-product-photo')
	for (var i = 0; i < products.length; i++) {
		products[i].index = i
		products[i].onmousemove = function () {
			deteils[this.index].style.bottom = 0;
			photos[this.index].style.transform = "scale(1.3)"
		}
		products[i].onmouseout = function () {
			deteils[this.index].style.bottom = -260 + 'px';
			photos[this.index].style.transform = "scale(1)"
		}
	}
	// console.log(products.length)
})()