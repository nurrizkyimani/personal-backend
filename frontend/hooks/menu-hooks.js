import { useState, useEffect } from 'react';

const useMenuLink = () => { 
  const [menus, setMenus] = useState([]);

  const links = [
    {
        link: '',
        icon: `🏠`,
        info:  `Experiences`
    },
    {
        link: '',
        icon: `📂`,
        info: `Projects`
    },
    {
        link: '',
        icon: `🛠`,
        info: `Stacks`
    },
     {
        link: '',
        icon: `👨‍🚀`,
        info: 'About'
    },
    
]

  useEffect(() => {
    setMenus(links)
  },[])

  return menus;
}

export default useMenuLink