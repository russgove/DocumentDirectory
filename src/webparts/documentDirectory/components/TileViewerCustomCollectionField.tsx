import * as React from 'react';
import styles from './DocumentDirectory.module.scss';
import { ITile } from "../ITile";
import { Tile } from "./Tile";
export interface ITileViewerCustomCollectionFieldProps {
    tile: ITile;
    tileWidth: number;
    tileHeight: number;
    textFontSize: number;
    hovertextFontSize: number;
    iconSize:number;
}
export interface ITileViewerCustomCollectionFieldState {
}
export class TileViewerCustomCollectionField extends React.Component<ITileViewerCustomCollectionFieldProps, ITileViewerCustomCollectionFieldState>{
    constructor(props) {
        super(props);

    }
    public render() {
        let singleColumnTile= this.props.tile;
        singleColumnTile.columns=1;
        return (
            <div className={styles.documentDirectory} style={{width:`${this.props.tileWidth}px`,height:`${this.props.tileHeight}px`}}>
            <Tile
                tile={singleColumnTile}
                tileWidth={this.props.tileWidth}
                tileHeight={this.props.tileHeight}
                textFontSize={this.props.textFontSize}
                hovertextFontSize={this.props.hovertextFontSize}
                iconSize={this.props.iconSize}
          
          />
          </div>
        );


    }
}


