export default function frontend() {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      const blocks = document.querySelectorAll('[data-block-accordions]');
  
      if (!blocks.length) return;
  
      blocks.forEach(block => {
        const togglers = block.querySelectorAll('[data-accordion-toggler]');
  
        if (!togglers) return;
  
        togglers.forEach(function (e, i) {
          e.addEventListener('click', function () {
            const elements = [...block.querySelectorAll(['[data-accordion-toggler'])];
  
            elements.forEach((element) => {
              const item = element.parentNode;
              const content = item.querySelector('[data-accordion-content]');
  
              if (element !== e) {
                item.classList.remove('-active');
                up(element, content);
              } else {
                item.classList.toggle('-active');
                toggle(element, content);
              }
            });
          });
        });
      });
  
      function toggle(toggler, content) {
        const isAriaExpanded = toggler.getAttribute('aria-expanded') !== 'false';
  
        toggler.setAttribute('aria-expanded', !isAriaExpanded);
        content.setAttribute('aria-hidden', isAriaExpanded);
  
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
  
      function up(toggler, content) {
        toggler.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    },
    false
  );  
}