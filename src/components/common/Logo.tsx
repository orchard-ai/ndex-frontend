import ndex from "assets/icons/svg/ndex.svg";
import ndexDark from "assets/icons/svg/ndex-dark.svg";
import { useAppSelector } from "store";
import { isUsingDarkModeSelector } from "store/local/localSettingsSlice";

type PropType = {
  className?: string;
  onPress?: () => void;
};

const Logo = ({ className, onPress }: PropType) => {
  const darkMode = useAppSelector(isUsingDarkModeSelector);

  const logoImage = () => {
    return darkMode ? <img src={ndex} /> : <img src={ndexDark} />;
  };

  if (onPress) {
    return (
      <div
        className={`tracking-logo w-40 ${className} rounded-lg
                hover:bg-ndex-light-background-2
                dark:hover:bg-ndex-dark-background-default-selected
                hover:cursor-pointer
                transition duration-200 ease-in-out`}
        onClick={onPress}
      >
        {logoImage()}
      </div>
    );
  }

  return <div className={`tracking-logo w-40 ${className}`}>{logoImage()}</div>;
};

export default Logo;
