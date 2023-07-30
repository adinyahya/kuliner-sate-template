import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const socialMediaData = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: FaInstagram,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: FaFacebook,
  },
];

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-white">
        <div className="container px-6 py-4 mx-auto">
          <hr className="mb-8 border-gray-200 " />
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">©2023 SateGuleSkuy. All Rights Reserved.</p>
            <div className="flex mt-3 -mx-2 sm:mt-0">
              {socialMediaData.map((media, index) => (
                <a
                  key={index}
                  href={media.link}
                  className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500"
                  aria-label={media.name}
                >
                  <media.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
