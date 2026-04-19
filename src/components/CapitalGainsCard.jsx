import React from 'react';

const CapitalGainsCard = ({ title, data, type, savings = null }) => {
  if (!data) return null;

  const calculateNetGain = (profits, losses) => profits - losses;
  
  const stcgNet = calculateNetGain(data.stcg.profits, data.stcg.losses);
  const ltcgNet = calculateNetGain(data.ltcg.profits, data.ltcg.losses);
  const totalRealised = stcgNet + ltcgNet;

  return (
    <div className={`capital-card ${type}`}>
      <h3 className="card-title">{title}</h3>
      
      <div className="gains-table">
        <div className="table-header">
          <span></span>
          <span>Short-term</span>
          <span>Long-term</span>
        </div>
        
        <div className="table-row">
          <span className="row-label">Profits</span>
          <span className="positive">${data.stcg.profits.toLocaleString()}</span>
          <span className="positive">${data.ltcg.profits.toLocaleString()}</span>
        </div>
        
        <div className="table-row">
          <span className="row-label">Losses</span>
          <span className="negative">-${data.stcg.losses.toLocaleString()}</span>
          <span className="negative">-${data.ltcg.losses.toLocaleString()}</span>
        </div>
        
        <div className="table-row net">
          <span className="row-label">Net Capital Gains</span>
          <span className={stcgNet >= 0 ? 'positive' : 'negative'}>
            ${stcgNet.toLocaleString()}
          </span>
          <span className={ltcgNet >= 0 ? 'positive' : 'negative'}>
            ${ltcgNet.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="total-realised">
        <strong>
          {type === 'pre' ? 'Realised Capital Gains:' : 'Effective Capital Gains:'}
        </strong>
        <span className={totalRealised >= 0 ? 'positive' : 'negative'}>
          ${totalRealised.toLocaleString()}
        </span>
      </div>

      {savings > 0 && type === 'post' && (
        <div className="savings-banner">
          🎉 You are going to save upto ${savings.toLocaleString()}
        </div>
      )}
    </div>
  );
};

export default CapitalGainsCard;