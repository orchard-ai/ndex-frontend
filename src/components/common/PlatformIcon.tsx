import Notion from "assets/icons/svg/notion.svg";
import Unknown from "assets/icons/svg/unknown.svg";
import Gmail from "assets/icons/svg/gmail.svg";
import GCalendar from "assets/icons/svg/g-calendar.svg";
import GDrive from "assets/icons/svg/g-drive.svg";

type IconProps = {
  platform?: string;
};

export const getSourceIcon = (platform: string | undefined) => {
  switch (platform) {
    case "notion":
      return Notion;
    case "gmail":
      return Gmail;
    case "g-calendar":
      return GCalendar;
    case "g-drive":
      return GDrive;
    default:
      return Unknown;
  }
};

const PlatformIcon = ({ platform }: IconProps) => {
  //TODO(@fryingpan, @FL) DEMO PURPOSE SEND RANDOM PLATFORM:
  // const demo = () => {
  //   const icons = ["notion", "gmail"]
  //   return icons[Math.floor(Math.random() * icons.length)]
  // }

  const source = getSourceIcon(platform);

  return (
    <div className="p-1">
      <img
        className="w-4 h-4"
        src={source}
      />
    </div>
  );
};

export default PlatformIcon;
