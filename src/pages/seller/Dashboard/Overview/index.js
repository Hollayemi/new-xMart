import React, { useEffect, useState } from 'react';
import { FaMemory, FaFolderOpen, FaFolderPlus, FaImages } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Placeholder, Table } from 'rsuite';
import {
    getActivities,
    getMyTools,
} from '../../../../state/slices/shop/overview';
import { Activities, SmallCard } from './components';

const Overview = ({ neededInfo }) => {
    const dispatch = useDispatch();
    const [activities, setActivities] = useState();
    const [tools, setTools] = useState('');
    console.log(activities);
    useEffect(() => {
        getActivities(
            dispatch,
            neededInfo.shopData.id,
            neededInfo.otpData.accessToken,
            setActivities
        );
        getMyTools(
            dispatch,
            neededInfo.shopData.id,
            neededInfo.otpData.accessToken,
            setTools
        );
    }, []);
    console.log(tools);
    return (
        <section className="min-h-[100vh]">
            {tools !== '' ? (
                <div className="flex items-center justify-evenl pl-10 flex-wrap">
                    <SmallCard
                        icon={<FaMemory />}
                        total={`${tools.message[0].memory}mb`}
                        info="Memory left"
                    />
                    <SmallCard
                        icon={<FaFolderOpen />}
                        total={tools.message[0].categories}
                        info="Categories left"
                    />
                    <SmallCard
                        icon={<FaFolderPlus />}
                        total={tools.message[0].brands}
                        info="Brands left"
                    />
                    <SmallCard
                        icon={<FaImages />}
                        total={tools.message[0].products}
                        info="Products left"
                    />
                </div>
            ) : (
                <Placeholder />
            )}
            <h5 className="font-bold mt-10 ml-4 text-md">Activities</h5>
            <div className="md:flex items-center">
                <div className="w-[310px] md:w-1/3 h-40 mx-1 my-3 min-h-[280px]">
                    <Activities
                        activities={activities}
                        header="Recent Activities"
                        title="Most Recent List Of Customers"
                    />
                </div>
                <div className="w-[310px] md:w-1/3 h-40 mx-1 my-3 min-h-[280px]">
                    <Activities
                        activities={activities}
                        header="Recent Orders"
                        title="Most Recent List Of Ordered goods"
                    />
                </div>
                <div className="w-[310px] md:w-1/3 h-40 mx-1 my-3 min-h-[280px]">
                    <Activities
                        activities={activities}
                        header="Recent Orders"
                        title="Most Recent List Of Ordered goods"
                    />
                </div>
            </div>
            <div className="flex justify-center mt-10 w-full">
                <div className="w-full md:w-11/12 shadow-lg">
                    <Table height={400} data={[]} onRowClick={(info) => {}}>
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
            </div>
        </section>
    );
};

export default Overview;
