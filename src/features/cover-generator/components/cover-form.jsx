import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import {styled} from "@mui/material/styles";
import {DatePicker} from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import {CoverSelector} from "@/features/cover-generator/components/cover-selector.jsx";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const CoverForm = () => {
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
                <Grid
                    container
                    spacing={2}
                    alignItems={"center"}
                >
                    <Box
                        sx={{
                            display: "flex",
                            padding: 1,
                            backgroundColor: "#13233e",
                            outline: "2px solid #1a3f7a",
                            borderRadius: 5,
                        }}
                    >
                        <DescriptionOutlinedIcon
                            sx={{
                                color: "#50a2ff"
                            }}
                        />
                    </Box>

                    <Typography
                        fontWeight={"bold"}
                        fontSize={"x-large"}
                        component={'h2'}
                    >
                        Elige tu portada
                    </Typography>
                </Grid>

                <CoverSelector/>

                <Grid
                    container
                    spacing={2}
                    alignItems={"center"}
                    flexWrap="nowrap"
                >
                    <Box
                        sx={{
                            display: "flex",
                            padding: 1,
                            backgroundColor: "#2d183e",
                            outline: "2px solid #492269",
                            borderRadius: 5,
                        }}
                    >
                        <ContactPageOutlinedIcon
                            sx={{
                                color: "#c27aff"
                            }}
                        />
                    </Box>

                    <Typography
                        fontWeight={"bold"}
                        fontSize={"x-large"}
                        component={'h2'}
                    >
                        Información del trabajo
                    </Typography>
                </Grid>

                <Stack
                    gap={2}
                >
                    <Stack
                        gap={1}
                    >
                        <Grid
                            container
                            spacing={1}
                            alignItems={"center"}
                            flexWrap={"nowrap"}
                        >
                            <AutoStoriesOutlinedIcon
                                fontSize={'small'}
                                sx={{
                                    color: 'grey.400'
                                }}
                            />
                            <InputLabel>
                                Título del trabajo
                            </InputLabel>
                        </Grid>
                        <TextField
                            variant={'outlined'}
                            placeholder={'Ingresa el título de tu trabajo'}
                            sx={{
                                backgroundColor: '#ffffff0d',
                            }}
                        />
                    </Stack>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            size={{
                                xs: 12, md: 6
                            }}
                        >
                            <Stack
                                gap={1}
                            >
                                <Grid
                                    container
                                    spacing={1}
                                    alignItems={"center"}
                                    flexWrap={"nowrap"}
                                >
                                    <PermIdentityOutlinedIcon
                                        fontSize={'small'}
                                        sx={{
                                            color: 'grey.400'
                                        }}
                                    />
                                    <InputLabel>
                                        Nombre del estudiante
                                    </InputLabel>
                                </Grid>
                                <TextField
                                    variant={'outlined'}
                                    placeholder={'Tu nombre completo'}
                                    sx={{
                                        backgroundColor: '#ffffff0d',
                                    }}
                                />
                            </Stack>
                        </Grid>
                        <Grid
                            size={{
                                xs: 12, md: 6
                            }}
                        >
                            <Stack
                                gap={1}
                            >
                                <Grid
                                    container
                                    spacing={1}
                                    alignItems={"center"}
                                    flexWrap={"nowrap"}
                                >
                                    <BadgeOutlinedIcon
                                        fontSize={'small'}
                                        sx={{
                                            color: 'grey.400'
                                        }}
                                    />
                                    <InputLabel>
                                        Carnet
                                    </InputLabel>
                                </Grid>
                                <TextField
                                    variant={'outlined'}
                                    placeholder={'Tu número de carnet'}
                                    sx={{
                                        backgroundColor: '#ffffff0d',
                                    }}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack
                        gap={1}
                    >
                        <Grid
                            container
                            spacing={1}
                            alignItems={"center"}
                            flexWrap={"nowrap"}
                        >
                            <SchoolOutlinedIcon
                                fontSize={'small'}
                                sx={{
                                    color: 'grey.400'
                                }}
                            />
                            <InputLabel>
                                Carrera
                            </InputLabel>
                        </Grid>
                        <Autocomplete
                            options={[]}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder={"Selecciona tu carrera"}
                                    sx={{
                                        backgroundColor: '#ffffff0d',
                                    }}
                                />
                            )}
                        />
                    </Stack>

                    <Stack
                        gap={1}
                    >
                        <Grid
                            container
                            spacing={1}
                            alignItems={"center"}
                            flexWrap={"nowrap"}
                        >
                            <ClassOutlinedIcon
                                fontSize={'small'}
                                sx={{
                                    color: 'grey.400'
                                }}
                            />
                            <InputLabel>
                                Asignatura
                            </InputLabel>
                        </Grid>
                        <Autocomplete
                            options={[]}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder={"Nombre de la asignatura"}
                                    sx={{
                                        backgroundColor: '#ffffff0d',
                                    }}
                                />
                            )}
                        />
                    </Stack>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            size={{
                                xs: 12, md: 6
                            }}
                        >
                            <Stack
                                gap={1}
                            >
                                <Grid
                                    container
                                    spacing={1}
                                    alignItems={"center"}
                                    flexWrap={"nowrap"}
                                >
                                    <AccountCircleOutlinedIcon
                                        fontSize={'small'}
                                        sx={{
                                            color: 'grey.400'
                                        }}
                                    />
                                    <InputLabel>
                                        Nombre del docente
                                    </InputLabel>
                                </Grid>
                                <TextField
                                    variant={'outlined'}
                                    placeholder={'Nombre del profesor'}
                                    sx={{
                                        backgroundColor: '#ffffff0d',
                                    }}
                                />
                            </Stack>
                        </Grid>
                        <Grid
                            size={{
                                xs: 12, md: 6
                            }}
                        >
                            <Stack
                                gap={1}
                            >
                                <Grid
                                    container
                                    spacing={1}
                                    alignItems={"center"}
                                    flexWrap={"nowrap"}
                                >
                                    <CalendarTodayOutlinedIcon
                                        fontSize={'small'}
                                        sx={{
                                            color: 'grey.400'
                                        }}
                                    />
                                    <InputLabel>
                                        Fecha
                                    </InputLabel>
                                </Grid>
                                <DatePicker
                                    defaultValue={dayjs()}
                                    format="DD/MM/YYYY"
                                    slotProps={{
                                        textField: {
                                            sx: {
                                                backgroundColor: '#ffffff0d',
                                            }
                                        }
                                    }}
                                />
                            </Stack>
                        </Grid>
                    </Grid>

                    <Stack
                        gap={1}
                    >
                        <Grid
                            container
                            spacing={1}
                            alignItems={"center"}
                            flexWrap={"nowrap"}
                        >
                            <AccountBalanceOutlinedIcon
                                fontSize={'small'}
                                sx={{
                                    color: 'grey.400'
                                }}
                            />
                            <InputLabel>
                                Nombre de la facultad
                            </InputLabel>
                        </Grid>
                        <Autocomplete
                            options={[]}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder={"Facultad"}
                                    sx={{
                                        backgroundColor: '#ffffff0d',
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </Stack>

                <Grid
                    container
                    spacing={2}
                    alignItems={"center"}
                >
                    <Box
                        sx={{
                            display: "flex",
                            padding: 1,
                            backgroundColor: "#3b1429",
                            outline: "2px solid #6e1d48",
                            borderRadius: 5,
                        }}
                    >
                        <FileUploadOutlinedIcon
                            sx={{
                                color: "#fb64b6"
                            }}
                        />
                    </Box>

                    <Typography
                        fontWeight={"bold"}
                        fontSize={"x-large"}
                        component={'h2'}
                    >
                        Cargar documento
                    </Typography>
                </Grid>

                <Box
                    component="label"
                    htmlFor="image-upload"
                    sx={{
                        display: "flex",
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        padding: 3,
                        border: 2,
                        borderStyle: "dashed",
                        borderRadius: 5,
                        borderColor: "grey.700",
                        cursor: "pointer",
                        transition: "border-color 1s color 1",
                        "&:hover": {
                            borderColor: "#51a2ff",
                            backgroundColor: "action.hover",
                            ".MuiSvgIcon-root": {
                                color: "#51a2ff",
                            }
                        }
                    }}
                >
                    <VisuallyHiddenInput
                        id="image-upload"
                        type="file"
                        accept={".pdf, .docx"}
                    />

                    <Stack
                        alignItems={"center"}
                        sx={{
                            textAlign: "center",
                            position: "relative",
                        }}
                    >
                        <FileUploadOutlinedIcon
                            sx={{
                                fontSize: 64,
                                color: "grey.700"
                            }}
                        />
                        <Typography
                            color={"text.secondary"}
                        >
                            Arrastra tu archivo o haz click para seleccionar
                        </Typography>
                        <Typography
                            color={"text.disabled"}
                        >
                            PDF o DOCX
                        </Typography>
                    </Stack>
                </Box>

                <Button
                    variant="contained"
                    size={"large"}
                    sx={{
                        backgroundColor: "#9810FA",
                        color: "common.white",
                        textTransform: "none",
                        fontWeight: "bold",
                    }}
                >
                    Generar PDF
                </Button>
            </Stack>
        </Card>
    )
}