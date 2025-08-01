import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  mapContainer: {
    height: '85vh',
    width: '100%',
  },
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },
  pointer: {
    cursor: 'pointer',
  },
}));
