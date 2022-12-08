import * as yup from 'yup'

export const LoginValidation = yup.object({
  userName: yup
    .string()
    .required('Este campo es obligatorio')
    .min(6, 'Debe contener al menos 6 caracteres')
    .max(15, 'Debe contener mas de 15 caracteres'),
  password: yup.string().required('Este campo es obligatorio'),
})

export const RegisterValidation = yup.object({
  userName: yup
    .string()
    .required('Este campo es obligatorio')
    .min(6, 'Debe contener al menos 6 caracteres')
    .max(15, 'Debe contener mas de 15 caracteres'),
  password: yup.string().required('Este campo es obligatorio'),
  confirmPasword: yup
    .string()
    .required('Este campo es obligatorio')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export const NewToDoFormValidation = yup.object({
  title: yup
    .string()
    .required('Es necesario que tenga un título')
    .max(48, 'El titulo debe contener menos de 48 caracteres')
    .min(5, 'el titulo debe contener al menos 5 caracteres'),
  desc: yup.string().required('Añade una pequeña descripción'),
})
