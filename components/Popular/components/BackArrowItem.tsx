import { BackArrowItemProps } from 'types'
import { FC } from 'react'

export const BackArrowItem: FC<BackArrowItemProps> = ({ handleBack }) => {
    return (
        <svg
            className="cursor-pointer  rounded-full border-2 border-gray-700  p-2 text-gray-500"
            onClick={handleBack}
            width={40}
            height={40}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" /> <line x1={5} y1={12} x2={19} y2={12} />
            <line x1={5} y1={12} x2={9} y2={16} /> <line x1={5} y1={12} x2={9} y2={8} />
        </svg>
    )
}

BackArrowItem.defaultProps = {
    handleBack: () => null,
}
