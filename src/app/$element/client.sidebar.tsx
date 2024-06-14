'use client'

import CE_Accordion from "./client.accordion"
import CE_Countdown from "./client.countdown"

export default function CE_Sidebar() {

    const dummyOrder = [
        {
            key: "Bill",
            value: 'IDR 15.000'
        }
    ]

    const dummyCustomer = [
        {
            key: 'Customer',
            value: 'Ezra'
        },
        {
            key: 'Phone',
            value: '+628123456789'
        },
    ]

    const dummyShipping = [
        {
            key: 'Shipping',
            value: "J&T"
        }
    ]

    const dummyBill = [
        {
            key: 'Hermes Bag',
            value: "IDR 5.000"
        },
        {
            key: 'Hermes Shoes',
            value: "IDR 5.000"
        },
        {
            key: 'Hermes Hat',
            value: "IDR 5.000"
        },
    ]
    return (
        <div className="bg-[#231e1e] w-full lg:min-w-[300px] lg:max-w-[300px] ">
            {/* Detail  */}
            <div className="w-full p-4 flex flex-col items-center justify-start mt-2 gap-5 text-center">
                <p className="text-white text-[18px]">PT Clear Cache MIS V3-PP TEST COMPANYNAME</p>
                <div className="text-white text-[18px]">
                    <CE_Countdown />
                </div>

                <div className="w-full flex flex-col items-center justify-start gap-3">
                    <p className="text-white">Total Payment</p>
                    <p className="text-yellow-500 text-[20px]">IDR 15.000</p>
                </div>

                <p className="text-[12px] font-thin text-center text-white">
                    Order ID: 00850
                </p>
            </div>

            {/* Accordion */}
            <div className="w-full flex flex-col items-center justify-start gap-3 px-3 pb-6 ">
                <CE_Accordion title="Order Detail" data={dummyOrder} />
                <CE_Accordion title="Customer Detail" data={dummyCustomer} />
                <CE_Accordion title="Shipping Detail" data={dummyShipping} />
                <CE_Accordion title="Billing Detail" data={dummyBill} />
            </div>
        </div>
    )
}