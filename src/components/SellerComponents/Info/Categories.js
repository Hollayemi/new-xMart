import LadiedImage from '../../../assets/images/png/purchase.png';
import MenImage from '../../../assets/images/png/Landing/main5.jpg';
import FootImage from '../../../assets/images/png/Landing/main2.png';
import fakeImg1 from '../../../assets/images/png/_supreme.png';
import fakeImg2 from '../../../assets/images/png/_supreme2.jpg';
import fakeImg3 from '../../../assets/images/png/_supreme3.png';
import fakeImg4 from '../../../assets/images/png/_supreme4.png';
import fakeImg5 from '../../../assets/images/png/_supreme5.png';
import fakeImg6 from '../../../assets/images/png/_supreme6.png';
import { MySlickSlide } from '../../../pages/website/Home';
import { websiteImages } from '../../websiteCompoents/Images';
import Slider from 'react-slick';
// import fakeImg7 from '../../../assets/images/png/_supreme7.jpg';

export const MartCategories = [
    'Wears',
    'Bags',
    'Drinks',
    'Kitchen Appliances',
    'Home Appliances',
    'Computer & Electronics',
    'Camping & Outdoors',
    'Beauty',
    'Book & Courses',
    'Fashion & Luggage',
    'Toys',
    'Office & Stationary',
    'Pets',
    'Sport & Training',
    'Tv, Audio & Media',
    'Gaming',
    'Health & Person',
];

var settings2 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
};
const WearSliders = () => {
    return (
        <div className="h-32 md:h-48 relative md:-mt-6">
            <Slider {...settings2}>
                <MySlickSlide
                    h="h-32 md:h-48"
                    image={websiteImages.shopWomen}
                />
                <MySlickSlide h="h-32 md:h-48" image={websiteImages.shopMen} />
                <MySlickSlide h="h-32 md:h-48" image={websiteImages.shopKids} />
                <MySlickSlide
                    h="h-32 md:h-48"
                    image={websiteImages.shopWomen2}
                />
            </Slider>
        </div>
    );
};

const ElectronicsSliders = () => {
    return (
        <div className="h-32 md:h-48 relative md:-mt-6">
            <Slider {...settings2}>
                <MySlickSlide
                    h="h-32 md:h-48"
                    image={websiteImages.shopPhones}
                />
                <MySlickSlide
                    h="h-32 md:h-48"
                    image={websiteImages.shopSolar}
                />
                <MySlickSlide
                    h="h-32 md:h-48"
                    image={websiteImages.shopWomen2}
                />
            </Slider>
        </div>
    );
};

const PhoneSlider = () => {
    return (
        <div className="h-32 md:h-48 relative md:-mt-6">
            <Slider {...settings2}>
                <MySlickSlide
                    h="h-32 md:h-48"
                    image={websiteImages.shopDrinks}
                />
                <MySlickSlide
                    h="h-32 md:h-48"
                    image={websiteImages.shopPhones}
                />
                <MySlickSlide
                    h="h-32 md:h-48"
                    image={websiteImages.shopSolarCarger}
                />
            </Slider>
        </div>
    );
};

const FoodSliders = () => {
    return (
        <div className="h-32 md:h-48 relative md:-mt-6">
            <Slider {...settings2}>
                <MySlickSlide
                    h="h-36 md:h-48"
                    image={websiteImages.kitchenEquipment}
                />
                <MySlickSlide
                    h="h-32 md:h-48"
                    image={websiteImages.shopDrinks}
                />
            </Slider>
        </div>
    );
};

export const HomeDisplay = [
    {
        name: 'Wears',
        about: 'Get decent wears for  from xmart',
        image: LadiedImage,
        slider: <WearSliders />,
    },
    {
        name: 'Electronics',
        about: 'Get ladies decent outfit from xmart',
        image: LadiedImage,
        slider: <ElectronicsSliders />,
    },
    {
        name: 'Food Materials',
        about: 'Order for men jacket today, look different today',
        image: MenImage,
        slider: <FoodSliders />,
    },
    {
        name: 'Phone Accessories',
        about: 'High quality of leader shoes from xmart',
        image: FootImage,
        slider: <PhoneSlider />,
    },
];

