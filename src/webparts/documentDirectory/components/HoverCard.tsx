import * as React from "react";

import { CSSTransition } from 'react-transition-group';
import styles from "./DocumentDirectory.module.scss";
export interface IHoverCardProps {
    isHovered: boolean;
    hoverText: string;
    textColor:string;
}
export class HoverCard extends React.Component<IHoverCardProps, {}>{
    public render() {
        let className = styles.hoverCard + (this.props.isHovered ? ' ' + styles.slideIn : '');
        console.log(className);
        return (
            <div className={className} >
                <span style={{color:this.props.textColor}} > {this.props.hoverText} </span>
            </div>);
    }
}