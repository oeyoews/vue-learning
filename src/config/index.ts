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

const learningRoutes: Link[] = [
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
