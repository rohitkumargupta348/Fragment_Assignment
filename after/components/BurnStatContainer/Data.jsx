
const Data = () => {
  return (
    <>
      <div>
        <p className="supply_label">
          <span className="hyphen green"></span>
          <span className="text">Circulating App Tokens</span>
          <span className="percent green">
            {statsSupplies.circulatingPercent.toFixed(2)}%
          </span>
        </p>
        <p className="supply_value">
          <AppIcon
            size={1.25}
            url={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
            fill={IconFilter.unset}
            margin={0}
          />
          {numberWithCommas(statsSupplies.circulatingSupply)}
        </p>
        {allSupplies
          .filter((s) => s.chainId != walletChain?.id)
          .map((s: any) => (
            <p key={s.chainId} className="supply_value mini">
              <AppIcon
                size={1.25}
                url={`/images/token/${
                  chainTokenSymbols.get(s.chainId) ?? "ETH"
                }.svg`}
                fill={IconFilter.unset}
                margin={0}
              />
              {numberWithCommas(s.circulatingSupply)}
            </p>
          ))}
      </div>
    </>
  );
}

export default Data