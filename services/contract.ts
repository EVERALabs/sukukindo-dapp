import { indoSukukBondAbi, allowedTokenAbi } from "./abi";
import { IndoSukukBondAddress, AllowedTokenAddress } from "./contractAddress";

export const indoSukukBondContractConfig = {
  address: IndoSukukBondAddress,
  abi: indoSukukBondAbi,
} as const;

export const allowedTokenContractConfig = {
  address: AllowedTokenAddress,
  abi: allowedTokenAbi,
} as const;