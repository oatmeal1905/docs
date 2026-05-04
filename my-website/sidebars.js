// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Архитектура',
      items: ['architecture/arch', 'architecture/tech-stack'],
    },
    {
      type: 'category',
      label: 'Сценарии',
      items: ['scenarios/uc-01', 'scenarios/uc-02', 'scenarios/uc-03'],
    },
    {
      type: 'category',
      label: 'Модель данных',
      items: ['db/model'],
    },
    {
      type: 'category',
      label: 'API',
      items: ['api/api-reference'],
    },
  ],
};

export default sidebars;