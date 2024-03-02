import UseAnimations from 'react-useanimations'
import loading from 'react-useanimations/lib/loading'

interface LoadingTypes {
    size?: number
    strokeColor?: string
}

export function Loading({ size, strokeColor }: LoadingTypes) {
    return (
        <div className="flex h-screen w-full items-center justify-center ">
            <UseAnimations animation={loading} size={size} strokeColor={strokeColor} className="mx-auto" />
        </div>
    )
}

Loading.defaultProps = {
    size: 48,
    strokeColor: 'blue',
}
