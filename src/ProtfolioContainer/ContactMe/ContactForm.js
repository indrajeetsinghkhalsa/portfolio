import { Formik, Form } from "formik";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const sendEmail = (values) => {
    emailjs
      .send(
        "service_protfolio",
        "template_protfolio",
        values,
        "yOt-GS7TAhW-jcq0P"
      )
      .then((res) => alert("Email Send for Successfully"))
      .catch((err) => alert("not able to send email"));
  };

  const initialValues = { name: "", email: "", subject: "", message: "" };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Please Provide Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Please Provide Valid email address";
    }
    if (!values.name) {
      errors.name = "Please Provide Name";
    }
    if (!values.subject) {
      errors.subject = "Please Select Subject";
    }
    if (!values.message) {
      errors.message = "Please Write your Query";
    }
    return errors;
  };
  const onSubmit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    if (values.email) sendEmail(values);
    else alert("Problem while submiting the from");
  };

  return (
    <section className="contact-form px-3 py-5 p-md-5">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm({ values: "" });
          }}
        >
          {(formik) => (
            <Form className="contact-form col-lg-8 mx-lg-auto">
              <h3 className="text-center mb-3">Get In Touch</h3>
              <div className="row">
                <div className="col-12 col-md-6">
                  <label className="sr-only" id="cname">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cname"
                    name="name"
                    placeholder="Name"
                    minlength="2"
                    required=""
                    aria-required="true"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <lable className="error"> {formik.errors.name}</lable>
                  )}
                </div>
                <div className="col-12 col-md-6">
                  <label className="sr-only" id="cemail">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="cemail"
                    name="email"
                    placeholder="Email"
                    required=""
                    aria-required="true"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <lable className="error"> {formik.errors.email}</lable>
                  )}
                </div>
                <div className="col-12">
                  <select
                    id="subject"
                    className="form-select"
                    name="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select a Subject id Mail</option>
                    <option value="Hiring">Hiring</option>
                    <option value="Query">Query</option>
                    <option value="Others">Others</option>
                  </select>
                  {formik.errors.subject && formik.touched.subject && (
                    <lable className="error"> {formik.errors.subject}</lable>
                  )}
                </div>
                <div className="col-12">
                  <label className="sr-only" id="cmessage">
                    Your message
                  </label>
                  <textarea
                    className="form-control"
                    id="cmessage"
                    name="message"
                    placeholder="Enter your message"
                    rows="10"
                    required=""
                    aria-required="true"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.errors.message && formik.touched.message && (
                    <lable className="error"> {formik.errors.message}</lable>
                  )}
                </div>
                <div className="form-group col-12">
                  <button
                    disabled={!formik.errors}
                    type="submit"
                    className="btn btn-block btn-primary py-2"
                  >
                    Send Now
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
