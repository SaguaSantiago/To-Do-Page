import { Paper, styled, Button } from '@mui/material'

export const FormPaper = styled(Paper)(
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
        transition: all .4s;
        max-width: 700px;
    `,
)

export const StyledButton = styled(Button)(
  ({ theme }) => `
      background-color: ${theme.palette.primary.dark};
  `,
)
