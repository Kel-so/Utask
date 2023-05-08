// Modal

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show')
})

close.addEventListener('click', () => {
  modal_container.classList.remove('show')
})

// To-do aplication

const form = document.querySelector('form');
const todoList = document.getElementById('todo-list');
const ongoingList = document.getElementById('ongoing-list');
const completedList = document.getElementById('completed-list');


form.addEventListener('submit', (event) => {
  event.preventDefault(); 

const name = document.getElementById('project-name').value;
const description = document.getElementById('project-description').value;
const newItem = document.createElement('li');
newItem.textContent = `${name} - ${description}`;


todoList.appendChild(newItem);
form.reset();
});


todoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    ongoingList.appendChild(event.target);
  }
});

ongoingList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    completedList.appendChild(event.target);
  }
});

completedList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {

    event.target.remove();
  }
});

