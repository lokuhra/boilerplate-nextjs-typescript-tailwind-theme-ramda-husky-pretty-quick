import { FC } from 'react'

export const Hero: FC = () => {
    return (
        <div className="inline-flex w-full flex-col items-center justify-start bg-[#141416] px-80 pt-32">
            <div className="flex flex-col items-center justify-start space-y-6">
                <div className="flex flex-col items-center justify-start space-y-2">
                    <p className="w-72 text-xs font-bold uppercase leading-3 text-gray-500">
                        Create, explore, &amp; SELL digital art NFTs.
                    </p>
                    <p className="text-center text-4xl font-bold leading-10 text-gray-50">The new creative economy.</p>
                </div>
                <div className="inline-flex items-center justify-center rounded-full border-2 border-gray-500 px-6 py-4">
                    <p className="text-center text-base font-bold leading-none text-gray-50">Explore</p>
                </div>
            </div>
        </div>
    )
}
