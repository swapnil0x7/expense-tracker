import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="powered by Speechly" />
            <CardContent>
                <Typography variant="subheading" style={{ lineHeight: '1.5em', marginTop: '1px' }}>
                    You can add your transactions by saying - "Add Income of amount x in salary for today."
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
