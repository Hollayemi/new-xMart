import React, { useEffect, useState } from 'react';

const GetLocation = () => {
    const [location, setLocation] = useState({
        loaded: true,
        coordinates: { lat: '', lng: '' },
    });
    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported',
            });
        }
    }, []);
    const onSuccess = (location) => {
        console.log(location);
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };
    const onError = (error) => {
        setLocation({
            loaded: false,
            error,
        });
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    console.log(location);
    return <div>getLocation</div>;
};

export default GetLocation;
