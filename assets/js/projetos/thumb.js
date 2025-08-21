function changeImage(thumbnail) {
  const mainContainer = document.getElementById('main-container');
  // mantém a classe, só limpa conteúdo
  mainContainer.innerHTML = '';

  const videoSrc = thumbnail.getAttribute('data-video');
  const imgSrc = thumbnail.src;

  if (videoSrc) {
    const video = document.createElement('video');
    video.id = 'main-image';
    video.src = videoSrc;
    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.className = 'mb-3'; // deixa o estilo responsivo pelo CSS

    mainContainer.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.id = 'main-image';
    img.src = imgSrc;
    img.alt = 'Imagem';
    img.className = 'mb-3';

    mainContainer.appendChild(img);
  }
}
