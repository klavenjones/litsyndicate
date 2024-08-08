// Put your application javascript here
const mobileMenu = document.querySelector('#open-mobile-menu');
const closeMobileMenu = document.querySelector('#close-mobile-menu');
const offCanvasMenu = document.querySelector('#off-canvas-menu');

mobileMenu.addEventListener('click', () => {
  console.log('clicked');
  overlay.classList.remove('opacity-0');
  overlay.classList.add('opacity-100');
  overlay.classList.remove('pointer-events-none');

  offCanvasMenu.classList.remove('-translate-x-full');
  offCanvasMenu.classList.add('translate-x-0');
});

closeMobileMenu.addEventListener('click', () => {
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  overlay.classList.add('pointer-events-none');

  offCanvasMenu.classList.remove('translate-x-0');
  offCanvasMenu.classList.add('-translate-x-full');
});

document.addEventListener('DOMContentLoaded', () => {
  const mobileTabButtons = document.querySelectorAll('.mobile-tab-button');
  const tabButtons = document.querySelectorAll('.tab-button');
  const flyoutMenus = document.querySelectorAll('.flyout-menu');
  mobileTabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log('clicked');
      // Remove selected classes from all buttons
      mobileTabButtons.forEach((btn) => {
        btn.classList.remove('border-indigo-600', 'text-indigo-600');
        btn.classList.add('border-transparent', 'text-gray-900');
      });

      // Add selected classes to the clicked button
      button.classList.remove('border-transparent', 'text-gray-900');
      button.classList.add('border-indigo-600', 'text-indigo-600');
    });
  });

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove selected classes from all buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove('border-indigo-600', 'text-indigo-600');
        btn.classList.add(
          'border-transparent',
          'text-gray-700',
          'hover:text-gray-800'
        );
        btn.setAttribute('aria-expanded', 'false');
      });

      // Add selected classes to the clicked button
      button.classList.remove(
        'border-transparent',
        'text-gray-700',
        'hover:text-gray-800'
      );
      button.classList.add('border-indigo-600', 'text-indigo-600');
      button.setAttribute('aria-expanded', 'true');

      // Hide all flyout menus
      flyoutMenus.forEach((menu) => {
        menu.classList.remove('opacity-100', 'ease-out', 'duration-200');
        menu.classList.add('opacity-0', 'ease-in', 'duration-150');
      });

      // Show the flyout menu corresponding to the clicked button
      const flyoutMenuId = button.getAttribute('aria-controls');
      const flyoutMenu = document.getElementById(flyoutMenuId);
      flyoutMenu.classList.remove('opacity-0', 'ease-in', 'duration-150');
      flyoutMenu.classList.add('opacity-100', 'ease-out', 'duration-200');
    });
  });
});
