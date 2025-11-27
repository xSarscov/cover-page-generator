import {useState} from "react";
import {coverTemplates} from "@/features/cover-generator/config/cover-templates.js";
import {CoverSelectorItem} from "@/features/cover-generator/components/cover-selector-item.jsx";
import RadioGroup from "@mui/material/RadioGroup";

export const CoverSelector = () => {
    const [selectedCoverId, setSelectedCoverId] = useState(1);

    return (
        <RadioGroup
            row
            name="size-options"
            value={selectedCoverId}
            onChange={(_, value) => setSelectedCoverId(Number(value))}
            sx={{
                display: "flex",
                flexWrap: "nowrap",
                gap: 2,
                maxWidth: "100%",
                "& .MuiFormControlLabel-root": {
                    m: 0,
                    flex: 1,
                    border: 0,
                    cursor: "pointer",
                    borderRadius: 3,
                    "&:hover": {
                        backgroundColor: "action.hover",
                    },
                    "&:has(:checked)": {
                        outline: 3,
                        outlineStyle: "solid",
                        outlineOffset: -2,
                        outlineColor: "#51a2ff",
                        zIndex: 1,
                    },
                    "&:not(:first-of-type)": {
                        marginLeft: "-1px",
                    },
                },
            }}
        >
            {
                coverTemplates.map((cover) => (
                    <CoverSelectorItem
                        key={cover.id}
                        cover={cover}
                        selectedCoverId={selectedCoverId}
                    />
                ))
            }
        </RadioGroup>
    );
}
