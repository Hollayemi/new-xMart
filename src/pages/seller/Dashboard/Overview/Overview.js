import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Input, InputGroup, Progress, SelectPicker, Table } from 'rsuite';
import { Graph2, TransacChart } from './components';

const Overview = () => {
    return (
        <main className="w-full bg-gray-50">
            <div className="flex items-center flex-wrap mx-2 justify-center">
                <TransacChart
                    chartLoader={<Graph2 legend={false} myData={[2, 3]} />}
                />
                <TransacChart
                    chartLoader={<Graph2 legend={false} myData={[1, 2]} />}
                />
                <TransacChart
                    chartLoader={<Graph2 legend={false} myData={[5, 2]} />}
                />
                <TransacChart
                    chartLoader={<Graph2 legend={false} myData={[4, 3]} />}
                />
            </div>
            <div className="flex flex-col items-center md:flex-row px-3 md:px-5">
                <div className="w-full md:w-3/5 py-2 shadow-md my-4 mx-1 h-80 bg-white rounded">
                    <Graph2
                        legend={true}
                        myData={[4, 3, 3]}
                        labels={['Brands', 'Products', 'Categories', 'Memory']}
                    />
                </div>
                <div className="w-full md:w-2/5 bg-white h-80 px-4 py-1 rounded shadow-md">
                    <ul className="">
                        <h3 className="font-bold text-md ml-4">Order</h3>
                        <Progress.Line percent={80} showInfo={false} />
                        <li className="m-2 flex items-center">
                            <h5>Reconcilled Orders:</h5>{' '}
                            <h5 className="ml-4">80</h5>
                        </li>
                        <li className="m-2 flex items-center">
                            <h5>Reconcilled Orders:</h5>{' '}
                            <h5 className="ml-4">80</h5>
                        </li>
                        <li className="m-2 flex items-center">
                            <h5>Reconcilled Orders:</h5>{' '}
                            <h5 className="ml-4">80</h5>
                        </li>
                    </ul>
                    <ul className="border-t-2 pt-4">
                        <h5 className="font-bold text-md ml-4">Payments</h5>
                        <li className="m-2 flex items-center">
                            <h5>Reconcilled Payments:</h5>{' '}
                            <h5 className="ml-4">80</h5>
                        </li>
                        <li className="m-2 flex items-center">
                            <h5>Reconcilled Payments:</h5>{' '}
                            <h5 className="ml-4">80</h5>
                        </li>
                        <li className="m-2 flex items-center">
                            <h5>Reconcilled Payments:</h5>{' '}
                            <h5 className="ml-4">80</h5>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex mt-6 items-center flex-col mb-3">
                <div className="w-5/6">
                    <h5 className="text-xl">Payments</h5>
                    <div className="flex items-center justify-evenly mb-8">
                        <div className="flex items-center">
                            <SelectPicker
                                data={[1, 3, 4]}
                                appearance="subtle"
                                placeholder="showing"
                                style={{ width: 160 }}
                            />
                            <p>out of 200 payments</p>
                        </div>
                        <div className="w-60 ml-6">
                            <InputGroup
                                inside
                                className="border-0 border-b bg-transparent"
                            >
                                <InputGroup.Addon>
                                    <FaSearch />
                                </InputGroup.Addon>
                                <Input
                                    placeholder="search payment"
                                    className="bg-transparent"
                                />
                            </InputGroup>
                        </div>
                        <div>
                            <SelectPicker
                                data={['']}
                                appearance="subtle"
                                placeholder="All"
                                style={{ width: 100 }}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-5/6 shadow-lg">
                    <Table height={420} data={''}>
                        <Table.Column width={50} align="center" resizable>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.Cell dataKey="id" />
                        </Table.Column>

                        <Table.Column width={100} resizable>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.Cell dataKey="firstName" />
                        </Table.Column>

                        <Table.Column width={100} resizable>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.Cell dataKey="lastName" />
                        </Table.Column>

                        <Table.Column width={200} resizable>
                            <Table.HeaderCell>City</Table.HeaderCell>
                            <Table.Cell dataKey="city" />
                        </Table.Column>

                        <Table.Column width={200} resizable>
                            <Table.HeaderCell>Company Name</Table.HeaderCell>
                            <Table.Cell dataKey="companyName" />
                        </Table.Column>
                    </Table>
                </div>
            </div>
        </main>
    );
};

export default Overview;
