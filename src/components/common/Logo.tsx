import ndex from "assets/icons/svg/ndex.svg";
import ndexDark from "assets/icons/svg/ndex-dark.svg";


type PropType = {
    className?: string
    onPress?: () => void
}

const Logo = ({className, onPress}: PropType) => {
    if(onPress) {
        return (
            <div className={`tracking-logo w-40 ${className} rounded-lg
                hover:bg-ndex-background-3
                hover:cursor-pointer
                active:bg-ndex-background-4 transition duration-200 ease-in-out`} onClick={onPress} >
                <img src={ndex}/>
            </div>
        );
    }

    return (
        <div className={`tracking-logo w-40 ${className}`} >
            <img src={ndex}/>
        </div>
    )
}

export default Logo;