const images = [
  "image/卵のイメージ1.png",
  "image/卵のイメージ2.png",
  "image/卵のイメージ3.png",
  "image/卵のイメージ4.png",
  "image/卵のイメージ5.png",
  "image/卵のイメージ6.png",
  "image/卵のイメージ7.png",
  "image/卵のイメージ8.png",
  "image/卵のイメージ9.png",
  "image/卵のイメージ10.png",
  "image/卵のイメージ11.png",
  "image/卵のイメージ12.png",
  "image/卵のイメージ13.png",
  "image/卵のイメージ14.png",
  "image/卵のイメージ15.png",
  "image/卵のイメージ16.png",
  "image/卵のイメージ17.png",
  "image/卵のイメージ18.png",
  "image/卵のイメージ19.png",
  "image/卵のイメージ20.png",
  "image/卵のイメージ21.png",
  "image/卵のイメージ1.png",
  "image/卵のイメージ2.png",
  "image/卵のイメージ3.png",
  "image/卵のイメージ4.png",
  "image/卵のイメージ5.png",
  "image/卵のイメージ6.png",
  "image/卵のイメージ7.png",
  "image/卵のイメージ8.png",
  "image/卵のイメージ9.png",
  "image/卵のイメージ10.png",
  "image/卵のイメージ11.png",
  "image/卵のイメージ12.png",
  "image/卵のイメージ13.png",
  "image/卵のイメージ14.png",
  "image/卵のイメージ15.png",
  "image/卵のイメージ16.png",
  "image/卵のイメージ17.png",
  "image/卵のイメージ18.png",
  "image/卵のイメージ19.png",
  ];

  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  function createImage() {
    const imageContainer = document.querySelector('.image-container');
    const image = document.createElement('img');
    image.src = getRandomImage();
    image.className = 'image';
    image.style.top = `${Math.random() * 100}%`;
    image.style.left = `${Math.random() * 100}%`;
    image.style.transform = `scale(${Math.random() * 2 + 0.5})`;
    imageContainer.appendChild(image);
  }

  setInterval(createImage, 100);

  setTimeout(() => {
    document.querySelector('.loading-container').style.display = 'none';
    document.querySelector('.main-container').style.display = 'block';
  }, 3500);

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6900,//
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
  });
