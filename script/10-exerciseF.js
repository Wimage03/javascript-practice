    let name;
    function clickCustom(name) {
      const buttonElem = document.querySelector(`.js-${name}`);
      if(!(buttonElem.classList.contains('button-clicked'))) {
        buttonElem.classList.add('button-clicked');
      } else {
        buttonElem.classList.remove('button-clicked');
      }
    }