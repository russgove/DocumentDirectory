import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import ColorPickerDialog from './PopupColorPicker';
import { IColor } from 'office-ui-fabric-react';


import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import { ColorPicker } from "office-ui-fabric-react";
export interface IColorPickerCustomCollectionFieldProps {
    initialColor: string;
    itemId: string;
    updateColor: (newColor: string) => void;
}
export interface IColorPickerCustomCollectionFieldState {
    showColorPicker: boolean;
    newColor: string;
}
export class ColorPickerCustomCollectionField extends React.Component<IColorPickerCustomCollectionFieldProps, IColorPickerCustomCollectionFieldState>{
    constructor(props) {
        super(props);
        this.state = { showColorPicker: false, newColor: this.props.initialColor };
    }
    public render() {

        return (
            <div>
                <button style={{ color: "White", backgroundColor: this.state.newColor }}
                    onClick={(e) => {
                        debugger;
                        this.setState({ showColorPicker: true });
                        const dialog: ColorPickerDialog = new ColorPickerDialog();
                        dialog.message = 'Select a new color for this tile';
                        dialog.colorCode = this.state.newColor;
                        dialog.show().then(() => {
                            this.setState((current) => ({ ...current, newColor:dialog.colorCode}));
                            this.props.updateColor(this.state.newColor);
                          
                        });
                    }
                    }> Change Color</button>

            </div>
        );


    }
}


