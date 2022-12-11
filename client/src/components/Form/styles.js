import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: '#FFF'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formTitle:{
    color: '#48C5EE'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    background: '#EECF48'
  },
  buttonSubmit: {
    marginBottom: 10,
    background: '#48C5EE'
  },
  buttonClear:{
    background: '#FFA500'
  },
  inputField: {
    background: '#ADD8E6'
  }

}));