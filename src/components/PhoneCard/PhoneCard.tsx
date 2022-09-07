import React from 'react';
import { Phone } from '../../types/Phone';
import './PhoneCard.scss';

type Props = {
  phone: Phone;
};

export const PhoneCard: React.FC<Props> = React.memo(({ phone }) => {
  const onButtonClick = () => {
    alert('Sorry, this function is now available right now :(');
  };

  const transformPrice = (price: number) => {
    const thousands = `${price}`.split('').slice(0, 2).join('');
    const hundreds = `${price}`.split('').slice(2).join('');

    return `${thousands} ${hundreds}`;
  };

  return (
    <div className="phone-card">
      <img
        className="phone-card__img"
        src={phone.imgUrl}
        alt={`${phone.brand} ${phone.model}`}
      />
      <h2 className="phone-card__title">{`${phone.brand} ${phone.model}`}</h2>

      <div className="phone-card__buy-info">
        <span className="phone-card__price">
          {transformPrice(phone.price)} &#8372;
        </span>
        <span className="phone-card__status">Available</span>
      </div>

      <button
        type="button"
        className="phone-card__button"
        onClick={() => onButtonClick()}
      >
        BUY
      </button>
    </div>
  );
});
