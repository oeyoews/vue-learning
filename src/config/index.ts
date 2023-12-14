const links: Link[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    disable: true,
    name: 'blog',
    path: '/blog',
  },
];

// const learningRoutes: Link[] = [
//   { path: "ComponentBasics" },
//   { path: "VueRouterComponent" },
//   { path: "TemplateSyntax" },
// ];

const config = {
  links,
  title: 'Vue Learning',
  // learningRoutes,
  // learningRoutesPrefix: "/learning",
};

export default config;
