import React from 'react'

import Image, { StaticImageData } from 'next/image'

import styles from './PostFilters.module.scss'

const imageFilters = [
  ['Clarendon', 'brightness(1.2) contrast(1.3) saturate(1.5)'],
  ['Crema', 'brightness(1.1) saturate(1.3) contrast(1.2)'],
  ['Gingham', 'brightness(1.1) hue-rotate(20deg) contrast(1.1)'],
  ['Juno', 'brightness(1.3) contrast(1.5) saturate(1.6)'],
  ['Lark', 'brightness(1.2) contrast(1.1) saturate(1.4)'],
  ['Moon', 'grayscale(0.4) brightness(1.3) contrast(1.4)'],
  ['Normal', 'none'],
  ['Reyes', 'brightness(1.2) contrast(1.2) saturate(1.4)'],
  ['Slumber', 'brightness(1.1) saturate(1.2) contrast(1.3)'],
]

type FilterProps = {
  activeImage: StaticImageData | string
  setFilters: (filter: string, filterIndex: number) => void
}

export const PostFilters = ({ activeImage, setFilters }: FilterProps) => {
  const onClickHandler = (filterName: string, filterValue: string) => {
    const filterIndex = imageFilters.findIndex(([name]) => name === filterName)

    setFilters(filterValue, filterIndex)
  }

  return (
    <div className={styles.container}>
      {imageFilters.map(([filterName, filterValue]) => (
        <div
          className={styles.filter}
          key={filterName}
          onClick={() => onClickHandler(filterName, filterValue)}
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
