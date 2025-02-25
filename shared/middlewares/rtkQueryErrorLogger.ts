import { setAlert } from '@/entities'
import { Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { ErrorsMessagesResponse } from '../types'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => next => action => {
  if (isRejectedWithValue(action)) {
    const actionPayload = action.payload as FetchBaseQueryError
    const actionStatus = actionPayload.status

    // Обработка сетевых и серверных ошибок
    if (actionStatus === 500) {
      api.dispatch(setAlert({ message: 'Internal server error', type: 'error' }))

      return next({ ...action, error: undefined, payload: undefined })
    }

    if (actionStatus === 'FETCH_ERROR') {
      api.dispatch(setAlert({ message: 'Network error', type: 'error' }))

      return next({ ...action, error: undefined, payload: undefined })
    }

    // Обработка ошибок с данными
    const errorsData = actionPayload.data as Partial<ErrorsMessagesResponse> | undefined

    // Если данных нет или структура ошибки неправильная
    if (!errorsData) {
      api.dispatch(setAlert({ message: 'Something went wrong', type: 'error' }))

      return next({ ...action, error: undefined, payload: undefined })
    }

    // Если есть сообщение в ошибке
    if ('message' in errorsData && typeof errorsData.message === 'string') {
      api.dispatch(setAlert({ message: errorsData.message, type: 'error' }))

      return next({ ...action, error: undefined, payload: undefined })
    }

    // Если ошибок валидации нет или они некорректные
    if (!Array.isArray(errorsData.errorsMessages)) {
      api.dispatch(setAlert({ message: 'Something went wrong', type: 'error' }))

      return next({ ...action, error: undefined, payload: undefined })
    }

    // Фильтруем ошибки с полем и выводим ошибки без поля через alert
    const filteredErrorsMessages = errorsData.errorsMessages.filter(({ field, message }) => {
      if (!field) {
        api.dispatch(setAlert({ message, type: 'error' }))

        return false
      }

      return true
    })

    // Если есть ошибки с полем, передаем их дальше
    if (filteredErrorsMessages.length > 0) {
      return next({ ...action, payload: filteredErrorsMessages })
    }

    return next(action)
  }

  return next(action)
}
