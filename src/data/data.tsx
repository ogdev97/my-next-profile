import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profile from '../images/profile.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'My Resume',
  description: 'Empowered by Nextjs-Vercel',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ang Norman.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Malaysia based <strong className="text-stone-100">Product QA Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Bedrock</strong> helping build a modern, mobile-first, innovative,
        decentralized web applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Currently focusing on <strong className="text-stone-100">web3</strong>, enroll on a{' '}
        <strong className="text-stone-100"> CS50 Harvard course</strong>, building up my{' '}
        <strong className="text-stone-100">social networks</strong>, and exploring opportunities outside of my
        <strong className="text-stone-100"> home country</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume2025.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profile,
  description: `Just a person who enjoys leisure activities like watching movies and playing games, passionate about programming, 
  a bit of a laid-back personality and appreciate good food and relaxing`,
  aboutItems: [
    {label: 'Location', text: 'Penang, Malaysia', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Malaysian / Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Gamer / Watching movies / Badminton', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Lincoln, UK', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Bedrock Technology', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'Malay',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'ReactJs /  Nextjs',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Vue.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'PHP laravel',
        level: 8,
      },
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'Solidity',
        level: 8,
      },
      {
        name: 'Move Programming',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'NFT Marketplace',
    description: 'A list of NFTs Collection',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage1,
  },
  {
    title: 'NFT Marketplace',
    description: 'Connect ur dAPP Wallet',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage2,
  },
  {
    title: 'Crowdfunding Project',
    description: 'Mint your nft and track crowdfunding progress',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Crowdfunding Project',
    description: 'Connect wallet using Rainbow toolkit client',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage4,
  },
  {
    title: 'NFT Marketplace',
    description: 'Create Collection page',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage5,
  },
  {
    title: 'NFT Marketplace',
    description: 'View collection details / filters',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage6,
  },
  {
    title: 'NFT Marketplace',
    description: 'Create Item Page',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage7,
  },
  {
    title: 'NFT Marketplace',
    description: 'Main functions - make offer / sell / buy NFTs',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage8,
  },
  {
    title: 'DAO Project',
    description: 'DAO ecosystem token details ',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage9,
  },
  {
    title: 'DAO Project',
    description: 'Claim token out to their own wallet.',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage10,
  },
  {
    title: 'Crowdfunding Project',
    description: 'Check profile owned nfts under the same wallet.',
    url: 'https://my-resume-two-iota.vercel.app/',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2018',
    location: 'University of Lincoln, UK',
    title: 'Bachelors Degree of Computer Science',
    content: (
      <p>
        Strengthen my fundamental concepts and techniques in computer science, also the skills needed to apply these
        concepts to real-world problems.
      </p>
    ),
  },
  {
    date: 'March 2015',
    location: 'UOW KDU College',
    title: 'Diploma in Computer Science',
    content: (
      <p>
        Learning the fundamental concepts and techniques in computer science, including programming, data structures,
        algorithms, computer architecture, and computer systems. Some programs may also cover topics in related fields
        such as mathematics and statistics, and may include practical experiences such as internships or capstone
        projects.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Present',
    location: 'CookApp',
    title: 'Founding Engineer / Product Owner',
    content: (
      <ul>
        <li>
          Developed a hackathon winner social app under Aptos blockchain{' '}
          <strong>
            <a href="https://dorahacks.io/buidl/16797"> Cook App</a>
          </strong>
        </li>
        <li>
          Led the full product lifecycle — from concept to live demo — covering backend architecture, smart contract
          design, and frontend development{' '}
        </li>
        <li>
          Smart Contract Development: Built and deployed on-chain logic to record alpha staking, reputation points, and
          reward distribution on Aptos.
        </li>
        <li>
          Frontend Engineering: Integrated a Tinder-swipe UI library to gamify content discovery and user engagement.{' '}
        </li>
        <li>
          Hackathon Delivery: Coordinated team tasks, pitched the project, and optimized demo performance for live
          judging.
        </li>
      </ul>
    ),
  },
  {
    date: 'July 2024 - Present',
    location: 'Bedrock Technology',
    title: 'Product QA Engineer / Developer Relations',
    content: (
      <ul>
        <li>Develop and maintain comprehensive test plans for APIs and backend services. </li>
        <li>Test and validate new API endpoints before external release. </li>
        <li>Track developer issues and triage with engineering teams.</li>
        <li>
          Supervise the back-end product requirements and communicating with back-end developers to implement the
          bedrock point system with third party{' '}
        </li>
        <li>
          Staying up-to-date with the latest developments in the field and incorporating new technologies as appropriate
        </li>
        <li>Collaborate with developers during code reviews and sprint planning to ensure test coverage</li>
        <li>Document QA standards and Gitbook </li>
      </ul>
    ),
  },
  {
    date: 'June 2023 - July 2024',
    location: 'Kincho Tech Marketing Sdn Bhd',
    title: 'Senior PHP/Frontend Developer',
    content: (
      <ul>
        <li>Handling development requirements for admin portals developed using Vue.js </li>
        <li>Integrating back-end API modules to front-end web development using ThinkPHP and Vue.js </li>
        <li>
          Preparing documentation for Linux Baota when migrating PHP projects to the platform, learnt alot of Dev Ops
          Skills
        </li>
        <li>Supervise the front-end requirements for a mobile sports app using mainly React.js and Vue.js </li>
        <li>
          Staying up-to-date with the latest developments in the field and incorporating new technologies as appropriate
        </li>
        <li>
          Participate in testing functionalities of web applications and also fixing defects in front-end / back-end
          codes.
        </li>
        <li>Handling the livestream media logic from web frontend side </li>
      </ul>
    ),
  },
  {
    date: 'September 2020 - June 2023',
    location: 'Techtants',
    title: 'Full stack web developer',
    content: (
      <ul>
        <li>Developed multiple projects using PHP Laravel, Vue.js, web3js, Solidity, Adonisjs, Reactjs/Nextjs.</li>
        <li>Integrating back-end API modules to front-end web development </li>
        <li>
          Designing the fundamental structure of smart contracts based on various standards such as ERC20, ERC721, and
          ERC1155 using Solidity
        </li>
        <li>Collaborating with cross-functional teams to define, design, and ship new features</li>
        <li>
          Staying up-to-date with the latest developments in the field and incorporating new technologies as appropriate
        </li>
        <li>Participate in testing functionalities of dApps and also fixing defects in front-end / back-end codes.</li>
        <li>Building multiple decentralized Applications powered by Binance Smart Chain & Polygon</li>
      </ul>
    ),
  },
  {
    date: 'March 2017- September 2020',
    location: 'Max-Groups Marine',
    title: 'Junior IT Support interns',
    content: (
      <p>
        Building website powered by WordPress, learning about PHP web applications plug-ins. Solving website bugs if
        necessary.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Kent Beck',
      text: 'I am not a great programmer; I am just a good programmer with great habits.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Freeman Dyson',
      text: 'A good engineer is a person who makes a design that works with as few original ideas as possible',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Reach out to me via these for enquiries :)',
  items: [
    {
      type: ContactType.Email,
      text: 'norman1997.an@gmail.com',
      href: 'mailto:norman1997.an@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Penang, Malaysia',
      href: 'https://goo.gl/maps/M7hrCRLbKA1sXEjY6',
    },
    {
      type: ContactType.Twitter,
      text: '@NormanAng97',
      href: 'https://twitter.com/NormanAng97',
    },
    {
      type: ContactType.Github,
      text: 'Angangang97',
      href: 'https://github.com/Angangang97',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Angangang97'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ang-norman-4b9593aa/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ang_norman'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/NormanAng97'},
];
