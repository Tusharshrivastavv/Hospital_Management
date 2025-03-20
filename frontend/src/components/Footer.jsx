import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
       <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            We are committed to delivering excellence in every aspect of our business. 
            Our dedication to quality and innovation has been at the core of our journey since inception.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Phone: +91 74xxxxxx98</li>
            <li>Email: xyz@mail.in</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © {new Date().getFullYear()} YourCompany. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
