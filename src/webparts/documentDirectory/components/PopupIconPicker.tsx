import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Dialog, BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import {
    DialogFooter,
    DialogContent,
    DialogType

} from 'office-ui-fabric-react/lib/Dialog';
import {
    Icon

} from 'office-ui-fabric-react/lib/Icon';

import {
    PrimaryButton,
    Button,

} from 'office-ui-fabric-react/lib/Button';
import { SearchBox, } from 'office-ui-fabric-react/lib/SearchBox';


import iconNames from "../../IconNames";
import styles from './DocumentDirectory.module.scss';
import { Label } from 'office-ui-fabric-react';



export interface IPopupIconPickerProps {
    message: string;
    close: () => void;
    submit: (icon: string) => void;
    iconName?: string;
}
export interface IPopupIconPickerState {
    showIconPicker: boolean;
    newIcon: string;
    iconNames: Array<string>;
    searchText: string;

}
export class PopupIconPicker extends React.Component<IPopupIconPickerProps, IPopupIconPickerState>{
    private _pickedIcon: string;
    private allIconNames = iconNames.map((i) => { return i.name; });

    constructor(props) {

        super(props);
        this._pickedIcon = props.defaultIcon || '';

    }
    public componentDidMount() {
        this.setState({ iconNames: this.allIconNames, searchText: "" });
    }
    private onChange = (_event?: React.ChangeEvent<HTMLInputElement>, newValue?: string): void => {
        debugger;
        this.setState({ searchText: newValue })
        let items: string[];
        if (newValue.length > 2) {
            items = this.allIconNames.filter(item => {
                return item.toLocaleLowerCase().indexOf(newValue.toLocaleLowerCase()) !== -1;
            });
        } else {
            items = this.allIconNames;
        }
        this.setState({
            iconNames: items
        });
    }

    private RenderIcon(iconName: string): JSX.Element {

        return (
            <li>
                <div
                    className={styles.iconListItem}
                    key={iconName}
                    data-iconname={iconName}
                    onClick={(e) => {
                        debugger;
                        this.setState({ newIcon: e.target['dataset'].iconName });// gotta fix this
                        this.props.submit(e.target['dataset'].iconName);
                    }}>
                    <Icon iconName={iconName} className={styles.icon} ></Icon>
                    {iconName}
                </div>
            </li>
        );

    }

    public render() {
        debugger;
        return (<div>
            <DialogContent

                title="Tile Icon"
                subText={this.props.message}
                onDismiss={this.props.close}
                showCloseButton={true}        >
                <div className={styles.popupIconPicker}>
                    <div className={styles.iconListDiv}>
                        <ul className={styles.iconlist}>
                            {this.state ? this.state.iconNames.map((icon) => { return this.RenderIcon(icon); }) : null}
                        </ul>
                    </div>
                </div>

                <DialogFooter>
                    {/* <Label>Current Icon</Label>
                    <Icon iconName={this.props.iconName}></Icon> */}
                    <Button text='Remove Icon' title='Remove' onClick={() => { this.props.submit(""); }} />
                    <Button text='Cancel' title='Cancel' onClick={this.props.close} />
                    <PrimaryButton text='OK' title='OK' onClick={() => { this.props.submit(this._pickedIcon); }} />
                </DialogFooter>
            </DialogContent>
        </div>);
    }
}
export default class IconPickerDialog extends BaseDialog {
    public message: string;
    public iconName: string;

    public render() {
        debugger;
        ReactDOM.render(<PopupIconPicker

            close={this.close}
            message={this.message}
            iconName={this.iconName}
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

    private _submit = (iconName: string) => {
        this.iconName = iconName;
        this.close();
    }
}

