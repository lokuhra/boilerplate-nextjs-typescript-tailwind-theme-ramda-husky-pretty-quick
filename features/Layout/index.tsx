import { FC } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { children } from 'types'

export const Layout: FC<children> = ({ children }): JSX.Element => {
    return (
        <div className="flex min-h-screen w-screen grow flex-col break-all bg-[#141416]">
            <NavBar />
            <div className="container mx-auto flex h-auto grow flex-row bg-[#141416]">{children}</div>
            <Footer />
        </div>
    )
}
