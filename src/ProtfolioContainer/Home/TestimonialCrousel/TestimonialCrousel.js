import { TestimonialWidget } from "../../Common/TestimonialWidget/TestimonialWidget";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialCrousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide:0,
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

  const crouselData = [
    {
      message:
        "Indrajeet Singh is a brilliant software engineer! Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
      imageUrl: "../../../../assests/unnamed.webp",
      name: "Indrajeet Singh Badgujar",
      designation: "Software Engineer",
    },
    {
        message:
          "Indrajeet Singh is a brilliant software engineer! Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
        name: "Pranav Zagade",
        designation: "Software Engineer",
      },
      {
        message:
          "Indrajeet Singh is a brilliant software engineer! Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
        name: "Aman Khunere",
        designation: "Software Engineer",
      },
      {
        message:
          "Indrajeet Singh is a brilliant software engineer! Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
        name: "Shruti Khedkar",
        designation: "Software Engineer",
      },
      {
        message:
          "Indrajeet Singh is a brilliant software engineer! Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
        name: "Vivek Singh",
        designation: "Software Engineer",
      },
      {
        message:
          "Indrajeet Singh is a brilliant software engineer! Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
        name: "Vigyani Singh",
        designation: "Software Engineer",
      },
  ];
  return (
    <section className="testimonial p-3 p-lg-5">
      <div className="container">
        <h2 class="section-title font-weight-bold mb-5">Testimonials</h2>
        <Slider {...settings}>
          {crouselData.map(
            (data) =>
              data.message && (
                <TestimonialWidget
                  imagepath={data.image}
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
