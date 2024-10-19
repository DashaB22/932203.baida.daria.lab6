if (typeof window !== 'undefined'){
    window.addEventListener('load', function () {
      let Leftenter = document.getElementById('LeftButtonJsEnter');
        let Centerenter = document.getElementById('CenterButtonJsEnter');
          let Rightenter = document.getElementById('RightButtonJsEnter');
       demoButtonJsCreateButtonIn(Leftenter);
       demoButtonJsCreateButtonIn(Centerenter);
       demoButtonJsCreateButtonIn(Rightenter);
    });
    } else{
      const Leftenter = document.getElementById('LeftButtonJsEnter');
        const Centerenter = document.getElementById('CenterButtonJsEnter');
          const Rightenter = document.getElementById('RightButtonJsEnter');
         demoButtonJsCreateButtonIn(Leftenter);
         demoButtonJsCreateButtonIn(Centerenter);
         demoButtonJsCreateButtonIn(Rightenter);
    }
    function demoButtonJsCreateButtonIn(enterWrapper) {
        const btn = document.createElement('button');
        if(enterWrapper.id=="RightButtonJsEnter")
        {
        btn.innerHTML = 'Правая кнопка';
      } else if(enterWrapper.id=="CenterButtonJsEnter") {
        btn.innerHTML = 'Обе две';
      } else if(enterWrapper.id=="LeftButtonJsEnter") {
    btn.innerHTML = 'Левая кнопка';
    }
        btn.onclick = function () {
          if(btn.innerHTML == 'Левая кнопка'){
            document.getElementById('Left_ColumnCSS').setAttribute("class", "LeftColumn");
            document.getElementById('Right_ColumnCSS').setAttribute("class", "Right_Column");
            const elem = document.getElementById('LeftCat');
            const style = getComputedStyle(elem);
            document.getElementById('LeftCat').style.display='block';
            const dog_elem = document.getElementById('RightDog');
            const dog_style = getComputedStyle(dog_elem);
            document.getElementById('RightDog').style.display='none';
        } else if(btn.innerHTML == 'Обе две'){
          document.getElementById('Left_ColumnCSS').setAttribute("class", "LeftColumn50");
          document.getElementById('Right_ColumnCSS').setAttribute("class", "Right_Column50");
          const elem = document.getElementById('LeftCat');
          const style = getComputedStyle(elem);
          document.getElementById('LeftCat').style.display='block';
          const dog_elem = document.getElementById('RightDog');
          const dog_style = getComputedStyle(dog_elem);
          document.getElementById('RightDog').style.display='block';
    } else if(btn.innerHTML == 'Правая кнопка'){
      document.getElementById('Left_ColumnCSS').setAttribute("class", "LeftColumn10");
      document.getElementById('Right_ColumnCSS').setAttribute("class", "Right_Column90");
      const elem = document.getElementById('LeftCat');
      const style = getComputedStyle(elem);
      document.getElementById('LeftCat').style.display='none';
      const dog_elem = document.getElementById('RightDog');
      const dog_style = getComputedStyle(dog_elem);
      document.getElementById('RightDog').style.display='block';
    }
        };
        enterWrapper.appendChild(btn);
    }