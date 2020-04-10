import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { ITile } from "./ITile";
import * as strings from 'DocumentDirectoryWebPartStrings';
import DocumentDirectory from './components/DocumentDirectory';
import { IDocumentDirectoryProps } from './components/IDocumentDirectoryProps';
import { PropertyFieldCollectionData, CustomCollectionFieldType } from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';

import {ColorPickerCustomCollectionField} from "./components/ColorPickerCustomCollectionField";

export interface IDocumentDirectoryWebPartProps {
  description: string;
  tiles: Array<ITile>;
}

export default class DocumentDirectoryWebPart extends BaseClientSideWebPart<IDocumentDirectoryWebPartProps> {

  public render(): void {
    debugger;
    const element: React.ReactElement<IDocumentDirectoryProps> = React.createElement(
      
      DocumentDirectory,
      {
        description: this.properties.description,
        tiles: this.properties.tiles

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
  protected onPropertyPaneFieldChanged(property: string) {


    debugger;
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
                PropertyFieldCollectionData("tiles", {
                  key: "collectionDates",
                  label: "Tiles to Display",
                  panelHeader: "panel Header Tiles to Display",
                  panelDescription: "Panel description",
                  manageBtnLabel: "Manage Tiles",
                  saveBtnLabel: "Save Tiles",

                  enableSorting: true,


                  value: this.properties.tiles,
                  fields: [
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
                              updateColor: (color:string) => {
                                debugger;
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
                      options:[
                        {key:"#FFFFFF",text:"White"},
                        {key:"#000000",text:"Black"}
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
