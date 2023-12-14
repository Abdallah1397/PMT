import React, { useRef, useState, useEffect } from "react";
import ProfileCard from "../../components/profileCard/profileCard";
import { api } from "../../interceptors/axiosInstance";
import Banner from "../../components/banner/bannner";
import "./profiles.css";
import ProfileSVG from "../../assets/svgs/profilesSVG/profileSVG";
import Title from "../../components/title/title";
import DeleteDialog from "../../components/deleteDialog/deleteDialog";
import AddProfileCard from "../../components/addProfile/addProfile";
import SaveDialog from "../../components/saveDialog/saveDialog";
import Hero from "../../components/hero/hero";
import Clients from "../../components/clients/clients";

// Profiles Page
const Profiles = () => {
  /*
   * useRef => Allows you to create a mutable object that hold a .current property.
   * this .current used to hold a mutable value and it persists across re-renders
   */
  const isMounted = useRef(true);
  useEffect(() => {
    getAllProfiles();
    return () => {
      isMounted.current = false;
    };
  }, []);
  // All Profiles State
  const [allProfiles, setAllProfiles] = useState([]);
  // Selected Profile
  const [selectedProfile, setSelectedProfile] = useState({});
  // Profile Info
  const [newProfileInfo, setNewProfileInfo] = useState({
    name: "",
    phone: "",
    age: "",
    email: "",
  });
  // Save Dialog
  const [saveDialog, setSaveDialog] = useState({
    saveDialogStatus: false,
    saveDialogButton: "",
    saveDialogTitle: "",
  });
  // Saving Progress
  const [savingProgress, setSavingProgress] = useState(false);
  // Save Dialog Alerts
  const [saveDialogAlerts, setSaveDialogAlerts] = useState({
    alertMsg: "",
    alertType: "",
    isSuccess: false,
    isEmpty: false,
    backendError: false,
  });
  // Destructuring the Save Dialog Alerts State
  const { alertMsg, alertType, backendError, isEmpty, isSuccess } =
    saveDialogAlerts;
  // Delete Dialog Status
  const [deleteDialogStatus, setDeleteDialogStatus] = useState(false);
  // Deleting Progress
  const [deletingProgress, setDeletingProgress] = useState(false);
  // Erros resulting while requesting data
  const [dataErrors, setDataErrors] = useState({
    errorLoadingData: false,
    noDataFound: false,
    errMsg: "",
  });
  // Get all Profiles
  const getAllProfiles = () => {
    // HTTP request to get all profiles
    api
      .get("profiles")
      .then((res) => {
        if (isMounted.current) {
          setAllProfiles(res.data);
          console.log(res.data.length);
        }
      })
      .catch((err) => {
        if (isMounted.current) {
          setDataErrors({
            errorLoadingData: true,
            noDataFound: false,
            errMsg: "Error loading data!",
          });
        }
      });
  };
  // Handle Input Change
  const handleInputChange = (e) => {
    if (saveDialog.saveDialogButton === "Create") {
      setNewProfileInfo({
        ...newProfileInfo,
        [e.target.id]: e.target.value,
      });
    } else {
      setSelectedProfile({
        ...selectedProfile,
        [e.target.id]: e.target.value,
      });
    }
  };
  // Open Save Dialog (Create / Update)
  const openSaveDialog = (dialogStatus, dialogType, dialogTitle, item) => {
    setSaveDialog({
      saveDialogStatus: dialogStatus,
      saveDialogButton: dialogType,
      saveDialogTitle: dialogTitle,
    });
    item && setSelectedProfile(item);
  };
  // Close Save Dialog
  const closeSaveDialog = () => {
    setSaveDialog({
      saveDialogStatus: false,
      saveDialogButton: "",
      saveDialogTitle: "",
    });
    // Clear new Profile Info
    setNewProfileInfo({
      name: "",
      phone: "",
      age: "",
      email: "",
    });
    // Clear Selected Profile
    setSelectedProfile({});
    // Clear Alerts
    setSaveDialogAlerts({
      alertMsg: "",
      alertType: "",
      isEmpty: false,
      backendError: false,
      isSuccess: false,
    });
  };
  // Create a new profile
  const creatNewProfile = () => {
    // Check if any text field is empty or not
    if (Object.values(newProfileInfo).some((item) => item === "")) {
      setSaveDialogAlerts({
        alertMsg: "All fields are required!",
        alertType: "error",
        isEmpty: true,
        backendError: false,
        isSuccess: false,
      });
      return;
    }
    // Turn on loading progress
    setSavingProgress(true);
    // HTTP request to create a new profile
    api
      .post("profiles", newProfileInfo)
      .then((res) => {
        if (isMounted.current) {
          // Turn off loading progress
          setSavingProgress(false);
          setSaveDialogAlerts({
            alertMsg: `${newProfileInfo.name} has been successfully created`,
            alertType: "success",
            isEmpty: false,
            backendError: false,
            isSuccess: true,
          });
          // Recall the data to enhance the UI
          getAllProfiles();
        }
      })
      .catch((err) => {
        if (isMounted.current) {
          // Turn off loading progress
          setSavingProgress(false);
          if (err.response && err.response.data && err.response.data.phone) {
            const errorMessage = err.response.data.phone[0]; // Extracting the error message
            setSaveDialogAlerts({
              alertMsg: errorMessage,
              alertType: "error",
              isEmpty: false,
              backendError: true,
              isSuccess: true,
            });
          } else {
            setSaveDialogAlerts({
              alertMsg: "An unexpected error occurred",
              alertType: "error",
              isEmpty: false,
              backendError: true,
              isSuccess: true,
            });
          }
        }
      });
  };
  // Update the profile info
  const handleProfileUpdate = () => {
    // Check if any text field is empty or not
    if (Object.values(selectedProfile).some((item) => item === "")) {
      setSaveDialogAlerts({
        alertMsg: "All fields are required!",
        alertType: "error",
        isEmpty: true,
        backendError: false,
        isSuccess: false,
      });
      return;
    }
    // Turn on loading progress
    setSavingProgress(true);
    // HTTP request to create a new profile
    api
      .put(`profiles/${selectedProfile._id}/`, selectedProfile)
      .then((res) => {
        if (isMounted.current) {
          // Turn off loading progress
          setSavingProgress(false);
          setSaveDialogAlerts({
            alertMsg: `${selectedProfile.name} has been successfully updated`,
            alertType: "success",
            isEmpty: false,
            backendError: false,
            isSuccess: true,
          });
          // Recall the data to enhance the UI
          getAllProfiles();
        }
      })
      .catch((err) => {
        if (isMounted.current) {
          // Turn off loading progress
          setSavingProgress(false);
          if (err.response && err.response.data && err.response.data.phone) {
            const errorMessage = err.response.data.phone[0]; // Extracting the error message
            setSaveDialogAlerts({
              alertMsg: errorMessage,
              alertType: "error",
              isEmpty: false,
              backendError: true,
              isSuccess: true,
            });
          } else {
            setSaveDialogAlerts({
              alertMsg: "An unexpected error occurred",
              alertType: "error",
              isEmpty: false,
              backendError: true,
              isSuccess: true,
            });
          }
        }
      });
  };
  // Open Delete Dialog
  const openDeleteDialog = (item) => {
    setDeleteDialogStatus(true);
    setSelectedProfile(item);
  };
  // Close Delete Dialog
  const closeDeleteDialog = () => {
    setDeleteDialogStatus(false);
    setSelectedProfile({});
  };
  // Delete Profile
  const onDeleteProfile = () => {
    // turn on linear progress
    setDeletingProgress(true);
    api
      .delete(`profiles/${selectedProfile._id}`)
      .then((res) => {
        if (isMounted.current) {
          // turn off loading progress
          setDeletingProgress(false);
          // To inhance the ui we will call the data again
          getAllProfiles();
          // close the dialog
          closeDeleteDialog();
        }
      })
      .catch((err) => {
        if (isMounted.current) {
          // turn off loading progress
          setDeletingProgress(false);
        }
      });
  };
  return (
    <div className="profiles container-fluid">
      {/* Profiles Banner */}
      <Banner svgBanner={<ProfileSVG />} title={"Profiles Management"} />
      <div className="row allProfiles">
        {/* Section Title */}
        <div className="col-12">
          <Title title="Profiles" />
        </div>
        {/* Adding Card */}
        <div className="col-12 col-md-3 mt-3">
          <AddProfileCard
            onClick={() => openSaveDialog(true, "Create", "Add a new profile")}
          />
        </div>
        {/* Iterate over all profiles */}
        {allProfiles.length > 0
          ? allProfiles.map((item, i) => (
              <div className="col-12 col-md-3 mt-3" key={i}>
                <ProfileCard
                  name={item.name}
                  phone={item.phone}
                  age={item.age}
                  email={item.email}
                  deleteProfile={() => openDeleteDialog(item)}
                  updateProfile={() =>
                    openSaveDialog(
                      true,
                      "Update",
                      `Update ${item.name} information`,
                      item
                    )
                  }
                />
              </div>
            ))
          : null}
      </div>
      <div className="row">
        <Hero
          title="Explore the leading user profile management tools in-depth"
          to="/profiles"
          buttonText="Discover Now"
        />
      </div>
      {/* Clients Slider */}
      <div className="row homeSectionStyle">
        <Clients />
      </div>
      {/* Save Dialog */}
      <SaveDialog
        open={saveDialog.saveDialogStatus}
        title={saveDialog.saveDialogTitle}
        textButton={saveDialog.saveDialogButton}
        isLoading={savingProgress}
        onChange={handleInputChange}
        onClick={
          saveDialog.saveDialogButton === "Create"
            ? creatNewProfile
            : handleProfileUpdate
        }
        onClose={closeSaveDialog}
        name={selectedProfile.name ? selectedProfile.name : newProfileInfo.name}
        phone={
          selectedProfile.phone ? selectedProfile.phone : newProfileInfo.phone
        }
        email={
          selectedProfile.email ? selectedProfile.email : newProfileInfo.email
        }
        age={
          selectedProfile.age
            ? selectedProfile.age
            : newProfileInfo.age
        }
        openedAlert={backendError || isEmpty || isSuccess}
        alertType={alertType}
        alertMsg={alertMsg}
      />
      {/* Delete Dialog */}
      <DeleteDialog
        open={deleteDialogStatus}
        username={selectedProfile.name}
        onClose={closeDeleteDialog}
        isLoading={deletingProgress}
        onDelete={onDeleteProfile}
      />
    </div>
  );
};

export default Profiles;
