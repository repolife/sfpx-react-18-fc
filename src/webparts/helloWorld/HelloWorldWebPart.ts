import * as React from "react";
import { createElement } from "react";
import { render } from "react-dom";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { HelloWorld } from "./components/HelloWorld";
import "@pnp/sp/webs";
import { getSP } from "../pnpjsConfig";
import "../../dist/main.css";
import {
  QueryClientProvider,
  QueryClient,
  QueryClientProviderProps,
} from "react-query";

export interface IHelloWorldWebPartProps {
  description: string;
}
const queryClient = new QueryClient();

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    const element: React.ReactElement<QueryClientProviderProps> = createElement(
      QueryClientProvider,
      { client: queryClient },
      createElement(HelloWorld),
    );

    render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
    getSP(this.context);
  }
}
