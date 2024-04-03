import styles from './style.module.scss';
import Card from '@/src/shared/ui/Card';
import { Item } from '@/src/constants/index.type';

const CardList = ({ items }: { items: Item[] | null | undefined }) => {
  if (!(items && items.length))
    return (
      <div className={styles.null_container}>
        <p> 저장된 링크가 없습니다. </p>
      </div>
    );
  return (
    <div className={styles.container}>
      {items?.map((item: Item) => (
        <Card
          createdAt={item.createdAt}
          imageSource={item.imageSource}
          description={item.description}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default CardList;
