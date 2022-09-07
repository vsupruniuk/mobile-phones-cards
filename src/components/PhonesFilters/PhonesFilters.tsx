import React from 'react';
import './PhonesFilters.scss';
import { useSearchParams } from 'react-router-dom';

export const PhonesFilters: React.FC = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const brand = searchParams.get('brand') || '';
  const price = searchParams.get('price') || '';
  const ram = searchParams.get('ram') || '';
  const memory = searchParams.get('memory') || '';
  const refreshRate = searchParams.get('refreshRate') || '';
  const screenDiagonal = searchParams.get('screenDiagonal') || '';

  const handleBrandChange = (newBrand: string) => {
    setSearchParams({
      brand: newBrand,
      price,
      ram,
      memory,
      refreshRate,
      screenDiagonal,
    });
  };

  const handlePriceChange = (newPrice: string) => {
    setSearchParams({
      brand,
      price: newPrice,
      ram,
      memory,
      refreshRate,
      screenDiagonal,
    });
  };

  const handleRAMChange = (newValue: string) => {
    if (newValue === ram) {
      setSearchParams({ brand, price, memory, refreshRate, screenDiagonal });
    } else {
      setSearchParams({
        brand,
        price,
        ram: newValue,
        memory,
        refreshRate,
        screenDiagonal,
      });
    }
  };

  const handleMemoryChange = (newValue: string) => {
    if (newValue === memory) {
      setSearchParams({ brand, price, ram, refreshRate, screenDiagonal });
    } else {
      setSearchParams({
        brand,
        price,
        ram,
        memory: newValue,
        refreshRate,
        screenDiagonal,
      });
    }
  };

  const handleRefreshRateChange = (newValue: string) => {
    if (newValue === refreshRate) {
      setSearchParams({ brand, price, ram, memory, screenDiagonal });
    } else {
      setSearchParams({
        brand,
        price,
        ram,
        memory,
        refreshRate: newValue,
        screenDiagonal,
      });
    }
  };

  const handleScreenDiagonalChange = (newValue: string) => {
    if (newValue === screenDiagonal) {
      setSearchParams({ brand, price, ram, memory, refreshRate });
    } else {
      setSearchParams({
        brand,
        price,
        ram,
        memory,
        refreshRate,
        screenDiagonal: newValue,
      });
    }
  };

  return (
    <div className="filters">
      <h1 className="filters__title">Filter by:</h1>

      <div className="filters__filter">
        <span className="filters__filter--subtitle">Brand</span>
        <input
          className="filters__filter--field"
          type="text"
          value={brand}
          placeholder="Enter brand name"
          onChange={(event) => handleBrandChange(event.target.value)}
        />
      </div>

      <div className="filters__filter">
        <span className="filters__filter--subtitle">Minimal price</span>
        <input
          className="filters__filter--field"
          type="number"
          value={price || 1000}
          min={1000}
          max={100000}
          onChange={(event) => handlePriceChange(event.target.value)}
        />
      </div>

      <div className="filters__filter">
        <span className="filters__filter--subtitle">Minimal RAM size</span>
        {[4, 6, 8, 12].map((value) => (
          <label key={`${value}`}>
            <input
              type="checkbox"
              value={value}
              checked={ram === `${value}`}
              onChange={(event) => handleRAMChange(event.target.value)}
            />
            <span>{` ${value} GB`}</span>
          </label>
        ))}
      </div>

      <div className="filters__filter">
        <span className="filters__filter--subtitle">Minimal memory size</span>
        {[128, 256, 512, 1024].map((value) => (
          <label key={`${value}`}>
            <input
              type="checkbox"
              value={value}
              checked={memory === `${value}`}
              onChange={(event) => handleMemoryChange(event.target.value)}
            />
            <span>{value === 1024 ? `${1} TB` : `${value} GB`}</span>
          </label>
        ))}
      </div>

      <div className="filters__filter">
        <span className="filters__filter--subtitle">Minimal refresh rate</span>
        {[60, 90, 120].map((value) => (
          <label key={`${value}`}>
            <input
              type="checkbox"
              value={value}
              checked={refreshRate === `${value}`}
              onChange={(event) => handleRefreshRateChange(event.target.value)}
            />
            <span>{value}</span>
          </label>
        ))}
      </div>

      <div className="filters__filter">
        <span className="filters__filter--subtitle">
          Minimal screen diagonal
        </span>
        {[6, 6.1, 6.3, 6.5, 6.7, 6.8, 7.6].map((value) => (
          <label key={`${value}`}>
            <input
              type="checkbox"
              value={value}
              checked={screenDiagonal === `${value}`}
              onChange={(event) =>
                handleScreenDiagonalChange(event.target.value)
              }
            />
            <span>{`${value} "`}</span>
          </label>
        ))}
      </div>
    </div>
  );
});
