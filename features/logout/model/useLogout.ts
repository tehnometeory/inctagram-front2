import { useState } from 'react'

import { setAccessToken, setAlert, setIsAuthorized } from '@/entities'
import { useAppDispatch } from '@/shared'

import { useLogoutMutation } from '../api'

export const useLogout = () => {
  const [logout, { isLoading }] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleConfirmLogout = async () => {
    try {
      await logout({}).unwrap()
      dispatch(setAccessToken(''))
      dispatch(setIsAuthorized(false))
      dispatch(setAlert({ message: 'Пользователь успешно вышел из системы', type: 'accepted' }))
    } catch (error) {
      dispatch(setAlert({ message: 'Ошибка выхода из системы!', type: 'error' }))
    } finally {
      handleCloseModal()
    }
  }

  return {
    handleCloseModal,
    handleConfirmLogout,
    isLoading,
    logoutItem: { itemCallback: () => setShowModal(true), name: 'Log Out' },
    setShowModal,
    showModal,
  }
}
