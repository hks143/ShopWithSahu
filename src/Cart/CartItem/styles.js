import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  image:{
    width:'100%',
    height:240,
    margin:'auto',
    paddingLeft:5,
    paddingRight:5,
    

  },
  grow: {
    flexGrow: 1,
  }
}));