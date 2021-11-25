const header = {
  homepage: 'https://github.com/kimman8',
  title: 'KY.',
}

const about = {
  name: 'Kim Yuen',
  role: 'Frontend Developer',
  description:
    'Frontend Developer with an appetite for growth. Currently focused on React and loving the magical world of coding.',
  resume: 'https://resume.io/r/UaBM5SwLP',
  social: {
    linkedin: 'https://www.linkedin.com/in/kim-yuen/',
    github: 'https://github.com/kimman8',
  },
}

const projects = [
  {
    name: 'Lucky Start',
    description:
      'A responsive website for a local Chinese takeaway joint called Lucky Start. Gatsby Image was used to optimize the images automatically and GraphQL was used to query the files.',
    stack: ['styled-components', 'JavaScript', 'React', 'Gatsby', 'GraphQL'],
    sourceCode: 'https://github.com/kimman8/gatsby-pizza',
    livePreview: 'https://luckystart.netlify.app/lunch',
  },
  {
    name: 'Vibroflow Searcher',
    description:
      'A database of vibratory machinery that enables users to easily search for machinery by filtering via the machinery’s features.',
    stack: ['TailWind CSS', 'JavaScript', 'React', 'axios'],
    sourceCode: 'https://github.com/kimman8/vibroflow-gallery',
    livePreview: 'https://vibroflow-gallery.vercel.app/',
  },
  {
    name: 'Climbing Anchors',
    description:
      'Rock climbing website showcasing some of the best locations for indoor and outdoor rockclimbing as well as some awesome rock climbing gear!',
    stack: ['JavaScript', 'React', 'styled-components'],
    sourceCode: 'https://github.com/kimman8/climbing-react',
    livePreview: 'https://rock-climbing.netlify.app/',
  },
  {
    name: 'KA CHING Banking',
    description:
      'Banking website built using styled-components and React Smooth Scroll. The website is fully responsive and utilises React Hooks and React Router.',
    stack: ['JavaScript', 'React', 'styled-components'],
    sourceCode:
      'https://github.com/kimman8/smooth-scroll-react-website-styled-components',
    livePreview: 'https://kaching.netlify.app/',
  },
  {
    name: 'Breaking Bad App',
    description:
      'This app was created with React and the Breaking Bad API to show and filter character info.',
    stack: ['JavaScript', 'React', 'styled-components', 'Axios'],
    sourceCode: 'https://github.com/kimman8/breaking-bad',
    livePreview: 'https://ilovebreakingbad.netlify.app/',
  },
  {
    name: 'Expense Tracker',
    description:
      'This Expense Tracker was created with React Hooks (useState, useContext, useReducer) and the context API to help keep track of expenses and incomes.',
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/kimman8/expense-tracker',
    livePreview: 'https://helptrackmyexpenses.netlify.app/',
  },
]

const skills = [
  'React',
  'JavaScript',
  'CSS3',
  'HTML5',
  'TypeScript',
  'Git',
  'GraphQL',
  'Gatsby',
  'Next.JS',
  'styled-components',
  'TailWind CSS',
]

const contact = {
  email: 'klyuen91@gmail.com',
}

export { header, about, projects, skills, contact }
