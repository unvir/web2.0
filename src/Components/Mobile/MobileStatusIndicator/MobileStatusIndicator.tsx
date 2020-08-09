
import * as React from "react";
import { Status } from "../../../Domain/Status";
import StatusIndicator from "../../StatusIndicator/StatusIndicator";

type Props = {
  statuses: Array<Status>;
  size: number;
};

export default function MobileStatusIndicator(props: Props): React.ReactNode {
  const {
    statuses,
    size
  } = props;

  return <StatusIndicator size={size} statuses={statuses} />;
}