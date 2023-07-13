import CustomButton from 'Components/CustomComponents/CustomButton'

import { Formik, Form } from 'formik'

import { Grid, Paper, styled } from '@mui/material'

const StyledPaper = styled(Paper)(
  (props) => `
  min-width: 100%;
  max-width: 70vw;
  min-height: 100vh;
`,
)

const ImgContainer = styled('div')`
  position: relative;
  width: 100%;
  height: 50vh;
`

const StyledDiv = styled('div')`
  width: 70%;
  margin: 0 auto;
`

export default function CustomPaperPage({ image, isLogin, children, validationSchema }) {
  return (
    <Grid justifyContent='center' container>
      <Grid item xs={12} sm={8.4}>
        <StyledPaper elevation={4}>
          <Grid sx={{ height: '100vh' }} container justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6}>
              <ImgContainer>
                <img
                  src={image}
                  style={{ width: '100%', height: '100%' }}
                  objectPosition='center'
                />
              </ImgContainer>
            </Grid>
            <Grid sx={{ padding: '0 10%' }} item xs={12} md={6}>
              <Formik
                initialValues={{
                  userName: '',
                  password: '',
                  confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(res) => {
                  console.log(res)
                }}
              >
                {({}) => (
                  <Form autoComplete='off'>
                    <Grid container direction='column'>
                      {children}
                      <StyledDiv>
                        <CustomButton
                          spacing='2px'
                          type='submit'
                          fullWidth
                          color='primary'
                          variant='outlined'
                          size='large'
                        >
                          {isLogin ? 'LOGIN' : 'REGISTER'}
                        </CustomButton>
                      </StyledDiv>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </StyledPaper>
      </Grid>
    </Grid>
  )
}
