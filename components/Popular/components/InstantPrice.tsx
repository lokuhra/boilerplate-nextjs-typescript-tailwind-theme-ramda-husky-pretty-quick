import { FC } from 'react'
import { InstantPriceProps } from 'types'

export const InstantPrice: FC<InstantPriceProps> = ({ instantPrice }) => {
    return (
        <div className="flex flex-1 items-center justify-start space-x-2">
            <div className="flex h-10 w-1/4 items-center justify-center rounded-full bg-green-500 p-2">
                <svg
                    width={41}
                    height={40}
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative h-10 w-10 flex-shrink-0 flex-grow-0"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <rect x="0.5" width={40} height={40} rx={20} fill="#45B36B" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.5 12C18.5478 12 16.7482 12.161 15.3037 12.3518C14.0037 12.5235 13.0235 13.5037 12.8518 14.8037C12.661 16.2482 12.5 18.0478 12.5 20C12.5 21.9522 12.661 23.7518 12.8518 25.1963C13.0235 26.4963 14.0037 27.4765 15.3037 27.6482C16.7482 27.839 18.5478 28 20.5 28C22.4522 28 24.2518 27.839 25.6963 27.6482C26.9963 27.4765 27.9765 26.4963 28.1482 25.1963C28.339 23.7518 28.5 21.9522 28.5 20C28.5 18.0478 28.339 16.2482 28.1482 14.8037C27.9765 13.5037 26.9963 12.5235 25.6963 12.3518C24.2518 12.161 22.4522 12 20.5 12ZM15.0418 10.369C12.845 10.6591 11.1591 12.345 10.869 14.5418C10.6695 16.0521 10.5 17.9413 10.5 20C10.5 22.0587 10.6695 23.9479 10.869 25.4582C11.1591 27.655 12.845 29.3409 15.0418 29.631C16.5521 29.8305 18.4413 30 20.5 30C22.5587 30 24.4479 29.8305 25.9582 29.631C28.155 29.3409 29.8409 27.655 30.131 25.4582C30.3305 23.9479 30.5 22.0587 30.5 20C30.5 17.9413 30.3305 16.0521 30.131 14.5418C29.8409 12.345 28.155 10.6591 25.9582 10.369C24.4479 10.1695 22.5587 10 20.5 10C18.4413 10 16.5521 10.1695 15.0418 10.369Z"
                        fill="#FCFCFD"
                    />
                </svg>
            </div>
            <div className="inline-flex flex-col items-start justify-start">
                <p className="text-xs leading-tight text-gray-500">Instant price</p>
                <p className="text-sm font-medium leading-normal text-gray-50">{instantPrice}</p>
            </div>
        </div>
    )
}

InstantPrice.defaultProps = {
    instantPrice: 'instantPrice',
}
