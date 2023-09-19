import { useState } from "react";

const IMAGE_1_URL =
  "https://png.pngtree.com/background/20211215/original/pngtree-animal-cute-bichon-pet-puppy-photography-picture-with-pictures-picture-image_1498930.jpg";
const IMAGE_2_URL =
  "https://png.pngtree.com/background/20230611/original/pngtree-small-white-dog-looking-up-at-you-picture-image_3131906.jpg";
const IMAGE_3_URL =
  "https://img.freepik.com/free-photo/adorable-kitty-looking-like-it-want-to-hunt_23-2149167099.jpg?w=2000";

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div>
      <div className="carousel">
        <ul className="carousel__slides">
          <input
            type="radio"
            name="radio-buttons"
            id="img-1"
            checked={activeImage === 1}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenery 1" src={IMAGE_1_URL} />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-prev"
              >
                <span>&lsaquo;</span>
              </label>
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-next"
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input
            type="radio"
            name="radio-buttons"
            id="img-2"
            checked={activeImage === 2}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenery 2" src={IMAGE_2_URL} />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-prev"
              >
                <span>&lsaquo;</span>
              </label>
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-next"
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input
            type="radio"
            name="radio-buttons"
            id="img-3"
            checked={activeImage === 3}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenery 3" src={IMAGE_3_URL} />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-prev"
              >
                <span>&lsaquo;</span>
              </label>
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-next"
              >
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className="carousel__dots">
            <label
              onClick={() => setActiveImage(1)}
              className="carousel__dot"
              id="img-dot-1"
            ></label>
            <label
              onClick={() => setActiveImage(2)}
              className="carousel__dot"
              id="img-dot-2"
            ></label>
            <label
              onClick={() => setActiveImage(3)}
              className="carousel__dot"
              id="img-dot-3"
            ></label>
          </div>
        </ul>
      </div>
    </div>
  );
}
