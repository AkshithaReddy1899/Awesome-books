export default function navListDisplay() {
  const listSection = document.getElementById('list');
  const addSection = document.getElementById('add-book');
  const contactSection = document.getElementById('contact');

  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
}