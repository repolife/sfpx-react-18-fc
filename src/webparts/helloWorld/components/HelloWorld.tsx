import * as React from "react";
import styles from "./HelloWorld.module.scss";
import { escape } from "@microsoft/sp-lodash-subset";
import * as Fabric from "@fluentui/react";
import { useEffect } from "react";
import { getSP } from "../../pnpjsConfig";

export namespace HelloWorld {
  export interface Props {
    description: string;
    isDarkTheme: boolean;
    environmentMessage: string;
    hasTeamsContext: boolean;
    userDisplayName: string;
  }
}
export function HelloWorld(props: HelloWorld.Props) {
  const _sp = getSP();
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await _sp.web.lists
          .getByTitle("Announcements")
          .items();
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchList();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <span className={styles.title}>Welcome to SharePoint!</span>
          <p>Customize SharePoint experiences using Web Parts.</p>
          <p>{escape(props.description)}</p>
          <Fabric.PrimaryButton href="https://aka.ms/spfx">
            Learn something
          </Fabric.PrimaryButton>
        </div>
      </div>
    </div>
  );
}
