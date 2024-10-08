// src/data/dummyMenus.js

const dummyMenus = [
    {
      id: '1',
      name: 'System Management',
      children: [
        {
          id: '1.1',
          name: 'Systems',
          children: [
            { id: '1.1.1', name: 'System Code' },
            { id: '1.1.2', name: 'Code Registration' },
            { id: '1.1.3', name: 'Code Registration - 2' },
            { id: '1.1.4', name: 'Properties' },
            {
              id: '1.1.5',
              name: 'Menus',
              children: [{ id: '1.1.5.1', name: 'Menu Registration' }],
            },
            {
              id: '1.1.6',
              name: 'API List',
              children: [
                { id: '1.1.6.1', name: 'API Registration' },
                { id: '1.1.6.2', name: 'API Edit' },
              ],
            },
          ],
        },
        {
          id: '1.2',
          name: 'Users & Groups',
          children: [
            {
              id: '1.2.1',
              name: 'Users',
              children: [{ id: '1.2.1.1', name: 'User Account Registration' }],
            },
            {
              id: '1.2.2',
              name: 'Groups',
              children: [{ id: '1.2.2.1', name: 'User Group Registration' }],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Competition',
      children: [],
    },
  ];
  
  export default dummyMenus;
  