import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image1 from '../../../../assets/images/png/conntect2db_rectangle.png';
import Status from '../../../../components/status';

const Supplied = () => {
    return (
        <section className="flex items-center lg:w-[calc(100%-280px)] flex-wrap">
            <Status
                prod_name="Gucci Shoe"
                quantity="8"
                image={Image1}
                color="red"
                icon={<FaCheckCircle />}
            />
            <Status
                prod_name="iPhone 8plus"
                quantity="1"
                image={Image1}
                color="white"
                icon={<FaCheckCircle />}
            />
            <Status
                prod_name="Fendi Cloth"
                quantity="3"
                image={Image1}
                color="white"
                icon={<FaCheckCircle />}
            />
        </section>
    );
};

export default Supplied;
