'use client'
import { useMemo, useState } from "react";
import { PAYMENT_LIST } from "../constant/payment_data";
import Image from "next/image";

export default function CE_PaymentList() {

    const initial_data = useMemo(() => {
        return PAYMENT_LIST
    }, [])

    const [payment_data] = useState(initial_data);

    return (
        <section className="py-3 px-4 overflow-y-auto flex flex-col items-start justify-start gap-4 h-[600px]">
            {
                payment_data.map((item, index) => {
                    return (
                        <div key={index} className="font-poppins text-[14px]">
                            {item.name}
                            <div className="flex items-start justify-start gap-5 mt-2 flex-wrap">
                                {/* Card */}
                                {
                                    item.data.map((itm, idx) => {
                                        return (
                                            <div className="w-[120px] h-[100px] flex flex-col items-center justify-center gap-3  border p-3 text-[12px] rounded-md hover:shadow-lg cursor-pointer">
                                                <div className="w-[80px] min-h-[55px] items-center justify-center flex">
                                                    <Image src={itm.img_path} width={80} height={80} alt="icon" />
                                                </div>
                                                {itm.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}