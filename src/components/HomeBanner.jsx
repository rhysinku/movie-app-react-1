import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
const HomeBanner = () => {
  return (
    <div className="Banner">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        modules={[EffectCoverflow]}
        effect="coverflow"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <SwiperSlide key={i}>
            <figure className="relative mix-blend-overlay">
              <img src={`https://picsum.photos/1920/600?random=${i}`} />
              <div className="absolute bg-gradient-to-b from-transparent to-zinc-900 left-0 right-0 bottom-0 h-full" />
            </figure>
            <div className="swiper_content absolute left-1 bottom-0 px-2 py-5">
              <h2 className="text-5xl">Movie {i + 1}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                vel aperiam suscipit unde harum iure quae, reiciendis a amet
                fuga alias maxime eaque minus excepturi laboriosam tenetur
                explicabo dolorem hic!
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
