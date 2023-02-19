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
    const source = getSource(platform);

    return (
        <div className="p-1">
            <img className="w-4 h-4" src={source} />
        </div>
    )
}

export default PlatformIcon;