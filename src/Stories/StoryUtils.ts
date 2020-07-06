

/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
import { action } from "@storybook/addon-actions";
import delay from "../helpers/PromiseUtils";

export default function actionWithDelay(name: string, timeout: number): (...args: unknown[]) => Promise<void> {
  return async (...args: unknown[]) => {
    action(name)(...args);
    await delay(timeout);
  };
}