import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store";
import { toggleTheme } from "store/local/localSettingsSlice";
import { ROUTES } from "utils/constants";

const PageNotFound = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onButtonClick = () => {
        navigate(ROUTES.AUTHENTICATE);
    }

    const handlePress = () => {
        dispatch(toggleTheme());
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-ndex-light-background-1 dark:bg-ndex-dark-background-default">
            <button className="mb-20 text-6xl w-40 h-20 rounded-lg font-light text-ndex-light-text-primary
                dark:text-ndex-dark-text-default
                hover:bg-ndex-light-background-2
                dark:hover:bg-ndex-dark-background-default-selected
                transition duration-200 ease-in-out"
                onClick={handlePress}
            >
                404
            </button>
            <button className="flex text-ndex-button-text-filled-light border-2 rounded-lg w-64 h-8 shadow-md bg-ndex-button-filled-light
                active:bg-ndex-button-active-light justify-center items-center"
                onClick={onButtonClick}>
                Take me back to ndex
            </button>
        </div>
    );
}

export default PageNotFound;