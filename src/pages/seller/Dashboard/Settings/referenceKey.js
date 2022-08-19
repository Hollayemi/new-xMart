import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Table } from 'rsuite';
import { getReference } from '../../../../state/slices/shop/settings/payment';

const ReferenceKey = ({ id }) => {
    const [data, setData] = useState([]);
    const disPatch = useDispatch();

    useEffect(() => {
        getReference(disPatch, { shopID: id }, setData);
    }, []);
    console.log(data);

    return (
        <section className="bg-white px-2 md:px-5 lg:w-[calc(100%-280px)] h-[90vh] w-full min-w-[80px] overflow-auto">
            <div>Reference Keys</div>
            <div className="flex justify-center mt-10 w-full min-w-[280px]">
                <div className="w-full md:w-11/12 shadow-lg">
                    <Table height={600} data={data}>
                        <Table.Column width={50} fixed>
                            <Table.HeaderCell>s/n</Table.HeaderCell>
                            <Table.Cell dataKey={1} />
                        </Table.Column>
                        <Table.Column width={200}>
                            <Table.HeaderCell>Product</Table.HeaderCell>
                            <Table.Cell dataKey="product" />
                        </Table.Column>
                        <Table.Column width={200}>
                            <Table.HeaderCell>Message</Table.HeaderCell>
                            <Table.Cell dataKey="message" />
                        </Table.Column>
                        <Table.Column width={200}>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.Cell dataKey="status" />
                        </Table.Column>
                        <Table.Column width={200}>
                            <Table.HeaderCell>Reference key</Table.HeaderCell>
                            <Table.Cell dataKey="reference" />
                        </Table.Column>

                        <Table.Column width={200}>
                            <Table.HeaderCell>Transaction</Table.HeaderCell>
                            <Table.Cell dataKey="transaction" />
                        </Table.Column>

                        <Table.Column width={200}>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.Cell dataKey="date" />
                        </Table.Column>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default ReferenceKey;
