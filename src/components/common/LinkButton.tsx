import { Link } from "react-router-dom"

type PropType = {
  text: string
  routerLink?: string
  className?: string
  onClick?: () => void
}

export default function LinkButton({
  text,
  className,
  routerLink,
  onClick,
}: PropType) {
  return (
    <>
      {routerLink === undefined ? (
        <div>
          <a className={`text-black ${className}`} href="#">
            <u onClick={onClick}>{text}</u>
          </a>
        </div>
      ) : (
        <Link to={routerLink} className={`text-black ${className}`}>
          <u>{text}</u>
        </Link>
      )}
    </>
  )
}
