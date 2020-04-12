import * as React from 'react';
import styles from './DocumentDirectory.module.scss';
import { IDocumentDirectoryProps } from './IDocumentDirectoryProps';
import { Tile } from "./Tile";

export default class DocumentDirectory extends React.Component<IDocumentDirectoryProps, {}> {
  public render(): React.ReactElement<IDocumentDirectoryProps> {
    const tiles = [];

    for (const propTile of this.props.tiles) {
      if (!propTile.isDisabled)
      tiles.push(<Tile  
        tile={propTile} 
        tileHeight={this.props.tileHeight} 
        tileWidth={this.props.tileWidth}
        textFontSize={this.props.textFontSize}
        hovertextFontSize={this.props.hovertextFontSize}
        iconSize={this.props.iconSize}
        />);
    }
  
    return (
      <div className={styles.documentDirectory}>
      
        {tiles}

      </div>
    );
  }
}
