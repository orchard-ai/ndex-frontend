import ndex from "assets/icons/svg/ndex.svg";


type PropType = {
    className?: string
    onPress?: () => void
}

const Logo = ({className, onPress}: PropType) => {
    if(onPress) {
        return (
            <div className={`tracking-logo font-sans w-40 ${className} rounded-lg hover:bg-ndex-background-3 hover:cursor-pointer active:bg-ndex-background-4`} onClick={onPress} >
                <img src={ndex}/>
            </div>
        );
    }

    return (
        <div className={`tracking-logo font-sans w-40 ${className}`} >
            <img src={ndex}/>
        </div>
    )
}

export default Logo;