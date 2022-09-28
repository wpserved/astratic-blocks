export default function frontend() {
  window.addEventListener('DOMContentLoaded', () => {

    const blocks = [...document.querySelectorAll('.wp-block-notice')];

    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    blocks.forEach((block, index) => {
      const reloadTime = block.getAttribute('data-reload');
      const noticeId = block.getAttribute('data-notice-id');
      const closeButton = block.querySelector('.wp-block-notice__button-close-front');
      const reloadDate = new Date(new Date().getTime()+(reloadTime*24*60*60*1000));
      
      if (getCookie(`notice${noticeId}`)) {
          block.classList.add('wp-block-notice--hidden');
      }
    
      closeButton.addEventListener('click', () => {
        block.classList.add('wp-block-notice--hidden');
        document.cookie = `notice${noticeId}=true;expires=${reloadDate.toUTCString()};path=/`;
      })
    })
  })
}