import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Ramzi"}
          feedback={"Nice portfolio you got there."}
        />

        <TestimonialCard
          name={"Abhishek"}
          feedback={"Your devlopment skills are so good."}
        />

        <TestimonialCard
          name={"Avi"}
          feedback={"Your have done some great work."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
