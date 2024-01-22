window.addEventListener('DOMContentLoaded', () => {


  // <<<<<<<<<<<<    Tabs    >>>>>>>>>>>>
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  })

// <{<{<{<{<{<{<{<{<{<{<{<    Timer    >}>}>}>}>}>}>}>}>}>}>}>

  const diedLine = '2024-05-11';
/**
 * Calculate remaining time
 */
  function getTimeRemaining(endtime){
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
      days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / 1000 * 60 * 60) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    }


          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          }
  }

  /**
   * Adding zero if num < 10
   */
  function getZero(num){
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  /**
   * Setting remaining clock
   */
  function setClock(selector, endtime){
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    
          /**Запускаємо щоб при загрузці сторінки таймер зразу запускався */
          updateClock();
    
          function updateClock(){
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
              clearInterval(timeInterval);
            }
          }
  }

  setClock('.timer', diedLine);

  // <{<{<{<{<{<{<{<{<{<{<{<    Modal window    >}>}>}>}>}>}>}>}>}>}>}>

  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

  modalTrigger.forEach(el => {
    el.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      /**
       * make not scrolling background
       */
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
      modal.classList.remove('show');
      modal.classList.add('hide');
      /**
       * make scrolling background
       */
      document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);

  /**
   * make close modal by click out modal window 
   */
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  })

  /**
   * close modal by key Escape
   */
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  })

});