import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { MouseEventHandler } from 'react';

interface Props {
  isFavorite: boolean;
  onClick: MouseEventHandler<HTMLElement> | undefined;
}

const StarButton = ({ isFavorite, onClick }: Props) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} />;
};

export default StarButton;
