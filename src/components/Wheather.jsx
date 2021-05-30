import { Box, makeStyles } from '@material-ui/core';
import logo from '../images/back.png'
import Form from './Form'


const useStyles = makeStyles({
    component: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        background: '#7f53ac',
        backgroundImage: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)'
    },
    leftcontainer: {
        backgroundImage: `url(${logo})`,
        height: `90vh`,
        width: `30vw`,
        background: 'cover',
        borderRadius: '10% 0 0 10%'

    },
    rightcontainer: {
        background: '#7252DB',

        height: '90vh',
        width: '40vw'
    }
})

const Wheather = () => {
    const classes = useStyles()
    return (
        <Box className={classes.component}>
            <Box className={classes.leftcontainer}>

            </Box>
            <Box className={classes.rightcontainer}>
                <Form />
            </Box>
        </Box>
    )
}

export default Wheather