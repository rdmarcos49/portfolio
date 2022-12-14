export interface Technology {
  titleLight?: string;
  titleBold?: string;
  items: TechnologyItem[];
}

interface TechnologyItem {
  thumbnail: string;
  description: string;
}

export const listOfTechnologies: Technology[] = [
  {
    titleLight: 'In ',
    titleBold: 'my day to day...',
    items: [
      {
        thumbnail: '/icons/code.png',
        description: 'I work with Javascript, React, Redux, React router, NextJS,'
      },
      {
        thumbnail: '/icons/chemistry.png',
        description: 'Jest, React testing library,'
      },
      {
        thumbnail: '/icons/paint-brown.png',
        description: 'Styled components and Material UI.'
      },
    ]
  },
  {
    titleLight: '',
    titleBold: 'I had the chance...',
    items: [
      {
        thumbnail: '/icons/modules.png',
        description: 'to use technologies as Typescript, Storybook, Webpack, Atomic design, JQuery,'
      },
      {
        thumbnail: '/icons/paint-blue.png',
        description: 'SCSS and LESS.'
      },
    ]
  },
  {
    titleLight: 'In ',
    titleBold: 'my personal projects...',
    items: [
      {
        thumbnail: '/icons/lightbulb.png',
        description: 'I practiced with different technologies to get to know them and understand their behavior.'
      },
      {
        thumbnail: '/icons/server.png',
        description: 'Some of this technologies are NodeJS, Express,'
      },
      {
        thumbnail: '/icons/webpage.png',
        description: 'Puppeteer, Cypress,'
      },
      {
        thumbnail: '/icons/database.png',
        description: 'MongoDB, Amazon S3.'
      },
    ]
  }
]
