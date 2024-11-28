 // Configuração do vídeo para reprodução mais lenta
 const video = document.getElementById('background-video');
 video.playbackRate = 0.3; // Reduz a velocidade do vídeo para 50% do original

 // Certifique-se de que o áudio seja reproduzido automaticamente
 const music = document.getElementById('background-music');

 document.addEventListener('DOMContentLoaded', () => {
   const playMusic = music.play();
   if (playMusic !== undefined) {
     playMusic.catch(error => {
       console.log('A reprodução automática foi bloqueada pelo navegador.');
     });
   }
 });