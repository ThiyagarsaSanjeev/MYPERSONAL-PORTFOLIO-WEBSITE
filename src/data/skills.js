import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaGitAlt, FaGithub, FaGitlab } from 'react-icons/fa'
import { SiJavascript, SiMysql } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { FiActivity, FiCheckSquare, FiDatabase, FiFileText, FiServer } from 'react-icons/fi'

// `level` is a self-assessment (0-100), not a test result.
export const skillGroups = [
  { title: 'Frontend', skills: [
    { name: 'HTML', icon: FaHtml5, level: 85, desc: 'Semantic, accessible page structure.' },
    { name: 'CSS', icon: FaCss3Alt, level: 80, desc: 'Responsive layouts with Flexbox and Grid.' },
    { name: 'JavaScript', icon: SiJavascript, level: 70, desc: 'ES6+, DOM and async code.' },
    { name: 'React', icon: FaReact, level: 70, desc: 'Components, hooks and state.' },
  ] },
  { title: 'Backend', skills: [
    { name: 'PHP', icon: FaPhp, level: 70, desc: 'Server-side logic, sessions and forms.' },
    { name: 'REST API', icon: FiServer, level: 55, desc: 'Building and consuming JSON endpoints.' },
  ] },
  { title: 'Database', skills: [
    { name: 'MySQL', icon: SiMysql, level: 70, desc: 'Schema design and SQL queries.' },
    { name: 'SQL Server', icon: FiDatabase, level: 55, desc: 'Relational data and queries.' },
  ] },
  { title: 'Testing', skills: [
    { name: 'Selenium', icon: FiCheckSquare, level: 50, desc: 'Automated browser testing.' },
    { name: 'Apache JMeter', icon: FiActivity, level: 50, desc: 'Load and performance testing.' },
  ] },
  { title: 'Tools', skills: [
    { name: 'Git', icon: FaGitAlt, level: 70, desc: 'Branches, commits and merges.' },
    { name: 'GitHub', icon: FaGithub, level: 70, desc: 'Repositories and collaboration.' },
    { name: 'GitLab', icon: FaGitlab, level: 55, desc: 'Version control and repositories.' },
    { name: 'VS Code', icon: VscVscode, level: 85, desc: 'Daily editor and debugging.' },
    { name: 'Jasper Reports', icon: FiFileText, level: 50, desc: 'Report design and output.' },
  ] },
]
