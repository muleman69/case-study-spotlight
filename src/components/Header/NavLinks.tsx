import React from 'react';

const NavLinks = () => {
  const links = [
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/work', label: 'Work' },
    { href: '/news', label: 'News' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-white hover:text-[#F8B42E] transition-colors"
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;