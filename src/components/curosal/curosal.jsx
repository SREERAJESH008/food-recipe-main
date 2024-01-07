import "./curosal.css"



let currentSlide = 0;

function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slideWidth = carousel.clientWidth;

  currentSlide = (index + carousel.children.length) % carousel.children.length;

  carousel.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

setInterval(nextSlide, 4000);


const Curosal = () => {
    return (
      <div class="carousel-container">
        <div class="carousel-wrapper" id="carousel">
          <div class="carousel-item">
            {" "}
            <img
              src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/98/78/3/pEMUNH5QRqQESQTvMFX5_fudge2.jpg"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/74/62/9/gleNKmxlS3KeYQaZTPFJ_0S9A7162.jpg"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
        </div>

        <button class="carousel-button prev" onclick="prevSlide()">
          ❮
        </button>
        <button class="carousel-button next" onclick="nextSlide()">
          ❯
        </button>
      </div>
    );
}
 
export default Curosal;

