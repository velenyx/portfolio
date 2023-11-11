interface Skill {
  name: string;
  favorite?: boolean;
}

interface SkillsConfig {
  section: string;
  skills: Skill[];
}

export const skillsConfig: SkillsConfig[] = [
  {
    section: 'Frontend',
    skills: [
      {
        name: 'JavaScript(ES6+, DOM)',
      },
      {
        name: 'TypeScript',
        favorite: true,
      },
      {
        name: 'React(FC, Hooks)',
        favorite: true,
      },
      {
        name: 'Redux Toolkit',
      },
      {
        name: 'RTK Query',
      },
      {
        name: 'StyledComponents',
      },
      {
        name: 'CSS-SCSS',
        favorite: true,
      },
      {
        name: 'HTML/HTML5',
      },
      {
        name: 'Adaptive-cross-browser layout',
      },
      {
        name: 'NextJS',
        favorite: true,
      },
    ],
  },
  {
    section: 'Backend',
    skills: [
      {
        name: 'Node.js',
        favorite: true,
      },
      {
        name: 'Express',
      },
      {
        name: 'MongoDB',
      },
      {
        name: 'NestJS',
        favorite: true,
      },
    ],
  },
  {
    section: 'General',
    skills: [
      {
        name: 'Git-GitFlow',
        favorite: true,
      },
      {
        name: 'Jira',
      },
      {
        name: 'CORS',
      },
      {
        name: 'REST API',
      },
      {
        name: 'HTTP',
      },
      {
        name: 'OOP',
      },
    ],
  },
  {
    section: 'Languages',
    skills: [
      {
        name: 'Ukrainian(Native)',
      },
      {
        name: 'English(Intermediate)',
      },
      {
        name: 'Russian(Native)',
      },
    ],
  },
];
