    let name;

    function classFinder(name1, name2) {
      const buttonElem1 = document.querySelector(`.${name1}`);
      const buttonElem2 = document.querySelector(`.${name2}`);
      if(buttonElem1.classList.contains('button-clicked')) {
        buttonElem1.classList.remove('button-clicked');
      }
      if(buttonElem2.classList.contains('button-clicked')) {
        buttonElem2.classList.remove('button-clicked');
      }
    }

    function removeClass(name) {
            //buttonX
      if(name[6] === '1') {
        const name1 = 'js-button2', name2 = 'js-button3';
        classFinder(name1, name2);
      }

      else if(name[6] === '2') {
        const name1 = 'js-button1', name2 = 'js-button3';
        classFinder(name1, name2);
      } else {
        const name1 = 'js-button1', name2 ='js-button2';
        classFinder(name1, name2);
      }
    }

    function clickCustom(name) {
      const buttonElem = document.querySelector(`.js-${name}`);


      if(!(buttonElem.classList.contains('button-clicked'))) {
        removeClass(name);
        buttonElem.classList.add('button-clicked');
      } else {
        buttonElem.classList.remove('button-clicked');
      }
    }