function InputBox({
  Label = "Label",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  return (
    <div
      className={` w-120 h-24 bg-white rounded-lg text-sm flex items-center justify-between p-2 ${className}`}
    >
      <div className="w-1/2 flex flex-col ">
        <label className="text-gray-400 mb-4 p-1">{Label}</label>
        <input
          className="p-1 outline-none"
          type="Number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-col justify-end text-right">
        <label className="text-gray-400 mb-4 p-1">Currency Type</label>
        <select
          className="rounded-lg px-1 py-1 bg-gray-50 cursor-pointer outline-none text-right w-full"
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
