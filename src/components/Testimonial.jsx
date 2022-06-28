const Testimonial = ({ testimonial, index }) => {
  return (
    <div className={`flex flex-col items-center p-6 space-y-6 rounded-lg ${index !== 0 ? "mt-14" : ""} bg-veryLightGray md:-mt-0.5 md:w-1/3`}>
      <img src={testimonial.image} className="w-16 -mt-14" alt={`${testimonial.name} avatar`} />
      <h5 className="text-lg font-bold">{testimonial.name}</h5>
      <p className="text-sm text-darkGrayishBlue">"{testimonial.text}"</p>
    </div>
  );
};

export default Testimonial;
