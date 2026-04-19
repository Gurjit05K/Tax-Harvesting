// Mock API service with realistic data based on the Figma design

const DELAY = 800;

// Mock Holdings Data based on the screenshot
const mockHoldings = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    quantity: 0.63776,
    currentMarketRate: 86750.32,
    totalCurrentValue: 55320.15,
    shortTermGain: -1200,
    longTermGain: 2400,
    shortTermQuantity: 0.338,
    longTermQuantity: 0.300,
    amountToSell: null
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    quantity: 5.6736,
    currentMarketRate: 1643.82,
    totalCurrentValue: 9324.21,
    shortTermGain: 55320.15,
    longTermGain: 8239.29,
    shortTermQuantity: 2.332,
    longTermQuantity: 3.245,
    amountToSell: 5.6736
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    quantity: 3096.54,
    currentMarketRate: 1.015,
    totalCurrentValue: 3142.21,
    shortTermGain: -1200,
    longTermGain: 2400,
    shortTermQuantity: 2011.23,
    longTermQuantity: 902.47,
    amountToSell: null
  },
  {
    id: 4,
    name: "Polygon",
    symbol: "MATIC",
    quantity: 2210,
    currentMarketRate: 2.114,
    totalCurrentValue: 4672.12,
    shortTermGain: -1200,
    longTermGain: 2400,
    shortTermQuantity: 802,
    longTermQuantity: 1402,
    amountToSell: null
  },
  {
    id: 5,
    name: "Ethereum",
    symbol: "ETH",
    quantity: 5.6736,
    currentMarketRate: 1643.82,
    totalCurrentValue: 9324.21,
    shortTermGain: 55320.15,
    longTermGain: 8239.29,
    shortTermQuantity: 2.332,
    longTermQuantity: 3.245,
    amountToSell: null
  },
  {
    id: 6,
    name: "Tether",
    symbol: "USDT",
    quantity: 3096.54,
    currentMarketRate: 1.015,
    totalCurrentValue: 3142.21,
    shortTermGain: -1200,
    longTermGain: 2400,
    shortTermQuantity: 2011.23,
    longTermQuantity: 902.47,
    amountToSell: null
  }
];

// Mock Capital Gains Data based on the screenshot
const mockCapitalGains = {
  stcg: {
    profits: 1540,
    losses: 743
  },
  ltcg: {
    profits: 1200,
    losses: 650
  }
};

export const fetchHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockHoldings);
    }, DELAY);
  });
};

export const fetchCapitalGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCapitalGains);
    }, DELAY);
  });
};