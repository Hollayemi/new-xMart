import React from 'react';
import { Placeholder } from 'rsuite';
import Image1 from '../../../../assets/images/png/conntect2db_rectangle.png';
import Status from '../../../../components/status';

const Unsupplied = () => {
    return (
        <section className="flex items-center lg:w-[calc(100%-280px)] flex-wrap">
            <Status
                prod_name="Gucci Shoe"
                quantity="8"
                image={Image1}
                color="red"
                action={true}
            />
            <Status
                prod_name="iPhone 8plus"
                quantity="1"
                image={Image1}
                color="white"
                action={true}
            />
            <Status
                prod_name="Fendi Cloth"
                quantity="3"
                image={Image1}
                color="white"
                action={true}
            />
        </section>
    );
};

export default Unsupplied;
