import { createSlice } from '@reduxjs/toolkit';

const sampleData = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 93759.48,
    marketCap: 1861618902186,
    volume24h: 43874950947,
    circulatingSupply: "19.85M",
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 1802.46,
    marketCap: 217581279327,
    volume24h: 23547469307,
    circulatingSupply: "120.71M",
    change1h: 0.60,
    change24h: 3.21,
    change7d: 13.68,
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    price: 1.0,
    marketCap: 145320022085,
    volume24h: 92288882007,
    circulatingSupply: "145.27B",
    change1h: 0.0,
    change24h: 0.0,
    change7d: 0.04,
  },
  {
    id: 4,
    name: "XRP",
    symbol: "XRP",
    price: 2.22,
    marketCap: 130073814966,
    volume24h: 5131481491,
    circulatingSupply: "58.39B",
    change1h: 0.46,
    change24h: 0.54,
    change7d: 6.18,
  },
  {
    id: 5,
    name: "BNB",
    symbol: "BNB",
    price: 606.65,
    marketCap: 85471956947,
    volume24h: 1874281784,
    circulatingSupply: "140.89M",
    change1h: 0.09,
    change24h: -1.2,
    change7d: 3.73,
  },
];

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    data: sampleData,
  },
  reducers: {
    updateCryptoData: (state) => {
      state.data = state.data.map((coin) => ({
        ...coin,
        price: +(coin.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2),
        change1h: +(Math.random() * 2 - 1).toFixed(2),
        change24h: +(Math.random() * 4 - 2).toFixed(2),
        change7d: +(Math.random() * 15).toFixed(2),
        volume24h: Math.floor(coin.volume24h * (1 + (Math.random() - 0.5) / 10)),
      }));
    },
  },
});

export const { updateCryptoData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
