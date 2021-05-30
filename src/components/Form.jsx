import { Box, TextField, Button, makeStyles } from '@material-ui/core'
import { getdata } from './api'
import { useEffect, useState } from 'react'

import Information from './Information'
const usestyle = makeStyles({
    component: {

    },
    input: {
        color: '#fff',
        marginRight: '1em',
        outline: 'red'
    },
    button: {
        marginTop: '1em',
    }
})
const Form = () => {
    const [data, getdatawheather] = useState();
    const [city, setcity] = useState('');
    const [country, setcountry] = useState('');
    const [click, handleclick] = useState(false);

    useEffect(() => {
        const getwheather = async () => {
            city && await getdata(city, country).then(response => {
                getdatawheather(response.data);
                console.log(response.data);
            })
        }
        getwheather();
        handleclick(false);
    }, [click]);
    const classes = usestyle();

    const handlecitychange = (value) => {
        setcity(value);
    }
    const handlecountrychange = (value) => {
        setcountry(value);
    }
    return (
        <>
            <Box className={classes.component}>
                <TextField
                    id="filled-basic"
                    color="secondary"
                    onChange={(e) => handlecitychange(e.target.value)}
                    inputProps={{ className: classes.input }}
                    label='City'
                    className={classes.input}
                />
                <TextField
                    color="secondary"
                    onChange={(e) => handlecountrychange(e.target.value)}
                    inputProps={{ className: classes.input }}
                    label='Country'
                    className={classes.input}
                />
                <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleclick(true)}>
                    Get Wheather

                </Button>
                <Information data={data} />
            </Box>

        </>
    )
}

export default Form