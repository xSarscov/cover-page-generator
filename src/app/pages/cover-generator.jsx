import {CoverForm} from "@/features/cover-generator/components/cover-form.jsx";
import {CoverPreview} from "@/features/cover-generator/components/cover-preview.jsx";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CoverGenerator = () => {

    const isUpMediumScreen = useMediaQuery(theme => theme.breakpoints.up('md'));

    return (
        <Grid
            container
            minHeight={'100dvh'}
        >
            <Container
                maxWidth="lg"
            >
                <Box
                    sx={{
                        my: 4
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: "center",
                            marginBottom: 8
                        }}
                    >
                        <Stack>
                            <Typography
                                component="h1"
                                variant="h2"
                                fontWeight="bold"
                            >
                                Generador de{" "}
                                <span
                                    style={{
                                        color: 'transparent',
                                        background: 'linear-gradient(90deg,rgba(81, 162, 255, 1) 0%, rgba(194, 122, 255, 1) 50%, rgba(251, 100, 182, 1) 100%)',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    Portadas
                                </span>
                            </Typography>
                            <Typography
                                color="text.secondary"
                            >
                                Crea portadas académicas profesionales y únelas a tu trabajo en minutos.
                            </Typography>
                        </Stack>
                    </Box>

                    <Grid
                        container
                        spacing={4}
                    >
                        {/* Work Form */}
                        <Grid
                            size={{
                                xs: 12,
                                sm: 12,
                                md: 12,
                                lg: 6,
                                xl: 6,
                            }}
                        >
                            <CoverForm
                            />
                        </Grid>

                        {/* PDF Preview */}
                        <Grid
                            sx={{
                                ...(isUpMediumScreen && {position: "sticky"}),
                                ...(isUpMediumScreen && {top: 32}),
                                ...(isUpMediumScreen && {height: "fit-content"}),
                            }}
                            size={{
                                xs: 12,
                                sm: 12,
                                md: 12,
                                lg: 6,
                                xl: 6,
                            }}
                        >
                            <CoverPreview/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Grid>
    )
}