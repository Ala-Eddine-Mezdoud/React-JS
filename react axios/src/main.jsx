import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Meal } from "./Meals";

createRoot(document.getElementById("root")).render(

    <StrictMode>
        <Meal />

    </StrictMode>

)