import { ProfileConfirmationModal } from '@/shared'

import s from './LogOutModal.module.scss'

type Props = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export const LogOutModal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <ProfileConfirmationModal
      buttonMode={'double'}
      childClassName={s.childModal}
      isOpen={isOpen}
      onCloseHandler={onClose}
      onConfirmHandler={onConfirm}
      titleModal={'Log Out'}
    >
      <p className={s.textModal}>Are you really want to log out of your account “Epam@epam.com”?</p>
    </ProfileConfirmationModal>
  )
}
