import { Link } from "react-router-dom"

type PropType = {
  text: string
  routerLink?: string
  className?: string
  onClick?: () => void
  href?: string
}

export default function LinkButton({
  text,
  className,
  routerLink,
  onClick,
  href = "#",
}: PropType) {
  return (
    <>
      {routerLink === undefined ? (
        <a className={`${className}`} href={href} onClick={onClick}>
          {text}
        </a>
      ) : (
        <Link to={routerLink} className={`${className}`}>
          <u>{text}</u>
        </Link>
      )}
    </>
  )
}
