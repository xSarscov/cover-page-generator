import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const CoverPreview = () => {

    return (
        <Card
            sx={{
                backgroundColor: "#0d0d0d",
                border: "1px solid #262626",
                borderRadius: 5,
                padding: 4
            }}
        >
            <Stack
                gap={3}
            >
                <Typography
                    fontWeight={"bold"}
                    fontSize={"x-large"}
                    component={'h2'}
                >
                    Vista previa
                </Typography>

                <Box
                    sx={{
                        borderRadius: 5,
                        background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
                        aspectRatio: 8.5 / 11,
                        position: "relative",
                        color: 'common.black',
                    }}
                >
                    <Stack
                        position={"absolute"}
                        sx={{
                            top: 25,
                            left: 25,
                        }}
                    >
                        <Typography
                            fontWeight={"bold"}
                            fontSize={"small"}
                        >
                            Facultad
                        </Typography>
                        <Typography
                            fontSize={"small"}
                        >
                            Carrera
                        </Typography>
                    </Stack>

                    <Stack
                        position={"absolute"}
                        alignItems={"center"}
                        textAlign={"center"}
                        sx={{
                            top: "43%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <Typography
                            fontWeight={"bold"}
                            fontSize={"x-large"}
                        >
                            Título del Trabajo
                        </Typography>
                        <Typography
                            fontSize={"small"}
                        >
                            Nombre de la Asignatura
                        </Typography>
                    </Stack>

                    <Stack
                        position={"absolute"}
                        sx={{
                            bottom: 70,
                            left: 25,
                        }}
                    >
                        <Typography
                            fontWeight={"bold"}
                            fontSize={"small"}
                        >
                            Nombre del Estudiante
                        </Typography>
                        <Typography
                            fontSize={"small"}
                        >
                            Carnet
                        </Typography>
                    </Stack>

                    <Stack
                        position={"absolute"}
                        sx={{
                            bottom: 25,
                            left: 25,
                        }}
                    >
                        <Typography
                            fontSize={"smaller"}
                        >
                            Docente: Nombre del Docente
                        </Typography>
                        <Typography
                            fontSize={"smaller"}
                        >
                            25 de noviembre de 2025
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Card>
    )
}