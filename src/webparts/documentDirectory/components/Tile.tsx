import * as React from "react";
import  {ITile} from "../ITile";
import styles from "./DocumentDirectory.module.scss";
import { HoverCard, IHoverCardProps } from "./HoverCard";
export interface ITileProps {
    tile: ITile;
}
export interface ITileState {
    isHovered: boolean;

}
export class Tile extends React.Component<ITileProps, ITileState>{
    constructor(props) {
        super(props);
        this.state = { isHovered: false };
    }
    private setIsHovered(newval:boolean){

    }
    public render() {
        return (
            <a href={this.props.tile.url} >
                <div className={styles.tile} style={{ backgroundColor: this.props.tile.color }}
                    onMouseOver={(e) => { this.setState({isHovered:true}); }}
                    onMouseOut={(e) => { this.setState({isHovered:false});  }} >
                    <HoverCard isHovered={this.state.isHovered} hoverText={this.props.tile.hoverText} textColor={this.props.tile.textColor} />
                    <span className={styles.tileLabel} style={{color:this.props.tile.textColor}} > {this.props.tile.text} </span>

                </div>
            </a>
        );
    }
}

