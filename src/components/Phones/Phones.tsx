import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useSearchParams } from 'react-router-dom';
import { PhonesFilters } from '../PhonesFilters';
import { PhonesList } from '../PhonesList';
import './Phones.scss';

export const Phones: React.FC = React.memo(() => {
  const phones = useSelector((state: RootState) => state.phones.phones);
  const [filteredPhones, setFilteredPhones] = useState(phones);
  const [searchParams] = useSearchParams();
  const brand = searchParams.get('brand') || '';
  const price = searchParams.get('price') || '';
  const ram = searchParams.get('ram') || '0';
  const memory = searchParams.get('memory') || '0';
  const refreshRate = searchParams.get('refreshRate') || '0';
  const screenDiagonal = searchParams.get('screenDiagonal') || '0';

  useEffect(() => {
    let newFilteredPhones = phones.filter((phone) => {
      return (
        phone.price >= Number(price) &&
        phone.ram >= Number(ram) &&
        phone.memory >= Number(memory) &&
        phone.screenRefreshRate >= Number(refreshRate) &&
        phone.screenDiagonal >= Number(screenDiagonal)
      );
    });

    if (brand.length) {
      const lowerBrand = brand.toLowerCase();
      newFilteredPhones = newFilteredPhones.filter((phone) =>
        phone.brand.toLowerCase().includes(lowerBrand),
      );
    }

    setFilteredPhones(newFilteredPhones);
  }, [brand, price, ram, memory, refreshRate, screenDiagonal]);

  return (
    <div className="Phones">
      <div className="Phones__container">
        <PhonesFilters />

        {filteredPhones.length > 0 && <PhonesList phones={filteredPhones} />}
        {!filteredPhones.length && (
          <div className="alert alert-danger" role="alert">
            There are no phones suitable for the applied filters
          </div>
        )}
      </div>
    </div>
  );
});
