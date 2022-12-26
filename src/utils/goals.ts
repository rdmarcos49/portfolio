interface GoalItem {
  thumbnail: string;
  description: string;
}

export const listOfGoals: GoalItem[][] = [
  [
    {
      thumbnail: '/icons/graphic.png',
      description: 'One of my goals is to work on projects focused on different aspects; scalability, high performance, user experience, SEO.',
    },
  ],
  [
    {
      thumbnail: '/icons/checklist.png',
      description: 'I also want to learn a little bit about other areas, such as backend, cloud, UI/UX.',
    },
    {
      thumbnail: '/icons/vscode.png',
      description: 'Knowing about other areas allows me to better understand the needs of the teams. In this way, I would support my work teams with greater efficiency.',
    },
  ],
]
