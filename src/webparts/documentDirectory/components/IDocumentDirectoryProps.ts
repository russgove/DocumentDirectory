import  {ITile} from "../ITile";
export interface IDocumentDirectoryProps {
  description: string;
  tiles:Array<ITile>;
  tileWidth:number;
  tileHeight:number;
  textFontSize:number;
  hovertextFontSize:number;
  iconSize:number;
}
