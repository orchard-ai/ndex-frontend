import { APP_NAME } from "utils/constants"

type PropType = {
    className?: string
}

const Logo = ({className}: PropType) => {
    
    return (
        <div className={`tracking-logo font-sans ${className}`} >
            {APP_NAME}
        </div>
    )
}

export default Logo;