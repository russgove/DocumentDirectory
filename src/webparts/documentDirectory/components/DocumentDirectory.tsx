import * as React from 'react';
import styles from './DocumentDirectory.module.scss';
import { IDocumentDirectoryProps } from './IDocumentDirectoryProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Tile, ITileProps } from "./Tile";

export default class DocumentDirectory extends React.Component<IDocumentDirectoryProps, {}> {
  public render(): React.ReactElement<IDocumentDirectoryProps> {
    const tiles = [];
debugger;
    for (const propTile of this.props.tiles) {
      if (!propTile.isDisabled)
      tiles.push(<Tile  tile={propTile} tileHeight={this.props.tileHeight} tileWidth={this.props.tileWidth}/>);
    }
  
    return (
      <div className={styles.documentDirectory}>
       
        {tiles}

      </div>
    );
  }
}