export const martCategories = [
    {
        label: 'Kemon-Mart Categories',
        value: 'home',
        children: [
            {
                label: 'Wears',
                value: 'Wears',
                children: [
                    {
                        label: 'Kids Wears',
                        value: 'Kids Wears',
                        children: [
                            {
                                label: 'Kids Foot Wear',
                                value: 'kids Foot Wear',
                                children: [],
                            },
                            {
                                label: 'kids Wrist Wear',
                                value: 'kids Wrist Wear',
                                children: [],
                            },
                            {
                                label: 'kids Head Wear',
                                value: 'kids Head Wear',
                                children: [],
                            },
                        ],
                    },
                    {
                        label: 'Ladies Wears',
                        value: 'Ladies Wears',
                        children: [
                            {
                                label: 'ladies Foot Wear',
                                value: 'ladies Foot Wear',
                                children: [],
                            },
                            {
                                label: 'Ladies Wrist Wear',
                                value: 'Ladies Wrist Wear',
                                children: [],
                            },
                            {
                                label: 'Ladies Head Wear',
                                value: 'Ladies Head Wear',
                                children: [],
                            },
                        ],
                    },
                    {
                        label: 'Men Wears',
                        value: 'Men Wears',
                        children: [
                            {
                                label: 'Men Foot Wear',
                                value: 'Men Foot Wear',
                                children: [],
                            },
                            {
                                label: 'Men Wrist Wear',
                                value: 'Men Wrist Wear',
                                children: [],
                            },
                            {
                                label: 'Men Head Wear',
                                value: 'Men Head Wear',
                                children: [],
                            },
                        ],
                    },
                    {
                        label: 'Men & Women Wears',
                        value: 'Men & Women Wears',
                        children: [
                            {
                                label: 'Men & Women Foot Wear',
                                value: 'Men & Women Foot Wear',
                                children: [],
                            },
                            {
                                label: 'Men & Women Wrist Wear',
                                value: 'Men & Women Wrist Wear',
                                children: [],
                            },
                            {
                                label: 'Men & Women Head Wear',
                                value: 'Men & Women Head Wear',
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Bags',
                value: 'Bags',
                children: [
                    {
                        label: 'kids School Bags',
                        value: 'kids School Bags',
                        children: [],
                    },
                    {
                        label: 'Ladies Bag',
                        value: 'Ladies Bag',
                        children: [],
                    },
                    {
                        label: 'Hand Bags',
                        value: 'Hand Bags',
                        children: [],
                    },
                    {
                        label: 'Cross Bags',
                        value: 'Cross Bags',
                        children: [],
                    },
                    {
                        label: 'Men Bags',
                        value: 'Men Bags',
                        children: [],
                    },
                    {
                        label: 'Men & Women Bags',
                        value: 'Men & Women Bags',
                        children: [],
                    },
                ],
            },

            {
                label: 'Drinks',
                value: 'Drinks',
                children: [
                    {
                        label: 'Men & Women Foot Wear',
                        value: 'Men & Women Foot Wear',
                        children: [],
                    },
                    {
                        label: 'Men & Women Wrist Wear',
                        value: 'Men & Women Wrist Wear',
                        children: [],
                    },
                    {
                        label: 'Men & Women Head Wear',
                        value: 'Men & Women Head Wear',
                        children: [],
                    },
                    {
                        label: 'Men & Women Bags',
                        value: 'Men & Women Bags',
                        children: [],
                    },
                ],
            },
            {
                label: 'Kitchen Appliances',
                value: 'Kitchen Appliances',
                children: [],
            },
            {
                label: 'Home Appliances',
                value: 'Home Appliances',
                children: [],
            },
            {
                label: 'Computer & Electronics',
                value: 'Computer & Electronics',
                children: [],
            },
            {
                label: 'Camping & Outdoors',
                value: 'Camping & Outdoors',
                children: [],
            },
            {
                label: 'Book & Courses',
                value: 'Book & Courses',
                children: [],
            },
            {
                label: 'Beauty',
                value: 'Beauty',
                children: [],
            },
            {
                label: 'Fashion & Luggage',
                value: 'Fashion & Luggage',
                children: [],
            },
            {
                label: 'Toys',
                value: 'Toys',
                children: [],
            },
            {
                label: 'Office & Stationary',
                value: 'Office & Stationary',
                children: [],
            },
            {
                label: 'Pets',
                value: 'Pets',
                children: [],
            },
            {
                label: 'Sport & Training',
                value: 'Sport & Training',
                children: [],
            },
            {
                label: 'Tv, Audio & Media',
                value: 'Tv, Audio & Media',
                children: [],
            },
            {
                label: 'Gaming',
                value: 'Gaming',
                children: [],
            },
            {
                label: 'Health & Person',
                value: 'Health & Person',
                children: [],
            },
        ],
    },
];

export const productInformation = {
    unit: [
        {
            label: 'kg',
            value: 'kg',
            children: [],
        },
        {
            label: 'litre',
            value: 'litre',
            children: [],
        },
        {
            label: 'pieces',
            value: 'pieces',
            children: [],
        },
        {
            label: 'g',
            value: 'g',
            children: [],
        },
    ],

    gender: [
        {
            label: 'Male',
            value: 'Male',
            children: [],
        },
        {
            label: 'Female',
            value: 'Female',
            children: [],
        },
        {
            label: 'Unisex',
            value: 'Unisex',
            children: [],
        },
        {
            label: 'Kids',
            value: 'Kids',
            children: [],
        },
    ],
    weight: [
        {
            label: 'small (0-10)',
            value: 'small (0-10)',
            children: [],
        },
        {
            label: 'medium (11-20)',
            value: 'medium (11-20)',
            children: [],
        },
        {
            label: 'Big (20-30)',
            value: 'Big (20-30)',
            children: [],
        },
    ],
    size: [
        {
            label: 'xs',
            value: 'xs',
            children: [],
        },
        {
            label: 'sm (small)',
            value: 'sm (small)',
            children: [],
        },
        {
            label: 'md (medium)',
            value: 'md (medium)',
            children: [],
        },
        {
            label: 'lg (large)',
            value: 'lg (large)',
            children: [],
        },
        {
            label: 'xl (extral large)',
            value: 'xl (extral large)',
            children: [],
        },
        {
            label: 'xxl (double extral large)',
            value: 'xxl (double extral large)',
            children: [],
        },
    ],
    color: [
        {
            label: 'black',
            value: 'black',
            children: [],
        },
        {
            label: 'white',
            value: 'white',
            children: [],
        },
        {
            label: 'Green',
            value: 'Green',
            children: [],
        },
        {
            label: 'Blue',
            value: 'Blue',
            children: [],
        },
        {
            label: 'Yellow',
            value: 'Yellow',
            children: [],
        },
        {
            label: 'Red',
            value: 'Red',
            children: [],
        },
        {
            label: 'Orange',
            value: 'Orange',
            children: [],
        },
        {
            label: 'purple',
            value: 'purple',
            children: [],
        },
        {
            label: 'Pink',
            value: 'Pink',
            children: [],
        },
    ],
};

export let myProducts2 = {
    message: [
        { images: [{ image: fakeImg1 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg2 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg3 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg4 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg5 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg6 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg1 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg2 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg3 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg4 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg5 }], prodPrice: 200, prodName: 'sweater' },
        { images: [{ image: fakeImg6 }], prodPrice: 200, prodName: 'sweater' },
    ],
};
