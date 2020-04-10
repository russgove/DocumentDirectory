import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import {
    SwatchColorPicker,
    PrimaryButton,
    Button,
    DialogFooter,
    DialogContent,
    IColor
} from 'office-ui-fabric-react';



import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';

export interface IPopupSwatchColorPickerProps {
    message: string;
    close: () => void;
    submit: (color: string) => void;
    defaultColor?: string;
}
export interface IPopupSwatchColorPickerState {
    showColorPicker: boolean;
    newColor: string;
}
export class PopupSwatchColorPicker extends React.Component<IPopupSwatchColorPickerProps, IPopupSwatchColorPickerState>{
    private _pickedColor: string;

    private _onColorChange = (ev: React.SyntheticEvent<HTMLElement, Event>, color: IColor) => {
        debugger;
        this._pickedColor = color.str;
    }
    constructor(props) {

        super(props);
        this._pickedColor = props.defaultColor || '#FFFFFF';
        debugger;
    }
    public render() {
        const colorCellsExample2 = [
            { id: 'a', label: 'Slate', color: '#667D82' },
            { id: 'b', label: 'Gray', color: '#B7C8C8' },
            { id: 'c', label: 'Turquoise', color: '#3DC2E8' },
            { id: 'd', label: 'Periwinkle', color: '#618CC9' },
            { id: 'e', label: 'Purple', color: '#8379B8' },
            { id: 'f', label: 'Fuchia', color: '#E64097' },
            { id: 'g', label: 'Orange', color: '#F36C31' },
            { id: 'h', label: 'Yellow', color: '#F8E816' },
            { id: 'i', label: 'Blue', color: '#0F206C' },
            { id: 'j', label: 'Green', color: '#79BC00' },
            { id: 'k', label: 'Black', color: '#000000' },
            { id: 'l', label: 'White', color: '#FFFFFF' },
        ];
        debugger;
        return <DialogContent
            title='Tile Color'
            subText={this.props.message}
            onDismiss={this.props.close}
            showCloseButton={true}
        >
            <SwatchColorPicker
                selectedId={this._pickedColor}
                // tslint:disable:jsx-no-lambda
                onCellHovered={(id, color) => this.setState({ newColor: color! })}
                onCellFocused={(id, color) => this.setState({ newColor: color! })}
                // tslint:enable:jsx-no-lambda
                columnCount={4}
                cellShape={'circle'}
                cellHeight={35}
                cellWidth={35}
                cellBorderWidth={3}
                colorCells={colorCellsExample2}
                onColorChanged={(id?: string, color?: string) => {this.props.submit(color)}}
                
            />

            <DialogFooter>
                <Button text='Cancel' title='Cancel' onClick={this.props.close} />
                <PrimaryButton text='OK' title='OK' onClick={() => { this.props.submit(this._pickedColor); }} />
            </DialogFooter>
        </DialogContent>;
    }
}
export default class SwatchColorPickerDialog extends BaseDialog {
    public message: string;
    public colorCode: string;

    public render() {
        debugger;
        ReactDOM.render(<PopupSwatchColorPicker
            close={this.close}
            message={this.message}
            defaultColor={this.colorCode}
            submit={this._submit}
        />, this.domElement);
    }

    public getConfig(): IDialogConfiguration {
        return {
            isBlocking: false
        };
    }

    protected onAfterClose(): void {
        super.onAfterClose();

        // Clean up the element for the next dialog
        ReactDOM.unmountComponentAtNode(this.domElement);
    }

    private _submit = (color: string) => {
        this.colorCode = color;
        this.close();
    }
}

