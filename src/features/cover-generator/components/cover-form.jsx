import {CoverPreview} from "@/features/cover-generator/components/cover-preview.jsx";
import {zodResolver} from "@hookform/resolvers/zod";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Controller, useForm} from "react-hook-form";
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
import {z} from "zod";

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


const allowedMimeTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const coverSchema = z.object({
    coverTitle: z.string().min(1, {error: "El título del trabajo es requerido."}),
    coverDate: z.instanceof(dayjs, {error: "La fecha es requerida."}).refine((date) => date.isValid(), {
        message: "La fecha es inválida.",
    }),
    studentName: z.string().min(1, {error: "El nombre del estudiante es requerido."}),
    studentId: z.string().min(1, {error: "El carnet del estudiante es requerido."}),
    majorName: z.string().min(1, {error: "La carrera es requerida."}),
    courseName: z.string().min(5, {error: "La asignatura es requerida."}),
    teacherName: z.string().min(1, {error: "El nombre del docente es requerido."}),
    facultyName: z.string().min(1, {error: "El nombre de la facultad es requerido."}),
    assignmentFile: z.file({error: "El documento del trabajo es requerido."}).refine((file) => allowedMimeTypes.includes(file.type), {
        error: "Solo se permiten archivos .pdf y .docx",
    }),
});

