import { LOGINFORMOBJECTS } from 'objects'
import { LoginValidation } from 'validation'

import CustomPaperPage from 'Components/CustomComponents/CustomPaperPage'
import CustomTextfield from 'Components/CustomComponents/CustomTextfield'

export default function Login() {
  return (
    <CustomPaperPage
      isLogin
      validationSchema={LoginValidation}
      image={'/assets/undraw_chore_list_re_2lq8.svg'}
    >
      {LOGINFORMOBJECTS.map(({ id, label, placeholder, name, type }) => (
        <CustomTextfield type={type} placeholder={placeholder} name={name} label={label} key={id} />
      ))}
    </CustomPaperPage>
  )
}
