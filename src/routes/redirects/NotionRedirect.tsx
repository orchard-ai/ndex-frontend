import { IntegrationPlatform, IntegrationTempCode } from "api/models";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { notionAccessTokenSelector, obtainAccessToken } from "store/notion/notionSlice";
import { addIntegration } from "store/user/userDataSlice";
import { ROUTES } from "utils/constants";

export default function NotionRedirect () {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    const tempCode = searchParams.get('code');
    const [error, setShowError] = useState(false);

    const accessToken = useAppSelector(notionAccessTokenSelector);

    const navigate = useNavigate();

    useEffect(() => {
      if(tempCode) {
        const newIntegration: IntegrationTempCode = {
          temp_code: tempCode,
          scopes:[],
          integration_platform: IntegrationPlatform.Notion
        }

        dispatch(addIntegration(newIntegration));

        navigate(ROUTES.SETTINGS);
      } else {
        navigate(ROUTES.SEARCH)
      }
    }, [dispatch])

    return (
      <div className="flex flex-col items-center p-0 w-full h-full bg-ndex-dark-background-default">
        Loading
      </div>
    );
}
