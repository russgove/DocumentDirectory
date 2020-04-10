import * as React from "react";

import { CSSTransition } from 'react-transition-group';
import styles from "./DocumentDirectory.module.scss";
export interface IHoverCardProps {
    isHovered: boolean;
    hoverText: string;
    textColor:string;
    tileWidth:number;
}
export class HoverCard extends React.Component<IHoverCardProps, {}>{
    public render() {
        const hoverStyle={
            transform:   this.props.isHovered ? 'translateX(0px)' : `translateX(-${this.props.tileWidth}px)`
        }
        
        this.props.isHovered ? 'transform: translateX(0px);' : `transform: translateX(-${this.props.tileWidth}px);`;
        console.log(hoverStyle);
        return (
            <div className={styles.hoverCard} style={hoverStyle} >
                <span style={{color:this.props.textColor}} > {this.props.hoverText} </span>
            </div>);
    }
}