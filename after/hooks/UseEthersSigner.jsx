export const ethersSigner = useEthersSigner({
  chainId: walletChain?.id ?? chainEnum.mainnet,
});