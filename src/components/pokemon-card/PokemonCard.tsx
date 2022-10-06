import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Pokemon } from '../../models/pokemon';
import './PokemonCard.css';

const PokemonCard = (pokemon: Pokemon) => {
  const { name, sprites } = pokemon;
  return (
    <Card
      title={name}
      cover={<img src={sprites.front_default} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
