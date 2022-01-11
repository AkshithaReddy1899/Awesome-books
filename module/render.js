import navListDisplay from './navigation-list-display.js';

const bookName = document.getElementById('name');
const author = document.getElementById('author');
const output = document.querySelector('.list-elements');
const error = document.getElementById('error');

export default class Collection {
  constructor() {
    this.arr = [];
  }

  // class to check array items in the local storage

  getBooks() {
    if (localStorage.getItem('booksList') === null) {
      return this.arr = [];
    } else {
      return this.arr = JSON.parse(localStorage.getItem('booksList'));
      
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
    p.innerHTML = `<b>${item.book}</b> by ${item.author} &nbsp;&nbsp;&nbsp;`;

    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.addEventListener('click', () => {
      this.removeBooks(`${item.id}`);
    });
    li.appendChild(p);
    li.appendChild(button);
    output.appendChild(li);
  }

  display(arr) {
    arr.forEach((item) => {
      this.pushListItem(item);
    })
  };

  // class to push items into array and display them

  addBooks() {
    if(bookName.value === '' || author.value === ''){
      error.textContent = 'Please type in Book name and author name';
    }else{
      
    error.textContent = '';
      const bookObj = {
        id: new Date().getTime().toString(),
        book: bookName.value,
        author: author.value,
      };
      this.arr.push(bookObj);
      console.log(this.arr);
      this.UpdateLocalStorage();
      output.innerHTML = '';
      this.display(this.arr);
      navListDisplay();
    }
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
