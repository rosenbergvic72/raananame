
// ПЕРЕКЛЮЧАТЕЛЬ НОВОСТЕЙ.///////////////////////////////////////////////////////////////

// const tabBtns = document.querySelectorAll('.news-tab');
// const tabs = document.querySelectorAll('.widget-container');

// tabBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     // Убираем класс active у всех кнопок
//     tabBtns.forEach(tab => tab.classList.remove('active'));

//     // Добавляем класс active на кнопку, на которую кликнули
//     btn.classList.add('active');

//     // Скрываем все блоки с контентом
//     tabs.forEach(tab => tab.classList.remove('active'));

//     // Находим блок с контентом, который соответствует
//     // выбранной закладке и добавляем ему класс active
//     const source = btn.getAttribute('data-source');
//     const tab = document.querySelector(`.widget-container[data-source="${source}"]`);
//     tab.classList.add('active');
//   });
// });


// МОБ МЕНЮ//////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuWrapper = document.querySelector('.menu-wrapper');
    const menuItems = menuWrapper.querySelectorAll('a');
  
  
    // const menuButton = document.querySelector('.menu-button');
  
  if (menuButton) {
    menuButton.addEventListener('click', function(event) {
      // ваш код обработчика события
    });
  }
  
    // функция для закрытия меню
    const closeMenu = function() {
      menuWrapper.style.display = 'none';
    }
  
    // функция для открытия меню
    const openMenu = function() {
      menuWrapper.style.display = 'block';
    }
  
    // обработчик клика по кнопке меню
    menuButton.addEventListener('click', function(event) {
      event.stopPropagation();
      if (menuWrapper.style.display === 'block') {
        closeMenu();
      } else {
        openMenu();
      }
    });
  
    // обработчик клика вне меню для закрытия меню
    document.addEventListener('click', function(event) {
      if (!menuWrapper.contains(event.target)) {
        closeMenu();
      }
    });
  
    // обработчик клика на элементе меню для закрытия меню
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        closeMenu();
      });
    });
  });


  // НАВЕРХ /////////////////////////////////////////////////////////////////////////

  const backToTopButton = document.getElementById('backToTopButton');

// Обработчик события при нажатии на кнопку
backToTopButton.addEventListener('click', function() {
  // Прокручиваем страницу вверх
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});