function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.addEventListener('click', (e) => {
  const disabledBtn = e.target.closest('button[disabled], .btn-disabled');
  if (disabledBtn) {
    e.preventDefault();
    alert('This feature has not been set up yet!');
  }
});