import { FC } from 'react'

export const Search: FC = () => {
    return (
        <>
            <div className="inline-flex flex-col items-start justify-start space-y-8 pb-10">
                <div className="relative w-full items-center justify-between ">
                    <input
                        className="order-2 w-[95%] rounded bg-transparent text-2xl leading-loose text-gray-50 placeholder:text-gray-50"
                        placeholder="Type to find something nice... "
                    />
                    <div className="absolute inset-y-0 right-24 flex items-center justify-center rounded-full bg-blue-500 p-4">
                        <svg
                            className="h-4 w-4 text-white "
                            width={12}
                            height={12}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" /> <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
