'use client'

import { useCallback, useState } from "react"
import CE_HeaderButton from "./client.header.button"


export default function CE_Header() {
    const [lang, setLang] = useState<"id" | "en">('id')

    const setLangEn = useCallback(() => {
        setLang('en')
    }, [])
    const setLangId = useCallback(() => {
        setLang('id')
    }, [])
    return (
        <div className="w-full flex items-center py-6 border-b max-h-[100px]">
            {/* Title */}
            <div className="w-[300px] text-center font-poppins text-[16px] hidden lg:block">
                PT Clear Cache MIS V3-PP TEST COMPANYNAME
            </div>

            <div className="flex-grow flex items-center justify-between px-5">
                <div className="font-poppins font-bold text-[18px] ">
                    Select Payment Method
                </div>

                <CE_HeaderButton onClickEn={setLangEn} onClickId={setLangId} active={lang} />
            </div>
        </div>
    )
}