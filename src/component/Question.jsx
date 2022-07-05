import React from "react";
import { useState } from "react";

const QuesTion = () => {
    const [question, setQuestion] = useState({cauhoi: "Ban co nguoi yeu chua.", traloi: "co"});
    
    return (
        <div>
            <div>Trac Nghiem</div>
            <div>Cau hoi: {question?.cauhoi}</div>
            <div>Traloi: {question?.traloi}</div>
        </div>
    );
}

export default QuesTion;


