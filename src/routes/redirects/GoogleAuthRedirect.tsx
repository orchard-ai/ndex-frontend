import { IntegrationPlatform, IntegrationTempCode } from "api/models";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { addIntegration, getIntegrations, userDataIntegrationByPlatformSelector, userDataIntegrationsSelector } from "store/user/userDataSlice";

import { ROUTES } from "utils/constants";

export default function GoogleAuthRedirect () {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const tempCode = searchParams.get('code');
    const [error, setShowError] = useState(false);

    useEffect(() => {
      const renewData = async() => {
        await dispatch(getIntegrations());
      }

      if(tempCode) {
        const newIntegration: IntegrationTempCode = {
          temp_code: tempCode,
          platform: IntegrationPlatform.Google,
        }

        renewData();
        dispatch(addIntegration(newIntegration));

        navigate(ROUTES.SETTINGS_CONNECTIONS);
      } else {
        navigate(ROUTES.SEARCH)
      }
    }, [])

    return (
        <div className="flex flex-col items-center p-0 w-full h-full bg-ndex-dark-background-default">
          Loading
        </div>
      );
}
