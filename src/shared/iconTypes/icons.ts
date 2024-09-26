import {
  FaPlus,
  FaPlusCircle,
  FaTrash,
  FaPersonBooth,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

export const contentTypes = {
  Plus: "FaPlus",
  PlusCircle: "FaPlusCircle",
  Delete: "FaTrash",
  Person: "FaPersonBooth",
  ArrowDown: "FaArrowDown",
  ArrowLeft: "FaArrowLeft",
  ArrowRight: "FaArrowRight",
  ArrowUp: "FaArrowUp",
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
    icon: FaPersonBooth,
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
];

export const Icons = {
  [contentTypes.Plus]: FaPlus,
  [contentTypes.PlusCircle]: FaPlusCircle,
  [contentTypes.Delete]: FaTrash,
  [contentTypes.Person]: FaPersonBooth,
  [contentTypes.ArrowDown]: FaArrowDown,
  [contentTypes.ArrowLeft]: FaArrowLeft,
  [contentTypes.ArrowRight]: FaArrowRight,
  [contentTypes.ArrowUp]: FaArrowUp,
};
