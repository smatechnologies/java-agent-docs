module.exports = {
  mySidebar: [
    'index',
    'overview',
    'release-notes',
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'doc',
        id: 'installation/overview',
      },
      collapsed: true,
      items: [
        'installation/installation',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      link: {
        type: 'doc',
        id: 'administration/overview',
      },
      collapsed: true,
      items: [
        'administration/configuration-file',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      link: {
        type: 'doc',
        id: 'operations/overview',
      },
      collapsed: true,
      items: [
        'operations/java-classes',
        'operations/scripts-executables',
        'operations/managing-software-libraries',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'doc',
        id: 'reference/overview',
      },
      collapsed: true,
      items: [
        'reference/machine-messages',
      ],
    },
  ],
};
