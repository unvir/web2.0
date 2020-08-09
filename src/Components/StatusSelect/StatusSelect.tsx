
import * as React from "react";
import { Select } from "@skbkontur/react-ui/components/Select";
import StatusIcon from "../StatusIcon/StatusIcon";
import { getStatusCaption, Status } from "../../Domain/Status";
import { RowStack, Fit } from "../ItemsStack/ItemsStack";

type Props = {
  value: Status;
  availableStatuses: Array<Status>;
  onChange: (arg0: Status) => void;
};

function renderItem(value: Status, item: string | null | undefined): React.ReactNode {
  return <RowStack baseline block gap={2}>
            <Fit>
                <StatusIcon status={value} />
            </Fit>
            <Fit>{item}</Fit>
        </RowStack>;
}

export default function StatusSelect(props: Props): React.ReactNode {
  const {
    availableStatuses,
    value,
    onChange
  } = props;

  return <Select width={130} value={value} renderItem={renderItem} renderValue={renderItem} items={availableStatuses.map(x => [x, getStatusCaption(x)])} onValueChange={(v: Status) => onChange(v)} />;
}