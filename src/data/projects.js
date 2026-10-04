import { socialLinks } from '../config/socialLinks'

// All project links live here. `live` is optional - leave it out/null to hide the Live Demo button.
// Replace `github` with each repository URL when you have it.
const GH = socialLinks.github

const web = ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']
const extra = [
  {
    id: 'coffee-shop',
    title: 'Coffee Shop E-commerce',
    subtitle: 'Online shop website',
    description: 'A responsive e-commerce website for a coffee shop with a PHP and MySQL backend.',
    image: '/projects/coffee-shop.jpg',
    screenshots: ['/projects/coffee-shop.jpg'],
    tech: web,
    overview: 'An online shop that lets customers browse coffee products and place orders from any device.',
    problem: 'Small shops often rely on walk-in sales and have no simple way to sell online.',
    solution: 'A database-driven PHP site with a responsive CSS front end and stored product and order data.',
    features: ['Responsive layout', 'Product listing', 'PHP backend', 'MySQL database'],
    github: GH,
    live: null,
  },
  {
    id: 'beauty-parlour',
    title: 'Beauty Parlour Management',
    subtitle: 'Management system',
    description: 'A management system for a beauty parlour, built with PHP and MySQL.',
    image: '/projects/beauty-parlour.jpg',
    screenshots: ['/projects/beauty-parlour.jpg'],
    tech: web,
    overview: 'A web system that helps a beauty parlour organise its day-to-day records.',
    problem: 'Paper-based records make appointments and customer details hard to track.',
    solution: 'A PHP and MySQL application that keeps records in one database behind a responsive interface.',
    features: ['Responsive interface', 'PHP backend', 'MySQL database', 'Record management'],
    github: GH,
    live: null,
  },
  {
    id: 'expense-tracker',
    title: 'Daily Expense Tracker',
    subtitle: 'Personal finance tool',
    description: 'A daily expense tracker with database integration, built with PHP and MySQL.',
    image: '/projects/expense-tracker.jpg',
    screenshots: ['/projects/expense-tracker.jpg'],
    tech: web,
    overview: 'A simple tool for recording daily spending and reviewing it later.',
    problem: 'Spending is easy to forget when it is not written down in one place.',
    solution: 'A PHP application that stores each expense in MySQL so it can be reviewed any time.',
    features: ['Expense entry', 'Database integration', 'Responsive design', 'PHP backend'],
    github: GH,
    live: null,
  },
]

export const projects = [
  {
    id: 'sr-rent-a-car',
    title: 'SR Rent A Car',
    subtitle: 'Car Rental Management System',
    description: 'A full rental platform where customers browse vehicles and book online while admins manage fleet and bookings.',
    image: '/projects/sr-rent-a-car.jpg',
    screenshots: ['/projects/sr-rent-a-car.jpg'],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    overview: 'SR Rent A Car is a web-based system that digitises a car rental business, from vehicle listing to final invoice.',
    problem: 'Manual bookings and paper records made it hard to track vehicle availability, customer requests and payments.',
    solution: 'A database-driven PHP application with customer accounts, live availability, an admin dashboard and automatic invoice calculation.',
    features: ['User registration and login', 'Vehicle listing with details', 'Online booking system', 'Admin dashboard', 'Booking management', 'Invoice calculation'],
    github: GH,
    live: null,
  },
  
  ...extra,
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Developer portfolio website',
    description: 'This site: a fast, responsive React portfolio with dark and light themes and a project case-study viewer.',
    image: '/projects/portfolio.jpg',
    screenshots: ['/projects/portfolio.jpg'],
    tech: ['React', 'CSS', 'Framer Motion'],
    overview: 'A single-page portfolio built to present projects, skills and services to clients and employers.',
    problem: 'Generic templates make it hard to stand out or show real project depth.',
    solution: 'A custom design with case-study modals, theme switching, accessible navigation and one-file configuration.',
    features: ['Dark and light themes', 'Responsive navigation', 'Project case-study modal', 'Contact via email or WhatsApp', 'Centralised data files', 'Accessible and SEO-ready'],
    github: GH,
    live: null,
  },
]
