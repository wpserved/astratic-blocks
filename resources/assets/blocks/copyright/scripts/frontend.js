export default function frontend() {
  window.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.querySelector('#copy-year');
    const sitenameEl = document.querySelector('#copy-sitename');

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    if (sitenameEl) {
      sitenameEl.textContent = astratic_copyright_vars.site_title;
    }
  })
}