import { Box, Typography, makeStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CloudIcon from '@material-ui/icons/Cloud';
import WavesIcon from '@material-ui/icons/Waves';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import OpacitySharpIcon from '@material-ui/icons/OpacitySharp';
import Brightness4SharpIcon from '@material-ui/icons/Brightness4Sharp';

const usestyles = makeStyles({
    component: {
        margin: '50px'
    },
    row: {
        padding: '10px',
        fontSize: '1.4em',
        letterSpacing: '2px'
    },
    icon: {
        color: 'rgb(237, 26, 121)'
    },
    value: {
        color: 'white',
        fontStyle: 'italic'
    }

})
const Information = ({ data }) => {
    // console.log(`${data.main.temp}`);
    const classes = usestyles();
    return (
        data ?
            <Box className={classes.component}>
                <Typography className={classes.row}><LocationOnIcon className={classes.icon}></LocationOnIcon> Location<Box component="span" className={classes.value}>: {data.name},{data.sys.country}</Box></Typography>
                <Typography className={classes.row}><Brightness4SharpIcon className={classes.icon}></Brightness4SharpIcon> Temperarure<Box component="span" className={classes.value}>: {(data.main.temp / 10) % 100}K</Box></Typography>
                <Typography className={classes.row}><OpacitySharpIcon className={classes.icon}></OpacitySharpIcon> Humidity<Box component="span" className={classes.value}>: {data.main.humidity}%</Box> </Typography>
                <Typography className={classes.row}><WbSunnyIcon className={classes.icon}></WbSunnyIcon> Sunrise<Box component="span" className={classes.value}>: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
                <Typography className={classes.row}><Brightness6Icon className={classes.icon}></Brightness6Icon> Sunset<Box component="span" className={classes.value}>: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box></Typography>
                <Typography className={classes.row}><AcUnitIcon className={classes.icon}></AcUnitIcon> Condition<Box component="span" className={classes.value}>: {data.weather[0].description}</Box></Typography>
                <Typography className={classes.row}><CloudIcon className={classes.icon}></CloudIcon> Clouds<Box component="span" className={classes.value}>: {data.clouds.all}%</Box></Typography>
                <Typography className={classes.row}><WavesIcon className={classes.icon}></WavesIcon> Wind<Box component="span" className={classes.value}>: {data.wind.speed}km/hr</Box></Typography>

            </Box> : ''
    )
}

export default Information