import './Header.css'
import imgAvatar from '../../../public/img/Mask group.svg'
import iconArrow from '../../../public/icons/arrow-right.svg'
import iconWallet from '../../../public/icons/wallet.svg'
import { useTelegram } from '../../hooks/useTelegram'

function Header() {

    var { user } = useTelegram();

    console.log(user)

    return (
        <header>
            <nav>
                <a className='nav_userButton'>
                    <img src={user?.photo_url} />
                    {user?.username}
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
