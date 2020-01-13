var tasks = [
	{
		id: 1,
		text: 'Task_1'
	},
	{
		id: 2,
		text: 'Task_2'
	},
	{
		id: 3,
		text: 'Task_3'
	}
]

function fillList(ul) {
	if(ul.firstChild) {
		while(ul.firstChild) {
			ul.removeChild(ul.firstChild)
		}    
	}
	for(let task of tasks) {
		var li = _('li', 'liTodo_2', task.text)
		var span = _('span', 'spanDel', 'X')		
		// span.setAttribute('num','' + task.id) //id from current object
		// span.addEventListener('click', delTask)
		span.addEventListener('click', function() {
			tasks = tasks.filter( item => { return item.id !== task.id } )
			fillList($('.ulTodo_2'))
		})
		render(li, span)
		render(ul, li)
	}
}

function addTask() {
	let input = $('.inputTask')
	if(input.value) {
		let id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
		let text = input.value
		tasks.push( { id, text } )
		input.value = ''
	}
	fillList($('.ulTodo_2'))
	// console.log(tasks)
}

function delTask() {
	var current = +this.getAttribute('num')
	tasks = tasks.filter(function(item) {
	    return item.id !== current
	})
	fillList($('.ulTodo_2'))
	// console.log(tasks)
}

var container_2 = _('div', 'containerRight');
render(root, container_2);

var ul = _('ul', 'ulTodo_2')
render(container_2, ul)
fillList(ul)

var input = _('input', 'inputTask')
input.addEventListener('keydown', function() {
	if(event.keyCode == 13 && this.value) addTask()
})
var button = _('button', 'btnTask', 'Add task')
button.addEventListener('click', addTask)

render(container_2, input)
render(container_2, button)


