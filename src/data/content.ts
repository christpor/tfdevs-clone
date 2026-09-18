import { Article, Partner, BootcampModule } from '../types';

export const ARTICLES: Article[] = [
  {
    slug: 'why-bother-with-own-infra',
    title: 'Why I Bother With a Complicated Deployment Instead of Just Using Vercel',
    author: 'ចៅ ដារ៉ា',
    date: 'Jun 22, 2026',
    readTime: '3 minutes',
    tags: ['Deployment', 'Kubernetes', 'Homelab', 'Infrastructure'],
    excerpt: 'Learn why I choose to manage my own infrastructure for deployment instead of using Vercel, despite its ease of use and great support, and the benefits and challenges that come with it.',
    image: '/assets/images/images_articles_why-bother-with-own-infra_homelab.png',
    content: [
      "Many people ask why I bother deploying the TFDevs website through Cloudflare, a Cloudflare Tunnel, an Nginx gateway VM, and a K3s Kubernetes cluster instead of simply clicking deploy on Vercel. The truth is that Vercel is an excellent platform, and if my only goal was to get a website online as quickly as possible, I would probably use it.",
      "However, my objective goes beyond hosting a website. As a software engineer, instructor, and content creator, I want to understand the technologies that power modern web applications beneath the surface. Managed platforms hide much of the complexity involved in networking, reverse proxies, load balancing, container orchestration, monitoring, scaling, and security. By building and operating my own infrastructure, I gain hands-on experience with these technologies and develop a deeper understanding of how systems work in production.",
      "I also believe there is a risk for students who rely entirely on platforms such as Vercel, Netlify, or other managed services. These platforms are fantastic productivity tools, but they can create the illusion that web applications are simply Git repositories that magically become websites after a deployment. When something goes wrong—whether it is networking issues, performance bottlenecks, scaling problems, SSL configuration, reverse proxy errors, or infrastructure outages—many developers have little understanding of what is happening behind the scenes. As a result, they become highly dependent on a specific platform and struggle when they need to deploy applications in environments that do not provide the same abstractions.",
      "By running my own infrastructure, I learn not only how to build applications but also how to operate them. Every component in the stack teaches me something valuable, from Kubernetes and ingress controllers to observability, networking, and troubleshooting distributed systems. The homelab also serves as a playground where I can experiment with new technologies, host future projects, and demonstrate real-world infrastructure concepts to my students.",
      "While this approach requires significantly more effort and maintenance than a managed platform, the knowledge gained is far more valuable than the convenience saved. The website itself is only one application running on the infrastructure; the real project is learning, experimenting, and developing the engineering skills needed to understand and operate modern systems with confidence."
    ]
  },
  {
    slug: 'frontend-increasingly-fullstack',
    title: 'Modern Frontend Development: The Shift Toward Full-Stack Engineering',
    author: 'ចៅ ដារ៉ា',
    date: 'May 16, 2026',
    readTime: '10 minutes',
    tags: ['Frontend', 'Server-Side Rendering', 'FullStack', 'Next.js'],
    excerpt: 'Explore why modern frontend development now requires knowledge beyond HTML/CSS, including SSR, APIs, and full infrastructure, to survive in the era of Next.js and Nuxt.',
    image: '/assets/images/images_articles_ssr2_ssr2.jpg',
    content: [
      "Modern frontend development is increasingly becoming full-stack engineering, especially with the rise of SSR frameworks like Next.js, Nuxt, and SvelteKit. In the past, frontend development was mostly about HTML, CSS, and JavaScript running entirely in the browser — developers focused mainly on layouts, styling, animations, and user interactions.",
      "Today, frontend developers often deal with server-side rendering, API routes, caching strategies, authentication, SEO optimization, edge functions, database access, and understanding the trade-offs between client-side and server-side rendering. It increasingly feels like frontend and backend are merging together.",
      "A good analogy is that frontend developers used to mainly decorate and arrange the storefront of a restaurant, but now they are also expected to understand the kitchen workflow, inventory system, delivery process, and payment infrastructure behind it.",
      "In real projects, this becomes obvious very quickly: for example, a page may work perfectly in local development, but once deployed globally, developers suddenly need to debug SSR hydration mismatches, CDN cache invalidation, authentication cookies between server and browser, or why API calls behave differently on the server versus the client.",
      "Modern frontend work is no longer only about “making UI”; it is about understanding how the entire web application flows from browser to server to infrastructure. Young developers should therefore prepare beyond just learning frameworks and components — they should build knowledge in networking, HTTP caching, authentication, databases, deployment, observability, and performance optimization, because modern frontend engineering increasingly rewards developers who understand the whole system rather than only the visual layer."
    ]
  },
  {
    slug: 'framework',
    title: "Mastering a framework doesn't guarantee you a job",
    author: 'Chau Dara',
    date: 'May 14, 2026',
    readTime: '10 minutes',
    tags: ['Framework', 'Tech Industry', 'FullStack', 'Career'],
    excerpt: "Understand what a framework is and why mastering it alone isn't enough to secure a job in the tech industry.",
    image: '/assets/images/images_articles_framework_framework.png',
    content: [
      "Many people believe that studying a programming framework alone is enough to guarantee a software engineering job, but this is often not true. Frameworks such as React, NestJS, or Flutter are only tools used to build applications, while companies are actually looking for problem-solving ability, practical experience, and strong fundamentals.",
      "In Cambodia, job positions are often labeled as “React Developer,” “Flutter Developer,” or “Laravel Developer,” which can confuse beginners into thinking that mastering only the framework is enough to become employable.",
      "However, real software engineering involves much more than writing UI code or following tutorials. A strong engineer should be able to build and maintain a complete full-stack system end to end, including frontend, backend, databases, APIs, deployment, monitoring, security, and scalability. Developers are also expected to understand the software development life cycle, from planning and development to testing, deployment, maintenance, and monitoring production systems.",
      "A person may know the syntax of a framework but still struggle with debugging, teamwork, infrastructure, version control, or handling real-world production problems. Furthermore, frameworks change over time, so employers prefer candidates who can adapt and learn new technologies quickly rather than those who only memorize one framework.",
      "Therefore, learning frameworks is useful, but building real projects, understanding computer science fundamentals, and gaining experience owning systems end to end are what truly improve long-term career opportunities."
    ]
  },
  {
    slug: 'ai-usage-discipline',
    title: 'The importance of AI usage discipline in learning',
    author: 'Chau Dara',
    date: 'April 27, 2026',
    readTime: '10 minutes',
    tags: ['AI', 'Learning', 'Discipline', 'Productivity'],
    excerpt: 'Explore why developing discipline in using AI tools is crucial for students to build resilience, problem-solving skills, and confidence in their learning journey.',
    image: '/assets/images/images_articles_ai-usage-discipline_ai-usage-discipline.png',
    content: [
      "Students who rely too heavily on AI early in their learning may become efficient but miss out on the struggle that builds resilience, problem-solving ability, and confidence.",
      "This is where the idea of “AI Discipline” becomes important—the conscious choice to use AI responsibly, similar to how a student chooses not to cheat on an exam even when it’s easy to do so.",
      "Without this discipline, students may skip hard work, develop a fragile foundation, and struggle when facing real-world problems that require independent thinking and persistence. Over time, this gap can lead to self-doubt, burnout, and even depression.",
      "AI itself isn’t the problem; overdependence is. What matters is the ability to balance its use while still embracing difficulty, because resilience—not convenience—is what ultimately prepares students for reality."
    ]
  }
];

