import { FC } from 'react'
import { NextArrowItemProps } from 'types'

export const NextArrowItem: FC<NextArrowItemProps> = ({ handleNext }) => {
    return (
        <svg
            className="cursor-pointer  rounded-full border-2 border-gray-700  p-2 text-gray-500"
            onClick={handleNext}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={40}
            height={40}
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    )
}

NextArrowItem.defaultProps = {
    handleNext: () => null,
}
