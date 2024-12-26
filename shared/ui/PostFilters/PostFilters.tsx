import React from 'react'

import Image from 'next/image'

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
  activeImage: string
  activeImageIndex: number
  setFilter: (filter: string, activeImageIndex: number) => void
}

export const PostFilters = ({ activeImage, activeImageIndex, setFilter }: FilterProps) => {
  const onClickHandler = (filterValue: string, activeImageIndex: number) => {
    setFilter(filterValue, activeImageIndex)
  }

  return (
    <div className={styles.container}>
      {Object.entries(imageFilters).map(([filterName, filterValue]) => (
        <div
          className={styles.filter}
          key={filterName}
          onClick={() => onClickHandler(filterValue, activeImageIndex)}
        >
          <Image
            alt={filterName}
            height={108}
            priority
            src={`data:image/png;base64,${activeImage}`}
            style={{ filter: filterValue, objectFit: 'cover' }}
            width={108}
          />
          <span className={styles.filterName}>{filterName}</span>
        </div>
      ))}
    </div>
  )
}