export const CoverForm = () => {
    const isUpMediumScreen = useMediaQuery(theme => theme.breakpoints.up('md'));

    const {register, handleSubmit, control, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: zodResolver(coverSchema),
        defaultValues: {
            coverTitle: '',
            coverDate: dayjs(),
            studentName: '',
            studentId: '',
            majorName: '',
            courseName: '',
            teacherName: '',
            facultyName: '',
            assignmentFile: undefined,
        },
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <Grid
            container
            spacing={4}
        >
            {/* Cover Form */}
            <Grid
                size={{
                    xs: 12,
                    sm: 12,
                    md: 12,
                    lg: 6,
                    xl: 6,
                }}
            >
                <Card
                    sx={{
                        backgroundColor: "#0d0d0d",
                        border: "1px solid #262626",
                        borderRadius: 5,
                        padding: 4
                    }}
                    component={'form'}
                    onSubmit={onSubmit}
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
                                        Título de la portada
                                    </InputLabel>
                                </Grid>
                                <TextField
                                    variant={'outlined'}
                                    placeholder={'Ingresa el título de la portada'}
                                    {...register("coverTitle")}
                                    error={!!errors?.coverTitle}
                                    helperText={errors?.coverTitle ? errors.coverTitle.message : ""}
                                    slotProps={{
                                        input: {
                                            sx: {
                                                backgroundColor: '#ffffff0d',
                                            }
                                        }
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
                                            {...register("studentName")}
                                            error={!!errors?.studentName}
                                            helperText={errors?.studentName ? errors.studentName.message : ""}
                                            slotProps={{
                                                input: {
                                                    sx: {
                                                        backgroundColor: '#ffffff0d',
                                                    }
                                                }
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
                                            {...register("studentId")}
                                            error={!!errors?.studentId}
                                            helperText={errors?.studentId ? errors.studentId.message : ""}
                                            slotProps={{
                                                input: {
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
                                <Controller
                                    name={'majorName'}
                                    control={control}
                                    render={({field, fieldState,}) => (
                                        <Autocomplete
                                            {...field}
                                            disablePortal
                                            value={field.value || null}
                                            options={[]}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    inputRef={(ref) => {
                                                        field.ref(ref);
                                                        const inputPropsRef = params.InputProps.ref;

                                                        if (typeof inputPropsRef === 'function') {
                                                            inputPropsRef(ref);
                                                        } else if (inputPropsRef && 'current' in inputPropsRef) {
                                                            inputPropsRef.current = ref;
                                                        }
                                                    }}
                                                    placeholder={"Selecciona tu carrera"}
                                                    slotProps={{
                                                        input: {
                                                            sx: {
                                                                backgroundColor: '#ffffff0d',
                                                            }
                                                        }
                                                    }}
                                                    error={fieldState.invalid}
                                                    helperText={fieldState.invalid ? fieldState.error.message : ""}
                                                />
                                            )}
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
                                <Controller
                                    control={control}
                                    name={'courseName'}
                                    render={({field, fieldState}) => (
                                        <Autocomplete
                                            disablePortal
                                            value={field.value || null}
                                            options={[]}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    inputRef={(ref) => {
                                                        field.ref(ref);
                                                        const inputPropsRef = params.InputProps.ref;

                                                        if (typeof inputPropsRef === 'function') {
                                                            inputPropsRef(ref);
                                                        } else if (inputPropsRef && 'current' in inputPropsRef) {
                                                            inputPropsRef.current = ref;
                                                        }
                                                    }}
                                                    placeholder={"Nombre de la asignatura"}
                                                    slotProps={{
                                                        input: {
                                                            sx: {
                                                                backgroundColor: '#ffffff0d',
                                                            }
                                                        }
                                                    }}
                                                    error={fieldState.invalid}
                                                    helperText={fieldState.invalid ? fieldState.error.message : ""}
                                                />
                                            )}
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
                                            {...register("teacherName")}
                                            error={!!errors?.teacherName}
                                            helperText={errors?.teacherName ? errors.teacherName.message : ""}
                                            slotProps={{
                                                input: {
                                                    sx: {
                                                        backgroundColor: '#ffffff0d',
                                                    }
                                                }
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
                                        <Controller
                                            control={control}
                                            name={'coverDate'}
                                            render={({field, fieldState}) => (
                                                <DatePicker
                                                    {...field}
                                                    format="DD/MM/YYYY"
                                                    slotProps={{
                                                        textField: {
                                                            error: fieldState.invalid,
                                                            helperText: fieldState.invalid ? fieldState.error.message : "",
                                                            sx: {
                                                                '& .MuiPickersOutlinedInput-root': {
                                                                    backgroundColor: '#ffffff0d',
                                                                }
                                                            },
                                                        }
                                                    }}
                                                />
                                            )}
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
                                <Controller
                                    name={"facultyName"}
                                    control={control}
                                    render={({field, fieldState}) => (
                                        <Autocomplete
                                            options={[]}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    inputRef={(ref) => {
                                                        field.ref(ref);
                                                        const inputPropsRef = params.InputProps.ref;

                                                        if (typeof inputPropsRef === 'function') {
                                                            inputPropsRef(ref);
                                                        } else if (inputPropsRef && 'current' in inputPropsRef) {
                                                            inputPropsRef.current = ref;
                                                        }
                                                    }}
                                                    placeholder={"Nombre de la asignatura"}
                                                    slotProps={{
                                                        input: {
                                                            sx: {
                                                                backgroundColor: '#ffffff0d',
                                                            }
                                                        }
                                                    }}
                                                    error={fieldState.invalid}
                                                    helperText={fieldState.invalid ? fieldState.error.message : ""}
                                                />
                                            )}
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

                        <Controller
                            name={"assignmentFile"}
                            control={control}
                            render={({field, fieldState}) => (
                                <FormControl error={fieldState.invalid}>
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
                                            borderColor: fieldState.invalid ? "error.main" : "grey.700",
                                            cursor: "pointer",
                                            transition: "border-color 1s color 1",
                                            "&:hover": {
                                                borderColor: fieldState.invalid ? "error.main" : "#51a2ff",
                                                backgroundColor: "action.hover",
                                                ".MuiSvgIcon-root": {
                                                    color: fieldState.invalid ? "error.main" : "#51a2ff",
                                                }
                                            }
                                        }}
                                    >
                                        <VisuallyHiddenInput
                                            {...field}
                                            ref={field.ref}
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
                                                    color: fieldState.invalid ? "error.main" : "grey.700"
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

                                    {
                                        fieldState.invalid && (
                                            <FormHelperText>
                                                {fieldState.error.message}
                                            </FormHelperText>
                                        )
                                    }
                                </FormControl>
                            )}
                        />

                        <Button
                            variant="contained"
                            size={"large"}
                            type="submit"
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
    )
}