import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formTitle: {
    color: '#407F7F',
    fontFamily: 'Cursive'
  },
  textField: {
    backgroundColor: '#ADD8E6'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    backgroundColor: '#EECF48'
  },
  buttonSubmit: {
    backgroundColor: '#48C5EE',
    marginBottom: 10,
  },
  buttonClear: {
    backgroundColor: '#F45124',
  },
}));