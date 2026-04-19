import React from 'react';
import { useTaxHarvesting } from './hooks/useTaxHarvesting';
import Header from './components/Header';
import Disclaimer from './components/Disclaimer';
import CapitalGainsCard from './components/CapitalGainsCard';
import HoldingsTable from './components/HoldingsTable';
import Loader from './components/Loader';
import './App.css';

function App() {
  const {
    holdings,
    preHarvesting,
    postHarvesting,
    selectedHoldings,
    loading,
    error,
    preRealisedGain,
    postRealisedGain,
    potentialSavings,
    toggleHolding,
    toggleAllHoldings
  } = useTaxHarvesting();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <span className="error-icon">⚠️</span>
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Disclaimer />
          
          <div className="cards-grid">
            <CapitalGainsCard 
              title="Pre Harvesting"
              data={preHarvesting}
              type="pre"
            />
            <CapitalGainsCard 
              title="After Harvesting"
              data={postHarvesting}
              type="post"
              savings={potentialSavings}
            />
          </div>

          <HoldingsTable 
            holdings={holdings}
            selectedHoldings={selectedHoldings}
            onToggleHolding={toggleHolding}
            onToggleAll={toggleAllHoldings}
          />

          {selectedHoldings.size > 0 && (
            <div className="selection-summary">
              <p>Selected {selectedHoldings.size} holding(s) for tax-loss harvesting</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;