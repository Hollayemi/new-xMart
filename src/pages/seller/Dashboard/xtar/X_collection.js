import React from 'react';
import { Placeholder } from 'rsuite';
import Purchase from '../../../../components/Purchase';
import PurchasePic from '../../../../assets/images/png/purchase.png';

const PurchaseCollection = () => {
    return (
        <section className="lg:w-[calc(100%-280px)] flex flex-col text-center justify-center items-center">
            <div>
                <img src={PurchasePic} alt={Placeholder} />
            </div>
            <div className="flex items-center justify-center flex-wrap ">
                <Purchase
                    x_name="Blato"
                    price="1,750"
                    gift="1 brand, 2 products and"
                    memory="40mb"
                    xtra="1 Category"
                />
                <Purchase
                    x_name="Nelik"
                    price="3,500"
                    gift="2 brands, 2 products and"
                    memory="30mb"
                    xtra="2 Categories"
                />
                <Purchase
                    x_name="Dejut"
                    price="6,900"
                    gift="4 brands, 4 products and"
                    memory="70mb"
                    xtra="4 Categories"
                />

                <Purchase
                    x_name="Lilap"
                    price="11,000"
                    gift="10 brands, 10 product and"
                    memory="100mb"
                    xtra="10 Categories"
                />
            </div>
        </section>
    );
};

export default PurchaseCollection;
