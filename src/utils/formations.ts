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
    title: 'Software Engineer @ GlobalTask',
    date: 'September 2021 - Present',
    items: [
      {
        date: 'June 2022 - Present',
        description: `I'm participating, as a core member of the team, in the redesign of a web
          page for a finance-related application. This app has different sections.
          It's main characteristic is a complete flow that consists of validating the
          user's identity to allow them to acquire the services offered by the
          company. We also developed a fully customizable blog, user profile, and
          many landing pages.`,
      },
      {
        date: 'September 2021 - June 2022',
        description: `We builted an entire onboarding app from a scratch, with a backoffice
          application to manage the users registered. I also participated in the
          development of a landing page, where the users can buy BTC. `,
        },
    ]
  },
  {
    title: 'Web UI Developer @ Globant',
    date: 'March 2020 - September 2021',
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
          The final project was a page design and development using the Spotify API`,
      },
    ]
  },
]

export const education: Formation[] = [
  {
    title: 'Systems Engineer @ UNICEN',
    date: 'March 2015 - Present',
    items: [
      {
        description: 'Final Project in progress',
      },
    ]
  },
  {
    title: 'Systems Analyst @ UNICEN',
    date: 'March 2015 - December 2019',
    items: [
      {
        description: 'Intermediate degree from Systems Engineer career. Finished',
      },
    ]
  },
]
