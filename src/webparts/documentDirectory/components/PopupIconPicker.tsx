import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import {
    PrimaryButton,
    Button,
    DialogFooter,
    DialogContent, Icon, List

} from 'office-ui-fabric-react';

import iconNames from "../../IconNames";
import styles from './DocumentDirectory.module.scss';
import * as _ from "lodash";


export interface IPopupIconPickerProps {
    message: string;
    close: () => void;
    submit: (icon: string) => void;
    defaultIcon?: string;
}
export interface IPopupIconPickerState {
    showIconPicker: boolean;
    newIcon: string;
}
export class PopupIconPicker extends React.Component<IPopupIconPickerProps, IPopupIconPickerState>{
    private _pickedIcon: string;

    private _oniconChange = (ev: React.SyntheticEvent<HTMLElement, Event>, icon: string) => {
        debugger;
        this._pickedIcon = icon;
    }
    constructor(props) {

        super(props);
        this._pickedIcon = props.defaultIcon || '';
    }

    private getIconListItems() {
        debugger;
        let listItems: Array<any> = [];
        let myIcons:Array<string>=iconNames.map((i)=>{return i.name;});
        let uniqIcons=_.sortedUniq(myIcons);
        

      
debugger;
        let rowCount = 0;
        for (let idx = 0; idx < iconNames.length; idx += 4) {

            listItems.push(
                {
                    key: rowCount++,
                    "icon1": iconNames[idx].name,
                    "icon2": idx + 2 < iconNames.length ? iconNames[idx + 2].name : null,
                    "icon3": idx + 3 < iconNames.length ? iconNames[idx + 3].name : null,
                    "icon4": idx + 4 < iconNames.length ? iconNames[idx + 4].name : null,

                }

            );
        }
        return listItems;
    }
    private RenderIcon(iconName: string): JSX.Element {

        return (
            <li>
            <div 
            className={styles.iconListItem}
             key={iconName}
             data-iconname={iconName}
              onClick={(e)=>{
                debugger;
                this.setState({newIcon:e.target['dataset'].iconName});// gotta fix this
                this.props.submit(e.target['dataset'].iconName);
            }}>
                <Icon iconName={iconName} className={styles.icon} ></Icon>
                {iconName}
            </div>
            </li>
        );

    }

    public render() {

        return <DialogContent
            title='Tile Icon'
            subText={this.props.message}
            onDismiss={this.props.close}
            showCloseButton={true}
        >
            <div className={styles.popupIconPicker}>
                <div className={styles.iconListDiv}>
                <ul className={styles.iconlist}>
{iconNames.map((icon)=>{return this.RenderIcon(icon.name);})}
                </ul>
                </div>
            </div>

            <DialogFooter>
                <Button text='Remove Icon' title='Remove' onClick={() => { this.props.submit(""); }} />
                <Button text='Cancel' title='Cancel' onClick={this.props.close} />
                <PrimaryButton text='OK' title='OK' onClick={() => { this.props.submit(this._pickedIcon); }} />
            </DialogFooter>
        </DialogContent>;
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
            defaultIcon={this.iconName}
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

