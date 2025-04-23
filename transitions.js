document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href]').forEach(link => {
      // Ignore anchor links and external links
      if (link.hostname === window.location.hostname && !link.href.includes('#')) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          document.body.classList.add('fade-out');
          setTimeout(() => {
            window.location = link.href;
          }, 500); // Duration should match your CSS transition
        });
      }
    });
  });
  