import React from 'react';
import { useParams } from 'react-router-dom';
import SearchWrapper from '../../../components/websiteCompoents/ReuseableFlex';

const RandomSearch = () => {
    const param = useParams();

    return (
        <SearchWrapper>
            <div>{param.search}</div>
            <div className="my-32"></div>
        </SearchWrapper>
    );
};

export default RandomSearch;
