import React, { useState } from 'react';
import { GoogleComponent } from 'react-google-location';

const SetLocation = () => {
    const [place, setPlace] = useState('');
    const API_KEY = 'AIzaSyBEPduVpLg3KgiF0hBmS3Huc_UD58K83BI';
    return (
        <section>
            <div>
                <h5>
                    We need to know your exact location for to guide your buyer
                    on how to locate you
                </h5>
            </div>
            <div>
                <div className="flex items-center mt-6">
                    <h5 className="mr-3">Lattitude: </h5>
                    <h5 className="mr-3">Longitude: </h5>
                    <h5 className="mr-3">Place:</h5>
                </div>
                <button className="px-3 mt-1 h-8 bg-blue-600 text-white rounded-sm shadow-xl">
                    Get Coordinates
                </button>
            </div>
            <GoogleComponent
                apiKey={API_KEY}
                language="en"
                coordinates={true}
                // locationBoxStyle={'custome-style'}
                // locationListStyle={'custom-style-list'}
                onChange={(e) => {
                    setPlace(e);
                }}
            />
        </section>
    );
};

export default SetLocation;
