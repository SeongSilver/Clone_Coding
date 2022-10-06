import './CSS/BlackoutStyle.css'

const BlackoutStyle = ({ onSetIsVisible }) => {
    return (
        <div
            className='body-blackout-style'
            onClick={() => onSetIsVisible(false)}
        ></div>
    )
};

export default BlackoutStyle;