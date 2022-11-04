import { Paper, styled, Grid, Button, ButtonGroup } from '@mui/material'
import CustomTextfield from 'Components/CustomComponents/CustomTextfield'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from 'redux/Actions/toDo'
import { sharingInformationService } from 'services/sharing-information'
import { NewToDoFormValidation } from 'validation'

const FormPaper = styled(Paper)(
  ({ theme, open }) => `
      border: ${open ? theme.palette.secondary.main + ' 2px solid' : 'none'} ;
      height: ${open ? '400px' : 0};
      width:100%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 1;
      padding: 0 10px;
      overflow: hidden;
      transition: all 1s;
      max-width: 700px;
  `,
)

const StyledButton = styled(Button)(
  ({ theme }) => `
    background-color: ${theme.palette.primary.dark};
`,
)

export default function NewToDoForm({ open }) {
  const close = () => sharingInformationService.setSubject(false)
  const state = useSelector(state=> state.toDos)
  const dispatch = useDispatch()
  return (
    <FormPaper open={open}>
      <Formik
        validationSchema={NewToDoFormValidation}
        initialValues={{ title: '', desc: '' }}
        onSubmit={(values) => {
          dispatch(addToDo(state, values))
          close()
        }}
      >
        {({}) => (
          <Form>
            <Grid container justifyContent='center' alignItems='center'>
              <Grid item xs={12} sm={10}>
                <CustomTextfield name='title' placeholder='Title' variant='filled' />
              </Grid>
              <Grid item xs={12} sm={9}>
                <CustomTextfield name='desc' placeholder='Description' rows={7} multiline />
              </Grid>
              <Grid item xs={12} sm={10}>
                <ButtonGroup
                  size='large'
                  variant='contained'
                  disableElevation
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <StyledButton onClick={close}>Cancelar</StyledButton>
                  <StyledButton type='submit'>Guardar</StyledButton>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </FormPaper>
  )
}
