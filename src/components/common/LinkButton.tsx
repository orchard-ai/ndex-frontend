import { Link } from "react-router-dom"

type PropType = {
  children: React.ReactNode | string
  routerLink?: string
  className?: string
  onClick?: () => void
  href?: string
}

export default function LinkButton({
  children,
  className,
  routerLink,
  onClick,
  href = "#",
}: PropType) {
  return (
    <>
      {routerLink === undefined ? (
        <div>
          <a className={`text-black ${className}`} href="#">
            <u onClick={onClick}>{children}</u>
          </a>
        </div>
      ) : (
        <Link to={routerLink} className={`text-black ${className}`}>
          <u>{children}</u>
        </Link>
      )}
    </>
  )
}
