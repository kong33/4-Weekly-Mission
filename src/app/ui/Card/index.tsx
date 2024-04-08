import { formatDate } from '../../lib/utils/formatDate';
import { timeCalculator } from '../../lib/utils/timeCalculator';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Image from 'next/image';
import LinkbraryLogo from '@/public/images/linkbraryLogo.png';
import kebab from '@/public/images/kebab.png';
import filledStar from '@/public/svgs/filledStar.svg';
import star from '@/public/svgs/star.svg';
// import star from '@/public/svgs/star.svg';

interface CardProps {
  createdAt: string;
  imageSource: string | undefined;
  description: string | undefined;
}

const Card = ({ createdAt, imageSource, description }: CardProps) => {
  const createdDate = formatDate(createdAt);
  const timeFromCreated = timeCalculator(createdAt);
  const [isClicked, setIsClicked] = useState(false);

  const handleStarClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.container}>
      <Link to="/newPage" className={styles.link}>
        <div
          className={`${styles.imgWrapper} ${Boolean(imageSource) ? styles.withImage : styles.noImage}`}
        >
          <Image
            src={LinkbraryLogo}
            alt="linkbrary"
            width={132}
            height={24}
            className={`${styles.backgroundLogo} ${Boolean(imageSource) ? styles.withImage : styles.noImage}`}
          />
          <img src={imageSource || undefined} className={styles.image} alt="썸네일 이미지" />
        </div>

        <div className={styles.pWrapper}>
          <p className={styles.time}>{timeFromCreated}</p>
          <div className={styles.commentWrapper}>
            <p className={styles.description}>{description}</p>
          </div>
          <p className={styles.date}>{createdDate}</p>
        </div>
      </Link>
      <Image
        alt="star"
        width={32}
        height={32}
        className={styles.star}
        src={isClicked ? filledStar : star}
        onClick={handleStarClick}
      />
      <Image alt="kebab" width={20} height={16} className={styles.kebab} src={kebab} />
    </div>
  );
};

export default Card;
