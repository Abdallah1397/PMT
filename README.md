# Profiles Management Tool (PMT)

## Overview
Profiles Management Tool is a web application built using the React JS that enables users to perform basic operations on profiles within a system.

![PMT Image](./src/assets/images/mdImages/landingPage.png)

## Installation Instructions
To run the app locally, follow these steps:
1. Clone the repository: `git clone https://github.com/Abdallah1397/PMT.git`
2. Navigate to the project directory: `cd pmt`
3. Install dependencies: `npm install`
4. Start the app: `npm start`

## Dependencies and Technologies Used
- react v18.2.0
- axios v1.6.0 for API calls
- bootstrap v5.3.2 for styling
- react-redux v8.1.3 for state management
- redux-persist v6.0.0 for persist the state
- mui v5.14.16
- mui icons v5.14.16 
- react-router-dom v6.2.1 for routing
- react-slick v6.0.0
- slick-carouser v1.8.1 
## Folder Structure
The project structure:
- `src/`: Contains React components, assets, intercptors, pages, utils, redux, and application logic.
- `public/`: Includes the HTML template and static assets.

##  Here's an overview for its key components and functionalities:
1. **User Interface (UI):** The app provides a user-friendly interface where users can view a list of profiles, add new profiles, update existing ones, and delete profiles.
2. **Profile Listing:** Displays a list of existing profiles with essential details (such as name, phone, speed, etc.), allowing users to quickly scan through available profiles.
3. **Create Profile:** Allows users to input information to create a new profile. It typically includes a form with fields for various profile attributes, such as name, phone, etc. Upon submission, the new profile is added to the list.
4. **Update Profile:** Provides the ability to edit and update existing profiles. Clicking on an "Update" button or similar functionality opens a form pre-filled with the profile's existing details, allowing modifications to be made and saved.
5. **Delete Profile:** Allows users to remove profiles from the system. Typically, this involves a confirmation step to prevent accidental deletions.
6. **API Integration:** Communicates with a backend server or API to perform CRUD operations on a database or storage system. This could involve using libraries like Axios or fetch to send HTTP requests (GET, POST, PUT, DELETE) to the server.
7. **Validation and Error Handling:** Implements validation checks on input fields to ensure data integrity and handles errors gracefully, providing feedback to users in case of invalid inputs or failed operations.
8. **Responsive Design:** Ensures the application is responsive and works well across various devices and screen sizes.
9. **State Management:** Using the redux toolkit to manage the application's state, ensuring reactivity and synchronization of data across different components.

## Usage
1. Upon login, users can view a list of existing profiles or create new ones.
2. Each profile includes fields for personal information such as name, phone, speed, etc.
3. users can edit or delete profiles as needed.

## Development
- Development was carried out using VSCode and Git for version control.

## Conclusion
The Profile Management App simplifies the process of managing user profiles for administrators. 

