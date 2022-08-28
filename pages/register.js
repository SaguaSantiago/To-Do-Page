import CustomPaperPage from 'Components/CustomComponents/CustomPaperPage'
import CustomTextfield from 'Components/CustomComponents/CustomTextfield'
import { RegisterValidation } from 'validation'
import registerImage from './../public/assets/undraw_done_checking_re_6vyx.svg'

export default function register() {
  const REGISTEROBJECTS = [
    {
      id: 1,
      name: 'userName',
      placeholder: 'ej: ToDo123',
      label: 'User Name',
      type: 'text',
    },
    {
      id: 2,
      name: 'password',
      placeholder: '··········',
      label: 'Password',
      type: 'password',
    },
    {
      id: 3,
      name: 'confirmPasword',
      placeholder: '··········',
      label: 'Confirm Password',
      type: 'password',
    },
  ]
  return (
    <CustomPaperPage validationSchema={RegisterValidation} image={registerImage}>
      {REGISTEROBJECTS.map(({ type, placeholder, name, label, id }) => (
        <CustomTextfield type={type} placeholder={placeholder} name={name} label={label} key={id} />
      ))}
    </CustomPaperPage>
  )
}
