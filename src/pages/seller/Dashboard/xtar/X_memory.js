import React from 'react';
import { Placeholder } from 'rsuite';
import Purchase from '../../../../components/Purchase';
import PurchasePic from '../../../../assets/images/png/purchase.png';

const PurchaseMemory = () => {
    return (
        <section className="lg:w-[calc(100%-280px)] flex flex-col text-center justify-center items-center">
            <div>
                <img src={PurchasePic} alt={Placeholder} />
            </div>
            <div className="flex items-center justify-center flex-wrap ">
                <Purchase
                    x_name="Blato"
                    price="1,200"
                    gift="2 product"
                    memory="40mb"
                    xtra="1 Brands"
                />
                <Purchase
                    x_name="Nelik"
                    price="2,300"
                    gift="2 product"
                    memory="50mb"
                    xtra="2 Brands"
                />
                <Purchase
                    x_name="Dejut"
                    price="4,500"
                    gift="5 product"
                    memory="70mb"
                    xtra="4 Brands"
                />

                <Purchase
                    x_name="Lilap"
                    price="9,500"
                    gift="8 product"
                    memory="100mb"
                    xtra="10 Brands"
                />
            </div>
        </section>
    );
};

export default PurchaseMemory;
