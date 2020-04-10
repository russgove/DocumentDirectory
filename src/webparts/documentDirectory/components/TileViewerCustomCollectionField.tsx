import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import  {ITile} from "../ITile";
import {Tile} from "./Tile";

import ColorPickerDialog from './PopupColorPicker';
import SwatchColorPickerDialog from './PopupSwatchColorPicker';
import { IColor } from 'office-ui-fabric-react';


import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';

export interface ITileViewerCustomCollectionFieldProps {
    tile: ITile;
    tileWidth:number;
    tileHeight:number;
}
export interface ITileViewerCustomCollectionFieldState {
}
export class TileViewerCustomCollectionField extends React.Component<ITileViewerCustomCollectionFieldProps, ITileViewerCustomCollectionFieldState>{
    constructor(props) {
        super(props);
        
    }
    public render() {

        return (
            <Tile tile={this.props.tile}  tileWidth={this.props.tileWidth} tileHeight={this.props.tileHeight}></Tile>
        );


    }
}


