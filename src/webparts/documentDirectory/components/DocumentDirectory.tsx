import * as React from 'react';
import styles from './DocumentDirectory.module.scss';
import { IDocumentDirectoryProps } from './IDocumentDirectoryProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Tile, ITileProps } from "./Tile";

export default class DocumentDirectory extends React.Component<IDocumentDirectoryProps, {}> {
  public render(): React.ReactElement<IDocumentDirectoryProps> {
  
    return (
      <div className={styles.documentDirectory}>
      
          <Tile color="Red" url="www.google.com" text="test 1 " hoverText="Another" />

            {/* <Tile color="Purple" url="www.google.com" text="test 1 " hoverText="Another" />
            <Tile color="Maroon" url="www.google.com" text="testys" hoverText="This is a test" />
            <Tile color="Navy" url="www.google.com" text="test 1 " hoverText="Another" />
            <Tile color="Grey" url="www.google.com" text="testys" hoverText="This is a test" />
            <Tile color="Crimson" url="www.google.com" text="test 1 " hoverText="Another" />
            <Tile color="Olive" url="www.google.com" text="testys" hoverText="This is a test" />
            <Tile color="Red" url="www.google.com" text="test 1 " hoverText="Another" />
            <Tile color="Black" url="www.google.com" text="testys" hoverText="This is a test" /> */}

      </div>
    );
  }
}
