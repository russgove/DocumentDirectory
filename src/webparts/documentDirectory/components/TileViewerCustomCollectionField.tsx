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
}
export interface ITileViewerCustomCollectionFieldState {
}
export class TileViewerCustomCollectionField extends React.Component<ITileViewerCustomCollectionFieldProps, ITileViewerCustomCollectionFieldState>{
    constructor(props) {
        super(props);

    }
    public render() {
debugger;
        return (
            <div className={styles.documentDirectory}>
            <Tile
                tile={this.props.tile}
                tileWidth={this.props.tileWidth}
                tileHeight={this.props.tileHeight}
                textFontSize={this.props.textFontSize}
                hovertextFontSize={this.props.hovertextFontSize}
          
          />
          </div>
        );


    }
}


