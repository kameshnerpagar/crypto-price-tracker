import { useSelector } from 'react-redux';

const logoMap = {
  BTC: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  ETH: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
  USDT: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
  XRP: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
  BNB: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1597934935',
};

const CryptoTable = () => {
  const cryptos = useSelector((state) => state.crypto.data);

  return (
    <div className="overflow-x-auto py-4 w-full">
    <table className="w-full text-[13px]">
      <thead className="bg-gray-100">
        <tr className="border-t border-b border-gray-300">
          <th className="p-2 font-semibold text-center">#</th>
          <th className="p-2 pl-5 font-semibold text-left">Name</th>
          <th className="p-2 font-semibold text-right">Price</th>
          <th className="p-2 font-semibold text-right">1h %</th>
          <th className="p-2 font-semibold text-right">24h %</th>
          <th className="p-2 font-semibold text-right">7d %</th>
          <th className="p-2 font-semibold text-right">Market Cap</th>
          <th className="p-2 font-semibold text-right">Volume (24h)</th>
          <th className="p-2 font-semibold text-right">Circulating Supply</th>
        </tr>
      </thead>
      <tbody>
        {cryptos.map((coin) => (
          <tr key={coin.id} className="hover:bg-gray-50 transition-colors border-b border-gray-300">
            <td className="p-2 text-center">{coin.id}</td>
            <td className="p-2 flex items-center gap-2 text-left">
              <img
                src={logoMap[coin.symbol] || 'default-logo-url.png'}
                alt={coin.symbol}
                className="w-5 h-5"
              />
              <span>{coin.name} ({coin.symbol})</span>
            </td>
            <td className="p-2 text-right">${coin.price.toLocaleString()}</td>
            <td
              className={`text-right p-2 ${
                coin.change1h >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {coin.change1h}%
            </td>
            <td
              className={`text-right p-2 ${
                coin.change24h >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {coin.change24h}%
            </td>
            <td
              className={`text-right p-2 ${
                coin.change7d >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {coin.change7d}%
            </td>
            <td className="text-right p-2">${coin.marketCap.toLocaleString()}</td>
            <td className="text-right p-2">${coin.volume24h.toLocaleString()}</td>
            <td className="text-right p-2">{coin.circulatingSupply}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default CryptoTable;
