import Balance from './Balance'
import './Header.css'
import Income from "./Income"

function Header() {
    return (
        <header className="header">
            <Income />
            <Balance />
        </header>
    )
}

export default Header
