import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif'
    , 
  },
  customStyles: {
    stylishTitle: {
      fontSize: '2.5rem',
      fontWeight: 700, 
      letterSpacing: '0.1em', 
      textTransform: 'uppercase', 
    },
    stylishShopNow: {
      fontSize: '1.8rem', 
      fontStyle: 'italic', 
      color: '#ff4081',
      marginTop: -1, 
    },
  },
});
export default function CardMenuItem({item}) {
  let navigate = useNavigate()
  return (
    <Card sx={{ position: 'relative'}} onClick={() => navigate(`/shop/${item.id}`)}>
      <CardActionArea>
        <CardMedia component="img" image={item.imageUrl} alt="green iguana" />
        <CardContent
          sx={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
           
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              
              variant="h6"
              component="div"
              color="white"
              sx={theme.customStyles.stylishTitle}
            >
              {item.title}
            </Typography>
            <Typography variant="h5" color="white" sx={theme.customStyles.stylishShopNow}>
              SHOP NOW
            </Typography>
          </ThemeProvider>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
