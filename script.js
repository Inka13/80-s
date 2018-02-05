function play() {
         const audio = document.querySelector('audio');
        if (!audio)  return; 
      // stop the function from running all together
      
      audio.currentTime = 0; // rewind to the start
      audio.play();
      }
     function stop() {
         const audio = document.querySelector('audio');
         audio.pause();
        if (!audio)  return; 
      // stop the function from running all together
      
      audio.currentTime = 0; // rewind to the start
      
      }
      const yes = document.querySelector('#yes');
      yes.addEventListener('click',play);
      const no = document.querySelector('#no');
      no.addEventListener('click',stop);
   
