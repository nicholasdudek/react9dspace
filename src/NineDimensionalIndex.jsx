import React, { useState, useMemo } from 'react';
import './NineDimensionalIndex.css';

/**
 * NineDimensionalIndex Component
 * 
 * This component demonstrates a 9-dimensional index query structure
 * Each dimension represents a different axis of organization:
 * D1: Category, D2: Region, D3: TimeFrame, D4: Priority
 * D5: Status, D6: Department, D7: Type, D8: Level, D9: Tag
 */

const NineDimensionalIndex = () => {
  // State for each dimension's selected index
  const [indices, setIndices] = useState({
    d1: 0, // Category
    d2: 0, // Region
    d3: 0, // TimeFrame
    d4: 0, // Priority
    d5: 0, // Status
    d6: 0, // Department
    d7: 0, // Type
    d8: 0, // Level
    d9: 0, // Tag
  });

  // Define the dimensions and their possible values
  const dimensions = {
    d1: { name: 'Category', values: ['Sales', 'Marketing', 'Engineering', 'HR', 'Finance'] },
    d2: { name: 'Region', values: ['North', 'South', 'East', 'West', 'Central'] },
    d3: { name: 'TimeFrame', values: ['Q1', 'Q2', 'Q3', 'Q4', 'Annual'] },
    d4: { name: 'Priority', values: ['Critical', 'High', 'Medium', 'Low', 'Trivial'] },
    d5: { name: 'Status', values: ['Active', 'Pending', 'Completed', 'Cancelled', 'On Hold'] },
    d6: { name: 'Department', values: ['Operations', 'Research', 'Development', 'Support', 'Admin'] },
    d7: { name: 'Type', values: ['Project', 'Task', 'Bug', 'Feature', 'Enhancement'] },
    d8: { name: 'Level', values: ['Executive', 'Senior', 'Mid', 'Junior', 'Intern'] },
    d9: { name: 'Tag', values: ['Urgent', 'Review', 'Approved', 'Draft', 'Archive'] },
  };

  // Sample data records - seeded with realistic business data
  const sampleData = useMemo(() => {
    const records = [
      { title: 'Q1 Sales Campaign Launch', value: 125000, owner: 'Sarah Chen', items: 45 },
      { title: 'Customer Feedback Analysis', value: 89000, owner: 'Mike Johnson', items: 203 },
      { title: 'Infrastructure Upgrade Project', value: 340000, owner: 'Dev Team', items: 12 },
      { title: 'Annual Performance Reviews', value: 0, owner: 'HR Department', items: 156 },
      { title: 'Budget Reallocation Initiative', value: 275000, owner: 'Finance Board', items: 8 },
      { title: 'Market Research Dashboard', value: 52000, owner: 'Analytics Team', items: 34 },
      { title: 'Employee Onboarding Process', value: 15000, owner: 'Talent Acquisition', items: 67 },
      { title: 'API Performance Optimization', value: 0, owner: 'Backend Engineers', items: 89 },
      { title: 'Brand Refresh Campaign', value: 180000, owner: 'Creative Team', items: 23 },
      { title: 'Customer Support Portal', value: 95000, owner: 'Support Ops', items: 145 },
      { title: 'Security Audit Compliance', value: 0, owner: 'Security Team', items: 56 },
      { title: 'Sales Training Program', value: 45000, owner: 'Sales Enablement', items: 78 },
      { title: 'Product Feature Roadmap', value: 0, owner: 'Product Managers', items: 34 },
      { title: 'Data Migration Initiative', value: 230000, owner: 'Data Engineering', items: 19 },
      { title: 'Client Retention Strategy', value: 165000, owner: 'Account Management', items: 92 },
    ];

    // Generate more sample data using hash-based selection
    const getRecord = (i1, i2, i3, i4, i5, i6, i7, i8, i9) => {
      const hash = (i1 * 1 + i2 * 5 + i3 * 25 + i4 * 125 + i5 * 625 + 
                   i6 * 3125 + i7 * 15625 + i8 * 78125 + i9 * 390625);
      const baseRecord = records[hash % records.length];
      
      // Add coordinate-specific variations
      const variation = hash % 1000;
      return {
        ...baseRecord,
        id: hash,
        value: baseRecord.value > 0 ? baseRecord.value + variation * 100 : variation,
        items: baseRecord.items + (variation % 50),
        progress: ((hash % 100) + 1),
      };
    };

    return getRecord;
  }, []);

  // Query the data structure based on current indices
  const queryResult = useMemo(() => {
    return sampleData(
      indices.d1, indices.d2, indices.d3, indices.d4, indices.d5,
      indices.d6, indices.d7, indices.d8, indices.d9
    );
  }, [indices, sampleData]);

  // Get the current coordinate path
  const getCurrentPath = () => {
    return Object.keys(indices).map((key, idx) => {
      const dimNum = parseInt(key.replace('d', ''));
      const dimKey = `d${dimNum}`;
      const dimension = dimensions[dimKey];
      const selectedIndex = indices[key];
      const selectedValue = dimension.values[selectedIndex];
      return `${dimension.name}[${selectedIndex}]=${selectedValue}`;
    }).join(' → ');
  };

  // Handle dimension index change
  const handleIndexChange = (dimension, value) => {
    setIndices(prev => ({
      ...prev,
      [dimension]: parseInt(value)
    }));
  };

  // Random query generator
  const generateRandomQuery = () => {
    const newIndices = {};
    Object.keys(dimensions).forEach(key => {
      const maxIndex = dimensions[key].values.length - 1;
      newIndices[key] = Math.floor(Math.random() * (maxIndex + 1));
    });
    setIndices(newIndices);
  };

  // Reset all indices to 0
  const resetQuery = () => {
    const resetIndices = {};
    Object.keys(dimensions).forEach(key => {
      resetIndices[key] = 0;
    });
    setIndices(resetIndices);
  };

  return (
    <div className="nine-d-container">
      <h1 className="title">9-Dimensional Index Query Structure</h1>
      <p className="subtitle">Practice navigating through a 9D data space</p>

      <div className="controls-section">
        <button onClick={generateRandomQuery} className="btn btn-primary">
          Generate Random Query
        </button>
        <button onClick={resetQuery} className="btn btn-secondary">
          Reset All
        </button>
      </div>

      <div className="dimensions-grid">
        {Object.keys(dimensions).map((dimKey) => {
          const dimension = dimensions[dimKey];
          const currentIndex = indices[dimKey];
          
          return (
            <div key={dimKey} className="dimension-card">
              <div className="dimension-header">
                <span className="dimension-label">{dimKey.toUpperCase()}</span>
                <h3 className="dimension-name">{dimension.name}</h3>
              </div>
              
              <div className="dimension-selector">
                <input
                  type="range"
                  min="0"
                  max={dimension.values.length - 1}
                  value={currentIndex}
                  onChange={(e) => handleIndexChange(dimKey, e.target.value)}
                  className="dimension-slider"
                />
                <div className="dimension-value">
                  <span className="index-badge">Index: {currentIndex}</span>
                  <span className="value-badge">{dimension.values[currentIndex]}</span>
                </div>
              </div>

              <div className="dimension-options">
                {dimension.values.map((value, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleIndexChange(dimKey, idx)}
                    className={`option-btn ${currentIndex === idx ? 'active' : ''}`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="result-section">
        <h2>Current Query Path</h2>
        <div className="query-path">
          {getCurrentPath()}
        </div>
        
        <h2>Query Result</h2>
        <div className="query-result">
          <div className="result-card">
            <h3 className="record-title">{queryResult.title}</h3>
            <div className="record-details">
              <div className="detail-item">
                <span className="detail-label">ID:</span>
                <span className="detail-value">#{queryResult.id}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Owner:</span>
                <span className="detail-value">{queryResult.owner}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Value:</span>
                <span className="detail-value">${queryResult.value.toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Items:</span>
                <span className="detail-value">{queryResult.items}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Progress:</span>
                <span className="detail-value">{queryResult.progress}%</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${queryResult.progress}%` }}></div>
            </div>
            <div className="result-info">
              Total possible combinations: {
                Object.values(dimensions).reduce((acc, dim) => acc * dim.values.length, 1).toLocaleString()
              }
            </div>
          </div>
        </div>
      </div>

      <div className="info-section">
        <h3>About This Component</h3>
        <p>
          This component demonstrates a 9-dimensional index query structure where each dimension
          can be independently navigated. The total search space has {
            Object.values(dimensions).reduce((acc, dim) => acc * dim.values.length, 1).toLocaleString()
          } possible combinations!
        </p>
        <ul>
          <li>Each dimension has 5 possible values (indices 0-4)</li>
          <li>Use sliders or buttons to change indices</li>
          <li>The query result updates in real-time</li>
          <li>Perfect for practicing state management and complex data structures</li>
        </ul>
      </div>
    </div>
  );
};

export default NineDimensionalIndex;
