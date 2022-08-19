import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Input, InputGroup, Progress, SelectPicker, Table } from 'rsuite';
import PlaceholderGraph from 'rsuite/esm/Placeholder/PlaceholderGraph';
import { getMyTools } from '../../../../state/slices/shop/overview';
import { Graph2, TransacChart } from './components';

const Analytics = ({ neededInfo }) => {
    const dispatch = useDispatch();
    const [tools, setTools] = useState('');
    useEffect(() => {
        getMyTools(
            dispatch,
            neededInfo.shopData.data._id,
            neededInfo.otpData.accessToken,
            setTools
        );
    }, []);
    // let myToolsInfo = tools.message;
    return (
        <main className="w-full bg-gray-50">
            <div className="flex items-center flex-wrap mx-2 justify-center">
                {tools && (
                    <>
                        <TransacChart
                            title="Categories"
                            all={tools.message[0].Total_categories}
                            left={
                                tools.message[0].Total_categories -
                                tools.message[0].categories
                            }
                            chartLoader={
                                <Graph2
                                    legend={false}
                                    myData={[
                                        tools.message[0].Total_categories -
                                            tools.message[0].categories,
                                        tools.message[0].Total_categories,
                                    ]}
                                    labels={['categories', 'total']}
                                />
                            }
                        />
                        <TransacChart
                            title="Brands"
                            all={tools.message[0].Total_brands}
                            left={
                                tools.message[0].Total_brands -
                                tools.message[0].brands
                            }
                            chartLoader={
                                <Graph2
                                    legend={false}
                                    myData={[
                                        tools.message[0].Total_brands -
                                            tools.message[0].brands,
                                        tools.message[0].Total_brands,
                                    ]}
                                    labels={['brands', 'total brands']}
                                />
                            }
                        />
                        <TransacChart
                            title="Products"
                            all={tools.message[0].Total_products}
                            left={
                                tools.message[0].Total_products -
                                tools.message[0].products
                            }
                            chartLoader={
                                <Graph2
                                    legend={false}
                                    myData={[
                                        tools.message[0].Total_products -
                                            tools.message[0].products,
                                        tools.message[0].Total_products,
                                    ]}
                                    labels={['Products', 'total products']}
                                />
                            }
                        />
                        <TransacChart
                            title="Memory"
                            all={tools.message[0].Total_memory}
                            left={
                                tools.message[0].Total_memory -
                                tools.message[0].memory
                            }
                            chartLoader={
                                <Graph2
                                    legend={false}
                                    myData={[
                                        tools.message[0].Total_memory -
                                            tools.message[0].memory,
                                        tools.message[0].Total_memory,
                                    ]}
                                    labels={['space', 'Purchased']}
                                />
                            }
                        />
                    </>
                )}
            </div>
            <div className="flex flex-col items-center md:flex-row px-3 md:px-5">
                <div className="w-full md:w-3/5 py-2 shadow-md my-4 mx-1 h-80 bg-white rounded">
                    {tools !== '' ? (
                        <Graph2
                            legend={true}
                            myData={[
                                tools.message[0].Total_brands -
                                    tools.message[0].brands,
                                tools.message[0].Total_products -
                                    tools.message[0].products,
                                tools.message[0].Total_categories -
                                    tools.message[0].categories,
                            ]}
                            labels={['Brands', 'Products', 'Categories']}
                        />
                    ) : (
                        <div className="h-full">
                            <PlaceholderGraph />
                        </div>
                    )}
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
                    <Table height={420} data={[]}>
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

export default Analytics;
