import React from "react";
import { Avatar, Button, Card, CardActions, CardContent } from "@mui/material";
import { stringAvatar } from "../../utils/stringAvatarToColor";
import "./profileCard.css";

const ProfileCard = (props) => {
  return (
    <Card className="profileCard">
      <CardContent>
        {/* Card Title */}
        <div className="cardAvatar mb-2">
          <Avatar {...stringAvatar(props.name)} />
          <h1 className="profileName">{props.name}</h1>
        </div>
        {/* Email */}
        <div className="flexDisplay">
          <p className="cardInfo">Email</p>
          <p>{props.email}</p>
        </div>
        {/* Phone Number */}
        <div className="flexDisplay">
          <p className="cardInfo">Phone</p>
          <p>{props.phone}</p>
        </div>
        {/* Age*/}
        <div className="flexDisplay">
          <p className="cardInfo">Age</p>
          <p>{props.age}</p>
        </div>
      </CardContent>
      <CardActions className="cardActions">
        <Button
          variant="contained"
          color="primary"
          onClick={props.updateProfile}
        >
          Update
        </Button>
        <Button variant="contained" color="error" onClick={props.deleteProfile}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
