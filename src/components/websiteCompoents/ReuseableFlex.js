import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MyCartPreView } from '../../pages/website/containers/products';
import { loadChildren } from '../../state/slices/shop/brands/brands';
import { myProducts2 } from '../SellerComponents/Info/Categories';
import Footer from './Footer';
import Header from './Header';
const SearchWrapper = (props) => {
    const [expandCate, setCategory] = useState('');
    const [open, setOpen] = useState(false);
    const getFromCate = loadChildren(expandCate);
    return (
        <section className="bg-slate-50">
            <div className="md:h-24"></div>
            <Header
                expandCate={expandCate}
                setCategory={setCategory}
                open={open}
                setOpen={setOpen}
                cartItems={[
                    <MyCartPreView
                        image={myProducts2.message[0].images[0].image}
                        qty={8}
                        name="Iphone 12 pro"
                        price={2000}
                    />,
                    <MyCartPreView
                        image={myProducts2.message[0].images[0].image}
                        qty={8}
                        name="Iphone 12 pro"
                        price={3000}
                    />,
                    <MyCartPreView
                        image={myProducts2.message[0].images[0].image}
                        qty={8}
                        name="Iphone 12 pro"
                        price={1000}
                    />,
                ]}
            />
            {!expandCate && props.children}
            {expandCate.length > 0 && (
                <>
                    <i
                        className="float-right text-md px-4 py-3"
                        onClick={() => setCategory('')}
                    >
                        <FaTimes />
                    </i>
                    <div className="flex items-start relative">
                        <div className="w-28 absolute top-0 left-0 pl-4 h-full bg-white">
                            {expandCate}
                        </div>
                        <div className="ml-28">
                            {getFromCate.map((res, index) => {
                                return (
                                    <Link to="/">
                                        <div
                                            className="w-40 p-1 px-4 max-w-40 text-black hover:text-blue-600"
                                            key={index}
                                        >
                                            <h5>{res.value}</h5>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
            <footer>
                <Footer />
            </footer>
        </section>
    );
};
export default SearchWrapper;
