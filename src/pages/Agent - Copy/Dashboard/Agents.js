import React from 'react';
import { Stack, Table } from 'rsuite';
import InputGroup from '../../../components/elements/Input/InputGroup';

const Agents = ({ myNeededInfo }) => {
    const { targetInfo, Viewing, setViewing } = myNeededInfo;
    console.log(Viewing);
    return (
        <section className="flex flex-col items-center min-h-[80vh] p-4">
            {Viewing.view === 'allAgents' && (
                <>
                    <div className="h w-full">
                        <div className="w-[320px]">
                            <InputGroup
                                label=" "
                                placeholder="search by shop name"
                            />
                            <button className="w-32 h-9 rounded-md bg-blue-600 text-white mx-3">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-5/6 shadow-lg">
                        <Table
                            height={400}
                            data={targetInfo}
                            onRowClick={(info) => {
                                setViewing({
                                    view: 'asBusiness',
                                    id: info._id,
                                });
                            }}
                        >
                            <Table.Column width={200} fixed>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.Cell dataKey="name" />
                            </Table.Column>

                            <Table.Column width={200}>
                                <Table.HeaderCell>Shop Email</Table.HeaderCell>
                                <Table.Cell dataKey="email" />
                            </Table.Column>

                            <Table.Column width={200}>
                                <Table.HeaderCell>
                                    Account Name
                                </Table.HeaderCell>
                                <Table.Cell dataKey="account_name" />
                            </Table.Column>

                            <Table.Column width={200}>
                                <Table.HeaderCell>
                                    Account Number
                                </Table.HeaderCell>
                                <Table.Cell dataKey="account_number" />
                            </Table.Column>
                            <Table.Column width={300}>
                                <Table.HeaderCell>Phone</Table.HeaderCell>
                                <Table.Cell dataKey="phone" />
                            </Table.Column>
                            <Table.Column width={120} fixed="right">
                                <Table.HeaderCell>Action</Table.HeaderCell>

                                <Table.Cell>
                                    {() => {
                                        return (
                                            <span className="flex">
                                                <h5
                                                    className="cursor-pointer"
                                                    onClick={() => {
                                                        setViewing({
                                                            view: 'asUser',
                                                            id: targetInfo.id,
                                                        });
                                                    }}
                                                >
                                                    View as user
                                                </h5>
                                            </span>
                                        );
                                    }}
                                </Table.Cell>
                            </Table.Column>
                        </Table>
                    </div>
                </>
            )}
            {Viewing.view === 'asBusiness' && targetInfo.shopInfo && (
                <div className="w-full">
                    <div className="mb-5">
                        <button
                            onClick={() => {
                                setViewing({
                                    view: 'activities',
                                    id: targetInfo.shopInfo._id,
                                });
                            }}
                            className="bg-blue-600 text-gray-100 py-1 px-2 shadow-sm rounded"
                        >
                            View activities
                        </button>
                    </div>
                    <h5>Busineses name: {targetInfo.shopInfo.shopName}</h5>
                    <GetAllCateAndBrands
                        category={targetInfo.collection}
                        brands={targetInfo.brand}
                    />
                </div>
            )}

            {Viewing.view === 'activities' && Viewing.view && (
                <>
                    <div className="h w-full">
                        <div className="w-[320px]">
                            <InputGroup
                                label=" "
                                placeholder="search by shop name"
                            />
                            <button className="w-32 h-9 rounded-md bg-blue-600 text-white mx-3">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-5/6 shadow-lg">
                        <Table
                            height={700}
                            data={targetInfo}
                            onRowClick={(info) => {
                                setViewing({
                                    view: 'asBusiness',
                                    id: info._id,
                                });
                            }}
                        >
                            <Table.Column width={50} fixed>
                                <Table.HeaderCell>s/n</Table.HeaderCell>
                                <Table.Cell dataKey="id" />
                            </Table.Column>
                            <Table.Column width={100} fixed>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.Cell dataKey="name" />
                            </Table.Column>

                            <Table.Column width={200}>
                                <Table.HeaderCell>Event</Table.HeaderCell>
                                <Table.Cell dataKey="event" />
                            </Table.Column>

                            <Table.Column width={200}>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                                <Table.Cell dataKey="action" />
                            </Table.Column>

                            <Table.Column width={200}>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.Cell dataKey="status" />
                            </Table.Column>
                            <Table.Column width={300}>
                                <Table.HeaderCell>Info</Table.HeaderCell>
                                <Table.Cell dataKey="info" />
                            </Table.Column>
                            <Table.Column width={200} fixed="right">
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.Cell dataKey="createdAt" />
                            </Table.Column>
                        </Table>
                    </div>
                </>
            )}
        </section>
    );
};

export default Agents;

const StackCapsule = ({ categoryName, brands }) => {
    const capsule = brands.map((res, index) => {
        if (res.brandCollection === categoryName) {
            <h5>{categoryName}</h5>;
            return (
                <h5
                    className="p-2 m-1 min-w-fit rounded-md h-10 shadow-md bg-slate-900 text-white "
                    key={index}
                >
                    {res.brandName}
                </h5>
            );
        }
    });
    return capsule;
};

const GetAllCateAndBrands = ({ category, brands }) => {
    const AllCateBrands = category.map((res, index) => {
        console.log(res.category);
        return (
            <div>
                <h5 className="font-bold mt-3">
                    {res.category} ({res.collectionName})
                </h5>
                <div className="flex flex-wrap">
                    <StackCapsule
                        key={index}
                        categoryName={res.category}
                        brands={brands}
                    />
                </div>
            </div>
        );
    });
    return GetAllCateAndBrands;
};
