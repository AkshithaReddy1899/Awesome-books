import Collection from './module/render.js';
import navAddDisplay from './module/navigation-add-display.js';
import navContactDisplay from './module/navigation-contact-display.js';
import navListDisplay from './module/navigation-list-display.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const collection = new Collection();

collection.getBooks();

// event listener to trigger add class

document.querySelector('.addBtn').addEventListener('click', () => {
  collection.getBooks();
  collection.addBooks();
});

// luxon time

const time = DateTime.now();

document.getElementById('time').textContent = time;

// NAVIGATION

document.getElementById('nav-list').addEventListener('click', () => navListDisplay());

document.getElementById('nav-add').addEventListener('click', () => { navAddDisplay(); });

document.getElementById('nav-contact').addEventListener('click', () => { navContactDisplay(); });