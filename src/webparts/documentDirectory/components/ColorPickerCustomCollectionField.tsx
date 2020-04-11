import * as React from 'react';
import styles from './DocumentDirectory.module.scss';
import ColorPickerDialog from './PopupColorPicker';
import SwatchColorPickerDialog from './PopupSwatchColorPicker';
import { Icon, Button, ActionButton, CommandButton } from 'office-ui-fabric-react';
export interface IColorPickerCustomCollectionFieldProps {
    initialColor: string;
    itemId: string;
    updateColor: (newColor: string) => void;
    textColor: string;
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
            <div className={styles.ColorPickerCustomCollectionField}>
                <ActionButton
                    onClick={(e) => {

                        this.setState({ showColorPicker: true });
                        const dialog: SwatchColorPickerDialog = new SwatchColorPickerDialog();
                        dialog.message = 'Select a new color for this tile';
                        dialog.colorCode = this.state.newColor;
                        dialog.show().then(() => {
                            this.setState((current) => ({ ...current, newColor: dialog.colorCode }));
                            this.props.updateColor(this.state.newColor);

                        });
                    }
                    }>Standard
                    </ActionButton>
                <br />
                <CommandButton

                    onClick={(e) => {
                        debugger;
                        this.setState({ showColorPicker: true });
                        let cstmdialog: ColorPickerDialog = new ColorPickerDialog();
                        cstmdialog.message = 'Select a new color for this tile';
                        cstmdialog.colorCode = this.state.newColor;
                        cstmdialog.show().then(() => {
                            this.setState((current) => ({ ...current, newColor: cstmdialog.colorCode }));
                            this.props.updateColor(this.state.newColor);

                        });
                    }
                    }>Custom
                    </CommandButton>

            </div>
        );


    }
}


