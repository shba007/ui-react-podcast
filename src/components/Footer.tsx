// @ts-ignore
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
// @ts-ignore
import { ReactComponent as Youtube } from '../assets/icons/youtube.svg';
// @ts-ignore
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
// @ts-ignore
import { ReactComponent as Twitter } from '../assets/icons/twitter.svg';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center border-t-[0.5px] border-white md:px-14 py-5 text-white font-[Poppins] text-xs">
      <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
        <li>
          <a>Terms of Service</a>
        </li>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Product</a>
        </li>
      </ul>
      <span className="max-w-[7rem] leading-relaxed">
        All Right Reserved @Copyright 2023
      </span>
      <ul className="flex flex-col flex-wrap md:flex-row gap-2 md:gap-4 max-h-16 -translate-x-full md:translate-x-0">
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank">
            <Youtube />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank">
            <Twitter />
          </a>
        </li>
      </ul>
    </footer>
  );
}