export const BOOTCAMP_MODULES: BootcampModule[] = [
  {
    id: 'module-1',
    title: 'Core Fundamentals & Native Web',
    duration: '2 Weeks',
    description: 'Build things from scratch without using a framework',
    topics: ['Semantic HTML5 & Modern CSS3', 'JavaScript ES6+ Deep Dive', 'DOM Manipulation & Event Loop', 'TailwindCSS Styling Architecture', 'Responsive Design & Box Model']
  },
  {
    id: 'module-2',
    title: 'Frontend with Vue.js & Modern Ecosystem',
    duration: '4 Weeks',
    description: 'Build robust reactive frontend applications',
    topics: ['Vue 3 Composition API & Reactivity', 'Pinia State Management', 'Routing & Navigation Guards', 'Component Architecture & Props/Emits', 'Netlify / Vercel Production Build']
  },
  {
    id: 'module-3',
    title: 'Backend Engineering & API Design',
    duration: '5 Weeks',
    description: 'Build secure, scalable RESTful APIs and databases',
    topics: ['Node.js & Express.js Server Setup', 'MongoDB & Mongoose Schema Modeling', 'JWT Authentication & RBAC', 'RESTful API Best Practices & Swagger Docs', 'Bakong KHQR Payment Integration']
  },
  {
    id: 'module-4',
    title: 'DevOps, Docker & VPS Cloud Deployment',
    duration: '3 Weeks',
    description: 'Master containerization and production infrastructure',
    topics: ['Docker & Containerizing Multi-Service Apps', 'Linux VPS Server Provisioning & SSH', 'Nginx Reverse Proxy & SSL Certificates', 'CI/CD Automation with GitHub Actions', 'Monitoring & System Logging']
  }
];

export const PARTNERS: Partner[] = [
  { name: 'CADT', role: 'Cambodia Academy of Digital Technology', image: '/assets/images/images_collabs_cadt.png' },
  { name: 'Python Cambodia', role: 'Official Developer Community', image: '/assets/images/images_collabs_python-cambodia.jpg' },
  { name: 'Hostinger', role: 'Global Hosting Partner', image: '/assets/images/images_collabs_hostinger.png' },
  { name: 'Mazda Cambodia', role: 'Brand & Event Sponsor', image: '/assets/images/images_collabs_mazda.svg' },
  { name: 'AIESEC in Cambodia', role: 'Youth Leadership Partner', image: '/assets/images/images_collabs_aiesec.png' },
  { name: 'Wedushare', role: 'Education & Scholarship Platform', image: '/assets/images/images_collabs_wedushare.png' },
  { name: 'Anajak', role: 'Tech & Media Collaborator', image: '/assets/images/images_collabs_anajak.jpg' },
  { name: 'GeeTest', role: 'Bot Management & Security', image: '/assets/images/images_collabs_geetest.png' },
  { name: 'Cryptomus', role: 'Crypto Payment Gateway', image: '/assets/images/images_collabs_cryptomus.png' },
  { name: 'Ultrahuman', role: 'Health & Smart Wearables', image: '/assets/images/images_collabs_ultrahuman.png' }
];

export const SOCIAL_LINKS = [
  { name: 'YouTube', href: 'https://youtube.com/@tfdevs', icon: '/assets/images/socials_youtube.webp', subscribers: '100K+' },
  { name: 'Facebook', href: 'https://facebook.com/tfdevs', icon: '/assets/images/socials_facebook.png', followers: '80K+' },
  { name: 'Telegram', href: 'https://t.me/tfdevs', icon: '/assets/images/socials_telegram.png', members: '25K+' },
  { name: 'GitHub', href: 'https://github.com/tfdevs', icon: '/assets/images/socials_github.png', repos: '40+' },
  { name: 'Instagram', href: 'https://instagram.com/tfdevs', icon: '/assets/images/socials_Instagram_icon.webp', followers: '15K+' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/tfdevs', icon: '/assets/images/socials_linkedin.png', network: '10K+' }
];
