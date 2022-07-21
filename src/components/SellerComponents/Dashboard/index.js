import React, { useState } from 'react';
import {
    Container,
    Header,
    Content,
    Sidebar,
    Navbar,
    Dropdown,
    Nav,
    Sidenav,
    Breadcrumb,
} from 'rsuite';
import {
    FaAngleRight,
    FaAngleLeft,
    FaToolbox,
    FaUserCog,
    FaGripHorizontal,
    FaChartPie,
    FaShoppingBag,
    FaShoppingBasket,
    FaCog,
    FaMoneyBill,
} from 'react-icons/fa';
import RecentInfo from './RecentInfo';
import Footer from '../../websiteCompoents/Footer';

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle bg-slate-900">
            <Navbar className="bg-slate-900">
                <Nav pullRight>
                    <Nav.Item
                        onClick={onChange}
                        style={{
                            width: 56,
                            textAlign: 'center',
                        }}
                    >
                        {expand ? <FaAngleLeft /> : <FaAngleRight />}
                    </Nav.Item>
                </Nav>
            </Navbar>
        </Navbar>
    );
};

const DashboardHeader = ({ BreadcrumbList }) => {
    // eslint-disable-next-line array-callback-return
    const myBreadcrumb = BreadcrumbList.map((res, index) => {
        if (index !== BreadcrumbList.length) {
            return (
                <Breadcrumb.Item href={res.link} key={index}>
                    <span>{res.name}</span>
                </Breadcrumb.Item>
            );
        }
        if (index === BreadcrumbList.length) {
            return (
                <Breadcrumb.Item active key={index}>
                    <span>{res.name}</span>
                </Breadcrumb.Item>
            );
        }
    });
    return (
        <div className="h-full flex items-center">
            <div className="font-medium text-white">
                <Breadcrumb separator={<FaAngleRight />}>
                    {myBreadcrumb}
                </Breadcrumb>
            </div>
        </div>
    );
};

