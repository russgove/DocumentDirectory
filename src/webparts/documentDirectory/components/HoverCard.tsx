import * as React from "react";

import { CSSTransition } from 'react-transition-group';
import styles from "./DocumentDirectory.module.scss";
export interface IHoverCardProps {
    isHovered: boolean;
    hoverText: string
}
export class HoverCard extends React.Component<IHoverCardProps, {}>{
    render() {
        let className = styles.navbar + (this.props.isHovered ? ' ' + styles.slideIn : '');
        console.log(className);
        return (
            <div className={className} >
                {this.props.hoverText}
            </div>);
    };
};