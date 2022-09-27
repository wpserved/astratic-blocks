export default function frontend() {
  window.onload = () => {
    const yearEl = document.querySelector('#copy-year');
    const sitenameEl = document.querySelector('#copy-sitename');

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    if (sitenameEl) {
      sitenameEl.textContent = astratic_copyright_vars.site_title;
    }
  }
}