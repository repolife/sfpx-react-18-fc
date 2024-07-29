import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import "@pnp/sp/webs";
export interface IHelloWorldWebPartProps {
    description: string;
}
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
    render(): void;
    protected onInit(): Promise<void>;
}
//# sourceMappingURL=HelloWorldWebPart.d.ts.map