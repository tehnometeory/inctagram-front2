import React from 'react'

import Image, { StaticImageData } from 'next/image'

import styles from './PostFilters.module.scss'

const imageFilters = {
  Clarendon: 'brightness(1.2) contrast(1.3) saturate(1.5)',
  Crema: 'brightness(1.1) saturate(1.3) contrast(1.2)',
  Gingham: 'brightness(1.1) hue-rotate(20deg) contrast(1.1)',
  Juno: 'brightness(1.3) contrast(1.5) saturate(1.6)',
  Lark: 'brightness(1.2) contrast(1.1) saturate(1.4)',
  Moon: 'grayscale(0.4) brightness(1.3) contrast(1.4)',
  Normal: 'none',
  Reyes: 'brightness(1.2) contrast(1.2) saturate(1.4)',
  Slumber: 'brightness(1.1) saturate(1.2) contrast(1.3)',
}

type FilterProps = {
  activeImage: StaticImageData | string
  activeImageIndex: number
  setFilters: (index: number, filter: string) => void
}

export const PostFilters = ({ activeImage, activeImageIndex, setFilters }: FilterProps) => {
  return (
    <div className={styles.container}>
      {Object.entries(imageFilters).map(([filterName, filterValue]) => (
        <div
          className={styles.filter}
          key={filterName}
          onClick={() => setFilters(activeImageIndex, filterValue)}
        >
          <Image
            alt={filterName}
            height={108}
            priority
            src={typeof activeImage === 'string' ? activeImage : activeImage.src}
            style={{ filter: filterValue, objectFit: 'cover' }}
            width={108}
          />
          <span className={styles.filterName}>{filterName}</span>
        </div>
      ))}
    </div>
  )
}
