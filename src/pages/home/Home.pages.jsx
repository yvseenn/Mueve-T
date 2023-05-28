import Carousel from "react-bootstrap/Carousel";
import "./Home.css";

function HomePage() {
  return (
   <div className="home-container">
     <Carousel>
       <Carousel.Item>
         <img
           className="block w-100 h-50 wider-image"
           style={{ height: "50vh", objectFit: "contain" }}
           src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264286/pexels-joshua-k%C3%B6ller-790176_qr1omr.jpg"
           alt="First slide"
         />
       </Carousel.Item>
    
       <Carousel.Item>
         <img
           className="block w-100 h-50 wider-image"
           style={{ height: "50vh", objectFit: "contain" }}
           src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264284/pexels-errin-casano-2356071_oj5qle.jpg"
           alt="Second slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="block w-100 h-50 wider-image"
           style={{ height: "50vh", objectFit: "contain" }}
           src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264284/pexels-errin-casano-2356071_oj5qle.jpg"
           alt="Second slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="block w-100 h-50 wider-image"
           style={{ height: "50vh", objectFit: "contain" }}
           src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264284/pexels-errin-casano-2356071_oj5qle.jpg"
           alt="Second slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="block w-100 h-50 wider-image"
           style={{ height: "50vh", objectFit: "contain" }}
           src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264284/pexels-errin-casano-2356071_oj5qle.jpg"
           alt="Second slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="block w-100 h-50 wider-image"
           style={{ height: "50vh", objectFit: "contain" }}
           src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264284/pexels-errin-casano-2356071_oj5qle.jpg"
           alt="Second slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="block w-100 h-50 wider-image"
           style={{ height: "50vh", objectFit: "contain" }}
           src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264284/pexels-errin-casano-2356071_oj5qle.jpg"
           alt="Second slide"
         />
       </Carousel.Item>
    
       <Carousel.Item>
         <img
           className="block w-100 h-50 wider-image"
           style={{ height: "50vh", objectFit: "contain" }}
           src="https://res.cloudinary.com/du0eiutui/image/upload/v1685264289/pexels-jose-mueses-1280553_oijyzk.jpg"
           alt="Third slide"
         />
       </Carousel.Item>
     </Carousel>
   </div>
  );
}

export default HomePage;
