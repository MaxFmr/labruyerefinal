import StyledService from './service.style';
import Image from 'next/image';

const Service = () => {
  return (
    <StyledService>
      <div className='photo'>
        <Image
          src='/assets/photos/service.webp'
          height={480}
          width={480}
          objectFit='cover'
        />
      </div>

      <div className='text'>
        <h2>Les évènements de votre vie</h2>
        <div className='para'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur quisquam at illo laborum quo, nemo sapiente vitae
            provident, officiis nostrum rerum animi quia quos fuga eligendi
            eaque sint impedit perspiciatis? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Architecto eveniet, a, laudantium
            laborum, officia odio totam in nisi voluptatibus soluta asperiores
            magnam corrupti eum enim sed beatae nihil quisquam facere. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam
            provident labore beatae, omnis enim tempore ullam officiis suscipit
            odit rem veniam doloribus voluptatem commodi neque cumque, maiores
            harum dolor!
          </p>
        </div>
      </div>
    </StyledService>
  );
};
export default Service;
