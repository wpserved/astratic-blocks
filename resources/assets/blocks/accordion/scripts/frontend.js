export default function frontend() {
  window.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.wp-block-astratic-accordion');

    if (!blocks.length) return;

    blocks.forEach((e) => {
      e.addEventListener('click', function () {
        const elements = [...document.querySelectorAll(['.wp-block-astratic-accordion__toggler'])];

        const toggle = (content) => {
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        }

        const up = (content) => {
          content.style.maxHeight = null;
        }

        elements.forEach((element) => {
          const item = element.parentNode;
          const content = element.nextSibling

          if (e !== item) {
            item.classList.remove('-active');
            up(content);
          } else {
            item.classList.toggle('-active');
            toggle(content);
          }
        });
      });
    });
  })
}


