'use client'

import { Icon } from '@iconify-icon/react'
import { useState } from 'react'
import CE_AccordionChild from './client.accordion.child';

interface AccordionProps {
    title: string;
    data: {
        key: string;
        value: string;
    }[]
}
export default function CE_Accordion(props: AccordionProps) {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className="w-full border-b border-b-white text-white flex items-center justify-between py-2 cursor-pointer" onClick={() => setOpen(!open)}>
                <p className='text-[12px] font-thin'>
                    {props.title}
                </p>
                {
                    open ?
                        <Icon icon="solar:alt-arrow-up-line-duotone" /> :
                        <Icon icon="solar:alt-arrow-down-line-duotone" />
                }
            </div>
            {
                open &&
                <CE_AccordionChild data={props.data} />
            }
        </>
    )
}