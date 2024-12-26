export const applyFilterToImage = (imageSrc: string, filter: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Если фильтр 'none', сразу возвращаем изображение без изменений
    if (filter === 'none') {
      resolve(imageSrc)

      return
    }

    const image = new Image()

    image.src = imageSrc

    image.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        return reject(new Error('Failed to get 2D context'))
      }

      // Устанавливаем размеры canvas равными размерам изображения
      canvas.width = image.width
      canvas.height = image.height

      // Применяем фильтр
      ctx.filter = filter

      // Рисуем изображение на canvas
      ctx.drawImage(image, 0, 0)

      // Возвращаем изображение в формате Base64
      resolve(canvas.toDataURL('image/png'))
    }

    image.onerror = error => {
      reject(new Error(`Failed to load image: ${error}`))
    }
  })
}
