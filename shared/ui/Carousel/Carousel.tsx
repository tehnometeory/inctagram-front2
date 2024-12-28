'use client'

import { useCallback, useState } from 'react'

import { ArrowIosBack, ArrowIosBackOutline, ArrowIosForward } from '@rambo-react/ui-meteors'
import clsx from 'clsx'
import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './Carousel.module.scss'

type Props = {
  activeFilters?: string[]
  activeSlide?: number
  images: string[]
  passActiveSlide?: (index: number) => void
  type: 'Black' | 'Gray'
}

export const Carousel = ({ activeFilters, activeSlide, images, passActiveSlide, type }: Props) => {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleSlideChange = useCallback(
    (swiper: any) => {
      if (passActiveSlide) {
        passActiveSlide(swiper.activeIndex)
      }
    },
    [passActiveSlide]
  )
  const shouldShowNavigation = images.length > 1

  return (
    <div className={styles.container}>
      <Swiper
        loop={false}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.${styles[`swiperButtonNext${type}`]}`,
          prevEl: `.${styles[`swiperButtonPrev${type}`]}`,
        }}
        onSlideChange={swiper => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
          handleSlideChange(swiper)
        }}
        pagination={
          shouldShowNavigation && {
            bulletActiveClass: 'swiper-pagination-button-active',
            bulletClass: 'swiper-pagination-button',
            el: `.${styles[`swiperPagination${type}`]}`,
            type: 'bullets',
          }
        }
        slidesPerView={1}
        spaceBetween={50}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div style={{ height: '503px', position: 'relative', width: '490px' }}>
              <Image
                alt={`Image ${index + 1}`}
                fill
                loading={index === 0 ? 'eager' : 'lazy'}
                priority={index === 0}
                sizes={'(max-width: 490px), 490px'}
                src={src}
                style={{
                  filter: index === activeSlide ? activeFilters?.[index] : 'none',
                  objectFit: 'cover',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
        {shouldShowNavigation && (
          <>
            <div className={clsx(styles[`swiperButtonNext${type}`], isEnd && styles.hiddenButton)}>
              <ArrowIosForward
                className={styles[`swiperNextIcon${type}`]}
                fill={'white'}
                height={type === 'Black' ? 24 : 48}
                width={type === 'Black' ? 24 : 48}
              />
            </div>

            <div
              className={clsx(styles[`swiperButtonPrev${type}`], {
                [styles.hiddenButton]: isBeginning,
              })}
            >
              {type === 'Black' && (
                <ArrowIosBack
                  className={styles[`swiperPrevIcon${type}`]}
                  fill={'white'}
                  height={24}
                  width={24}
                />
              )}
              {type === 'Gray' && (
                <ArrowIosBackOutline
                  className={styles[`swiperPrevIcon${type}`]}
                  fill={'white'}
                  height={48}
                  width={48}
                />
              )}
            </div>

            <div className={styles[`swiperPagination${type}`]} />
          </>
        )}
      </Swiper>
    </div>
  )
}
