import Link from 'next/link';
import StyledFooter from './footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        Site web, design et développement par{' '}
        <Link href={'https://www.maximekerlidou.fr'}>Maxime KERLIDOU</Link>
      </span>
      <span>
        Photos, Videos, Montage par{' '}
        <Link href={'https://www.bayardclement.fr'}> Clément Bayard</Link>{' '}
      </span>
      <span>
        <Link href={'/legal'}>Mentions légales</Link>{' '}
      </span>
    </StyledFooter>
  );
};
export default Footer;
