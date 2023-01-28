import { Dropdown } from 'components'
import { FC } from 'react'

const itemList = [
    {
        id: 1,
        name: 'All colors',
        value: 'all',
        textColor: 'text-blue-500',
        icon: {
            bg: 'bg-transparent',
            border: 'border-2 border-blue-500',
        },
    },
    {
        id: 3,
        name: 'Black',
        value: 'black',
        icon: {
            bg: 'bg-black',
        },
    },
    {
        id: 3,
        name: 'Green',
        value: 'green',

        icon: {
            bg: 'bg-green-500',
        },
    },
    {
        id: 4,
        name: 'Pink',
        value: 'pink',
        icon: {
            bg: 'bg-pink-500',
        },
    },
    {
        id: 5,
        name: 'Purple',
        value: 'purple',
        icon: {
            bg: 'bg-purple-500',
        },
    },
]

const itemOrder = [
    {
        id: 1,
        name: 'Newest',
        value: 'newest',
    },
    {
        id: 2,
        name: 'Oldest',
        value: 'oldest',
    },
]

export const Filter: FC = () => {
    return (
        <div className="w-full border-t-[1px] border-gray-500 py-20">
            <div className="inline-flex  w-full items-center justify-between space-x-32 ">
                <Dropdown title="Order by" items={itemOrder} />
                <div className="flex items-start justify-start space-x-3">
                    <div className="flex items-center justify-center rounded-full bg-gray-200 px-3 py-1.5"></div>

                    <div>
                        <input type="radio" name="option" className="peer hidden" defaultChecked />
                        <label className="flex items-center justify-center rounded-full px-3 py-1.5">
                            <p className="text-sm font-bold leading-none text-gray-800">All items</p>
                        </label>
                    </div>
                    <div>
                        <input type="radio" name="option" className="peer hidden" />
                        <label className="flex items-center justify-center rounded-full px-3 py-1.5">Art</label>
                    </div>
                    <div>
                        <input type="radio" name="option" className="peer hidden" />
                        <label className="flex items-center justify-center rounded-full px-3 py-1.5">Photography</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
