export interface DropDownContextType {
    showDropdown: boolean
    setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SelectionOption {
    route: string
    content: string
}