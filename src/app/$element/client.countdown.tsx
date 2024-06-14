'use client'

import { useState, useEffect } from "react";

export default function CE_Countdown() {
    const targetTime = new Date().getTime() + (60 * 60 * 1000)
    const [countdown, setCountdown] = useState(targetTime - new Date().getTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((targetTime - new Date().getTime()));
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const formatTime = (milis: number) => {
        const hour = Math.floor((milis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minute = Math.floor((milis % (1000 * 60 * 60)) / (1000 * 60))
        const second = Math.floor((milis % (1000 * 60)) / 1000);

        return `${hour}:${minute}:${second}`
    }

    return (
        <div>{formatTime(countdown)}</div>
    )
}
