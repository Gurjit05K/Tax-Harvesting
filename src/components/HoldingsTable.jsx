import React, { useState } from 'react';

const HoldingsTable = ({ holdings, selectedHoldings, onToggleHolding, onToggleAll }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHoldings = holdings.filter(holding =>
    holding.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    holding.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedHoldings = filteredHoldings.slice(0, visibleCount);
  const hasMore = visibleCount < filteredHoldings.length;
  const allSelected = holdings.length > 0 && selectedHoldings.size === holdings.length;

  const formatNumber = (num, decimals = 2) => {
    return num.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  };

  return (
    <div className="holdings-section">
      <div className="holdings-header">
        <h3>Holdings</h3>
        <input
          type="text"
          placeholder="Search assets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-container">
        <table className="holdings-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={onToggleAll}
                />
              </th>
              <th>Asset</th>
              <th>Holdings / Current Market Rate</th>
              <th>Total Current Value</th>
              <th>Short-term</th>
              <th>Long-term</th>
              <th>Amount to Sell</th>
            </tr>
          </thead>
          <tbody>
            {displayedHoldings.map(holding => (
              <tr key={holding.id} className={selectedHoldings.has(holding.id) ? 'selected' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedHoldings.has(holding.id)}
                    onChange={() => onToggleHolding(holding.id)}
                  />
                </td>
                <td>
                  <div className="asset-info">
                    <strong>{holding.name}</strong>
                    <span className="symbol">{holding.symbol}</span>
                  </div>
                </td>
                <td>
                  <div className="market-info">
                    <div>{formatNumber(holding.quantity, 4)} {holding.symbol}</div>
                    <div className="market-rate">${formatNumber(holding.currentMarketRate, 2)}/{holding.symbol}</div>
                  </div>
                </td>
                <td className="total-value">
                  ${formatNumber(holding.totalCurrentValue, 2)}
                </td>
                <td className={holding.shortTermGain >= 0 ? 'positive' : 'negative'}>
                  <div>{holding.shortTermGain >= 0 ? '+' : '-'}${formatNumber(Math.abs(holding.shortTermGain), 2)}</div>
                  <div className="quantity-breakdown">
                    {formatNumber(holding.shortTermQuantity, 3)} {holding.symbol}
                  </div>
                </td>
                <td className={holding.longTermGain >= 0 ? 'positive' : 'negative'}>
                  <div>{holding.longTermGain >= 0 ? '+' : '-'}${formatNumber(Math.abs(holding.longTermGain), 2)}</div>
                  <div className="quantity-breakdown">
                    {formatNumber(holding.longTermQuantity, 3)} {holding.symbol}
                  </div>
                </td>
                <td>
                  {holding.amountToSell ? (
                    <span className="amount-to-sell">
                      {formatNumber(holding.amountToSell, 4)} {holding.symbol}
                    </span>
                  ) : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <button 
          className="view-all-btn"
          onClick={() => setVisibleCount(filteredHoldings.length)}
        >
          View All ({filteredHoldings.length - visibleCount} more holdings)
        </button>
      )}
    </div>
  );
};

export default HoldingsTable;