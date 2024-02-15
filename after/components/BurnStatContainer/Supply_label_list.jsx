const Supply_label_list = () => {
  return (
    <>
      <div className="supply_label_list">
        <div>
          <p className="supply_label">
            <span className="hyphen orange"></span>
            <span className="text">Burnt App Tokens</span>
            <span className="percent orange">
              {(100 - statsSupplies.circulatingPercent).toFixed(2)}%
            </span>
          </p>
          <p className="supply_value">
            <AppIcon
              size={1.25}
              url={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
              fill={IconFilter.unset}
              margin={0}
            />
            {numberWithCommas(
              statsSupplies.totalSupply - statsSupplies.circulatingSupply
            )}
          </p>
          <div className="full_supply">
            Original App Token Initial Supply:
            {numberWithCommas(statsSupplies.totalSupply)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Supply_label_list;
