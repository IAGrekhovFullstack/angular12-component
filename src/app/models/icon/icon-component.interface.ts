import { IMapColumn } from "../grid-text/grid-text-component.interface"

export interface IIconInputData {
    iconName: string
    iconSize: string
    iconColor: string
    backgroundColor: string
    tooltip?: string
    gridDataCells?: any
    gridDataColumn?: IMapColumn[]
}

export interface IIconProperties {
    color: string
    fontSize: string
    backgroundColor: string
}