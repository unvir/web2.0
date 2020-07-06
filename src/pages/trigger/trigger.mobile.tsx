
import * as React from "react";
import { Trigger, TriggerState } from "../../Domain/Trigger";
import { Maintenance } from "../../Domain/Maintenance";
import MobileTriggerInfoPage from "../../Components/Mobile/MobileTriggerInfoPage/MobileTriggerInfoPage";

type Props = {
  trigger: Trigger | null | undefined;
  state: TriggerState | null | undefined;
  disableThrottling: (id: string) => void;
  setTriggerMaintenance: (id: string, maintenance: Maintenance) => void;
  setMetricMaintenance: (id: string, maintenance: Maintenance, metric: string) => void;
  removeMetric: (id: string, metric: string) => void;
};

export default function TriggerMobile({
  trigger,
  state,
  disableThrottling,
  setTriggerMaintenance,
  setMetricMaintenance,
  removeMetric
}: Props) {
  const {
    metrics
  } = state || {};

  return <MobileTriggerInfoPage data={trigger} triggerState={state} metrics={metrics} onRemoveMetric={metric => removeMetric(trigger ? trigger.id : "", metric)} onThrottlingRemove={() => disableThrottling(trigger ? trigger.id : "")} onSetMetricMaintenance={(metric, maintenance) => setMetricMaintenance(trigger ? trigger.id : "", maintenance, metric)} onSetTriggerMaintenance={maintenance => setTriggerMaintenance(trigger ? trigger.id : "", maintenance)} />;
}