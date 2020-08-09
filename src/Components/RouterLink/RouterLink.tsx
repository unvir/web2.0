
import * as React from "react";
import { Link } from "react-router-dom";
import cn from "./RouterLink.less";

type Props = {
  icon?: React.ReactNode;
} & React$ElementConfig<typeof Link>;

export default function RouterLink(props: Props): React.ReactElement<typeof Link> {
  const {
    icon,
    className,
    children
  } = props;
  return <Link className={cn(className, "link")} {...props}>
            {icon}
            {icon ? " " : ""}
            <span className={cn("content")}>{children}</span>
        </Link>;
}