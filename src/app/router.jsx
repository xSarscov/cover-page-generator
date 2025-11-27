import {CoverGenerator} from "@/app/pages/cover-generator.jsx";
import {paths} from "@/config/paths.js";
import {Routes, Route} from "react-router";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={paths.app.root.path} element={<CoverGenerator/>}/>
        </Routes>
    )
}