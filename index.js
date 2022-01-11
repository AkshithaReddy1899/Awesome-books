import Collection from './module/render.js';
import navAddDisplay from './module/navigation-add-display.js';
import navContactDisplay from './module/navigation-contact-display.js';
import navListDisplay from './module/navigation-list-display.js';
import time from './module/time.js';

const collection = new Collection();

collection.getBooks();

window.onload = () => {
  const arrList = collection.getBooks();
  collection.display(arrList);
};

// event listener to trigger add class

document.querySelector('.addBtn').addEventListener('click', () => {
  collection.getBooks();
  collection.addBooks();
});

// luxon time

window.onload = () => {
  setInterval(() => {
    document.getElementById('time').textContent = time();
  }, 100);
};

// NAVIGATION

document.getElementById('nav-list').addEventListener('click', () => navListDisplay());

document.getElementById('nav-add').addEventListener('click', () => { navAddDisplay(); });

document.getElementById('nav-contact').addEventListener('click', () => { navContactDisplay(); });