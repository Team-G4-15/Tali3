import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
    return (
        <CFooter>
            <div>
                <span className="ms-1">&copy; 2023 </span>
            </div>
            <div className="ms-auto bold font-monospace">
                <span className="me-1">Made by</span>
                Tali3 Team
            </div>
        </CFooter>
    );
};

export default React.memo(AppFooter);
