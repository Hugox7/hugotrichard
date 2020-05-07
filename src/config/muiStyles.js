import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    chip: {
        margin: '0px 10px 10px 0px',
        fontFamily: 'Noto Sans',
        fontWeight: 'bold',
    },
    card: {
        maxWidth: '350px',
        boxShadow: '5px 5px 10px lightgray',
        margin: '20px'
    },
    cardMedia: {
        height: 160,
    },
    toolTip: {
        fontSize: '20px',
    },
    drawer: {
        backgroundColor: '#383838',
        width: '300px',
    },
    button: {
        width: '100%',
    },
    
});