"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
    return (
        <Card sx={{ maxWidth: 345, height: 400 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    src={props.value.coffeeImgURL}
                    alt="coffee"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.value.coffeeTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.value.coffeeDesc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};