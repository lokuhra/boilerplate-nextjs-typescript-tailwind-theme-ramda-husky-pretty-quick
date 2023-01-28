export interface ItemProps {
    id?: number
    value: string
    textColor?: string
    icon?: {
        bg: string
        border: string
    }
    clsx?: string
    handleClick?: (value: string) => void
}

export interface DropdownProps {
    items: ItemProps[]
    title: string
}
