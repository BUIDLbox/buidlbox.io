function TestimonialItem({testimonial}) {
  return (
    <>
      <div>
        <img
          className="testimonial-logo"
          src={testimonial.logo}
          alt={testimonial.alt}
        />
        <p className="font-m testimonial-content">{testimonial.content}</p>
      </div>
      <div className="testimonial-side">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          width="50"
          height="50"
        />
        <div>
          <p className="font-xxs">{testimonial.name}</p>
          <p className="font-xxs">{testimonial.position}</p>
        </div>
      </div>
    </>
  );
}

export default TestimonialItem;
