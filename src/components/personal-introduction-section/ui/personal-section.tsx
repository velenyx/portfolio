import { ProfileImage } from './profile-image';

export const PersonalIntroductionSection = () => (
  <section className='flex animate-slide-up flex-wrap items-center justify-center duration-200 sm:flex-nowrap'>
    <div itemScope itemType='http://schema.org/Person'>
      <h1 className='pb-2 text-4xl font-bold'>Dmitriy Sivritkin</h1>
      <p>🌌 I am Frontend Developer...</p>
    </div>
    <ProfileImage />
  </section>
);
