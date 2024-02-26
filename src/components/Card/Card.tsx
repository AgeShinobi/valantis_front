import './Card.scss';

const Card = ({ id, name, price, brand }) => {
  return (
    <article className='card' key={id}>
      <img
        className='card__image'
        src="https://sadovod-krossovki.ru/wp-content/uploads/2017/12/balenciaga-triple-s-black2.jpg"
        alt="Boots"
      />
      <h2 className='card__title'>{name}</h2>
      <p className='card__brand'>{brand}</p>
      <h3 className='card__price'>{price}₽</h3>
    </article>
  )
}

export default Card