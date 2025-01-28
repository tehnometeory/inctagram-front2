export const applyFilterToImage = (imageSrc: string, filter: string): Promise<string> => {
  return new Promise((resolve, reject) => {
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

      // Создаём Blob из Canvas
      canvas.toBlob(blob => {
        if (!blob) {
          return reject(new Error('Failed to create Blob from canvas'))
        }

        // Генерируем Blob URL
        const blobUrl = URL.createObjectURL(blob)

        resolve(blobUrl)
      }, 'image/jpeg')
    }

    image.onerror = error => {
      reject(new Error(`Failed to load image: ${error}`))
    }
  })
}
