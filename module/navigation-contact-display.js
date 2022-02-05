export default function navContactDisplay() {
  const listSection = document.getElementById('list');
  const addSection = document.getElementById('add-book');
  const contactSection = document.getElementById('contact');

  listSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'block';
}