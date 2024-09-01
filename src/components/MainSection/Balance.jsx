import './Balance.css'
import coinIcon from '../../../public/icons/coinIcon.svg'

function Balance() {
    return (
        <article className="balance">
            <p className="balance__text">Баланс</p>
            <div className="balance__container">
                <p className="balance__qty">
                    1000
                    <img src={coinIcon} />
                </p>
            </div>
        </article>
    )
}

export default Balance
