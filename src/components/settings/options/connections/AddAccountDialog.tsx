import Dialog from "components/common/dialog/Dialog";
import LinkButton from "components/common/LinkButton";
import { Connection } from "utils/types";

type PropType = {
  connection: Connection;
  buttonContent: React.ReactNode;
  buttonClassName?: string;
  buttonContainerClassName?: string;
};

const AddAccountDialog = ({
  connection,
  buttonContent,
  buttonClassName = "",
  buttonContainerClassName = "",
}: PropType) => {
  return (
    <Dialog
      buttonContent={buttonContent}
      buttonClassName={` 
        ${buttonClassName}`}
      buttonContainerClassName={`
        ${buttonContainerClassName}
        `}
      content={
        <div className="block">
          <div className="text-ndex-text-grey font-bold text-sm my-2">
            ABOUT
          </div>
          <div
            className="
          py-4
          text-ndex-light-text-primary dark:text-ndex-dark-text-default
          "
          >
            <p>{connection.detailedDescription}</p>
          </div>
          <div className="flex justify-center align-middle mt-4">
            <LinkButton
              className="
                rounded-lg p-3 text-sm text-ndex-text-white bg-ndex-button-bordered-green shadow-md
                hover:bg-ndex-button-bordered-green-hover
                transition duration-200 ease-in-out"
              href={connection.href}
            >
              Authenticate
            </LinkButton>
          </div>
        </div>
      }
      headerContent={
        <div
          className="
            flex absolute space-x-2 top-6 right-16
            sm:right-20
          "
        >
          <img
            className="h-8 w-8 p-1"
            src={connection.icon}
          />
          <div className="align-middle text-sm my-auto hidden sm:block">
            {connection.name}
          </div>
        </div>
      }
      title={<div>Add Account</div>}
    />
  );
};

export default AddAccountDialog;
