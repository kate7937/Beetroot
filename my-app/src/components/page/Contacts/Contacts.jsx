import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "./contacts.scss";
import BG from "./img/bg.jpg";

function Contacts() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = "Movies Anywhere | Contacts";
  }, []);

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="all_page">
      <div className="title">
        <img src={BG} alt="movies" />
        <div className="text">
          <h2>Have a question about Movies Anywhere?</h2>
        </div>
      </div>
      <div className="email_us">
        <h2>Email Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
          <div className="form_item">
            <h3>Your Name</h3>
            <input
              className={errors.name ? "error" : ""}
              type="text"
              {...register("name", {
                required: "Required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Incorrect name",
                },
              })}
            />
            <p className={"error_message"}>
              {errors.name && errors.name.message}
            </p>
          </div>
          <div className="form_item">
            <h3>Your email address</h3>
            <input
              className={errors.email ? "error" : ""}
              type="email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email addres",
                },
              })}
            />
            <p className={"error_message"}>
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="form_item">
            <h3>Subject</h3>
            <input
              className={errors.subject ? "error" : ""}
              type="text"
              {...register("subject", {
                required: "Required",
                pattern: {
                  value: /(\w|\s|[\.\'-])+/,
                  message: "Incorrect subject",
                },
              })}
            />
            <p className={"error_message"}>
              {errors.subject && errors.subject.message}
            </p>
          </div>
          <div className="form_item">
            <h3>Description</h3>
            <textarea
              className={errors.description ? "error" : ""}
              placeholder="Type Your Message"
              rows="5"
              {...register("description", {
                required: "Required",
                pattern: {
                  value: /(\w|\s|[\.\'-])+/,
                  message: "Incorrect description",
                },
              })}
            />
            <p className={"error_message"}>
              {errors.description && errors.description.message}
            </p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
