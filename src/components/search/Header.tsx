import Logo from "components/common/Logo"

import Sun from "assets/icons/svg/light-icon.svg";
import Moon from "assets/icons/svg/dark-icon.svg";

import { Link, useNavigate } from "react-router-dom"
import { ROUTES } from "utils/constants"
import { useAppDispatch, useAppSelector } from "store";
import { isUsingDarkModeSelector, toggleTheme } from "store/local/localSettingsSlice";

type PropType = {
  className?: string
}

export default function Header({className} : PropType) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoOnClick = () => {
    navigate(ROUTES.SETTINGS_ACCOUNT);
  }

  const toggleThemeIcon = () => {
    const darkMode = useAppSelector(isUsingDarkModeSelector);

    if(darkMode) {
      return <img src={Sun} />;
    } else {
      return <img src={Moon}/>
    }
  }

  return (
    <div className={`flex flex-row items-center justify-between ${className} my-5`}>
      {/* Empty Div to fix centering */}
      <div className="w-10 m-10 p-1 rounded-lg
        hover:bg-ndex-light-background-2
        dark:hover:bg-ndex-dark-background-default-selected
        hover:cursor-pointer
        transition duration-200 ease-in-out"
        onClick={() => dispatch(toggleTheme())}
      >
        {toggleThemeIcon()}
      </div>
      <Logo className="text-6xl text-ndex-dark-text-default text-center" onPress={logoOnClick}/>
      <Link to={ROUTES.SETTINGS_ACCOUNT} className="
        relative flex items-center justify-center rounded-lg w-20 h-10 mr-10 text-center z-10
        dark:text-ndex-dark-text-default
        hover:bg-ndex-light-background-2
        dark:hover:bg-ndex-dark-background-default-selected
        active:bg-ndex-dark-background-4
        transition duration-200 ease-in-out"
      >
        settings
      </Link>
    </div>
  )
}
