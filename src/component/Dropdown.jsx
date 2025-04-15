import React from "react";
const currenciesCode = [
  { code: "USD", country: "US", label: "USD / Dollar" },
  { code: "EUR", country: "GB", label: "EUR / Euro" },
  { code: "YEN", country: "JP", label: "YEN / yen" },
  { code: "NGN", country: "NG", label: "NGN / Naira" },
  { code: "KWD", country: "KW", label: "KWD / Dinar" },
  { code: "KRW", country: "SK", label: "KRW / Won" },
  { code: "GF", country: "GF", label: "GF / Dollar" },
  { code: "AE", country: "AE", label: "AED / Dollar" },
  { code: "AU", country: "AU", label: "AU / Dollar" },
];

const Dropdown = ({ from, to, setFrom, setTo }) => {
  const imageFlag = (code) => {
    console.log(code);
    const countryType = currenciesCode.find(
      (currency) => currency.code === code
    );
    if (!countryType) console.warn(`No country found for code: ${code}`);
    return countryType
      ? `https://flagsapi.com/${countryType.country}/flat/32.png`
      : "no country";
  };
  console.log(imageFlag());
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="border border-gray-400 flex items-center gap-2 dropdown">
        <img
          src={imageFlag(from) || "./images/globe-two.jpg"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "./images/globe-two.jpg";
          }}
          className="w-15 h-15 rounded-full"
          alt="from flag"
        />
        <select
          value={from}
          id="dropdown-from"
          onChange={(e) => setFrom(e.target.value)}
          className="flex w-full justify-between text-gray-500"
        >
          {currenciesCode.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.label}
            </option>
          ))}
        </select>
      </div>

      <div className="border border-gray-400 flex items-center gap-2 dropdown">
        <img
          src={imageFlag(to) || "./public/images/icon-image.jpg"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = console.log("./public/images/icon-image.jpg");
          }}
          className="w-15 h-15 rounded-full"
          alt="to flag"
        />
        <select
          value={to}
          id="dropdown-to"
          onChange={(e) => setTo(e.target.value)}
          className="flex w-full justify-between text-gray-500"
        >
          {currenciesCode.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
