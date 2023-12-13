import { WorkActions } from './work-actions';

export const WorkSection = () => (
  <section
    itemScope
    itemType='http://schema.org/CreativeWork'
    className='duration-400 animate-slide-up'
  >
    <h2 className='pt-2 text-2xl font-bold'>Work</h2>
    <p className='indent-4'>
      Frontend code generation machine 🚗 I have extensive experience in building applications. I
      will be glad to meet new acquaintances and interesting proposals 🤝
    </p>
    <WorkActions />
  </section>
);
