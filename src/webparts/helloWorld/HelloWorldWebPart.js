import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import HelloWorld from './components/HelloWorld';


export default class HelloWorldWebPart extends BaseClientSideWebPart {

  render() {
    const element = React.createElement(
      HelloWorld,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  onDispose() {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  dataVersion() {
    return Version.parse('1.0');
  }

  getPropertyPaneConfiguration() {
    return {
      pages: [
        {
          header: {
            description: "strings.PropertyPaneDescription"
          },
          groups: [
            {
              groupName: "strings.BasicGroupName",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "strings.DescriptionFieldLabel"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
