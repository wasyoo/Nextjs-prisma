import { Formik, ErrorMessage } from 'formik';
import { Mutation } from 'react-apollo';
import * as Yup from 'yup';
import LOGIN from '../graphql/mutations/user/login'

const LoginForm = () => {
  return (
    <>
    <h1> Connexion </h1>
    <Mutation mutation={LOGIN}>
    {
      (login, {loading, data, error}) => {
        if (loading) return <h1>Loading...</h1>
        if (error) {
          <ErrorMessage component="span" name="form">{(msg)=>console.log(msg)}</ErrorMessage>
        }
        return (
          <Formik
      initialValues={{ 
        email: '',
        password: ''
      }}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        login({
          variables: {
            input: {
              ...values
            }
          }
        })
        if(error){
          setErrors({"form":error.message})
        }
        setSubmitting(false)
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Required'),
        password: Yup.string()
          // .min(8)
          .required('Required'),
      })}
    >
    { 
      props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit();
            }}>
            <label htmlFor="email" style={{ display: 'block' }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? 'text-input error' : 'text-input'
              }
            />
            {errors.email &&
              touched.email && <div className="input-feedback">{errors.email}</div>}

            <label htmlFor="password" style={{ display: 'block' }}>
              password
            </label>
            <input
              id="password"
              placeholder="Enter your email"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? 'text-input error' : 'text-input'
              }
            />
            {errors.password &&
              touched.password && <div className="input-feedback">{errors.password}</div>}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }
    }
    </Formik>
        )
      }
    }
    </Mutation>
    </>
  )
}

export default LoginForm;