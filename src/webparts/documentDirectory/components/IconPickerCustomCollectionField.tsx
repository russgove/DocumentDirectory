import * as React from 'react';

import IconPickerDialog from './PopupIconPicker';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import { ITile } from "../ITile";
import styles from './DocumentDirectory.module.scss';
export interface IIconPickerCustomCollectionFieldProps {

    updateIcon: (newIcon: string) => void;
  
    tile:ITile;
}
export interface IIconPickerCustomCollectionFieldState {
    showIconPicker: boolean;

}
export class IconPickerCustomCollectionField extends React.Component<IIconPickerCustomCollectionFieldProps, IIconPickerCustomCollectionFieldState>{
    constructor(props) {
        super(props);
    }
    public render() {

        return (
            <div className={styles.IconPickerCustomCollectionField}>
                <Icon iconName={this.props.tile.iconName} className={styles.icon}></Icon>
                <br />
                <Button 
                    onClick={(e) => {
                  
                        this.setState({ showIconPicker: true });
                        const dialog: IconPickerDialog = new IconPickerDialog();
                        dialog.message = 'Select a new icon for this tile';
                        dialog.iconName= this.props.tile.iconName;
                        dialog.show().then(() => {
                            debugger;
                            this.props.updateIcon(dialog.iconName);
                          
                        });
                    }
                    }>Change Icon</Button>
                      

            </div>
        );


    }
}


