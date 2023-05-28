import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"

function HomePage() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="block "
          src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264286/pexels-joshua-k%C3%B6ller-790176_qr1omr.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block"
          src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264284/pexels-errin-casano-2356071_oj5qle.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="block"
          src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264289/pexels-jose-mueses-1280553_oijyzk.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage;