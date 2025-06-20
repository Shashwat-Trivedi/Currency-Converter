import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };

  const swap = () => {
    let temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    temp = amount;
    setAmount(convertedAmount);
    setConvertedAmount(temp);
    
  };

  return (
    <div className="background bg-blue-400 h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="m-8 text-4xl text-blue-700 underline underline-offset-8 font-bold font-sans">
        Currency Converter
      </h1>
      <form
        className="flex flex-col items-center justify-center p-4 bg-white/30 rounded-lg border border-gray-300"
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          Label="From"
          className="m-2.5 "
          amount={amount}
          currencyOptions={options}
          selectCurrency={fromCurrency}
          onAmountChange={(value) => setAmount(value)}
          onCurrencyChange={(value) => setFromCurrency(value)}
        />
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="h-10 w-18 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
          >
            swap
          </button>
        </div>

        <InputBox
          Label="To"
          className="m-2.5 "
          amount={convertedAmount}
          currencyOptions={options}
          selectCurrency={toCurrency}
          onAmountChange={(value) => setConvertedAmount(value)}
          onCurrencyChange={(value) => setToCurrency(value)}
          amountDisabled
        />
        <button
          type="submit"
          className="m-3 p-1.5 w-24/25 bg-blue-500 rounded-md text-3xl text-blue-800"
        >
          Convert {fromCurrency} To {toCurrency}
        </button>
      </form>
    </div>
  );
}

export default App;
