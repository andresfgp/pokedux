import { Input } from 'antd';
import { useAppDispatch } from '../../slices';
import { searchPokemons } from '../../slices/dataSlice';

const Searcher = () => {
  const dispatch = useAppDispatch();
  const handleInput = (event: { target: { value: string } }) => {
    dispatch(searchPokemons(event.target.value));
  };
  return (
    <Input.Search
      placeholder="Buscar..."
      style={{ marginBottom: 30 }}
      onChange={handleInput}
    />
  );
};

export default Searcher;
