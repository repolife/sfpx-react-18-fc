import * as React from "react";
import { escape } from "@microsoft/sp-lodash-subset";
import * as Fabric from "@fluentui/react";
import { getSP } from "../../pnpjsConfig";
import { useQuery } from "react-query";
import { _SPQueryable } from "@pnp/sp";
import { _Item, _Items } from "@pnp/sp/items/types";
import { _List, _Lists } from "@pnp/sp/lists/types";

export namespace HelloWorld {
  export interface Props {
    description: string;
    isDarkTheme: boolean;
    environmentMessage: string;
    hasTeamsContext: boolean;
    userDisplayName: string;
  }
}

export const HelloWorld = (props: HelloWorld.Props) => {
  const _sp = getSP();

  const { isError, isLoading, data, error } = useQuery({
    queryKey: ["announcements"],
    queryFn: async (): Promise<_Items[]> => {
      const res = await _sp.web.lists.getByTitle("Announcements").items();
      return res;
    },
  });

  if (isLoading) {
    return <span>Loading</span>;
  }
  if (isError) {
    return (
      <span>{error instanceof Error ? error.message : "Something wrong"}</span>
    );
  }
  console.log(data);
  return (
    <div className="flex w-full bg-sky-900">
      <div className="">
        <div className="">
          <span className="text-3xl text-red-500">Welcome to SharePoint!</span>
          <p>Customize SharePoint experiences using Web Parts.</p>
          <p>{escape(props.description)}</p>
          <Fabric.PrimaryButton href="https://aka.ms/spfx">
            Learn something
          </Fabric.PrimaryButton>
        </div>
      </div>
    </div>
  );
};
