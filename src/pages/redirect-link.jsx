import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

import { getLongUrl } from "@/db/apiUrls";
import { storeClicks } from "@/db/apiClicks";
import useFetch from "@/hooks/use-fetch";

const RedirectLink = () => {
    const { id: slug } = useParams();

    /** grab the long URL that matches this slug */
    const { loading, data: urlData, fn: fetchUrl } = useFetch(getLongUrl, slug);

    /** record the click (after we know the URL) */
    const { loading: statsLoading, fn: logClick } = useFetch(storeClicks, {
        id: urlData?.id,
        originalUrl: urlData?.original_url,
    });

    /* 1️⃣ fetch the long URL on mount */
    useEffect(() => {
        fetchUrl();
    }, []);

    /* 2️⃣ once we HAVE the long URL, log the click then bounce */
    useEffect(() => {
        if (!loading && urlData?.original_url) {
            logClick().finally(() => {
                window.location.replace(urlData.original_url);
            });
        }
    }, [loading, urlData]);

    /* pretty spinner while we’re working */
    if (loading || statsLoading) {
        return (
            <>
                <BarLoader width="100%" color="#36d7b7" />
                <br />
                Redirecting&hellip;
            </>
        );
    }

    return null;
};

export default RedirectLink;
