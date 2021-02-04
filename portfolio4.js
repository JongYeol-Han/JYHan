let docElim = document.documentElement,
    resumeHw = document.querySelector('.resume_article'),
    resumeTi = document.querySelector('.resume_h1'),
    listDate = document.querySelectorAll('.list'),
    introSub = document.querySelector('.intro_sub'),
    introH1 = introSub.querySelector('strong'),
    projectTl = document.querySelector('.project_title'),
    nav = document.querySelector('.nav_list'),
    proEntire = document.querySelector('.project_entire'),
    introSection = document.querySelector('.intro_section'),
    main = document.querySelector('main'),
    fir = document.querySelector('.first'),
    sec = document.querySelector('.second'),
    thi = document.querySelector('.third'),
    four = document.querySelector('.fourth'),
    fif = document.querySelector('.fifth');
    
    console.log(introSection);
if(matchMedia('screen and (max-width:768px)').matches){
  window.addEventListener('scroll', function () {
    let scrollPos = docElim.scrollTop;
    if(scrollPos > 0){
      nav.style.top = '0';
    } else if(scrollPos == 0){
      nav.style.top = '-10%';
    } if (scrollPos > 250) { 
       resumeHw.style.animationPlayState = 'running';
       resumeTi.style.animationPlayState = 'running';
       } if(scrollPos > 750){
        for ( x = 0; x < listDate.length; x++){
          listDate[x].style.animationPlayState = 'running';
      }} else if(scrollPos < 850){
        function riseRatio(idx){
            var num = 0;
            var dateAt = listDate[idx].getAttribute('data-rate');
            var timer = setInterval(function(){
                ++num;
                listDate[idx].innerText = num;
                if(num == dateAt){
                    clearInterval(timer);
                }
            }, 40);
        }
        for ( i = 0; i < listDate.length; i++) {
            riseRatio(i);    
        }
      } if (scrollPos > 1000){
        introH1.style.animationPlayState = 'running';
        introSub.style.animationPlayState = 'running';
      }  if (scrollPos > 1200){
        fir.style.animationPlayState = 'running';
      } if (scrollPos > 1500){
        sec.style.animationPlayState = 'running';
      } if (scrollPos > 1700){
        thi.style.animationPlayState = 'running';
      } if (scrollPos > 2000){
        four.style.animationPlayState = 'running';
      } if (scrollPos > 2200){
        fif.style.animationPlayState = 'running';
      } if (scrollPos > 2400){
        projectH1.style.animationPlayState = 'running';
        projectTl.style.animationPlayState = 'running';
      } if (scrollPos > 2700){
        here.style.animationPlayState = 'running';
        here_in.style.animationPlayState = 'running';
      } if (scrollPos > 3400){
        rescent.style.animationPlayState = 'running';
        rescent_in.style.animationPlayState = 'running';
      } if (scrollPos > 4100){
        whole.style.animationPlayState = 'running';
        whole_in.style.animationPlayState = 'running';
      }
    });

} else if(matchMedia('sreen and(max-width:1600px)'.matches)){
  window.addEventListener('scroll', function () {
    let scrollPos = docElim.scrollTop;

        navOff = resumeHw.getBoundingClientRect();      
        navTop = window.pageYOffset + navOff.top;
        

        intOff = introSub.getBoundingClientRect();
        intTop = window.pageYOffset + intOff.top;

        proEnOff = proEntire.getBoundingClientRect();
        proEnTop = window.pageYOffset + proEnOff.top;

        introSecOff = introSection.getBoundingClientRect();
        intorSecTop = window.pageYOffset + introSecOff.top;

        firOff = fir.getBoundingClientRect();
        firTop = window.pageYOffset + firOff.top;
      

        secOff = sec.getBoundingClientRect();
        secTop = window.pageYOffset + secOff.top;
        
        thirOff = thi.getBoundingClientRect();
        thiTop = window.pageYOffset + thirOff.top;

     
        fourOff = four.getBoundingClientRect();
        fourTop = window.pageYOffset + fourOff.top;

        
        fifthOff = fif.getBoundingClientRect();
        fifthTop = window.pageYOffset + fifthOff.top;

     
        proOff = projectTl.getBoundingClientRect();
        proTop = window.pageYOffset + proOff.top;


     if(scrollPos > 0){
      nav.style.top = '0';
    } else if(scrollPos == 0){
      nav.style.top = '-10%';
    } if (scrollPos > navTop - 400) { 
       resumeHw.style.animationPlayState = 'running';
       for ( x = 0; x < listDate.length; x++){
       listDate[x].style.animationPlayState = 'running';
       }
      } else if(scrollPos < navTop){
        function riseRatio(idx){
            var num = 0;
            var dateAt = listDate[idx].getAttribute('data-rate');
            var timer = setInterval(function(){
                ++num;
                listDate[idx].innerText = num;
                if(num == dateAt){
                    clearInterval(timer);
                }
            }, 40);
        }
        for ( i = 0; i < listDate.length; i++) {
            riseRatio(i);    
        }
      } if (scrollPos > intTop - 400){
        introSub.style.animationPlayState = 'running';
        introH1.style.animationPlayState = 'running';
      } if (scrollPos < intTop - 400){
        main.style.background = '#fff';
      } if (scrollPos > firTop - 300){
        fir.style.animationPlayState = 'running';
      } if (scrollPos > secTop - 300){
        sec.style.animationPlayState = 'running';
      } if (scrollPos > intorSecTop - 300){
        main.style.background = '#333';
      } if (scrollPos > thiTop - 300){
        thi.style.animationPlayState = 'running';
      } if (scrollPos > fourTop - 300){
        four.style.animationPlayState = 'running';
      } if (scrollPos > fifthTop - 300){
        fif.style.animationPlayState = 'running';
      } if (scrollPos > proTop - 400){
        main.style.background = '#fff';
      } if (scrollPos > proTop - 300){
        projectTl.style.animationPlayState = 'running';
      } if (scrollPos > proEnTop - 400){
        proEntire.style.animationPlayState = 'running';
      }
    });

}

   



