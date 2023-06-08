import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by={"Axel (Showtime)"}>
        Margelo and Showtime both share the love for high-quality software and
        the passion for building something people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by={"Axel (Showtime)"}>
        Margelo is a collection of world class talent, from React natie to
        website, full stack to design - I&apos;ve been nothing but pleased with
        their communication, imagination, insight and delivery.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by={"Adam carlton (CEO of Pink Panda)"}>
        Margelo and Showtime both share the love for high-quality software and
        the passion for building something people want.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by={"Alex (CTO of Steakwallet)"}>
        The output of Margelo is inlike any ohter team we&apos;ve worked with.
        Their speed, professionalism and familiarity with all things mobile
        helped turn Steakwallet into the slick application is it known as today.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by={"Clinton (CEO of Slingshot)"}>
        Working with the Maergelo team feels like a cheat code when it comes to
        building performant and scalable React Native Mobile apps, they&apos;re
        the best hands down.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimonials;
