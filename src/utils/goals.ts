interface GoalItem {
  thumbnail: string;
  description: string;
}

export const listOfGoals: GoalItem[][] = [
  [
    {
      thumbnail: '/icons/graphic.png',
      description: 'To work on projects focused on scalability, high performance, user experience, and SEO, among other aspects.',
    },
  ],
  [
    {
      thumbnail: '/icons/checklist.png',
      description: 'I also want to learn about other areas, such as backend, cloud, UI/UX.',
    },
    {
      thumbnail: '/icons/vscode.png',
      description: 'Knowing about other areas gives me the chance to understand the needs of the product, and lets me work with the rest of my team in a more cohesive and efficient way.',
    },
  ],
]
