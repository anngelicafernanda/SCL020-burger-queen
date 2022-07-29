import './Header.css'
import ImageUrl from '../../imagesApp/logo.png'

const Header = ({ logoSize = 'small' }) => {
  return (
    <header className="header">
      <div className='logoContainer'>
        <img className={logoSize === 'small' ? 'smallLogo' : 'bigLogo'} src={ImageUrl} alt="TuRinconChevere" />
      </div>

      <div className='titleContainer'>
        <h1 className='title'>Tu Rincón Chévere</h1>
      </div>

    </header>
  )
}

export default Header;