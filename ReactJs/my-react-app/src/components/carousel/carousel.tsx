import { useEffect, useState } from 'react';
import './carousel.css';
const carouselImages = [
  {
    id: 1,
    title: 'Mountain Lake',
    imageUrl: 'https://picsum.photos/id/10/1200/600',
  },
  {
    id: 2,
    title: 'Forest Road',
    imageUrl: 'https://picsum.photos/id/20/1200/600',
  },
  {
    id: 3,
    title: 'Beach Sunset',
    imageUrl: 'https://picsum.photos/id/30/1200/600',
  },
  {
    id: 4,
    title: 'City Skyline',
    imageUrl: 'https://picsum.photos/id/40/1200/600',
  },
  {
    id: 5,
    title: 'Snow Mountains',
    imageUrl: 'https://picsum.photos/id/50/1200/600',
  },
];

export const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = carouselImages[activeImage];

  const onClickPrev = () => {
    setActiveImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const onClickNext = () => {
    setActiveImage((prev) => (prev + 1) % carouselImages.length);
  };

  useEffect(() => {
    const autpplay = setInterval(onClickNext, 1000);
    return () => clearInterval(autpplay);
  }, [activeImage]);

  if (carouselImages.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <div>
      <h1>Carousel</h1>
      <div className="container">
        <button onClick={onClickPrev} aria-label="Previous button">
          Previous
        </button>
        <div>
          <h2>{currentImage.title}</h2>
          <img
            src={currentImage.imageUrl}
            alt={currentImage.title}
            className="image"
          />
        </div>
        <button onClick={onClickNext} aria-label="Next button">
          Next
        </button>
      </div>
      {carouselImages.map((_, index) => (
        <span
          key={_.id}
          className={activeImage === index ? 'active' : ''}
          onClick={() => setActiveImage(index)}
        >
          ●
        </span>
      ))}
    </div>
  );
};
export default Carousel;
