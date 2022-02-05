export default function navAddDisplay() {
  const listSection = document.getElementById('list');
  const addSection = document.getElementById('add-book');
  const contactSection = document.getElementById('contact');

  listSection.style.display = 'none';
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
}