const links: Link[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'blog',
    path: '/blog',
  },
];

const learningRoutes = [
  { path: 'ComponentBasics' },
  { path: 'VueRouterComponent' },
  { path: 'TemplateSyntax' },
];

const config = {
  links,
  learningRoutes,
  learningRoutesPrefix: '/learning',
};

export default config;
