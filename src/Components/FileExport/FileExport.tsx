import React from "react";
import { saveAs } from "file-saver";
import { Button } from "@skbkontur/react-ui/components/Button";
import ExportIcon from "@skbkontur/react-icons/Export";
import { Subscription } from "../../Domain/Subscription";
import { Contact } from "../../Domain/Contact";
import { Trigger } from "../../Domain/Trigger";

type FileExportProps = {
    title: string;
    data: Partial<Trigger | Subscription | Contact>;
    children?: React.ReactNode;
};

export default function FileExport({ title, data, children }: FileExportProps): React.ReactElement {
    const handleExport = () => {
        const fileData = JSON.stringify(data, undefined, 4);
        const blob = new Blob([fileData], { type: "application/json" });
        saveAs(blob, `${title}.json`);
    };

    return (
        <Button use="link" onClick={handleExport} icon={<ExportIcon />}>
            {children || "Export"}
        </Button>
    );
}
