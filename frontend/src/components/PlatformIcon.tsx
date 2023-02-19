import Notion from "assets/icons/notion.svg"
import Unknown from "assets/icons/unknown.svg"
import Gmail from "assets/icons/gmail.svg"

type IconProps = {
    platform?: string
};

const getSource = (platform : string | undefined) => {
    switch(platform) {
        case "notion": 
            return Notion
        case "gmail":
            return Gmail
        default:
            return Unknown
    }
}

const PlatformIcon = ({platform} : IconProps) => {
    //TODO(@fryingpan, @FL) DEMO PURPOSE SEND RANDOM PLATFORM:
    const demo = () => {
        const icons = ["gmail", "notion"]
        return icons[Math.floor(Math.random() * icons.length)]
    }

    const source = getSource(demo());

    return (
        <div className="p-1">
            <img className="w-4 h-4" src={source} />
        </div>
    )
}

export default PlatformIcon;