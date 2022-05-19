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
    FaGripLinesVertical,
    FaCreditCard,
    FaRegCreditCard,
    FaCartArrowDown,
    FaMapMarked,
    FaQuestionCircle,
} from 'react-icons/fa';

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

const DashboardHeader = ({ agentDetails }) => {
    return (
        <section className="w-full flex border-b-2">
            <div className="flex items-center h-20 w-full px-10">
                <img
                    src={agentDetails.profPic}
                    alt="pics"
                    className="w-[60px] h-[60px] rounded-full"
                />
                <h2 className="leading-7 ml-5 font-black text-lg text-slate-800">
                    Agent Hollayemi
                </h2>
            </div>
        </section>
    );
};

const DashboardWrapper = ({ ...props }) => {
    const setShowing = props.setShowing;
    const [expand, setExpand] = useState(true);
    return (
        <div className="show-fake-browser sidebar-page bg-slate-100">
            <Container>
                <div className="rounded-r-3xl overflow-hidden h-[100%] bg-slate-900 fixed top-0">
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
                                        active
                                        onClick={() => setShowing('Overview')}
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
                                        onClick={() => setShowing('Reward')}
                                    >
                                        <div className="h-5 ml-2 min-w-[100%]">
                                            <div className="flex items-center h-full">
                                                <i className="text-lg">
                                                    <FaRegCreditCard />
                                                </i>
                                                <span className="px-3">
                                                    Reward Account
                                                </span>
                                            </div>
                                        </div>
                                    </Nav.Item>

                                    <Nav.Item
                                        eventKey="2"
                                        onClick={() => setShowing('Pickup')}
                                    >
                                        <div className="h-5 ml-2 min-w-[100%]">
                                            <div className="flex items-center h-full">
                                                <i className="text-lg">
                                                    <FaCartArrowDown />
                                                </i>
                                                <span className="px-3">
                                                    Quick Pick
                                                </span>
                                            </div>
                                        </div>
                                    </Nav.Item>
                                    <Nav.Item
                                        eventKey="2"
                                        onClick={() => setShowing('Analytics')}
                                    >
                                        <div className="h-5 ml-2 min-w-[100%]">
                                            <div className="flex items-center h-full">
                                                <i className="text-lg">
                                                    <FaMapMarked />
                                                </i>
                                                <span className="px-3">
                                                    Available Products
                                                </span>
                                            </div>
                                        </div>
                                    </Nav.Item>
                                    <Nav.Item
                                        eventKey="2"
                                        onClick={() => setShowing('Analytics')}
                                    >
                                        <div className="h-5 ml-2 min-w-[100%]">
                                            <div className="flex items-center h-full">
                                                <i className="text-lg">
                                                    <FaCog />
                                                </i>
                                                <span className="px-3">
                                                    Settigs
                                                </span>
                                            </div>
                                        </div>
                                    </Nav.Item>
                                    <Nav.Item
                                        eventKey="2"
                                        onClick={() => setShowing('Analytics')}
                                    >
                                        <div className="h-5 ml-2 min-w-[100%]">
                                            <div className="flex items-center h-full">
                                                <i className="text-lg">
                                                    <FaQuestionCircle />
                                                </i>
                                                <span className="px-3">
                                                    Help
                                                </span>
                                            </div>
                                        </div>
                                    </Nav.Item>
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
                            <div className="bg-slate-100 shadow flex items-center">
                                <DashboardHeader
                                    agentDetails={props.agentDetails}
                                />
                            </div>
                            <div className="w-full bg-slate-50">
                                {props.children}
                            </div>
                        </Content>
                    </div>
                </Container>
            </Container>
        </div>
    );
};

export default DashboardWrapper;
