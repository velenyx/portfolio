import { skillsConfig } from './skills-config';
import { cn } from '@/shared/libs';

interface SkillsSectionProps {
  className?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  return (
    <section
      itemScope
      itemType='http://schema.org/Specialty'
      aria-labelledby='skills-heading'
      className={className}
    >
      <h2 id='skills-heading' className='pb-1 pt-2 text-2xl font-bold'>
        Skills
      </h2>
      {skillsConfig.map((skillCategory, categoryIndex) => (
        <section key={skillCategory.section} aria-labelledby={`category-heading-${categoryIndex}`}>
          <h3 id={`category-heading-${categoryIndex}`} className='text-1xl pt-2 font-bold'>
            {skillCategory.section}
          </h3>
          <ul className='flex flex-wrap gap-2 pt-1'>
            {skillCategory.skills.map((skill, skillIndex) => (
              <li
                key={skill.name}
                className={cn(
                  'relative cursor-pointer rounded border-[1px] border-solid border-neutral-400 border-opacity-40 bg-slate-100 bg-opacity-50 p-2 leading-none   transition-colors hover:border-orange-300 hover:border-opacity-90',
                  skill.favorite && 'hover:border-red-400'
                )}
                itemProp='itemListElement'
                itemScope
                itemType='http://schema.org/ListItem'
              >
                <meta itemProp='position' content={`${skillIndex + 1}`} />
                <p itemProp='name'>{skill.name}</p>
                {skill.favorite && (
                  <span className='absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rotate-12 transform text-red-500'>
                    ❤️
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};
