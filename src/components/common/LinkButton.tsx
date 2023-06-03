import { Link } from "react-router-dom";

type PropType = {
  children: React.ReactNode | string;
  routerLink?: string;
  className?: string;
  onClick?: () => void;
  href?: string;
};

export default function LinkButton({
  children,
  className,
  routerLink,
  onClick,
  href,
}: PropType) {
  return (
    <>
      {routerLink === undefined ? (
        <div className={`text-black ${className}`}>
          <a href={href}>
            <button onClick={onClick}> {children} </button>
          </a>
        </div>
      ) : (
        <Link to={routerLink} className={`text-black ${className}`}>
          {children}
        </Link>
      )}
    </>
  );
}
