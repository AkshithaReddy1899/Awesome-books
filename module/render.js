import navListDisplay from './navigation-list-display.js';

const bookName = document.getElementById('name');
const author = document.getElementById('author');
const output = document.querySelector('.list-elements');

export default class Collection {
  constructor() {
    this.arr = [];
  }

  // class to check array items in the local storage

  getBooks() {
    if (localStorage.getItem('booksList') === null) {
      this.arr = [];
    } else {
      this.arr = JSON.parse(localStorage.getItem('booksList'));
    }
  }

  // class to update array in the local storage

  UpdateLocalStorage() {
    localStorage.setItem('booksList', JSON.stringify(this.arr));
  }

  pushListItem(item) {
    const li = document.createElement('li');
    li.className = 'list_item';

    const p = document.createElement('p');
    p.className = 'book-name';
    p.innerHTML = `${item.bookName} by ${item.author}`;

    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.addEventListener('click', () => {
      this.removeBooks(`${item.id}`);
    });
    li.appendChild(p);
    li.appendChild(button);
    output.appendChild(li);
  }

  // class to push items into array and display them

  addBooks() {
    const bookObj = {
      id: new Date().getTime().toString(),
      book: bookName.value,
      author: author.value,
    };
    this.arr.push(bookObj);
    this.UpdateLocalStorage();
    output.innerHTML = '';
    this.arr.forEach((item) => {
      this.pushListItem(item);
    });
    navListDisplay();
  }

  // class to remove items from array and display them

  removeBooks(id) {
    this.arr = this.arr.filter((e) => e.id !== id);
    output.innerHTML = '';
    this.UpdateLocalStorage();
    this.arr.forEach((item) => {
      this.pushListItem(item);
    });
  }
}
