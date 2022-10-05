import MainLogo from './MainLogo'
import NavItems from './NavItems/NavItems'
import { mainItems, appsItems, componentsItems } from '../../data/menuItems'

import sprite from './../../images/svg/sprite.svg'

import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <MainLogo />

      <NavItems items={mainItems} sprite={sprite} />
      <NavItems items={appsItems} title={'APPS & PAGES'} sprite={sprite} />
      <NavItems items={componentsItems} title={'COMPONENTS'} sprite={sprite} />
    </nav>
  )
}

export default Navigation
