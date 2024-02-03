export type LinkType = {
    id:String | number | symbol
    address:String,
    platform: {
        icon:any,
        name:String
    }
}

export type ThemePouriaType = {
      background: String | object,
      primary:String,
      secondary:String
}

export interface AppContextType{
    theme: object,
    changeTheme: (item:ThemePouriaType) => void,
    items:LinkType[],
    removeItem : (item:LinkType) => void,
    addItem : (item:LinkType) => void,
    updateItem : (item:LinkType) => void,
}