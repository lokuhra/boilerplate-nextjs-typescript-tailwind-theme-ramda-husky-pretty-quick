import { FC } from 'react'

const NavBar: FC = () => {
    return (
        <header className="inline-flex w-full flex-col items-start justify-start border-b-[1px] border-gray-500 bg-[#141416]">
            <div className="inline-flex w-full items-center justify-between space-x-40 px-40 py-5">
                <div className="flex items-center justify-start space-x-8 ">
                    <div className="flex items-center justify-start space-x-2">
                        <div className="h-full w-8">
                            <img className="h-full flex-1 rounded-lg" src="https://i.ibb.co/NTQxPMc/Frame.png" />
                        </div>
                        <p className="border-r-[1px] border-gray-500 pr-8 text-2xl font-semibold leading-loose text-gray-100">
                            NFPaisanos
                        </p>
                    </div>

                    <p className="text-center text-sm font-bold leading-none text-gray-500">Discover</p>
                    <p className="text-center text-sm font-bold leading-none text-gray-500">What we do</p>
                </div>
                <div className="flex items-center justify-center rounded-full border-2 border-gray-500 px-4 py-3">
                    <p className="text-center text-sm font-bold leading-none text-gray-50">Connect Wallet</p>
                </div>
            </div>
            {/* <img className="rounded-full" src="https://via.placeholder.com/1440x1" /> */}
        </header>
    )
}

export default NavBar
