import { WorkActions } from './work-actions';

export const WorkSection = () => (
  <section
    itemScope
    itemType='http://schema.org/CreativeWork'
    className='duration-400 animate-slide-up'
  >
    <h2 className='pt-2 text-2xl font-bold'>Work</h2>
    <p className='indent-4'>
      Dmitriy is a young full-stack developer based in Vladimir with a passion for building digital
      services/stuff he wants. He has a knack for all things launching products, from planning and
      designing all the way to solving real-life problems with code. When he&apos;s offline, make
      sure he&apos;s learning something new to get better. My hobby is to do backend development for
      applications
    </p>
    <WorkActions />
  </section>
);
