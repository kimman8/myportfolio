const header = {
  homepage: 'https://github.com/kimman8',
  title: 'KY.',
}

const about = {
  name: 'Kim Yuen',
  role: 'Front End Engineer',
  description: 'Avid rock climber who loves to code',
  resume: 'https://github.com/kimman8',
  social: {
    linkedin: 'https://www.linkedin.com/in/kim-yuen/',
    github: 'https://github.com/kimman8',
  },
}

const projects = [
  {
    name: 'Lucky Start',
    description:
      'A website for a local Chinese takeaway joint called Lucky Start. The data was sourced from a REST API.',
    stack: ['StyledComponents', 'JavaScript', 'React', 'Gatsby', 'GraphQL'],
    sourceCode: 'https://github.com/kimman8/gatsby-pizza',
    livePreview: 'https://luckystart.netlify.app/lunch',
  },
  {
    name: 'Vibroflow Searcher',
    description:
      'A database of vibratory machinery that enables users to easily search for machinery by filtering via the machinery’s features.',
    stack: ['Tailwind', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/kimman8/vibroflow-gallery',
    livePreview: 'https://vibroflow-gallery.vercel.app/',
  },
  {
    name: 'Climbing Anchors',
    description:
      'Online e-commerce store for purchasing and selling cool climbing equipment!',
    stack: [
      'KeyStone.JS',
      'JavaScript',
      'React',
      'TypeScript',
      'GraphQL',
      'StyledComponents',
      'Next.JS',
      'Apollo Client',
    ],
    sourceCode: 'https://github.com/kimman8/sickfits-frontend',
    livePreview: 'https://climbing-anchors.netlify.app/products',
  },
  {
    name: 'Breaking Bad App',
    description:
      'This app was created with React and the Breaking Bad API to show and filter character info.',
    stack: ['JavaScript', 'React', 'StyledComponents', 'Axios'],
    sourceCode: 'https://github.com/kimman8/breaking-bad',
    livePreview: 'https://ilovebreakingbad.netlify.app/',
  },
]

const skills = [
  'React',
  'JavaScript',
  'CSS',
  'HTML',
  'TypeScript',
  'Git',
  'GraphQL',
  'Gatsby',
  'Next.JS',
  'StyledComponents',
  'TailwindCSS',
]

const contact = {
  email: 'klyuen91@gmail.com',
}

export { header, about, projects, skills, contact }
