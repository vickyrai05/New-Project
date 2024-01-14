import React from "react";
import img1 from "../../../Images/About/about1.jpg";
import img2 from "../../../Images/About/about2.jpg";
import img3 from "../../../Images/About/about3.jpg";
import Hospital1 from "../../../Images/About/Hospital1.png";
import Hospital from "../../../Images/About/Hospital.png";
import Hospital3 from "../../../Images/About/Hospital3.png";
import h2 from "../../../Images/About/h2.png";
const About = () => {
  return (
    <div>
      <h1 className="text-center">About Us</h1>
      <div className="container overflow-hidden">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <img className="w-100 mt-4" src={img1} alt="" height="450" />
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100" src={img2} alt="" height="500" />
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100 mt-4" src={img3} alt="" height="450" />
          </div>
        </div>
      </div>
      <div className="container my-5 d-flex flex-column align-items-center">
        <h2>1. Consistent, bold branding: Cleveland Clinic</h2>
        <img className="w-100 mt-4" src={h2} alt="" height="550" />
        <p className="w-75 text-center">
        Cleveland Clinic is one of the top multispeciality academic medical centers in the country. To establish a strong, recognizable brand and reinforce their reputation, they included bold, eye-catching colors throughout their website.

Notice how all of the elements on their homepage are blue and green. When patients come across these colors in other mediums and materials, they’ll likely associate them with Cleveland Clinic. 

Why consistency and bold branding is important for hospital websites: Consistent branding builds trust between patients and your hospital, which can be especially important in the healthcare industry where patients often have significant concerns about their health and well-being.

Adding color is a popular medical website design trend, with vivid and deep colors being sported on many successful hospital websites. Consider your site’s color palette before diving into web development to make sure your website branding is consistent throughout its pages.
        </p>
        </div>
        <div className="container my-5 d-flex flex-column align-items-center">
        <h2>2. Accessibility: Mount Sinai</h2>
        <img className="w-100 mt-4" src={Hospital} alt="" height="550" />
        <p className="w-75 text-center">
        Mount Sinai’s healthcare system prides itself on providing a wide range of services to diverse populations, including medical education, research, and patient care. To meet their patients’ varied needs, they prioritized creating an accessible website. 

The accessibility tool in the bottom footer allows visitors to use a screen reader, navigate using their keyboards, and change the color contrast, if needed. 

Why accessible design matters for hospital websites: Having an inaccessible hospital website will not only turn away those who might need your services the most but paints your entire establishment in a negative light. Because of the industry that you’re in, maintaining full compliance with the ADA and WCAG is essential. You want your entire community to feel accepted and at ease with your services, especially when it concerns medical care.
        </p>
      </div>
      <div className="container my-5 d-flex flex-column align-items-center">
        <h1>3. Consistent, bold branding: Cleveland Clinic</h1>
        <img className="w-100 mt-4" src={Hospital1} alt="" height="550" />
        <p className="w-75 text-center">
        The Global Brain Health Institute (GBHI), an organization dedicated to protecting the world from brain disease and other health threats, wanted to ensure that visitors could easily navigate their site and locate different programs, services, and projects. 

As a result, they worked with Kanopi to add a navigation bar that is logically organized and prominently placed throughout the website, so users can quickly find what they need. The site also features a fellowship directory that includes a search bar and filters. This is useful for medical students interested in pursuing a fellowship in a particular specialty, as well as for patients who want to learn more about the expertise of the hospital’s staff.

Why simple navigation is essential for hospital websites: As soon as someone lands on your hospital website, they should be able to find the content or service they seek. To ensure your site is easily navigable, consider mapping out the patient journey to better understand how people get to your site and what they do once they get there.
        </p>
      </div>
      <div className="container my-5 d-flex flex-column align-items-center">
        <h2>4. Mobile-friendliness: Johns Hopkins Medicine</h2>
        <img className="w-100 mt-4" src={Hospital3} alt="" height="550" />
        <p className="w-75 text-center">
        Johns Hopkins Medicine is known for its world-class medical facilities, including hospitals, clinics, and research centers. As a leading healthcare provider, they needed to keep up with changes in technology by creating a mobile-friendly website. 

Their mobile-responsive site design allows patients to schedule appointments, access medical information, and communicate with healthcare providers, regardless of the device they’re using. 

Why mobile-friendliness matters for hospital websites: With over 60% of the global internet population using a mobile device to access the internet, your hospital web design must work on all different screen sizes. For patients or families already in the hospital or waiting room, the ability to quickly look something up on their phone or tablet is critical. 

Most content management systems (CMS) can create a mobile-responsive site automatically. However, there are some easy ways you can ensure your site’s responsiveness. For instance, use large buttons, a vertical layout, and avoid large chunks of text.
        </p>
      </div>
      <div className="container my-5 d-flex flex-column align-items-center">
        <h2>WHO WE ARE!</h2>
        <h3 className="w-75 text-center">
          We ensures the best health care as well as clinical service with
          outstanding personal service.
        </h3>
      </div>
    </div>
  );
};

export default About;
