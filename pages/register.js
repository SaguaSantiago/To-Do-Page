import { REGISTEROBJECTS } from 'objects'
import { RegisterValidation } from 'validation'

import registerImage from './../public/assets/undraw_done_checking_re_6vyx.svg'

import CustomPaperPage from 'Components/CustomComponents/CustomPaperPage'
import CustomTextfield from 'Components/CustomComponents/CustomTextfield'

export default function register() {
  return (
    <CustomPaperPage validationSchema={RegisterValidation} image={registerImage}>
      {REGISTEROBJECTS.map(({ type, placeholder, name, label, id }) => (
        <CustomTextfield type={type} placeholder={placeholder} name={name} label={label} key={id} />
      ))}
    </CustomPaperPage>
  )
}
