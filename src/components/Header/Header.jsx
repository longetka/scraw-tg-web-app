import './Header.css'
import imgAvatar from '../../../public/img/Mask group.svg'
import iconArrow from '../../../public/icons/arrow-right.svg'
import iconWallet from '../../../public/icons/wallet.svg'

function Header() {

    var userName = "MrLikon"

    return (
        <header>
            <nav>
                <a className='nav_userButton'>
                    <img src={imgAvatar} />
                    {userName}
                    <img className='iconArrow' src={iconArrow} />

                </a>
                <a className='nav_walletButton'>
                    <img className='iconWallet' src={iconWallet} />
                </a>
                <a className='nav_langButton'>
                    Ru
                </a>
            </nav>
        </header>
    )
}

export default Header
