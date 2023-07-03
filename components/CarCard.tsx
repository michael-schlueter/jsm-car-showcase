import { useState } from "react";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  return <div>CarCard</div>;
};

export default CarCard;
