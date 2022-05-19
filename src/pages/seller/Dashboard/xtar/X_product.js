import React from 'react';
import { Placeholder } from 'rsuite';
import Purchase from '../../../../components/Purchase';
import PurchasePic from '../../../../assets/images/png/purchase.png';

const PurchaseProduct = () => {
    return (
        <section className="lg:w-[calc(100%-280px)] flex flex-col text-center justify-center items-center">
            <div>
                <img src={PurchasePic} alt={Placeholder} />
            </div>
            <div className="flex items-center justify-center flex-wrap ">
                <Purchase
                    x_name="Blato"
                    price="1,000"
                    gift=""
                    memory="10mb"
                    xtra="5 Product"
                />
                <Purchase
                    x_name="Nelik"
                    price="2,000"
                    gift=""
                    memory="20mb"
                    xtra="10 products"
                />
                <Purchase
                    x_name="Dejut"
                    price="8,000"
                    gift=""
                    memory="80mb"
                    xtra="40 products"
                />

                <Purchase
                    x_name="Lilap"
                    price="10,000"
                    gift=""
                    memory="100mb"
                    xtra="50 products"
                />
            </div>
        </section>
    );
};

export default PurchaseProduct;
