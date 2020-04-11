import * as React from 'react';

import IconPickerDialog from './PopupIconPicker';
import { Icon,Button } from 'office-ui-fabric-react';

import { ITile } from "../ITile";
import styles from './DocumentDirectory.module.scss';
export interface IIconPickerCustomCollectionFieldProps {
    initialIcon: string;
    itemId: string;
    updateIcon: (newIcon: string) => void;
    textIcon:string;
    tile:ITile;
}
export interface IIconPickerCustomCollectionFieldState {
    showIconPicker: boolean;
    newIcon: string;
}
export class IconPickerCustomCollectionField extends React.Component<IIconPickerCustomCollectionFieldProps, IIconPickerCustomCollectionFieldState>{
    constructor(props) {
        super(props);
        this.state = { showIconPicker: false, newIcon: this.props.initialIcon };
    }
    public render() {

        return (
            <div className={styles.IconPickerCustomCollectionField}>
                <Icon iconName={this.props.tile.iconName}></Icon>
                <br />
                <Button 
                    onClick={(e) => {
                  
                        this.setState({ showIconPicker: true });
                        const dialog: IconPickerDialog = new IconPickerDialog();
                        dialog.message = 'Select a new icon for this tile';
                        dialog.iconName= this.state.newIcon;
                        dialog.show().then(() => {
                            debugger;
                            this.setState((current) => ({ ...current, newIcon:dialog.iconName}));
                            this.props.updateIcon(this.state.newIcon);
                          
                        });
                    }
                    }>Change Icon</Button>
                      

            </div>
        );


    }
}


