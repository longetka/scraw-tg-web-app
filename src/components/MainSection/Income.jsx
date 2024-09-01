import './Income.css'
import flashIcon from '../../../public/icons/flash-circle.svg'

function Income() {
    return (
        <article className="income">
            <a href="/">Доход &gt;</a>
            <p>100
                <img src={flashIcon} />
            </p>
        </article>
    )
}

export default Income
