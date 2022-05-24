import Image from 'next/image';
import image from '../public/UserAccount.png';


export default function NavBar({currentPage}) {

    return (
    <section style={{ color: 'white', backgroundColor: 'black', display: 'flex' }}>
      <Image src={image} alt="Picture of the author" width={100} height={100} style={{ padding: '10px' }} />
      <h3 style={{ display: 'inline', padding: '20px' }}>{currentPage}</h3>
    </section>
  );
};
