import React from 'react';
import { PhoneCard } from '../PhoneCard';
import { Phone } from '../../types/Phone';
import './PhonesList.scss';

type Props = {
  phones: Phone[];
};

export const PhonesList: React.FC<Props> = React.memo(({ phones }) => {
  return (
    <div className="phone-list">
      {phones.map((phone) => (
        <PhoneCard key={phone.id} phone={phone} />
      ))}
    </div>
  );
});
