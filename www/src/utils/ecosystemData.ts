export const categories = [
  'framework',
  'extension',
  'starter',
  'open-source-project',
] as const;
type Category = typeof categories[number];

export const categoryLabels: Record<Category, string> = {
  framework: 'Framework',
  extension: 'Extension',
  starter: 'Starter',
  'open-source-project': 'Open Source Project',
};

export type EcosystemItem = {
  title: string;
  description: string;
  url: string;
  categories: Category[];
  authorName: string;
  authorUrl: string;
};

export const ecosystemItems: EcosystemItem[] = [
  {
    title: 'tRPC SvelteKit',
    description: 'SvelteKit tRPC extension',
    url: 'https://github.com/icflorescu/trpc-sveltekit',
    categories: ['framework'],
    authorName: 'Ionut-Cristian Florescu',
    authorUrl: 'https://github.com/icflorescu',
  },
  {
    title: 'tRPC-Remix',
    description: 'SvelteKit tRPC extension',
    url: 'https://github.com/ggrandi/trpc-remix',
    categories: ['framework'],
    authorName: 'ggrandi',
    authorUrl: 'https://github.com/ggrandi',
  },
  {
    title: 'Solid tRPC',
    description: 'tRPC Client for Solid with Solid Query',
    url: 'https://github.com/OrJDev/solid-trpc',
    categories: ['framework'],
    authorName: 'OrJDev',
    authorUrl: 'https://github.com/OrJDev',
  },
  {
    title: 'Solid Start tRPC',
    description: 'tRPC API handler for SolidStart',
    url: 'https://github.com/OrJDev/solid-start-trpc',
    categories: ['framework'],
    authorName: 'OrJDev',
    authorUrl: 'https://github.com/OrJDev',
  },
  {
    title: 'tRPC-Nuxt',
    description: 'Nuxt 3 module for tRPC',
    url: 'https://github.com/wobsoriano/trpc-nuxt',
    categories: ['framework'],
    authorName: 'Robert Soriano',
    authorUrl: 'https://github.com/wobsoriano',
  },
  {
    title: 'tRPC-uWebSockets',
    description: 'Adapter for uWebSockets.js server',
    url: 'https://github.com/romanzy-1612/trpc-uwebsockets',
    categories: ['framework'],
    authorName: 'romanzy-1612',
    authorUrl: 'https://github.com/romanzy-1612',
  },
  {
    title: 'jotai-trpc',
    description: 'Jotai wrapper around tRPC vanilla client',
    url: 'https://github.com/jotai-labs/jotai-trpc',
    categories: ['framework'],
    authorName: 'Jotai Labs',
    authorUrl: 'https://github.com/jotai-labs',
  },
  {
    title: '@h4ad/serverless-adapter',
    description:
      'Connect tRPC with AWS SQS, AWS API Gateway, and many more event sources',
    url: 'https://viniciusl.com.br/serverless-adapter/docs/main/frameworks/trpc',
    categories: ['framework'],
    authorName: 'Vinicius Lourenço',
    authorUrl: 'https://viniciusl.com.br',
  },
  {
    title: 'trpc-koa-adapter',
    description: 'tRPC adapter for Koa server',
    url: 'https://github.com/BlairCurrey/trpc-koa-adapter',
    categories: ['framework'],
    authorName: 'Blair Currey',
    authorUrl: 'https://github.com/BlairCurrey',
  },

  {
    title: 'tRPC Playground',
    description: 'sandbox for testing tRPC queries in the browser',
    url: 'https://github.com/sachinraja/trpc-playground',
    categories: ['extension'],
    authorName: 'Sachin Raja',
    authorUrl: 'https://twitter.com/s4chinraja',
  },
  {
    title: 'tRPC-OpenAPI',
    description: 'OpenAPI & REST support for your tRPC routers',
    url: 'https://github.com/jlalmes/trpc-openapi',
    categories: ['extension'],
    authorName: 'James Berry',
    authorUrl: 'https://github.com/jlalmes',
  },
  {
    title: 'tRPC Client Devtools',
    description: 'Devtools browser extension',
    url: 'https://github.com/rhenriquez28/trpc-client-devtools',
    categories: ['extension'],
    authorName: 'Roy Henriquez',
    authorUrl: 'https://github.com/rhenriquez28',
  },
  {
    title: 'tRPC-Chrome',
    description: 'Web extensions messaging support for tRPC',
    url: 'https://github.com/jlalmes/trpc-chrome',
    categories: ['extension'],
    authorName: 'James Berry',
    authorUrl: 'https://github.com/jlalmes',
  },
  {
    title: 'trpc-iron-session',
    description: 'Secure your tRPC based on iron-session authentication',
    url: 'https://github.com/parkgang/trpc-iron-session',
    categories: ['extension'],
    authorName: 'Kyungeun Park',
    authorUrl: 'https://github.com/parkgang',
  },
  {
    title: 'Step CI',
    description: 'Automated API Testing and Quality Assurance',
    url: 'https://github.com/stepci/stepci',
    categories: ['extension'],
    authorName: 'Step CI',
    authorUrl: 'https://github.com/stepci',
  },
  {
    title: 'tRPC Panel',
    description:
      'Automatically generates a UI for manually testing your tRPC backend',
    url: 'https://github.com/iway1/trpc-panel',
    categories: ['extension'],
    authorName: 'Isaac Way',
    authorUrl: 'https://github.com/iway1',
  },
  {
    title: 'next-prisma-starter',
    description: 'Starter project with Prisma, Next.js, tRPC, E2E-testing',
    url: 'https://github.com/trpc/examples-next-prisma-starter',
    categories: ['starter'],
    authorName: 'Alex Johansson',
    authorUrl: 'https://twitter.com/alexdotjs',
  },
  {
    title: 'create-t3-app',
    description:
      'Scaffold a starter project using the T3 Stack (Next.js, tRPC, Tailwind CSS, Prisma)',
    url: 'https://create.t3.gg',
    categories: ['starter'],
    authorName: 'T3 Open Source',
    authorUrl: 'https://github.com/t3-oss',
  },
  {
    title: 'create-t3-turbo',
    description:
      'Clean and simple starter repo using the T3 Stack along with Expo React Native',
    url: 'http://github.com/t3-oss/create-t3-turbo',
    categories: ['starter'],
    authorName: 'Julius Marminge',
    authorUrl: 'https://github.com/juliusmarminge',
  },
  {
    title: 'Create JD App',
    description: 'create-t3-app for Solid',
    url: 'https://github.com/OrJDev/create-jd-app',
    categories: ['starter'],
    authorName: 'OrJDev',
    authorUrl: 'https://github.com/OrJDev',
  },
  {
    title: 'Create tRPC App',
    description: 'Create tRPC-powered apps with one command',
    url: 'https://github.com/omar-dulaimi/create-trpc-app',
    categories: ['starter'],
    authorName: 'Omar Dulaimi',
    authorUrl: 'https://github.com/omar-dulaimi',
  },
  {
    title: 'next-prisma-starter-websockets',
    description: 'WebSockets starter project',
    url: 'https://github.com/trpc/examples-next-prisma-starter-websockets',
    categories: ['starter'],
    authorName: 'Alex Johansson',
    authorUrl: 'https://twitter.com/alexdotjs',
  },
  {
    title: 'tRPC Kitchen Sink',
    description: 'collection of tRPC usage patterns',
    url: 'https://github.com/trpc/examples-kitchen-sink',
    categories: ['starter'],
    authorName: 'Alex Johansson',
    authorUrl: 'https://twitter.com/alexdotjs',
  },
  {
    title: 'turbo-expo-trpc-starter',
    description: 'Turborepo + Expo + tRPC Starter',
    url: 'https://github.com/gunnnnii/turbo-expo-trpc-starter',
    categories: ['starter'],
    authorName: 'gunnnnii',
    authorUrl: 'https://github.com/gunnnnii',
  },
  {
    title: 'trpc-sveltekit-example',
    description: 'tRPC-SvelteKit example application',
    url: 'https://github.com/icflorescu/trpc-sveltekit-example',
    categories: ['starter'],
    authorName: 'Ionut-Cristian Florescu',
    authorUrl: 'https://github.com/icflorescu',
  },
  {
    title: 'trpc-ultra',
    description: 'tRPC + Ultra',
    url: 'https://github.com/sachinraja/trpc-ultra',
    categories: ['starter'],
    authorName: 'Sachin Raja',
    authorUrl: 'https://twitter.com/s4chinraja',
  },
  {
    title: 'nx-trpc',
    description: 'Nx Monorepo + tRPC + Prisma',
    url: 'https://github.com/nowlena/nx-trpc-test',
    categories: ['starter'],
    authorName: 'Aaron Nowlen',
    authorUrl: 'https://github.com/nowlena',
  },
  {
    title: 'trpc-sveltekit-fetchadapter-example',
    description: 'tRPC (w/ Fetch Adapter) + SvelteKit + Tailwind CSS',
    url: 'https://github.com/austins/trpc-sveltekit-fetchadapter-example',
    categories: ['starter'],
    authorName: 'Austin S.',
    authorUrl: 'https://github.com/austins',
  },
  {
    title: 'tRPC SIWE Monorepo',
    description: 'Sign-In With Ethereum tRPC + ViteJS React',
    url: 'https://github.com/codingwithmanny/trpc-siwe-monorepo',
    categories: ['starter'],
    authorName: 'codingwithmanny',
    authorUrl: 'https://github.com/codingwithmanny',
  },
  {
    title: 'Cal.com',
    description: 'Scheduling infrastructure',
    url: 'https://github.com/calcom/cal.com',
    categories: ['open-source-project'],
    authorName: 'Cal.com',
    authorUrl: 'https://github.com/calcom',
  },
  {
    title: 'SST',
    description: 'framework that makes it easy to build serverless apps',
    url: 'https://github.com/serverless-stack/sst',
    categories: ['open-source-project'],
    authorName: 'SST',
    authorUrl: 'https://github.com/serverless-stack',
  },
  {
    title: 'Beam',
    description: 'simple message board for your organization or project',
    url: 'https://github.com/planetscale/beam',
    categories: ['open-source-project'],
    authorName: 'PlanetScale',
    authorUrl: 'https://github.com/planetscale',
  },
  {
    title: 'Rallly',
    description: 'self-hostable doodle poll alternative',
    url: 'https://github.com/lukevella/rallly',
    categories: ['open-source-project'],
    authorName: 'Luke Vella',
    authorUrl: 'https://github.com/lukevella',
  },
];
