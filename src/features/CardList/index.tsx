import styles from './style.module.scss';
import Card from '@/src/app/ui/Card';

const CardList = ({ items }: { items: Item[] | null | undefined }) => {
  if (!(items && items.length))
    return (
      <div className={styles.null_container}>
        <p> 저장된 링크가 없습니다. </p>
      </div>
    );
  return (
    <div className={styles.container}>
      {items.map((item: Item) => (
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

export interface Item {
    id: number;
    createdAt: string;
    updated_at?: string;
    url: string;
    title?: string;
    description?: string;
    imageSource?: string;
    folder_id?: number;
  }
  