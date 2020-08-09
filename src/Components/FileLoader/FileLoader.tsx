
import React from "react";
import { Button } from "@skbkontur/react-ui/components/Button";
import ImportIcon from "@skbkontur/react-icons/Import";
import cn from "./FileLoader.less";

type FileLoaderProps = {
  onLoad: (arg0: string, arg1: string) => void;
  onError: (arg0: string) => void;
  children?: React.ReactNode;
};

export default function FileLoader({
  onLoad,
  onError,
  children
}: FileLoaderProps) {
  const handleFileLoad = (event: React.InputEvent<HTMLInputElement>) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => onLoad(reader.result, file.name);
    reader.onerror = () => onError(reader.error);
    // enable import same file
    // eslint-disable-next-line no-param-reassign
    event.target.value = "";
  };

  return <Button use="link">
            {
      /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
    }
            <label className={cn.label}>
                <input type="file" className={cn.input} onChange={handleFileLoad} accept=".json" />
                <ImportIcon /> {children || "Import"}
            </label>
        </Button>;
}