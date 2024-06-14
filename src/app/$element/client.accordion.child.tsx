interface AccordionChildProps {
    data: {
        key: string;
        value: string;
    }[]
}
export default function CE_AccordionChild(props: AccordionChildProps) {
    return (
        <>
            {
                props.data.map((item, index) => {
                    return (
                        <div className='w-full flex items-center justify-between text-white text-[12px] font-thin' key={index}>
                            <p>{item.key}</p>
                            <p>{item.value}</p>
                        </div>

                    )
                })
            }
        </>
    )
}