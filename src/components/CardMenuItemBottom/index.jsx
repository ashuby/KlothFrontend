import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato, sans-serif'
    , // Use the imported font
  },
  customStyles: {
    stylishTitle: {
      fontSize: '2.5rem', // Adjust the font size
      fontWeight: 700, // Adjust the font weight
      letterSpacing: '0.1em', // Adjust letter spacing
      textTransform: 'uppercase', // Convert text to uppercase
    },
    stylishShopNow: {
      fontSize: '1.8rem', // Adjust the font size
      fontStyle: 'italic', // Apply italic style
      color: '#ff4081', // Adjust the color
      marginTop: -1, // Adjust spacing
    },
  },
});
export default function CardMenuItemBottom({ item }) {
  let navigate = useNavigate()
  return (
    <Card sx={{ position: 'relative', height: 300, width: 540 }} onClick={() => navigate(`/shop/${item.id}`)} >
      <CardActionArea>
        <CardMedia component="img" image={item.imageUrl} alt="green iguana" />
        <CardContent
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              gutterBottom
              variant="h5"
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
