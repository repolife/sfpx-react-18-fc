import * as React from "react";
import { createElement } from "react";
import { render } from "react-dom";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { HelloWorld } from "./components/HelloWorld";
import "@pnp/sp/webs";
import { getSP } from "../pnpjsConfig";

export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    const element: React.ReactElement<HelloWorld.Props> =
      createElement(HelloWorld);

    render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
    getSP(this.context);
  }
}
