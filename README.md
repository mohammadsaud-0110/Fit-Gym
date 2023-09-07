# FitGym 🏋️‍♂️🥗

FitGym is a comprehensive health and wellness mobile application developed using React Native. It empowers users to track their fitness goals, connect with fitness trainers, and access personalized workout and nutrition plans.

![icon](https://github.com/mohammadsaud-0110/Fit-Gym/assets/112760057/e45aeef8-e294-4528-a2f4-00a425b0559d)



## Table of Contents
- [Problem Statement](#problem-statement)
- [Tech Stack](#tech-stack)
- [Entities](#entities)
- [Key Features](#key-features)
- [Deliverables](#deliverables)
- [Screenshots](#screenshots)
- [Installation and Usage](#installation-and-usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)
- [Contact](#contact)

## Problem Statement

FitGym is a mobile application aimed at providing users with a fitness-tracking platform. Users can set fitness goals, log daily activities, and track their progress. This project focuses on hands-on learning experience in building a functional app while emphasizing fundamental app development techniques.

## Tech Stack

- React Native
- Python
- Django
- Postgres


## Entities

1. **User**
   - Name (Text)
   - Age (Number)
   - Gender (Dropdown: Male, Female, Other)
   - Height (Number)
   - Weight (Number)
   - Email (Text)
   - Contact Number (Text)

2. **Trainer**
   - Name (Text)
   - Gender (Dropdown: Male, Female, Other)
   - Specialization (Text)
   - Experience (Number)
   - Email (Text)
   - Contact Number (Text)

...

## Key Features

- **User and Trainer Profiles:** Manage user and trainer profiles with basic CRUD operations and detailed profile information.
- **Fitness Plans:** Create workout and nutrition plans tailored to users' fitness goals.
- **Logs and Tracking:** Log daily workouts and dietary activities, set fitness goals, and track progress over time.
- **Dashboard and Insights:** Provide users with an overview of their fitness journey, including active plans, current goals, and progress status.

## Deliverables

- Fully functional health and wellness mobile app as per the outlined specifications.
- Detailed documentation, including an application overview, entity relationships, and API endpoint details.
- Instructions for app setup, installation, and usage.
- Complete source code hosted on a public repository like GitHub.
- Project presentation: A video demonstrating the implemented features and app usage.

## Screenshots

### User signup
 
### User dashboard

### User activity log screen

### User goal list screen

### User new goal setting screen

### Workout list screen

### Exercise screen

### Nutrition list screen

### Food list screen


### Trainer signup

### Trainer dashboard

### Trainer create workout screen

### Trainer create nutrition screen


...

## Installation and Usage

### Frontend
1. Clone the repository:
   ```
   git clone https://github.com/your-username/fitgym-frontend.git
   ```
2. Change into the project directory:
   ```
   cd fitgym-frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```
5. Visit `http://localhost:3000` in your web browser.

### Backend
1. Clone the repository:
   ```
   git clone https://github.com/your-username/fitgym-backend.git
   ```
2. Change into the project directory:
   ```
   cd fitgym-backend
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Set up the database and run migrations:
   ```
   python manage.py migrate
   ```
5. Start the Django server:
   ```
   python manage.py runserver
   ```
6. Backend API will be accessible at `http://localhost:8000`.

## API Endpoints

- **User Profile**
  - GET `/api/users/`
  - POST `/api/users/`
  - GET `/api/users/{id}/`
  - PUT `/api/users/{id}/`
  - DELETE `/api/users/{id}/`

...

## Deployment

Frontend: https://expo.dev/artifacts/eas/76MLZmmTkwCAiMXRrevcC3.aab

Backend: https://fitgym-backend.onrender.com/

## Testing

Rigorous testing, including unit tests, integration tests, and end-to-end tests, is critical for ensuring the application's stability and reliability.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request on the main repository's GitHub page.


## Contact

If you have any questions or suggestions, please feel free to [open an issue](https://github.com/mohammadsaud-0110/Fit-Gym/issues) or contact us at [mdsaud.mrj@gmail.com](mailto:mdsaud.mrj@gmail.com). 📬

Happy fitness tracking! 💪🏼🥦
