import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  return (
    <div className="px-6 md:px-12">
     
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          HOSPITAL <span className="text-gray-700 font-medium">DETAILS</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 items-center">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="Hospital Details" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to <b>XYZ</b>, your trusted partner in managing your healthcare needs conveniently and
            efficiently. At <b>XYZ</b>, we understand the challenges individuals face when it comes to scheduling
            doctor appointments and managing their health records.
          </p>
          <p>
            XYZ is committed to excellence in healthcare technology. We continuously strive to enhance our
            platform, integrating the latest advancements to improve user experience and deliver superior service.
            Whether you are booking your first appointment or managing ongoing care, XYZ is here to support you
            every step of the way.
          </p>
          <b className="text-gray-800 text-lg">Our Vision</b>
          <p>
            Our vision at <b>XYZ</b> is to create a seamless healthcare experience for every user. We aim to
            bridge the gap between patients and healthcare providers, making it easier for you to access the care you
            need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-center text-xl my-6">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE XYZ</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-20">
        {[
          { title: 'Efficiency:', desc: 'Streamlined appointment scheduling that fits into your busy lifestyle.' },
          { title: 'Convenience:', desc: 'Access to a network of trusted healthcare professionals in your area.' },
          { title: 'Personalization:', desc: 'Tailored recommendations and reminders to help you stay on top of your health.' },
        ].map((item, index) => (
          <div
            key={index}
            className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg"
          >
            <b>{item.title}</b>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;