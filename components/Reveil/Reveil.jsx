import ParalaxBanner from '../ParallaxBanner/ParallaxBanner';
import Link from 'next/link';
import StyledReveil from './reveil.style';
const Reveil = () => {
  return (
    <StyledReveil>
      <ParalaxBanner
        photoPath={
          'https://res.cloudinary.com/amenitiz/image/upload/w_2000,dpr_auto,c_scale,q_auto:best/v1636706053/vadbnrua0bvxva4tmvaj.jpg'
        }
        text={''}
        logo={
          'https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1617883865/i06hmu68pax07fnddz0a.png'
        }></ParalaxBanner>

      <p
        className='reveil'
        style={{
          color: '#2F4858',
          padding: '3%',
          margin: '3vh 0% 10vh 0%',
          textAlign: 'justify',
          fontSize: '1.2em',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        La Table de la Bruyère est le traiteur exclusif du domaine Le Réveil de
        la Bruyère.
        <br /> Nous bénéficions d’un cadre de rêve, au coeur de l’Avesnois, à
        proximité de Valenciennes, dans une ancienne maison de famille, nichée
        au milieu d’un parc.
        <br />
        <div style={{ marginTop: '10px' }}></div>
        <Link href='https://www.lereveildelabruyere.com/fr'>
          Infos et réservations
        </Link>
      </p>
    </StyledReveil>
  );
};
export default Reveil;
