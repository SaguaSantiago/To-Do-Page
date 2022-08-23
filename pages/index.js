import CustomButton from 'Components/CustomComponents/CustomButton'
import CustomTextfield from 'Components/CustomComponents/CustomTextfield'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

export default function MainRoute() {
  return <>...running</>
  // <Formik
  //   initialValues={{
  //     userName: '',
  //   }}
  //   validationSchema={yup.object({
  //     userName: yup
  //       .string()
  //       .required('Este campo es obligatorio')
  //       .min(6, 'Debe contener al menos 6 caracteres')
  //       .max(15, 'Debe contener mas de 15 caracteres'),
  //   })}
  //   onSubmit={() => {}}
  // >
  //   {({ }) => (
  //     <Form autoComplete='off'>
  //       <CustomTextfield placeholder='prueba asdas' name='userName' label='eeeeo' />

  //       <CustomButton fullWidth color='primary' variant='outlined' size='large'>
  //         REGISTER
  //       </CustomButton>
  //     </Form>
  //   )}
  // </Formik>
}
