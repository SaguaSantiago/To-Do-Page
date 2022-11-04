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
  title: yup.string().required('Es necesario que tenga un título'),
  desc: yup.string().required('Añade una pequeña descripción'),
})
