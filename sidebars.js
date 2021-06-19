module.exports = {
  mySidebar: [
    'index',
    'release-notes',
    {
      type: 'category', 
      label: 'Installation',
      collapsed: false,
      items: [
        'installation/installation',
      ], 
    },
    {
      type: 'category', 
      label: 'Administration',
      collapsed: false,
      items: [
        'administration/configuration-file',
      ], 
    },
    {
      type: 'category', 
      label: 'Operations',
      collapsed: false,
      items: [
        'operations/java-classes',
        'operations/scripts-executables',
        'operations/managing-software-libraries',
      ], 
    },
    {
      type: 'category', 
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/machine-messages',
      ], 
    },
  ],
};
