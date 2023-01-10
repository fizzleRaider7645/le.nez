export interface DropDownMenuProps {
    showDropdown: boolean
    setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SelectionOption {
    route: string
    text: string
}