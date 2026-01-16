import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  number: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.name, values.number);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <div>
          <label>Name:</label>
          <Field name="name" />
          <ErrorMessage name="name" component="p" className={styles.error} />
        </div>

        <div>
          <label>Number:</label>
          <Field name="number" />
          <ErrorMessage name="number" component="p" className={styles.error} />
        </div>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
