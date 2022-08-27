import * as yup from 'yup'

export const LoginValidation = yup.object({
  userName: yup
    .string()
    .required('Este campo es obligatorio')
    .min(6, 'Debe contener al menos 6 caracteres')
    .max(15, 'Debe contener mas de 15 caracteres'),
  password: yup.string().required('Este campo es obligatorio'),
})
