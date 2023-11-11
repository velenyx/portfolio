import { PersonalIntroductionSection, SkillsSection, TypingText, WorkSection } from '@/components';

export default function Home() {
  return (
    <>
      <PersonalIntroductionSection />

      <TypingText className='my-5 animate-slide-up duration-300' />

      <WorkSection />

      <SkillsSection className='animate-slide-up duration-500' />
    </>
  );
}
