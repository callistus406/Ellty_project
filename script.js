const allPagesCheckbox = document.getElementById('all-pages');
const pageCheckboxes = document.querySelectorAll('.page-checkbox');

allPagesCheckbox.addEventListener('change', () => {
  pageCheckboxes.forEach(checkbox => {
    checkbox.checked = allPagesCheckbox.checked;
  });
});

pageCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    allPagesCheckbox.checked = Array.from(pageCheckboxes).every(cb => cb.checked);
  });
});
