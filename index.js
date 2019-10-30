const coinranking = require('./coinranking'); // 還記得我們上面寫的 coinranking.js 吧

const coins = [
  {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
  },
  {
    id: 2,
    symbol: 'ETH',
    name: 'Ethereum',
  },
  {
    id: 3,
    symbol: 'XRP',
    name: 'XRP',
  },
];

module.exports = async function App(context) {
  const { text } = context.event;
  for (let c of coins) {
    if (new RegExp(`(${c.symbol})|(${c.name})`, 'i').test(text)) {
      const {
        data: { coin },
      } = await coinranking.getCoin(c.id);
      await context.sendText(`${c.symbol} 現在價格是 ${coin.price} TWD`);
      return;
    }
  }
};