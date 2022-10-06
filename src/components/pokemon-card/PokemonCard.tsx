import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Pokemon } from '../pokemon-list/PokemonList.model';
import './PokemonCard.css';

const PokemonCard = (pokemon: Pokemon) => {
  const { name, url } = pokemon;

  return (
    <Card
      title={name}
      cover={<img src={url} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
