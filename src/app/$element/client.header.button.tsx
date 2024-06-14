interface HeaderButtonProps {
    onClickId: () => void;
    onClickEn: () => void;
    active: "id" | "en"
}

export default function CE_HeaderButton(props: HeaderButtonProps) {
    return (
        <div className="flex cursor-pointer ">
            <button className={`py-2 px-4 border-l border-t border-b border-r rounded-l-md hover:border-yellow-400 ${props.active === 'id' ? 'border-yellow-400' : ''}`} onClick={props.onClickId}>ID</button>
            <button className={`py-2 px-4 border-r border-t border-b rounded-r-md border-l hover:border-yellow-400 ${props.active === 'en' ? 'border-yellow-400' : ''}`} onClick={props.onClickEn}>EN</button>
        </div>
    )
}