import { Button } from '@rambo-react/ui-meteors'
import Image from 'next/image'

import s from './profile.module.scss'

export default function ProfilePage() {
  return (
    <div className={s.profile}>
      <div className={s.container}>
        <Image
          alt={'user avatar'}
          className={s.avatar}
          height={204}
          src={'/images/avatar-default.webp'}
          width={204}
        />
        <div className={s.infoProfileWrapper}>
          <div className={s.infoProfile}>
            <span className={s.titleProfile}>URLProfile</span>
            <Button className={s.btn} variant={'secondary'}>
              Profile Settings
            </Button>
          </div>
          <div className={s.infoStatistic}>
            <span className={s.statistic}>
              2 218
              <br />
              <small className={s.textStatistic}>Following</small>
            </span>
            <span className={s.statistic}>
              2 358 <br />
              <small className={s.textStatistic}> Followers</small>
            </span>
            <span className={s.statistic}>
              2 764
              <br /> <small className={s.textStatistic}>Publications</small>
            </span>
          </div>
          <p className={s.textInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  )
}
