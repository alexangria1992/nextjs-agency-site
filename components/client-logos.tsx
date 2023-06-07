import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => {
  return (
    <>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/audubon.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>

        <SliderItem width={200}>
          <Image
            src="/assets/trustedby/pinkpanda.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/status.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/tocsen.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/rainbow.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/showtime.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/exodus.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/coinbase.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/expensify.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/picnic.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/shopify.webp"
            width={150}
            height={50}
            alt="Audubon"
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientLogos;
