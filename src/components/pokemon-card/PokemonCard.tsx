import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { Pokemon } from '../../models/pokemon';
import { setFavorite } from '../../slices/dataSlice';
import StarButton from '../star-button/StarButton';
import './PokemonCard.css';

const PokemonCard = (pokemon: Pokemon) => {
  const { name, sprites, types, id, favorite } = pokemon;
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={sprites.front_default} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
