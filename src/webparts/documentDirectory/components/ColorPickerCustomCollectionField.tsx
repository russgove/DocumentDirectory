import * as React from 'react';
import styles from './DocumentDirectory.module.scss';
import ColorPickerDialog from './PopupColorPicker';
import SwatchColorPickerDialog from './PopupSwatchColorPicker';
import { Icon, Button, ActionButton, CommandButton } from 'office-ui-fabric-react';
export interface IColorPickerCustomCollectionFieldProps {
    initialColor: string;
    updateColor: (newColor: string) => void;
}
export interface IColorPickerCustomCollectionFieldState {
    showColorPicker: boolean;
    
}
export class ColorPickerCustomCollectionField extends React.Component<IColorPickerCustomCollectionFieldProps, IColorPickerCustomCollectionFieldState>{
    constructor(props) {
        super(props);
        this.state = { showColorPicker: false};
    }
    public render() {

        return (
            <div className={styles.ColorPickerCustomCollectionField}>
                <ActionButton
                    onClick={(e) => {

                        this.setState({ showColorPicker: true });
                        const dialog: SwatchColorPickerDialog = new SwatchColorPickerDialog();
                        dialog.message = 'Select a new color for this tile';
                        dialog.colorCode = this.props.initialColor;
                        dialog.show().then(() => {
                            this.props.updateColor(dialog.colorCode);
                        });
                    }
                    }>Standard
                    </ActionButton>
                <br />
                <CommandButton

                    onClick={(e) => {
                        debugger;
                        this.setState({ showColorPicker: true });
                        let clrdialog: ColorPickerDialog = new ColorPickerDialog();
                        clrdialog.message = 'Select a new color for this tile';
                        clrdialog.colorCode = this.props.initialColor;
                        clrdialog.show().then(() => {
                            this.props.updateColor(clrdialog.colorCode);
                        });
                    }
                    }>Custom
                    </CommandButton>

            </div>
        );


    }
}


