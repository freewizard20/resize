import React, { useEffect } from 'react'

export default function Adsense() {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return (

        <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5388808722955556"
            data-ad-slot="7096701020"
            data-ad-format="auto"></ins>

    )
}
