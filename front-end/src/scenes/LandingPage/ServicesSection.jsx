import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const cards = [
    {
        title: 'Catalog management',
        description:
            "Organize and maintain the library's collection of materials for efficient searching and retrieval.",
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Circulation Management',
        description:
            'Automate borrowing, returning, and tracking of library materials for a smooth user experience.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Patron Management',
        description:
            'Manage user accounts, track borrowing history, and provide personalized services for library patrons.',
        image: 'https://via.placeholder.com/150',
    },
];

const defaultTheme = createTheme();

function CardComponent({ card, selected, onClick }) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                },
                position: 'relative',
                zIndex: selected ? 1 : 0,
                opacity: selected ? 1 : 0.7,
                transform: `scale(${selected ? 1.05 : 1})`,
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2">
                    {card.title}
                </Typography>
                <Typography>{card.description}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default function ServiceSection() {
    const [selectedCard, setSelectedCard] = React.useState(null);

    const handleCardClick = (index) => {
        setSelectedCard((prevSelectedCard) =>
            prevSelectedCard === index ? null : index
        );
    };

    return (
        <section id="services" style={{height: '700px'}}>
            <ThemeProvider theme={defaultTheme}>
                <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
                    <Container style={{marginTop: '10rem'}}>
                        <Typography
                            component="h2"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Our Services
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4} justifyContent="center">
                        {cards.map((card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <CardComponent
                                    card={card}
                                    selected={index === selectedCard}
                                    onClick={() => handleCardClick(index)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    {selectedCard !== null && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '100%',
                                maxWidth: '400px',
                                zIndex: 1,
                                opacity: 1,
                                transition: 'opacity 0.3s ease, transform 0.3s ease',
                            }}
                        >

                        </Box>
                    )}
                </Container>
            </ThemeProvider>
        </section>
    );
}
