const dummyMenus = [
    {
      title: "System Management",
      key: "0",
      children: [
        {
          title: "Systems",
          key: "0-0",
          children: [
            {
              title: (
                <>
                  System Code <span className="text-blue-600">+</span>
                </>
              ),
              key: "0-0-0",
              children: [{ title: "Code Registration", key: "0-0-0-0" }],
            },
            { title: "Code Registration - 2", key: "0-0-0-1" },
            { title: "Properties", key: "0-0-0-2" },
            {
              title: "Menus",
              key: "0-0-0-3",
              children: [{ title: "Menu Registration", key: "0-0-0-3-0" }],
            },
          ],
        },
      ],
    },
  ];
  
  export default dummyMenus;