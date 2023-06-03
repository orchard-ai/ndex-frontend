import LinkButton from "components/common/LinkButton";
import Logo from "components/common/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES, connections } from "utils/constants";
import { useAppDispatch } from "store";
import { toggleTheme } from "store/local/localSettingsSlice";

type Connection = {
  id: number;
  name: string;
  description: string;
  href: string;
  icon: string;
  alt: string;
  detailedDescription: string;
};

const AddFirstConnection = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const Card = ({ connection }: { connection: Connection }) => {
    return (
      <div
        className="flex flex-col justify-between w-full h-64 p-8 border-2 rounded-lg shadow-md
                bg-ndex-light-background-1 dark:bg-ndex-dark-background-grey
                dark:border-ndex-dark-background-grey
                dark:text-white
                dark:border-none"
      >
        <div className="flex">
          <img
            className="h-8 w-8 p-1"
            src={connection.icon}
          />
          <div className="align-middle text-md my-auto hidden sm:block">
            {connection.name}
          </div>
        </div>
        <div>{connection.description}</div>
        <LinkButton
          className="
                        flex justify-center items-center w-1/2 h-8 mx-auto rounded-lg p-4 shadow-md text-ndex-text-white bg-ndex-button-bordered-green
                        text-sm dark:text-md
                        dark:shadow-grey
                        hover:bg-ndex-button-bordered-green-hover
                        transition duration-200 ease-in-out"
          href={connection.href}
        >
          add account
        </LinkButton>
      </div>
    );
  };

  const onSkipPress = () => {
    navigate(ROUTES.SEARCH);
  };

  const handleLogoPress = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      className="
        flex flex-col h-full py-5 items-center
        bg-ndex-light-background-1 dark:bg-ndex-dark-background-default
        "
    >
      <div className="flex flex-row justify-between items-center px-10 w-full">
        <Logo onPress={handleLogoPress} />
        <button
          className="items-center justify-center rounded-lg w-20 h-10 mr-4 text-center dark:text-ndex-dark-text-default
                    hover:bg-ndex-light-background-2
                    dark:hover:bg-ndex-dark-background-default-selected
                    active:bg-ndex-dark-background-4
                    transition duration-200 ease-in-out"
          onClick={onSkipPress}
        >
          skip
        </button>
      </div>
      <div
        className="
                items-center justify-center text-center  text-3xl font-light my-10
                text-ndex-light-text-primary dark:text-ndex-dark-text-default
                dark:font-extralight
                "
      >
        Integrate with your first platform
      </div>
      <div className="flex-col w-full max-w-3xl items-center justify-center grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 sm:p-0">
        {connections.map((connection: Connection) => {
          return <Card connection={connection} />;
        })}
      </div>
    </div>
  );
};

export default AddFirstConnection;
