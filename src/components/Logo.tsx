import Image from 'next/image';
import Blob from 'public/svg/blob-logo.png';

const Logo = () => {
  return (
    <div className='flex items-center gap-3'>
      <Image
        src={Blob}
        alt='logo'
        className=' h-16 w-16 cursor-pointer transition-all hover:scale-105 active:scale-110'
      />
    </div>
  );
};

export default Logo;
