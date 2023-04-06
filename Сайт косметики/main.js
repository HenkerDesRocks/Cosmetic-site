
        inform = document.querySelectorAll('.info'),
        modal_block = document.querySelectorAll('.block11'),
        modal_block_info = document.querySelectorAll('.info .block1'),
        popup = document.querySelector('.modal'),
        window_block = document.querySelector('.modal__popup'),
        mod = document.querySelector('.modal_info'),
        mod_w = document.querySelector('.modal_info-window'),
        mod2 = document.querySelector('.modal_info2'),
        mod_w2 = document.querySelector('.modal_info-window2'),
        bmod1 = document.querySelector('.bmod1'),
        bmod2 = document.querySelector('.bmod2');


popup.addEventListener("click", function(e) {
    if (e.target.classList.contains('modal')) {
    popup.classList.remove('active');
    };
  });
  
  for (let i = 0; i<modal_block.length; i++) {
  modal_block[i].addEventListener("click", function() {
    popup.classList.add('active');
  });
};
  
  for (let k=0; k<modal_block_info.length; k++) {
    let modall = modal_block_info[k];
    modall.addEventListener("click", function() {
      popup.classList.add('active');
    });
    };


    mod.addEventListener("click", function(e) {
        if (e.target.classList.contains('modal_info')) {
        mod.classList.remove('active');
        };
      });
      

      bmod1.addEventListener("click", function() {
        mod.classList.add('active');
      });

      mod2.addEventListener("click", function(e) {
        if (e.target.classList.contains('modal_info2')) {
        mod2.classList.remove('active');
        };
      });
      

      bmod2.addEventListener("click", function() {
        mod2.classList.add('active');
      });


      let card = document.querySelectorAll('.card');
      console.log(card);
      
      for (let z=0;z<card.length;z++) {
        console.log(card.length);
          card[z].querySelector('span').addEventListener('click', function() {
             card[z].style.transform= `scale(1)`;
             card[z].style.transformOrigin= "top";
             card[z].style.zIndex= "99";

              if (this.innerText== "Подробнее...") {
                  this.innerText="Скрыть...";
              } else {
                card[z].style.zIndex= "97";
                  this.innerText="Подробнее...";
              }
              
              card[z].querySelector('p').classList.toggle('show');
              

      
          });
      };
