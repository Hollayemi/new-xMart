import React from 'react';
import Helmet from 'react-helmet';

const PageHelmet = ({ title }) => {
    return (
        <Helmet>
            <meta name="description" content="Kemon" />
            <title>{title} | Kemon Market---Helment</title>
        </Helmet>
    );
};

export default PageHelmet;
