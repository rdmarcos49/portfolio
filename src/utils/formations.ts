interface Description {
  date: string;
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
        date: '',
        description: '',
      },
      {
        date: '',
        description: '',
      },
    ]
  },
  {
    title: 'Web UI Developer @ Globant',
    date: 'March 2020 - September 2021',
    items: [
      {
        date: '',
        description: '',
      },
      {
        date: '',
        description: '',
      },
    ]
  },
  {
    title: 'Internship @ Globant',
    date: 'November 2019 - January 2020',
    items: [
      {
        date: '',
        description: '',
      },
      {
        date: '',
        description: '',
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
        date: '',
        description: '',
      },
    ]
  },
  {
    title: 'Systems Analyst @ UNICEN',
    date: 'March 2015 - December 2019',
    items: [
      {
        date: '',
        description: '',
      },
    ]
  },
]
