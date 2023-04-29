import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { notionAccessTokenSelector, obtainAccessToken } from "store/notion/notionSlice";

export default function NotionRedirect () {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();
    const tempCode = searchParams.get('code');
    const [error, setShowError] = useState(false);

    const accessToken = useAppSelector(notionAccessTokenSelector);

    const navigate = useNavigate();

    useEffect(() => {
      if(tempCode) {
        dispatch(obtainAccessToken(tempCode));
        navigate('/settings');
      } else {
        // handle showing error page
      }
    }, [dispatch])

    return (
        <div className="flex flex-col items-center p-0 w-full h-full bg-ndex-background-1">
          Loading
        </div>
    );
}
