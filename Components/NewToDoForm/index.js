import { createToDoService } from 'services/sharing-information'

import CustomTextfield from 'Components/CustomComponents/CustomTextfield'

import { Grid, ButtonGroup } from '@mui/material'

import { Form, Formik } from 'formik'
import { NewToDoFormValidation } from 'validation'

import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from 'redux/Actions/toDo'

import { FormPaper, StyledButton } from './StyledComponents'
export default function NewToDoForm({ open }) {
  const close = () => createToDoService.setSubject(false)
  const state = useSelector((state) => state.toDos)
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
