import { FC } from 'react'
import { ItemProps } from './types'
import { capitalize } from 'utils'

export const Item: FC<ItemProps> = ({ value, textColor, icon, clsx, handleClick }) => {
    return (
        <li
            className={`inline-flex w-full cursor-pointer items-center justify-start space-x-2 p-2 hover:rounded-lg hover:bg-gray-900 ${clsx}`}
            onClick={() => (handleClick ? handleClick(value) : null)}
        >
            {icon && icon.bg && <div className={`${icon.bg} ${icon.border} h-5 w-5 rounded-2xl`} />}
            <span className={`text-sm font-medium leading-normal ${textColor}`}>{`${capitalize(value)}`}</span>
        </li>
    )
}

Item.defaultProps = {
    value: 'item',
    textColor: 'text-gray-100',
    icon: {
        bg: '',
        border: '',
    },
    clsx: '',
    handleClick: () => null,
}
