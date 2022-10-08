import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Pokemon } from '../../models/pokemon';
import { useAppDispatch } from '../../slices';
import { setFavorite } from '../../slices/dataSlice';
import StarButton from '../star-button/StarButton';

const PokemonCard = (pokemon: Pokemon) => {
  const { name, sprites, types, id, favorite } = pokemon;
  const dispatch = useAppDispatch();
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
