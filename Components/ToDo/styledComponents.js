import { Grid, IconButton, Paper, styled, Typography } from '@mui/material'

export const StyledDiv = styled('div')`
  display: flex;
  justify-content: center;
  gap: 1%;
  width: 100%;
`

export const StyledPaper = styled(Paper)`
  background-color: #a8dadc;
  position: relative;
  height: 50px;
  min-width: 288px;
  transition: width 1s;
  width: 100%;
  left: auto;
  right: auto;
`

export const ToDoTitle = styled(Typography)`
  margin-left: 10px;
  font-weight: 600;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const ActionArea = styled(Grid)`
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  gap: 2px;
`

export const ActionButton = styled(IconButton)`
  height: 30px;
  width: 30px;
  background-color: #f1f1f1;
  margin-left: 5px;
`

export const ToDoTitleInDescription = styled('p')`
  text-align: center;
  overflow-wrap: break-word;
  padding: 0 10px;
  font-weight: 500;
  font-size: 17px;
`
