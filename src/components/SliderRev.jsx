import React from "react";

import ReviewsCard from "./ReviewsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import { useGetReviewsQuery } from "../redux/reviewsApi";

import styles from "./SliderRev.module.css";

const Reviews = () => {
  const { data: reviews = [], isLoading, isError } = useGetReviewsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading reviews</div>;

  return (
    <div className={styles.reviews_container}>
      <div className={styles.reviews_heading}>
        <h1>Отзывы</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={35}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          540: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1198: {
            slidesPerView: 3,
          },
        }}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        modules={[Pagination, Navigation]}
        className={styles.reviews_cards__container}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id} className={styles.reviews_card}>
            <ReviewsCard name={review.name} city={review.city} text={review.text} imgSrc={review.imgSrc}/>
          </SwiperSlide >
        ))}
      </Swiper>
      <div className={styles.reviews_slider__btns}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="Inherit"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-left arrow"
        >
          <path d="M23.8387 2.27597C24.0816 2.0245 24.216 1.6877 24.2129 1.3381C24.2099 0.988509 24.0697 0.654093 23.8225 0.406882C23.5753 0.159671 23.2408 0.0194457 22.8912 0.0164078C22.5417 0.0133699 22.2049 0.147762 21.9534 0.39064L11.0574 11.2866C9.80757 12.5368 9.10547 14.2322 9.10547 16C9.10547 17.7677 9.80757 19.4631 11.0574 20.7133L21.9534 31.6093C22.2049 31.8522 22.5417 31.9866 22.8912 31.9835C23.2408 31.9805 23.5753 31.8403 23.8225 31.5931C24.0697 31.3459 24.2099 31.0114 24.2129 30.6618C24.216 30.3122 24.0816 29.9754 23.8387 29.724L12.9427 18.828C12.1928 18.0779 11.7716 17.0606 11.7716 16C11.7716 14.9393 12.1928 13.9221 12.9427 13.172L23.8387 2.27597Z" />
        </svg>

        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-right arrow"
        >
          <g clip-path="url(#clip0_40_252)">
            <path d="M8.39143 29.724C8.26408 29.847 8.1625 29.9941 8.09262 30.1568C8.02275 30.3194 7.98596 30.4944 7.98443 30.6714C7.98289 30.8485 8.01662 31.024 8.08366 31.1879C8.1507 31.3518 8.24971 31.5006 8.3749 31.6258C8.50009 31.751 8.64896 31.85 8.81282 31.9171C8.97668 31.9841 9.15226 32.0178 9.32929 32.0163C9.50633 32.0148 9.68129 31.978 9.84397 31.9081C10.0066 31.8382 10.1538 31.7367 10.2768 31.6093L21.1728 20.7133C22.4209 19.4623 23.1219 17.7672 23.1219 16C23.1219 14.2328 22.4209 12.5377 21.1728 11.2866L10.2768 0.39064C10.0253 0.147762 9.68849 0.0133699 9.33889 0.0164078C8.9893 0.0194457 8.65488 0.159671 8.40767 0.406882C8.16046 0.654093 8.02023 0.988509 8.01719 1.3381C8.01416 1.6877 8.14855 2.0245 8.39143 2.27597L19.2874 13.172C20.0373 13.9221 20.4586 14.9393 20.4586 16C20.4586 17.0606 20.0373 18.0779 19.2874 18.828L8.39143 29.724Z" />
          </g>
          <defs>
            <clipPath id="clip0_40_252">
              <rect width="32" height="32" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Reviews;
