import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostgresql,
} from 'react-icons/si'
import { FaCss3Alt, FaCode, FaNodeJs, FaCloud, FaDatabase } from 'react-icons/fa'

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
      { name: 'APIs', icon: FaCloud },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Databases', icon: FaDatabase },
    ],
  },
]
