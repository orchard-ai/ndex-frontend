import { APP_NAME } from "utils/constants"

type PropType = {
    className?: string
}

const Logo = ({className}: PropType) => {
    
    return (
        <div className={`text-6xl tracking-title ${className}`} >
            {APP_NAME}
        </div>
    )
}

export default Logo;