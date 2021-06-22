import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 250,
    // paddingTop: '56.25%', // 16:9
    // paddingTop: '132.25%',
    
    maxWidth:300
  },
  image:{
    width:'100%',
    height:240,
    margin:'auto',
    paddingLeft:5,
    paddingRight:5,
    

  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },
}));