import React, { lazy, Suspense } from 'react';
import TopLoader from './TopLoader';

const LazyLoading = (Component, options = { fallback: <TopLoader /> }) => {
    const LazyComponent = lazy(Component);

    return (props) => (
        <Suspense fallback={options.fallback}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

LazyLoading.defaultProps = {
    fallback: <TopLoader />,
};

export default LazyLoading;
