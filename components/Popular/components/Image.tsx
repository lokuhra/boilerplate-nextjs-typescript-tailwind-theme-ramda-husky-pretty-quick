import { FC } from 'react'
import { ImageProps } from 'types'

export const Image: FC<ImageProps> = ({ image2x }) => {
    return <img className="flex h-[800px] w-[640px] items-center justify-start rounded-2xl " src={image2x} />
}

Image.defaultProps = {
    image2x: 'image2x',
}
