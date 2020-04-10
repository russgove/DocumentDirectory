import * as React from "react";
import styles from "./DocumentDirectory.module.scss";
export interface IHoverCardProps {
    isHovered: boolean;
    hoverText: string;
    textColor:string;
    tileWidth:number;
    hoverTextFontSize:number;
}
export class HoverCard extends React.Component<IHoverCardProps, {}>{
    public render() {
        debugger;
        const hoverStyle={
            "transform":   this.props.isHovered ? 'translateX(0px)' : `translateX(-${this.props.tileWidth}px)`,
            "fontsize": `${this.props.hoverTextFontSize}`,
            "width":`${this.props.tileWidth}px`
        }
        return (
            <div className={styles.hoverCard} style={hoverStyle} >
                <span style={{color:this.props.textColor, fontSize:this.props.hoverTextFontSize}} > {this.props.hoverText} </span>
            </div>);
    }
}