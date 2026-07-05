# Rising Water

## Project Overview
This project predicts flood risk using machine learning techniques based on weather data such as rainfall, temperature, humidity, cloud visibility, and seasonal rainfall.

## Team
- Tommandru Anjali

## Technologies Used
- Python
- Machine Learning
- Flask
- HTML
- CSS
## Project Flow

The Rising Water Monitoring and Flood Prediction System follows a structured machine learning workflow consisting of five major epics. Each epic represents an important stage of the project, from data collection to application deployment.

### Epic 1: Data Collection
- Collect the flood prediction dataset containing rainfall, temperature, humidity, cloud cover, river water level, and flood status.
- Load the dataset into Python using Pandas for analysis.

### Epic 2: Data Visualization and Analysis
- Import required Python libraries.
- Explore the dataset.
- Perform univariate and multivariate analysis.
- Generate descriptive statistics.
- Visualize relationships using graphs and heatmaps.

### Epic 3: Data Preprocessing
- Handle missing values.
- Remove duplicate records.
- Detect and treat outliers.
- Encode categorical variables.
- Split the dataset into training and testing sets.
- Apply feature scaling if required.

### Epic 4: Model Building
- Train Decision Tree.
- Train Random Forest.
- Train K-Nearest Neighbours (KNN).
- Train XGBoost.
- Compare model performance.
- Save the best model as `model.pkl`.

### Epic 5: Application Development
- Develop the frontend using React.js.
- Develop the backend using Flask.
- Connect the trained model with the Flask API.
- Integrate React with Flask.
- Test and validate flood predictions.