interface ObjectiveItem {
  thumbnail: string;
  description: string;
}

export const listOfObjectives: ObjectiveItem[][] = [
  [
    {
      thumbnail: '/icons/statistics.png',
      description: 'I want to learn and master the CI/CD process, in order to improve the workflow of the team that I working.',
    },
    {
      thumbnail: '/icons/conversation.png',
      description: 'I think that anyone can learn something by helping their own teams to improve their git flows, deployments, tests on local and cloud environments, among others.',
    },
  ],
  [
    {
      thumbnail: '/icons/checklist.png',
      description: 'I also want to master other developing areas, and learn their patterns, data structures, architectures.',
    },
    {
      thumbnail: '/icons/vscode.png',
      description: 'Right now I’m working as frontend software engineer, but I really want to expand my knowledge, in order to apply it over professional projects.',
    },
  ]
]
