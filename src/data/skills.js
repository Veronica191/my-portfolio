import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostgresql,
  SiPython,
  SiPandas,
  SiNumpy,
} from 'react-icons/si'

import {
  FaCss3Alt,
  FaCode,
  FaCloud,
  FaDatabase,
  FaChartBar,
} from 'react-icons/fa'

export const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
    ],
  },

  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: FaCode },
      { name: 'Vercel', icon: SiVercel },
    ],
  },

  {
    category: 'Currently Learning',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'SQL', icon: SiPostgresql },
      { name: 'Data Cleaning & EDA', icon: FaDatabase },
      { name: 'Data Visualization', icon: FaChartBar },
    ],
  },
]