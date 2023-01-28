import { DropdownProps } from './types'
import { Item } from './Item'
import { capitalize } from 'utils'
import { isNotNilOrEmpty } from 'ramda-adjunct'
import { useOutsideClick } from './hooks'
import { useState } from 'react'

export const Dropdown = ({ items, title }: DropdownProps) => {
    const [selected, setSelected] = useState<string | null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = (value: string) => {
        setSelected(value)
    }

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleClickOutside = () => {
        setIsOpen(false)
    }

    const ref: any = useOutsideClick(handleClickOutside)

    return (
        <>
            {items && (
                <div className="cursor-pointer space-y-3" ref={ref} onClick={handleToggle}>
                    <div className="relative flex w-64 items-center justify-between space-x-4 rounded-xl border-2 border-gray-700 py-2 pl-4 pr-2">
                        <span className="h-5 w-44 text-sm font-medium leading-normal text-gray-50">
                            {isNotNilOrEmpty(selected) ? capitalize(selected) : title}
                        </span>
                        <div
                            className={`flex items-center justify-center rounded-full border-2 border-gray-700 p-2 ${
                                isOpen ? 'rotate-180' : ''
                            } `}
                        >
                            <svg
                                width={10}
                                height={10}
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z"
                                    fill="#777E91"
                                />
                            </svg>
                        </div>
                    </div>
                    {isOpen && (
                        <ul className="absolute inline-flex w-64 flex-col items-start justify-start space-y-2.5 rounded-xl border-2 border-gray-700 bg-gray-800 p-2 shadow">
                            {items.map(({ id, name, value, textColor, icon }) => (
                                <Item
                                    key={id}
                                    value={value}
                                    textColor={textColor}
                                    icon={icon}
                                    handleClick={handleClick}
                                    clsx={value === selected ? 'bg-gray-900 rounded-lg' : ''}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    )
}

Dropdown.defaultProps = {
    items: null,
    title: 'Dropdown',
}
