import { APP_NAME } from "utils/constants"

type PropType = {
    className?: string
}

const Logo = (props : PropType) => {
    
    return (
        <div className={`text-6xl tracking-title ${props.className}`} >
            {APP_NAME}
        </div>
    )
}

export default Logo;