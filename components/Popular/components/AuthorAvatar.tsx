import { AuthorAvatarProps } from 'types'
import { FC } from 'react'

export const AuthorAvatar: FC<AuthorAvatarProps> = ({ authorAvatar }) => {
    return (
        <div className="h-10 w-1/4 rounded-full">
            <div className="flex h-full flex-1 items-center justify-center rounded-full bg-gray-300">
                <img className="h-full w-full flex-1" src={authorAvatar} />
            </div>
        </div>
    )
}

AuthorAvatar.defaultProps = {
    authorAvatar: 'authorAvatar',
}
