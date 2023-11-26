import React from "react";
import { Card, CardContent, Tooltip } from "@mui/material";
import "./addProfile.css";

const AddProfileCard = (props) => {
  return (
    <Card className="addProfileCard" onClick={props.onClick}>
      <CardContent className="profileCardContent">
        <Tooltip title="Add Profile" arrow followCursor placement="left-start">
          <img
            alt="Add Profile Card"
            src={require("../../assets/images/addProfile.png")}
            className="addProfileImg"
          />
        </Tooltip>
      </CardContent>
    </Card>
  );
};

export default AddProfileCard;
