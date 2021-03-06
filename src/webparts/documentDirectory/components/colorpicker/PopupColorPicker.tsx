import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';
import { PrimaryButton, Button } from 'office-ui-fabric-react/lib/Button';
import { DialogFooter, DialogContent } from 'office-ui-fabric-react/lib/Dialog';
import { IColor } from 'office-ui-fabric-react/lib/Color';
export interface IPopupColorPickerProps {
    message: string;
    close: () => void;
    submit: (color: string) => void;
    defaultColor?: string;
}
export interface IPopupColorPickerState {
    showColorPicker: boolean;
    newColor: string;
}
export class PopupColorPicker extends React.Component<IPopupColorPickerProps, IPopupColorPickerState>{
    private _pickedColor: string;

    private _onColorChange = (ev: React.SyntheticEvent<HTMLElement, Event>, color: IColor) => {

        this._pickedColor = color.str;
    }
    constructor(props) {

        super(props);
        this._pickedColor = props.defaultColor || '#FFFFFF';

    }
    public render() {

        return <DialogContent
            title='Tile Color'
            subText={this.props.message}
            onDismiss={this.props.close}
            showCloseButton={true}
        >
            <ColorPicker color={this._pickedColor} onChange={this._onColorChange} />
            <DialogFooter>
                <Button text='Cancel' title='Cancel' onClick={this.props.close} />
                <PrimaryButton text='OK' title='OK' onClick={() => { this.props.submit(this._pickedColor); }} />
            </DialogFooter>
        </DialogContent>;
    }
}
export default class ColorPickerDialog extends BaseDialog {
    public message: string;
    public colorCode: string;

    public render() {
        debugger;
        ReactDOM.render(<PopupColorPicker
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

