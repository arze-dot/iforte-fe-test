interface PAYMENT_DATA_TYPE {
    name: string;
    img_path: string;
}

export interface PAYMENT_TYPE {
    name: string;
    data: PAYMENT_DATA_TYPE[]

}

export const PAYMENT_LIST: PAYMENT_TYPE[] = [
    {
        name: 'Credit / Debit Card',
        data: [
            {
                name: 'Credit Card',
                img_path: '/image/logo/CREDIT_CARD.png'
            },
            {
                name: 'GPN',
                img_path: '/image/logo/GPN.png',
            },
        ]
    },
    {
        name: "Installment",
        data: [
            {
                name: 'Card Installment',
                img_path: '/image/logo/CARD_INSTALLMENT.png',
            },
        ]
    },
    {
        name: 'E-Wallet',
        data: [
            {
                name: 'SHOPEESNAP',
                img_path: '/image/logo/SHOPEE.png',
            },
            {
                name: 'Dana',
                img_path: '/image/logo/DANA.png',
            },
            {
                name: 'DANA_SNAP',
                img_path: '/image/logo/DANA.png',
            },
            {
                name: 'OVO',
                img_path: '/image/logo/OVO.png',
            },
            {
                name: 'SHOPEEPAY',
                img_path: '/image/logo/SHOPEE.png',
            },
            {
                name: 'VIRGO',
                img_path: '/image/logo/VIRGO.png',
            },
            {
                name: 'LINKAJA',
                img_path: '/image/logo/LINKAJA.png',
            },
        ]
    }
]