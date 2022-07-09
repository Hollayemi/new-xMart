import React from 'react';
import { Table } from 'rsuite';

const data = [
    {
        id: '1',
        product: 'Opening Store',
        key: 'i9340u248023842038',
        amount: <span>&#x20A6; 4300</span>,
        date: 'june 5, 2022',
    },
    {
        id: '2',
        product: '2 product',
        key: '32490384034j3n429',
        amount: <span>&#x20A6; 1300</span>,
        date: 'july 2, 2022',
    },
    {
        id: '3',
        product: '400 mb',
        key: '32490384034j3n429',
        amount: <span>&#x20A6; 500</span>,
        date: 'August 20, 2022',
    },
    {
        id: '4',
        product: 'Advertisment',
        key: '239923nn3j32033d20',
        amount: <span>&#x20A6; 3500</span>,
        date: 'August 30, 2022',
    },
];

const ReferenceKey = () => {
    return (
        <section className="bg-white px-2 md:px-5 lg:w-[calc(100%-280px)] h-[90vh] w-full min-w-[80px] overflow-auto">
            <div>Reference Keys</div>
            <div className="flex justify-center mt-10 w-full min-w-[280px]">
                <div className="w-full md:w-11/12 shadow-lg">
                    <Table height={600} data={data} onRowClick={(info) => {}}>
                        <Table.Column width={50} fixed>
                            <Table.HeaderCell>s/n</Table.HeaderCell>
                            <Table.Cell dataKey="id" />
                        </Table.Column>
                        <Table.Column width={200}>
                            <Table.HeaderCell>Product</Table.HeaderCell>
                            <Table.Cell dataKey="product" />
                        </Table.Column>
                        <Table.Column width={200}>
                            <Table.HeaderCell>Reference key</Table.HeaderCell>
                            <Table.Cell dataKey="key" />
                        </Table.Column>

                        <Table.Column width={200}>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.Cell dataKey="amount" />
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
