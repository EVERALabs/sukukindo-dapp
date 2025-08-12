import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function shortenAddress(address: string, start = 4, end = 4) {
  return address ? `${address.slice(0, start)}...${address.slice(-end)}` : "";
}
