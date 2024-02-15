import React from 'react'

const Chainselector = () => {
  return (
    <>
    title={"Switch Token Chain"}
        openChainSelector={openChainSelector}
        setOpenChainSelector={setOpenChainSelector}
        chains={receiveChains}
        selectedChain={suppliesChain}
        setSelectedChain={setSuppliesChain}
    </>
  )
}

export default Chainselector