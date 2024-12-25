export const applyFilterToImage = (imageSrc: string, filter: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.crossOrigin = 'Anonymous' // Устанавливаем CORS для загрузки
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

      // Применяем фильтр, если он есть
      ctx.filter = filter !== 'none' ? filter : 'none'

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
