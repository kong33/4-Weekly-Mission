import Image from 'next/image';
import search from '@/src/public/images/Search.png';
export default function Home() {
  return (
    <>
      <h1>테스트</h1>
      <Image src={search} alt="돋보기" width={40} height={50} />
      <Image
        src="https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png"
        alt="외부"
        width={30}
        height={29}
      />
    </>
  );
}
