// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck rc-icon

import { FC } from "react";

export type IconComponent = FC<React.SVGProps<SVGSVGElement>>;

import { ReactComponent as Add } from "./Icons/add.svg";
import { ReactComponent as Trash } from "./Icons/trash.svg";

export const Icons: Record<string, IconComponent> = {
  Add: Add,
  Trash: Trash,
};
