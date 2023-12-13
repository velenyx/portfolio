import { WorkItem } from '@/components';

const projects = [
  {
    id: 1,
    title: 'Teameights',
    description:
      'Web-based platform for student developers to find each other and work together on pet projects, tournaments between teams, duels between members, mentorships, AI code review and more.',
    technologies: ['react', 'mongodb', 'nestjs'],
    thumbnail: '/images/teameights.png',
    link: 'https://teameights.com',
  },
];

const WorksPage = () => {
  return (
    <section className='h-full'>
      <h2 className='text-start text-3xl font-semibold'>My works:</h2>
      <div className='h-full flex flex-col items-center justify-center -m-6'>
        {projects.map((project, index) => (
          <WorkItem work={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WorksPage;
