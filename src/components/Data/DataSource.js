import React from 'react';
import SourceChart from './SourceChart';
import './DataSource.css';

const images = require.context('../../images', true);

const sources = [
  'angellist',
  'dice',
  'github',
  'hackernews',
  'hired',
  'indeed',
  'linkedin',
  'remoteco',
  'simplyhired',
  'stackoverflow',
  'stateofjs',
];

const DataSource = ({ loveFunction }) => (
  <div className="wrapper-data">
    <div className="container-grid">
      {sources.map((c, i) => (
        <div key={i} className="zone tooltip1 text-center">
          <div className="top">
            <h5>{c}</h5>
            <i />
          </div>
          <img src={images(`./company/${c}.png`)} alt={`${c} logo`} />
        </div>
      ))}
      <div className="zone purple tooltip1 text-center">
        <div className="top">
          <h5>Other</h5>
          <i />
        </div>
        <div className="more">...</div>
      </div>
    </div>
    <div className="arrow">
      <span>&#8674;</span>
    </div>
    <div className="arrow2">
      <span>&#8675;</span>
    </div>
    <div className="source-chart">
      <SourceChart loveFunction={loveFunction} demo />
    </div>
  </div>
);
export default DataSource;
