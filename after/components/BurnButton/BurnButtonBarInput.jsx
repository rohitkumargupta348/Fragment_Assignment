
const BurnButtonBarInput = () => {
  return (
    <div className="burn_bar">
      <div className="input_value_box">
        <p className="input_muted">Enter amount to Burn</p>
          <input
            className="input_value"
            type="text"
            value={burnAmount}
            placeholder="0.00"
            onChange={onChangeBurnAmount}
          />
      </div>
    </div>
  )
}

export default BurnButtonBarInput