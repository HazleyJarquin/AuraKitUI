import {
  FaPlus,
  FaPlusCircle,
  FaTrash,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { IoPerson } from "react-icons/io5";
import { TbMoodSad } from "react-icons/tb";

export const contentTypes = {
  Plus: "FaPlus",
  PlusCircle: "FaPlusCircle",
  Delete: "FaTrash",
  Person: "IoPerson",
  ArrowDown: "FaArrowDown",
  ArrowLeft: "FaArrowLeft",
  ArrowRight: "FaArrowRight",
  ArrowUp: "FaArrowUp",
  Eye: "FaEye",
  EyeSlash: "FaEyeSlash",
  SadFace: "TbMoodSad",
};

export const IconsTypes = [
  {
    type: contentTypes.Plus,
    icon: FaPlus,
  },
  {
    type: contentTypes.PlusCircle,
    icon: FaPlusCircle,
  },
  {
    type: contentTypes.Delete,
    icon: FaTrash,
  },
  {
    type: contentTypes.Person,
    icon: IoPerson,
  },
  {
    type: contentTypes.ArrowDown,
    icon: FaArrowDown,
  },
  {
    type: contentTypes.ArrowLeft,
    icon: FaArrowLeft,
  },
  {
    type: contentTypes.ArrowRight,
    icon: FaArrowRight,
  },
  {
    type: contentTypes.ArrowUp,
    icon: FaArrowUp,
  },
  {
    type: contentTypes.Eye,
    icon: FaEye,
  },
  {
    type: contentTypes.EyeSlash,
    icon: FaEyeSlash,
  },
  {
    type: contentTypes.SadFace,
    icon: TbMoodSad,
  },
];

export const Icons = {
  [contentTypes.Plus]: FaPlus,
  [contentTypes.PlusCircle]: FaPlusCircle,
  [contentTypes.Delete]: FaTrash,
  [contentTypes.Person]: IoPerson,
  [contentTypes.ArrowDown]: FaArrowDown,
  [contentTypes.ArrowLeft]: FaArrowLeft,
  [contentTypes.ArrowRight]: FaArrowRight,
  [contentTypes.ArrowUp]: FaArrowUp,
  [contentTypes.Eye]: FaEye,
  [contentTypes.EyeSlash]: FaEyeSlash,
  [contentTypes.SadFace]: TbMoodSad,
};
