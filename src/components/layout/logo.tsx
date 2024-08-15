import Link from 'next/link';
import Image from 'next/image';

const NavLogo = ({ width, height }) => {
  return (
    <Link href="/">
      <Image 
        src="/edtech.png" 
        alt="Logo" 
        width={width} 
        height={height}
      />
    </Link>
  );
};

export default NavLogo;