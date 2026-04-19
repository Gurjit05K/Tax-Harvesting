import React, { useState } from 'react';

const Disclaimer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const disclaimers = [
    "Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.",
    "Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.",
    "Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.",
    "Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.",
    "Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted."
  ];

  return (
    <div className="disclaimer">
      <div className="disclaimer-header" onClick={() => setIsExpanded(!isExpanded)}>
        <span className="disclaimer-icon">⚠️</span>
        <h3>Important Notes & Disclaimers</h3>
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
      </div>
      {isExpanded && (
        <ul className="disclaimer-list">
          {disclaimers.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Disclaimer;