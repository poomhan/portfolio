const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/poomhan',
  title: 'HP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hannarong Poosomnam',
  role: 'Junior Software Developer',
  description:
    'A Business Development who is experienced in marketing, finance, and investment for over ten years, I am a knowledge enthusiast who is transitioning to a Software Developer.',
  resume:
    'https://drive.google.com/file/d/15VQYf7XRLAReKWDK5D39CgRDOK53fAhL/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/hannarong-poosomnam-440149160/',
    github: 'https://github.com/poomhan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project Colmar Academy',
    description: 'creating responsive website using HTML and CSS',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/poomhan/Colmar',
    livePreview: 'https://colmar-k6iha8eil-poomhan.vercel.app/',
  },
  {
    name: 'Health Tracker Website',
    description:
      'creating interactive and reponsive website which tracks exercise activity using JavaScript, ReactJS, ExpressJS, using MERN stack with login capability and MongoDB',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Jamming',
    description: `Creating responsive website which allows users to create playlist and save to Spotify; linking the website to Spotify's API`,
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/poomhan/jsd-jammming-assessment-class',
    livePreview: 'http://poomhan.surge.sh/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'MongoDB',
  'SQL',
  'Python',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'poomhan@mail.com',
}

export { header, about, projects, skills, contact }
