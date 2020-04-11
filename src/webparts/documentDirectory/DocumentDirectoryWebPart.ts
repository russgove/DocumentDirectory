import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import styles from './components/DocumentDirectory.module.scss';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField, PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ITile } from "./ITile";
import * as strings from 'DocumentDirectoryWebPartStrings';
import DocumentDirectory from './components/DocumentDirectory';
import { IDocumentDirectoryProps } from './components/IDocumentDirectoryProps';
import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';

import { ColorPickerCustomCollectionField } from "./components/ColorPickerCustomCollectionField";
import { IconPickerCustomCollectionField } from "./components/IconPickerCustomCollectionField";
import { TileViewerCustomCollectionField } from "./components/TileViewerCustomCollectionField";

export interface IDocumentDirectoryWebPartProps {
  description: string;
  tiles: Array<ITile>;
  tileWidth: number;
  tileHeight: number;
  textFontSize: number;
  hovertextFontSize: number;

}

export default class DocumentDirectoryWebPart extends BaseClientSideWebPart<IDocumentDirectoryWebPartProps> {

  public render(): void {

    const element: React.ReactElement<IDocumentDirectoryProps> = React.createElement(

      DocumentDirectory,
      {
        description: this.properties.description,
        tiles: this.properties.tiles,
        tileWidth: this.properties.tileWidth,
        tileHeight: this.properties.tileHeight,
        textFontSize: this.properties.textFontSize,
        hovertextFontSize: this.properties.hovertextFontSize

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneSlider('tileWidth', {
                  min: 50, max: 300, label: strings.TileWidthFieldLabel
                }),
                PropertyPaneSlider('tileHeight', {
                  min: 50, max: 300,
                  label: strings.TileHeightFieldLabel
                }),
                PropertyPaneSlider('textFontSize', {
                  min: 1, max: 30, label: strings.TextFontSizeFieldLabel
                }),
                PropertyPaneSlider('hovertextFontSize', {
                  min: 1, max: 30, label: strings.HoverTextFontSizeFieldLabel
                }),

                PropertyFieldCollectionData("tiles", {
                  key: "collectionDates",
                  label: "Tiles to Display",
                  panelHeader: "Edit Tiles",
                  panelDescription: "Panel description",
                  manageBtnLabel: "Manage Tiles",
                  saveBtnLabel: "Save Tiles",
                  enableSorting: true,
                  value: this.properties.tiles,
                  tableClassName:styles.editPanelTable,
                  
                  fields: [
                    {
                      id: "x",
                      title: "Preview",
                      type: CustomCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {

                        return (
                          React.createElement("div", null,
                            React.createElement(TileViewerCustomCollectionField, {
                              key: itemId,
                              tile: item,
                              tileWidth: this.properties.tileWidth,
                              tileHeight: this.properties.tileHeight,
                              textFontSize: this.properties.textFontSize,
                              hovertextFontSize: this.properties.hovertextFontSize
                            })
                          )
                        );
                      }
                    },
                    {
                      id: "iconName",
                      title: "Icon",
                      type: CustomCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {

                        return (
                          React.createElement("div", null,
                            React.createElement(IconPickerCustomCollectionField, {
                              key: itemId,
                              tile: item,
                              updateIcon: (icon: string) => {
                                onUpdate(field.id, icon);
                              }
                            })
                          )
                        );
                      }
                    },
                    {
                      id: "color",
                      title: "Color",
                      type: CustomCollectionFieldType.custom,
                      onCustomRender: (field, value, onUpdate, item, itemId, onError) => {

                        return (
                          React.createElement("div", null,
                            React.createElement(ColorPickerCustomCollectionField, {
                              key: itemId,
                              initialColor: value,
                              textColor: item.textColor,
                              updateColor: (color: string) => {
                                onUpdate(field.id, color);
                              }
                            })
                          )
                        );
                      }
                    },
                    {
                      id: "url",
                      title: "URL",
                      type: CustomCollectionFieldType.string
                    },
                    {
                      id: "text",
                      title: "Text",
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: "hoverText",
                      title: "Hover Text",
                      type: CustomCollectionFieldType.string,

                      required: true
                    },
                    {
                      id: "isDisabled",
                      title: "Disabled",
                      type: CustomCollectionFieldType.boolean
                    },
                    {
                      id: "textColor",
                      title: "Text Color",
                      type: CustomCollectionFieldType.dropdown,
                      options: [
                        { key: "#FFFFFF", text: "White" },
                        { key: "#000000", text: "Black" }
                      ]
                    }

                  ],
                  disabled: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
