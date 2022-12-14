import { useField } from 'formik'

import { FormHelperText, styled, TextField } from '@mui/material'

const StyledOutlinedInput = styled(TextField)(
  ({ theme }) => `
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #6bc6ca;
    }
    &:hover fieldset {
      border-color: #5bb6ba;
    }
    &:hover {
      &.Mui-error fieldset {
        border-color: ${theme.palette.error.light};
      }
    }
  }
`,
)
export default function CustomTextfield({ label, placeholder, ...props }) {
  const [field, meta] = useField(props)

  return (
    <>
      <StyledOutlinedInput
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        sx={{ marginTop: '20px' }}
        placeholder={placeholder ? placeholder : ''}
        label={label ? label : ''}
        inputProps={{ notched: 'true' }}
        InputLabelProps={{ shrink: true, color: 'secondary' }}
        fullWidth
      />
      <FormHelperText sx={{ height: '20px' }} error>
        {meta.touched && meta.error ? meta.error : null}
      </FormHelperText>
    </>
  )
}
