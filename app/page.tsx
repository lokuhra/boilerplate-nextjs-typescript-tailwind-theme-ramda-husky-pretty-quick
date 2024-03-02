import { ChangeTheme } from 'features'

export default function Page() {
    return (
        <>
            <ChangeTheme />
            <input type="checkbox" value="synthwave" className="theme-controller toggle" />
        </>
    )
}
