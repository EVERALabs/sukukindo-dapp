import { indoSukukBondAbi } from "../app/_libs/_abi/indoSukukBondAbi";
import { allowedTokenAbi } from "../app/_libs/_abi/allowedTokenAbi";
import { IndoSukukBondAddress, AllowedTokenAddress } from "./contractAddress";

export const indoSukukBondContractConfig = {
  address: IndoSukukBondAddress,
  abi: indoSukukBondAbi,
} as const;

export const allowedTokenContractConfig = {
  address: AllowedTokenAddress,
  abi: allowedTokenAbi,
} as const;