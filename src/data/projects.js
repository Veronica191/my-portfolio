import portfolioImg from '../assets/project-portfolio.svg'
import todoImg from '../assets/project-todo.svg'
import weatherImg from '../assets/project-weather.svg'
import quizImg from '../assets/project-quiz.svg'

export const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'Personal portfolio website built with React, Tailwind CSS, and Framer Motion to showcase projects, skills, and contact details.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: portfolioImg,
    github: 'https://github.com/Veronica191/my-portfolio',
    demo: 'https://my-portfolio-flax-pi-83.vercel.app/',
  },
  {
    id: 2,
    title: 'QuizWhiz app',
    description:
      'A quiz application that allows users to test their knowledge on various topics with multiple-choice questions and instant feedback.',
    tech: ['React', 'JavaScript'],
    image: todoImg,
    github: 'https://github.com/Veronica191/quizwhiz',
    demo: 'https://quizwhiz-teal.vercel.app/',
  },
  {
    id: 3,
    title: 'A Beauty salon website',
    description:
      'A website for booking beauty services.',
    tech: ['React', 'API Integration'],
    image: weatherImg,
    github: 'https://github.com/Veronica191/pay-beauty',
    demo: 'https://pay-beauty.vercel.app',
  },
  {
    id: 4,
    title: 'Bible Quiz App',
    description:
      'Interactive Bible quiz application for children with engaging questions and instant feedback.',
    tech: ['React', 'JavaScript'],
    image: quizImg,
    github: 'https://github.com/yourusername/bible-quiz-app',
    demo: 'https://your-bible-quiz-app.vercel.app',
  },
]
