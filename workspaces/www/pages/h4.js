import axios from "axios";
import { useForm, useField } from "react-final-form-hooks";

const onSubmit = async values => {
  await axios
    .post("/api/auth/sign-in", values)
    .then(response => {
      alert(JSON.stringify(response.data));
    })
    .catch(error => {
      alert(JSON.stringify(error.message));
    });
};

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = "is required";
  }

  if (!values.password) {
    errors.password = "is required";
  }

  if (values.password && values.password.length < 7) {
    errors.password = "must be at least 6 characters";
  }

  return errors;
};

export default props => {
  const { dirty, form, handleSubmit, pristine, submitting } = useForm({
    onSubmit,
    validate
  });

  const username = useField("username", form);
  const password = useField("password", form);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          {...username.input}
          className="appearance-none block border leading-tight rounded mb-6 p-6 text-3xl w-full"
          placeholder="username"
        />
        {username.meta.touched && username.meta.error && (
          <p className="mb-6">Username {username.meta.error}</p>
        )}
        <input
          {...password.input}
          className="appearance-none block border leading-tight rounded mb-6 p-6 text-3xl w-full"
          placeholder="password"
          type="password"
        />
        {password.meta.touched && password.meta.error && (
          <p className="mb-6">Password {password.meta.error}</p>
        )}
        <button
          className="bg-blue block leading-tight rounded mb-6 p-6 text-3xl text-white uppercase w-full"
          disabled={pristine || submitting}
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};
