import { FC } from 'react'

const Footer: FC = () => {
    return (
        <footer className="inline-flex w-full flex-col items-center justify-start">
            <div className="flex w-full flex-col items-center justify-end border-t-[1px] border-gray-500 bg-[#141416] px-40 pt-20 ">
                <div className="flex w-full flex-col items-start justify-center space-y-12">
                    <div className="inline-flex w-full items-center justify-center space-x-2.5">
                        <div className="inline-flex flex-col items-center justify-center space-y-5">
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center justify-start space-x-2">
                                    <div className="h-full w-8">
                                        <img
                                            className="h-full flex-1 rounded-lg"
                                            src="https://i.ibb.co/NTQxPMc/Frame.png"
                                        />
                                    </div>
                                    <p className="border-gray-500 pr-8 text-2xl font-semibold leading-loose text-gray-100">
                                        NFPaisanos
                                    </p>
                                </div>
                            </div>
                            <p className="text-center text-2xl leading-loose text-gray-200">
                                The New Creative Economy.
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start justify-center space-y-8 pb-8">
                        <div className="inline-flex w-full items-start justify-center">
                            <p className="text-xs leading-tight text-gray-500">Created with ❤ by Leandro Bernardi </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
