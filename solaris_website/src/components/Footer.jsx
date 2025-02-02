import privacypolicy from '../assets/privacypolicy.pdf'
const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full h-24 flex items-center justify-center py-6 mt-12">
      <div className="text-center sm:text-white text-primary">
        <a 
          href={privacypolicy}
          target="_blank" 
          className="font-opensans font-bold text-[12px] leading-8 underline"
        >
          Privacy Policy
        </a>
        <p className="font-opensans font-regular text-[10px] leading-4">
          @2024 Solaris Consultants
        </p>
        <p className="font-opensans font-regular text-[10px] leading-4">
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

