//slide slide Hero content section
const heroSlider = document.querySelectorAll('.hero-overlay');

let heroActive = 0;

if(heroSlider) {
    heroSlider.forEach((hero, index) => {
      if(index === 0){
         hero.setAttribute("data-show", "show");
      } else {
         hero.setAttribute("data-show", "hidden");
      }
    })
   

    setInterval(() => {
        heroSlider.forEach((hero, index) => {
          if(heroActive === index) {
            hero.setAttribute("data-show", "show");
          } else {
            hero.setAttribute("data-show", "hidden");
          }
        });

        if(heroActive === heroSlider.length - 1) {
          heroActive = 0;
        } else {
          heroActive++;
        }

    }, 2000)
}