const DashboardWrapper = ({ ...props }) => {
    const setShowing = props.setShowing;
    const showing = props.showing;
    const [expand, setExpand] = useState(true);
    return (
        <div className="show-fake-browser sidebar-page bg-slate-100">
            <Container>
                <div className="rounded-r-3xl overflow-hidden h-[100%] bg-slate-900 fixed z-50 top-0">
                    <Sidebar
                        style={{ display: 'flex', flexDirection: 'column' }}
                        width={expand ? 260 : 56}
                        collapsible
                    >
                        <Sidenav.Header>
                            <div className="h-14 ml-6 text-lg min-w-[100%]">
                                <div className="flex items-center h-full">
                                    <i className="text-lg">
                                        <FaUserCog />
                                    </i>
                                    <span className="px-4 text-sm">
                                        {props.shopName}
                                    </span>
                                </div>
                            </div>
                        </Sidenav.Header>
                        <Sidenav
                            expanded={expand}
                            defaultOpenKeys={['3']}
                            appearance="subtle"
                        >
                            <Sidenav.Body>
                                <Nav>
                                    <Nav.Item
                                        eventKey="1"
                                        active={showing === 'Dashboard' && true}
                                        onClick={() => setShowing('Dashboard')}
                                    >
                                        <div className="h-5 ml-2 min-w-[100%]">
                                            <div className="flex items-center h-full">
                                                <i className="text-lg">
                                                    <FaGripHorizontal />
                                                </i>
                                                <span className="px-3">
                                                    Dashboard
                                                </span>
                                            </div>
                                        </div>
                                    </Nav.Item>

                                    <Nav.Item
                                        eventKey="2"
                                        active={
                                            showing === '0_Analytics' && true
                                        }
                                        onClick={() =>
                                            setShowing('0_Analytics')
                                        }
                                    >
                                        <div className="h-5 ml-2 min-w-[100%]">
                                            <div className="flex items-center h-full">
                                                <i className="text-lg">
                                                    <FaChartPie />
                                                </i>
                                                <span className="px-3">
                                                    Analytics
                                                </span>
                                            </div>
                                        </div>
                                    </Nav.Item>

                                    <Dropdown
                                        eventKey="3"
                                        trigger="click"
                                        title={
                                            <div className="h-5 min-w-[100%]">
                                                <div className="flex items-center h-full">
                                                    <i className="text-lg">
                                                        <FaShoppingBag />
                                                    </i>
                                                    <span className="px-5">
                                                        Store
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                        icon={<FaToolbox />}
                                        placement="leftStart"
                                    >
                                        <Dropdown.Item
                                            eventKey="3-1"
                                            active={
                                                showing ===
                                                    'Store_Collections' && true
                                            }
                                            onClick={() =>
                                                setShowing('Store_Collections')
                                            }
                                        >
                                            Collections
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="3-2"
                                            active={
                                                showing === 'Store_Brands' &&
                                                true
                                            }
                                            onClick={() =>
                                                setShowing('Store_Brands')
                                            }
                                        >
                                            Brands
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="3-3"
                                            active={
                                                showing === 'Store_Products' &&
                                                true
                                            }
                                            onClick={() =>
                                                setShowing('Store_Products')
                                            }
                                        >
                                            Products
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="3-4"
                                            active={
                                                showing.split('_')[0] ===
                                                    'Edit Product' && true
                                            }
                                            onClick={() =>
                                                setShowing(
                                                    'Edit Product_My store_brand-0-0'
                                                )
                                            }
                                        >
                                            Edit Product
                                        </Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown
                                        eventKey="5"
                                        trigger="click"
                                        title={
                                            <div className="h-5">
                                                <div className="flex items-center ml-2 h-full">
                                                    <i className="text-lg">
                                                        <FaShoppingBasket />
                                                    </i>
                                                    <span className="px-5">
                                                        Store Status
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                        placement="leftStart"
                                    >
                                        <Dropdown.Item
                                            eventKey="order-1"
                                            active={
                                                showing ===
                                                    'Status_Unsupplied Products' &&
                                                true
                                            }
                                            onClick={() =>
                                                setShowing(
                                                    'Status_Unsupplied Products'
                                                )
                                            }
                                        >
                                            Unsupplied Products
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="xtra-1"
                                            active={
                                                showing ===
                                                    'Status_Supplied Products' &&
                                                true
                                            }
                                            onClick={() =>
                                                setShowing(
                                                    'Status_Supplied Products'
                                                )
                                            }
                                        >
                                            Supplied Products
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="xtra-1"
                                            onClick={() =>
                                                setShowing(
                                                    'status_Carted Products'
                                                )
                                            }
                                        >
                                            Carted Products
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="xtra-1"
                                            active={
                                                showing === 'xtra_prod' && true
                                            }
                                            onClick={() =>
                                                setShowing('xtra_prod')
                                            }
                                        >
                                            Tags
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4-5">
                                            Versions
                                        </Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown
                                        eventKey="6"
                                        trigger="click"
                                        title={
                                            <div className="h-5 min-w-[100%]">
                                                <div className="flex items-center h-full">
                                                    <i className="text-lg">
                                                        <FaCog />
                                                    </i>
                                                    <span className="px-5">
                                                        Settings
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                        icon={<FaToolbox />}
                                        placement="leftStart"
                                    >
                                        <Dropdown.Item
                                            eventKey="xtra-1"
                                            onClick={() =>
                                                setShowing(
                                                    'Setting_Edit Store Info'
                                                )
                                            }
                                        >
                                            Edit Store Info
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="entryMode"
                                            onClick={() =>
                                                setShowing('Setting_Entry Mode')
                                            }
                                        >
                                            Entry Mode
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="activities"
                                            onClick={() =>
                                                setShowing('Setting_Activities')
                                            }
                                        >
                                            Activities
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="ref-keys"
                                            onClick={() =>
                                                setShowing(
                                                    'Setting_Reference Keys'
                                                )
                                            }
                                        >
                                            Reference Keys
                                        </Dropdown.Item>
                                    </Dropdown>
                                    <Dropdown
                                        eventKey="7"
                                        trigger="click"
                                        title={
                                            <div className="h-5 ml-2 min-w-[100%]">
                                                <div className="flex items-center h-full">
                                                    <i className="text-lg">
                                                        <FaMoneyBill />
                                                    </i>
                                                    <span className="px-5">
                                                        Pricing
                                                    </span>
                                                </div>
                                            </div>
                                        }
                                        placement="leftStart"
                                    >
                                        <Dropdown.Item
                                            eventKey="xtra-1"
                                            onClick={() =>
                                                setShowing(
                                                    'Pricing_Xtra Memory'
                                                )
                                            }
                                        >
                                            Xtra Memory
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="xtra-2"
                                            onClick={() =>
                                                setShowing(
                                                    'Pricing_Xtra Collection'
                                                )
                                            }
                                        >
                                            Xtra Collection
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="xtra-3"
                                            onClick={() =>
                                                setShowing('Pricing_Xtra Brand')
                                            }
                                        >
                                            Xtra Brand
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="xtra-4"
                                            onClick={() =>
                                                setShowing(
                                                    'Pricing_Xtra Product'
                                                )
                                            }
                                        >
                                            Xtra Product
                                        </Dropdown.Item>
                                    </Dropdown>
                                </Nav>
                            </Sidenav.Body>
                        </Sidenav>
                        <NavToggle
                            expand={expand}
                            onChange={() => setExpand(!expand)}
                        />
                    </Sidebar>
                </div>

                <Container>
                    <div
                        className={`absolute overflow-x-hidden ${
                            expand === true
                                ? 'w-[calc(100%_-_260px)] ml-[260px]'
                                : 'w-[calc(100%-56px)] ml-[56px]'
                        }`}
                    >
                        <Header></Header>
                        <Content>
                            <div
                                className={`h-14 bg-slate-100 z-50 shadow pl-10 flex items-center px-3 fixed top-0 ${
                                    expand === true
                                        ? 'w-[calc(100%_-_260px)] ml-[260px]'
                                        : 'w-[calc(100%-56px)] ml-[56px]'
                                } left-0`}
                            >
                                <DashboardHeader
                                    BreadcrumbList={props.BreadcrumbList}
                                />
                            </div>
                            <div className="w-full z-30 bg-slate-100 mt-16">
                                {props.children}
                            </div>
                            {showing !== '0_Analytics' &&
                                showing !== 'Dashboard' && (
                                    <div className="fixed -right-[280px] z-50 lg:right-0  top-0 w-[280px] h-full  bg-slate-50 shadow-md">
                                        <RecentInfo />
                                    </div>
                                )}
                        </Content>
                    </div>
                </Container>
            </Container>
        </div>
    );
};

export default DashboardWrapper;
