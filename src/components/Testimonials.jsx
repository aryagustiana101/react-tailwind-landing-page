import avatarAnisha from "../assets/images/avatar-anisha.png";
import avatarAli from "../assets/images/avatar-ali.png";
import avatarRichard from "../assets/images/avatar-richard.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anisha Li",
      image: avatarAnisha,
      text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      name: "Ali Bravo",
      image: avatarAli,
      text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      name: "Richard Watts",
      image: avatarRichard,
      text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
  ];

  return (
    <section id="testimonials">
      {/* Container to heading and testimonial container */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">Testimonials</h2>
        {/* Testimonial container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
        {/* Button */}
        <div className="my-16">
          <a href="/#" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
