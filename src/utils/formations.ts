export interface Description {
  date?: string;
  description: string;
}

interface Formation {
  title: string;
  date: string;
  items: Description[];
}

export const workExperience: Formation[] = [
  {
    title: 'Software Developer @ GlobalTask',
    date: 'September 2021 - Present',
    items: [
      {
        date: 'November 2022 - Present',
        description: `Currently, I'm working on a fintech project developing an application
          to get the "financial score" for users. I'm also contributing to a dashboard app,
          which is part of the entire project.`,
      },
      {
        date: 'June 2022 - November 2022',
        description: `I participated, as a core member of the team, in the redesign of
          an entire website related to the fintech area. This application has, as its principal
          objective, to generate credit reports for the final user. My main tasks, besides the
          mentioded objetive, were related to proposing and developing improvements for UI/UX and SEO.`,
      },
      {
        date: 'September 2021 - June 2022',
        description: `We created from a scratch a series of applications related to each other:
          one of them oriented to the purchase of BTC, an onboarding for user creation,
          and a back-office / dashboard for managing them.`,
        },
    ]
  },
  {
    title: 'Web UI Developer @ Globant',
    date: 'February 2020 - September 2021',
    items: [
      {
        date: 'February 2021 - September 2021',
        description: `I joined the development and maintenance of a digital educative
          platform. My task were develop features, testing, code improvement and
          maintenance.`,
      },
      {
        date: 'August 2020 - February 2021',
        description: `E-Commerce development, maintenance and migration from plain
          Javascript application to a React application.`,
      },
      {
        date: 'February 2020 - August 2020',
        description: `Development, maintenance, code quality improvement and SEO for a
          landing page, related with an internal social media.`
      }
    ]
  },
  {
    title: 'Internship @ Globant',
    date: 'November 2019 - January 2020',
    items: [
      {
        description: `Development professional practices for the university through a Front End bootcamp. This were my first steps in the professional environment.
          The final project was a SPA using the Spotify API, Redux and the browser storage.`,
      },
    ]
  },
]

export const education: Formation[] = [
  {
    title: 'Software Engineer @ UNICEN',
    date: 'March 2015 - Present',
    items: [
      {
        description: 'Final Project in progress.',
      },
    ]
  },
  {
    title: 'Software Analyst @ UNICEN',
    date: 'March 2015 - December 2019',
    items: [
      {
        description: 'Intermediate degree from Software Engineer career. Finished.',
      },
    ]
  },
]
