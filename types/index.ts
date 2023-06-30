import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  title: String;
  btnType?: "button" | "submit";
  containerStyles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomFilterProps {
  title: String;
}

export interface SearchManufacturerProps {
  manufacturer: String;
  setManufacturer: (manufacturer: String) => String;
}