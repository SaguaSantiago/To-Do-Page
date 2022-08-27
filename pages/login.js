import { Grid, Paper, styled } from '@mui/material'
import CustomButton from 'Components/CustomComponents/CustomButton'
import CustomTextfield from 'Components/CustomComponents/CustomTextfield'
import { Formik, Form } from 'formik'
import Image from 'next/image'
import { LOGINFORMOBJECT } from 'objects'
import { LoginValidation } from 'validation'
import LoginImage from './../public/assets/undraw_chore_list_re_2lq8.svg'

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
  height: 60vh;
`

const StyledDiv = styled('div')`
  width: 70%;
  margin: 0 auto;
`

export default function Login() {
  return (
    <Grid justifyContent='center' container>
      <Grid item xs={12} sm={8.4}>
        <StyledPaper elevation={4}>
          <Grid sx={{ height: '100vh' }} container justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={6}>
              <ImgContainer>
                <Image src={LoginImage} layout='fill' objectFit='contain' objectPosition='center' />
              </ImgContainer>
            </Grid>
            <Grid sx={{ padding: '0 10%' }} item xs={12} md={6}>
              <Formik
                initialValues={{
                  userName: '',
                  password: '',
                }}
                validationSchema={LoginValidation}
                onSubmit={(res) => {
                  console.log(res)
                }}
              >
                {({}) => (
                  <Form autoComplete='off'>
                    <Grid container direction='column'>
                      {LOGINFORMOBJECT.map(({ id, label, placeholder, name, type }) => (
                        <CustomTextfield
                          type={type}
                          placeholder={placeholder}
                          name={name}
                          label={label}
                          key={id}
                        />
                      ))}
                      <StyledDiv>
                        <CustomButton
                          spacing='2px'
                          fullWidth
                          color='primary'
                          variant='outlined'
                          size='large'
                        >
                          LOGIN
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
