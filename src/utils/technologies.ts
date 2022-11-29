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
        description: 'I working with Javascript, Typescript, React, Redux, React router, NextJS,'
      },
      {
        thumbnail: '/icons/chemistry.png',
        description: 'Jest, React testing library,'
      },
      {
        thumbnail: '/icons/paint-brown.png',
        description: 'SCSS and LESS.'
      },
    ]
  },
  {
    titleLight: 'I had the chance, ',
    titleBold: 'in some projects that I worked...',
    items: [
      {
        thumbnail: '/icons/modules.png',
        description: 'to use technologies as Storybook, Webpack, Atomic design, JQuery,'
      },
      {
        thumbnail: '/icons/paint-blue.png',
        description: 'Styled components and Material UI.'
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
        description: 'Some of this technologies are Python, NodeJS, Express,'
      },
      {
        thumbnail: '/icons/webpage.png',
        description: 'Puppeteer, Cypress,'
      },
      {
        thumbnail: '/icons/database.png',
        description: 'MongoDB, Mongoose, Amazon S3.'
      },
    ]
  }
]
