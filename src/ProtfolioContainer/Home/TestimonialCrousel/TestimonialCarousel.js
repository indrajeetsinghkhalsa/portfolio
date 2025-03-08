import { TestimonialWidget } from "../../Common/TestimonialWidget/TestimonialWidget";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "../../../Data/testimonialData/TestimonialData.json";

export const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };



  return (
    <section className="testimonial p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
        <Slider {...settings}>
          {testimonialData.map(
            (data, index) =>
              data.message && (
                <TestimonialWidget
                  key={index}
                  imagepath={data.imageUrl}
                  name={data.name}
                  designation={data.designation}
                  message={data.message}
                />
              )
          )}
        </Slider>
      </div>
      <hr className="mt-5" />
    </section>
  );
};
