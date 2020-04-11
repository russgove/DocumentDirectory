import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import {
    SwatchColorPicker,
    PrimaryButton,
    Button,
    DialogFooter,
    DialogContent,
    IColor
} from 'office-ui-fabric-react';


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
     
        this._pickedColor = color.str;
    }
    constructor(props) {

        super(props);
        this._pickedColor = props.defaultColor || '#FFFFFF';
  
    }
    public render() {
        // move thse to a custom list somwhere
        const colorCellsExample2 = [
            { id: 'Blue', label: 'Blue', color: '#0F206C' },
            { id: 'Green', label: 'Green', color: '#79BC00' },
            { id: 'Slate', label: 'Slate', color: '#667D82' },
            { id: 'Gray', label: 'Gray', color: '#B7C8C8' },
            { id: 'Turquoise', label: 'Turquoise', color: '#3DC2E8' },
            { id: 'Periwinkle', label: 'Periwinkle', color: '#618CC9' },
            { id: 'Purple', label: 'Purple', color: '#8379B8' },
            { id: 'Fuchia', label: 'Fuchia', color: '#E64097' },
            { id: 'Orange', label: 'Orange', color: '#F36C31' },
            { id: 'Yellow', label: 'Yellow', color: '#F8E816' },
            { id: 'Black', label: 'Black', color: '#000000' },
            { id: 'White', label: 'White', color: '#FFFFFF' },
        ];
     
        return <DialogContent
            title='Tile Color'
            subText={this.props.message}
            onDismiss={this.props.close}
            showCloseButton={true}
        >
            <SwatchColorPicker
                selectedId={this._pickedColor}
                columnCount={4}
                cellShape={'circle'}
                cellHeight={35}
                cellWidth={35}
                cellBorderWidth={3}
                colorCells={colorCellsExample2}
                onColorChanged={(id?: string, color?: string) => {
                    this.props.submit(color);
                }}

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

