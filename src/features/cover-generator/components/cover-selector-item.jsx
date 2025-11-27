import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";

export const CoverSelectorItem = ({cover, selectedCoverId}) => {

    const isSelected = selectedCoverId === cover.id

    return (
        <FormControlLabel
            key={cover.id}
            value={cover.id}
            sx={{
                position: "relative",
                alignItems: "start",
                height: "8rem",
                background: cover.gradient,
                opacity: isSelected ? 1 : .5,
            }}
            control={
                <Radio
                    sx={{
                        position: "absolute",
                        opacity: 0,
                        width: 0,
                        height: 0,
                    }}
                />
            }
            label={
                <Box>

                    <Typography
                        variant="body1"
                        color="common.white"
                        fontWeight="bold"
                        sx={{
                            position: "absolute",
                            bottom: 10,
                            left: 10,
                        }}
                    >
                        {cover.name}
                    </Typography>

                    {
                        isSelected && (
                            <Box
                                sx={{
                                    display: "flex",
                                    borderRadius: 5,
                                    outline: 3,
                                    outlineStyle: "solid",
                                    outlineColor: "common.black",
                                    position: 'absolute',
                                    top: -6,
                                    right: -6,
                                    backgroundColor: "#2b7fff",
                                    padding: .2,
                                }}
                            >
                                <CheckOutlinedIcon
                                    fontSize="small"
                                    sx={{
                                        color: "common.white",
                                    }}
                                />
                            </Box>
                        )
                    }
                </Box>
            }
        />
    )
}