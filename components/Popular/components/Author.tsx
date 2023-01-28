import { AuthorProps } from 'types'
import { FC } from 'react'
import { Tooltip } from 'components'

export const Author: FC<AuthorProps> = ({ author }) => {
    return (
        <div className="inline-flex flex-col items-start justify-start">
            <p className="text-xs leading-tight text-gray-500">Creator</p>
            <Tooltip text={author} position={'top'}>
                <p className="w-24 truncate overflow-ellipsis text-sm font-medium leading-normal text-gray-50">
                    {author}
                </p>
            </Tooltip>
        </div>
    )
}

Author.defaultProps = {
    author: 'author',
}
