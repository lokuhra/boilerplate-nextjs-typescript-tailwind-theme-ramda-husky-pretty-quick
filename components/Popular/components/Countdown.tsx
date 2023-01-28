import { CountdownProps } from 'types'
import { FC } from 'react'
import { useCountdown } from '../hooks'

export const Countdown: FC<CountdownProps> = ({ date }) => {
    const [days, hours, minutes, seconds] = useCountdown(date)
    return (
        <>
            <p className="w-full text-center text-base font-medium leading-normal text-gray-50">Auction ending in</p>
            {days + hours + minutes + seconds >= 0 ? (
                <div className="inline-flex w-full items-center justify-around px-4">
                    <div className="inline-flex  flex-col items-start justify-start">
                        <p className="w-full text-center text-3xl font-bold leading-10 text-gray-50">{days}</p>
                        <p className="w-full text-center text-base font-medium leading-normal text-gray-500">Days</p>
                    </div>
                    <div className="inline-flex  flex-col items-start justify-start">
                        <p className="w-full text-center text-3xl font-bold leading-10 text-gray-50">{hours}</p>
                        <p className="w-full text-center text-base font-medium leading-normal text-gray-500">hrs</p>
                    </div>
                    <div className="inline-flex  flex-col items-start justify-start">
                        <p className="w-full text-center text-3xl font-bold leading-10 text-gray-50">{minutes}</p>
                        <p className="w-full text-center text-base font-medium leading-normal text-gray-500">mins</p>
                    </div>
                    <div className="inline-flex  flex-col items-start justify-start">
                        <p className="w-full text-center text-3xl font-bold leading-10 text-gray-50">{seconds}</p>
                        <p className="w-full text-center text-base font-medium leading-normal text-gray-500">secs</p>
                    </div>
                </div>
            ) : (
                <div className="inline-flex w-full items-center justify-center px-4">
                    <p className="w-full text-center text-3xl font-bold leading-10 text-gray-50">Auction ended</p>
                </div>
            )}
        </>
    )
}

Countdown.defaultProps = {
    date: '2022-08-06T11:42:33.000Z',
}
