import ndex from "assets/icons/svg/ndex.svg";


type PropType = {
    className?: string
}

const Logo = ({className}: PropType) => {

    return (
        <div className={`tracking-logo font-sans w-40 ${className}`} >
            <img src={ndex}/>
        </div>
    )
}

export default Logo;