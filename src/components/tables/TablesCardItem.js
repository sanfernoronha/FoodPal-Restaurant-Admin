import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardActions, CardContent, CardMedia, Typography,Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import CropFreeIcon from '@material-ui/icons/CropFree';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: 580
    },
    cover: {
        width: 180,
        height: 150
    },
    content: {
    flex: '1 0 auto',
    
  },
  actions: {
        marginTop: "auto"
    }
}))

export default function TablesCardItem() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.cover} image="https://www.btklsby.go.id/images/placeholder/food.png"/>
            <CardContent className={classes.content}>
                <Box display="flex" alignItems="center" flexDirection="row">
                    <Box ml={1} >
                        <Typography component="h5" variant="h4">
                            #1
                        </Typography>
                    </Box>
                    <Box ml={1}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <PersonIcon color='inherit' fontSize='large' />
                            <Typography variant='h5' color='initial' component='h2'>
                                2
                            </Typography>
                        </div>
                    </Box>
                </Box>
                
            </CardContent>
            <CardActions className={classes.actions} >
                    <Button variant="contained"  size='small' color='secondary' startIcon={<DeleteIcon/>} style={{marginRight: 20}}>
                    Delete
                    </Button>
                    <Button  variant="contained" size='small' color='primary' startIcon={<EditIcon/>}>
                    Edit
                    </Button>
                    <Button variant="contained"  size='small' color='inherit' startIcon={<CropFreeIcon/>}>
                    QR
                    </Button>
      </CardActions>
        </Card>
    )
}
