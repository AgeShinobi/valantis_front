import Card from '../Card/Card';

import './CardList.scss';

const mockCards = [
  {
    id: 1,
    name: 'Momo',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 2,
    name: 'Momo',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 3,
    name: 'Renew',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 3,
    name: 'AfroBomb',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 4,
    name: 'AHAHA',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 5,
    name: 'Vivo',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 6,
    name: 'Veneno',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 7,
    name: 'ZoV',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 8,
    name: 'Momo',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 9,
    name: 'Momo',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
  {
    id: 10,
    name: 'Vakanda',
    price: '10.000.000',
    brand: 'BALENCIAGA',
  },
]

const CardList = () => {
  return (
    <section className='cardlist cardlist__page'>
      {mockCards.map((card) => {
        return (
          <Card
            id={card.id}
            name={card.name}
            price={card.price}
            brand={card.brand}
          />
        )
      })}
    </section>
  )
}

export default CardList