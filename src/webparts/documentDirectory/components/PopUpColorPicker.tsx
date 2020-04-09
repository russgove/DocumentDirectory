import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';




import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';
import { ColorPicker } from "office-ui-fabric-react";
export interface IPopUpColorPickerProps {
    initialColor:string;
    updateColor:(newColor:string)=>void;
}
export interface IPopUpColorPickerState {
    showColorPicker: boolean;
    newColor:string;
}
export class HoverCard extends React.Component<IPopUpColorPickerProps,IPopUpColorPickerState>{
    constructor(props){
        super(props);
        this.state={showColorPicker:false,newColor:this.props.initialColor}
    }
    render() {
        if (!this.state.showColorPicker){
            return (<div>
                <button onClick={(e)=>{this.setState({showColorPicker:true})}}> Change Color</button>
                <div style={{backgroundColor:this.state.newColor}}> </div>
            </div>)}
            else{
                return (<div>
                    <button> Change Color</button>
                    <div style={{backgroundColor:this.state.newColor}}> </div>
                </div>)}
    
            }
        }
};
