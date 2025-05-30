
// window.addEventListener('resize', function() {
//   var windowWidth = window.innerWidth;

//   // Проверяем ширину окна и выполняем переключение
//   if (windowWidth <= 1200) {
//     // Загружаем мобильную версию страницы
//     window.location.href = 'indexmob.html';
//   } else {
//     // Загружаем десктопную версию страницы
//     window.location.href = 'index.html';
//   }
// });



// ДАТА ВРЕМЯ //////////////////////////////////////////////////////////////////////// 

const monthNames = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня', 'июля',
    'августа', 'сентября', 'октября',
    'ноября', 'декабря'
  ];
  
  // Определение названий дней недели на русском языке
  const dayNames = [
    'воскресенье', 'понедельник', 'вторник',
    'среда', 'четверг', 'пятница', 'суббота'
  ];
  
  // Функция для форматирования времени в формат HH:MM с мигающим двоеточием
  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let colonVisible = seconds % 2 === 0 ? true : false;
      
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
      
    return `${hours}${colonVisible ? ':' : ' '}${minutes}`;

    
  }
  
  // Функция для форматирования даты в формат DD monthName YYYY, dayName
  function formatDate(date) {
    let day = date.getDate();
    let monthName = monthNames[date.getMonth()];
    let year = date.getFullYear();
    let dayName = dayNames[date.getDay()];
      
    return `${day} ${monthName} ${year}   ${dayName}`;
  }
  
  // Функция для обновления времени на странице
  function updateTime() {
    let date = new Date();
    let timeFormatted = formatTime(date);
    let dateFormatted = formatDate(date);
    let datetimeElement = document.getElementById('datetime');
    datetimeElement.innerHTML = `${dateFormatted}, ${timeFormatted}`;
  }
  
  // Обновляем время каждую секунду
  setInterval(updateTime, 1000);
  

// НОВОСТИ

const tabBtns = document.querySelectorAll('.news-tab');
const tabs = document.querySelectorAll('.widget-container');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Убираем класс active у всех кнопок
    tabBtns.forEach(tab => tab.classList.remove('active'));

    // Добавляем класс active на кнопку, на которую кликнули
    btn.classList.add('active');

    // Скрываем все блоки с контентом
    tabs.forEach(tab => tab.classList.remove('active'));

    // Находим блок с контентом, который соответствует
    // выбранной закладке и добавляем ему класс active
    const source = btn.getAttribute('data-source');
    const tab = document.querySelector(`.widget-container[data-source="${source}"]`);
    tab.classList.add('active');
  });
});




// const menuButton = document.querySelector('.menu-button');
// const menuWrapper = document.querySelector('.menu-wrapper');

// // функция для закрытия меню
// const closeMenu = function() {
//   menuWrapper.style.display = 'none';
// }

// menuButton.addEventListener('click', function(event) {
//   event.stopPropagation(); // предотвращаем закрытие меню по клику на кнопку

//   if (menuWrapper.style.display === 'block') {
//     closeMenu(); // закрываем меню, если оно уже открыто
//   } else {
//     menuWrapper.style.display = 'block'; // открываем меню
//   }
// });

// // закрытие меню при клике вне меню
// document.addEventListener('click', function(event) {
//   const isClickInsideMenu = menuWrapper.contains(event.target);
//   if (!isClickInsideMenu) {
//     closeMenu();
//   }
// });

// // закрытие меню при клике на элемент меню
// menuWrapper.addEventListener('click', function(event) {
//   if (event.target.tagName === 'A') {
//     closeMenu();
//   }
// });

// бизнес


// Функция для получения данных из Google Sheets и обработки их

// function updatePage() {
//   fetch('https://script.google.com/macros/s/AKfycbwRBDkZBFNf2Q9f-bTfYasP89IxeHc_GgNZZgC_Txl8p4IFL_Ov_RPpz2oVT-cRWwq1/exec')
//     .then(response => response.text())
//     .then(html => {
//       document.getElementById('content').innerHTML = html;
//     });
// }


// отступы

// const elementsWithBr = document.querySelectorAll('.news-articleA br');

// elementsWithBr.forEach(brElement => {
//   const siblingElement = brElement.nextSibling;
//   if (siblingElement && siblingElement.nodeType === Node.TEXT_NODE) {
//     const wrapperElement = document.createElement('span');
//     wrapperElement.classList.add('with-indent');
//     siblingElement.parentNode.insertBefore(wrapperElement, siblingElement);
//     wrapperElement.appendChild(siblingElement);
//   }
// });