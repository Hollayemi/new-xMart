import React from 'react';
import { Input, InputGroup, Progress, SelectPicker, Table } from 'rsuite';

const AvailablePickup = () => {
    return (
        <section className="flex justify-center min-h-[80vh] p-4">
            <div className="w-full md:w-5/6 shadow-lg">
                <Table height={420} data={''}>
                    <Table.Column width={100} align="center" resizable>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.Cell dataKey="item" />
                    </Table.Column>

                    <Table.Column width={200} resizable>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.Cell dataKey="category" />
                    </Table.Column>

                    <Table.Column width={100} resizable>
                        <Table.HeaderCell>Time</Table.HeaderCell>
                        <Table.Cell dataKey="Time" />
                    </Table.Column>

                    <Table.Column width={200} resizable>
                        <Table.HeaderCell>Buyer</Table.HeaderCell>
                        <Table.Cell dataKey="Buyer" />
                    </Table.Column>

                    <Table.Column width={200} resizable>
                        <Table.HeaderCell>Picker queued</Table.HeaderCell>
                        <Table.Cell dataKey="Picker" />
                    </Table.Column>

                    <Table.Column width={200} resizable>
                        <Table.HeaderCell>Seller location</Table.HeaderCell>
                        <Table.Cell dataKey="sellerLocation" />
                    </Table.Column>
                </Table>
            </div>
        </section>
    );
};

export default AvailablePickup;
