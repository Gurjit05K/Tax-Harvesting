import { useState, useEffect, useCallback } from 'react';
import { fetchCapitalGains, fetchHoldings } from '../services/api';

export const useTaxHarvesting = () => {
  const [holdings, setHoldings] = useState([]);
  const [preHarvesting, setPreHarvesting] = useState(null);
  const [postHarvesting, setPostHarvesting] = useState(null);
  const [selectedHoldings, setSelectedHoldings] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      const [holdingsData, gainsData] = await Promise.all([
        fetchHoldings(),
        fetchCapitalGains()
      ]);
      
      setHoldings(holdingsData);
      setPreHarvesting(gainsData);
      setPostHarvesting(gainsData);
      setError(null);
    } catch (err) {
      setError('Failed to load portfolio data. Please refresh the page.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const calculateNetGain = (profits, losses) => profits - losses;
  
  const calculateRealisedGain = useCallback((gains) => {
    if (!gains) return 0;
    const stcgNet = calculateNetGain(gains.stcg.profits, gains.stcg.losses);
    const ltcgNet = calculateNetGain(gains.ltcg.profits, gains.ltcg.losses);
    return stcgNet + ltcgNet;
  }, []);

  const calculatePostHarvesting = useCallback((selectedIds) => {
    if (!preHarvesting) return null;

    const selectedHoldingsList = holdings.filter(h => selectedIds.has(h.id));
    
    const updatedGains = {
      stcg: { ...preHarvesting.stcg },
      ltcg: { ...preHarvesting.ltcg }
    };

    selectedHoldingsList.forEach(holding => {
      // Handle short term gains
      if (holding.shortTermGain > 0) {
        updatedGains.stcg.profits += holding.shortTermGain;
      } else if (holding.shortTermGain < 0) {
        updatedGains.stcg.losses += Math.abs(holding.shortTermGain);
      }

      // Handle long term gains
      if (holding.longTermGain > 0) {
        updatedGains.ltcg.profits += holding.longTermGain;
      } else if (holding.longTermGain < 0) {
        updatedGains.ltcg.losses += Math.abs(holding.longTermGain);
      }
    });

    return updatedGains;
  }, [holdings, preHarvesting]);

  const toggleHolding = useCallback((holdingId) => {
    setSelectedHoldings(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(holdingId)) {
        newSelected.delete(holdingId);
      } else {
        newSelected.add(holdingId);
      }
      
      const updatedGains = calculatePostHarvesting(newSelected);
      if (updatedGains) {
        setPostHarvesting(updatedGains);
      }
      
      return newSelected;
    });
  }, [calculatePostHarvesting]);

  const toggleAllHoldings = useCallback(() => {
    setSelectedHoldings(prev => {
      let newSelected;
      if (prev.size === holdings.length) {
        newSelected = new Set();
      } else {
        newSelected = new Set(holdings.map(h => h.id));
      }
      
      const updatedGains = calculatePostHarvesting(newSelected);
      if (updatedGains) {
        setPostHarvesting(updatedGains);
      }
      
      return newSelected;
    });
  }, [holdings, calculatePostHarvesting]);

  const preRealisedGain = preHarvesting ? calculateRealisedGain(preHarvesting) : 0;
  const postRealisedGain = postHarvesting ? calculateRealisedGain(postHarvesting) : 0;
  const potentialSavings = Math.max(0, preRealisedGain - postRealisedGain);

  return {
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
  };
};