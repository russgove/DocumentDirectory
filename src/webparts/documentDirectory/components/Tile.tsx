import * as React from "react";
import { ITile } from "../ITile";
import styles from "./DocumentDirectory.module.scss";
import { HoverCard } from "./HoverCard";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
export interface ITileProps {
    tile: ITile;
    tileWidth: number;
    tileHeight: number;
    textFontSize: number;
    hovertextFontSize: number;
    iconSize:number;
}
export interface ITileState {
    isHovered: boolean;

}
export class Tile extends React.Component<ITileProps, ITileState>{
    constructor(props) {
        super(props);
        this.state = { isHovered: false };
    }
    public render() {
        const effectiveTileWidth=this.props.tile.columns?this.props.tileWidth*this.props.tile.columns:this.props.tileWidth;
        return (
            <a href={this.props.tile.url}  className={styles.tileAnchor}>
                <div className={styles.tile} style={{ width: effectiveTileWidth, height: this.props.tileHeight, backgroundColor: this.props.tile.color }}
                    onMouseOver={(e) => { this.setState({ isHovered: true }); }}
                    onMouseOut={(e) => { this.setState({ isHovered: false }); }} >
                    <HoverCard hoverTextFontSize={this.props.hovertextFontSize} tileWidth={effectiveTileWidth} isHovered={this.state.isHovered} hoverText={this.props.tile.hoverText} textColor={this.props.tile.textColor} />
                    <Icon iconName={this.props.tile.iconName} style={                       {
                        paddingTop:`${this.props.tileHeight/2-this.props.iconSize/2}px`,
                         color: this.props.tile.textColor,
                         fontSize:`${this.props.iconSize}px`,
                        }
                         }  />
                    <span className={styles.tileLabel} style={{ color: this.props.tile.textColor,fontSize:this.props.textFontSize }} > {this.props.tile.text} </span>

                </div>
            </a>
        );
    }
}

