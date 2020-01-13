function $(selector) {
	return document.querySelector(selector)
}

function _(selector, classes, html) {
	var elem = document.createElement(selector)
	classes && (elem.classList = classes)
	html && (elem.innerHTML = html)
	return elem
}

function render(container, child) {
	container.append(child)
}

// var root = $('#root')
// var container = _('div', 'container')
// render(root, container)
