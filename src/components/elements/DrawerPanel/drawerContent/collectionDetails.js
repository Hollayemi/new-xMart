import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOnebyId } from '../../../../state/slices/home';
import Loading from '../../Loading';

const CollectionDetails = ({ id }) => {
    // const dispatch = useDispatch();
    // const [info, setInfo] = useState(null);
    // useEffect(() => {
    //     getOnebyId(dispatch, id, setInfo);
    // }, []);
    // console.log(info);
    return (
        <section>
            <div className="w-full h-[70vh] flex items-center justify-center">
                <Loading size="md" />
            </div>
        </section>
    );
};
export default CollectionDetails;
