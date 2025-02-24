import ava from '@/public/images/test_userAvatar.png'
import Image from 'next/image'

import s from './NameAndAvatarUser.module.scss'

export const NameAndAvatarUser = ({ urlProfile }: { urlProfile: string }) => {
  return (
    <div className={s.avaWrapper}>
      <Image alt={'userAvatar'} className={s.ava} height={36} src={ava} width={36} />
      <span className={s.urlProfile}>{urlProfile}</span>
    </div>
  )
}
