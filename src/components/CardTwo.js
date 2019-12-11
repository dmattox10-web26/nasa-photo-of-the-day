import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    card: {
      maxWidth: 800,
    },
    media: {
      height: 450,
    },
  })
const CardTwo = (props) => {
    const classes = useStyles()
    return (
        <div>
            <Container maxWidth='lg'>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={props.url}
                            title={props.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                {props.title}
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                {props.explanation}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color='primary' href='/'>
                            Go Back
                        </Button>
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}

export default CardTwo