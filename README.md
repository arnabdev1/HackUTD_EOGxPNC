# HydraWatch
HackUTD 2024 submission

## Overview
EOG Resources is a leading crude oil and natural gas exploration and production company. For this hackathon, we were tasked with developing a solution to efficiently monitor gas wells and help visualize the data so that instances of hydrate formation can be quickly detected and controlled. Additionally, the project aims to minimize potential production loss by providing real-time insights and predictive analytics for hydrate detection.

Our project was also inspired by the challenge presented by PNC. Their encouragement to tackle data analysis and visualization for business decisions was a core motivator for our solution.

## Problem Statement
Ice-like solids forming from gas under certain pressure and temperature conditions is a significant challenge in gas pipelines. A greater amount of gas passing results in higher yields for extraction. On the other hand, these hydrates can block gas flow, leading to costly well shutdowns. We aim to help lease operators efficiently monitor these wells and quickly identify any instances of hydrate formation.

## Objective:
Develop a system to monitor and identify instances of hydrate formation using real-time data on gas injection volume, target injection volume, and valve open percentages. Enhance the solution to predict potential hydrate formations using historical data.

## Tech Stack
Backend: Python, Flask Frontend: HTML, CSS, JavaScript, Next.js Database: SQAlchemy Data Analysis & Prediction: Pandas, Scikit-learn, Logistic Regression

## What is HydraWatch?
Proposed Solution
Our project addresses the problem by leveraging a combination of data analytics, machine learning, and web technologies to:

Visualize pipeline data through an interactive dashboard to help lease operators make informed decisions quickly.
Detect hydrate formation in real-time based on current gas injection metrics.
Predict future hydrate events using historical data to optimize preventive measures.
Key Features
Hydrate Detection Dashboard
Real-time Monitoring: Displays live data on gas injection volumes and valve statuses.
Alerts: Provides instant notifications for detected hydrates.
Visualization: Graphs and bars with real-time data updates provide enhanced in-depth visual cues for officers to spot anomalies.
Utilizes machine learning algorithms to predict hydrate formation based on historical data patterns.
How HydraWatch visualizes:
We built an intuitive dashboard for each pipeline which updates based on real-time information. The dashboard also has the feature to send alarms/notifications to its users when anomalies are detected. The graphs presented are color-coded based on how likely they are to start forming hydrates. We also added some circular bar charts that we believe will give the users more insight on how each of the pipelines are behaving.

Finally, we added progress bars to support future rare event prediction models.

Integrating HydraWatch ML into our web solution:
In addition to our visualizations, we added a tool that would allow users to predict whether a hydrate has formed or will form soon. We integrated our solution to our website.

For this solution, we tool a Statistic/ML approach. We considered different solutions but after thorough evaluation, we noticed that Logistic Regression was the most aligned to the ground truth. Which is why that is our current pick. Nevertheless, we believe there may be better solutions out there, which is why we designed this tool so that the ML models can easily be switched with the help of Python's Pickle feature. We currently store 3 ML models with 2 different Logistic Regressions (different parameters) and one Gradient Descent algorithm.

## Architecture Diagram
User Interface (Dashboard) | v Flask Backend (API) | v Database (SQAlchemy) | v Machine Learning Model (Prediction) | v Data Visualization (Charts & Graphs)

## Data Sources & Processing
We use the following data points to monitor hydrate formation: Current Gas Injection Volume: Volume of gas currently injected into the pipeline. Target Gas Injection Volume: Desired volume of gas injected to maintain optimal extraction. Valve Open Percentage: Indicates the flow rate through the pipeline. The data is processed in real-time, and our Machine learning model is trained on large datasets to predict when hydrates are likely to form. Our solution can be expected to run from both direct sensor input and also from CSV files provided. This ensures Data Flow. Data is fetched from the source and stored in the database. Our trained Machine Language module is fed rows of data, it predicts whether a hydration is likely to occur. If deviations indicate a hydrate blockage, an alert is generated.

The prediction model continuously analyzes the data to forecast potential hydrate formations. Machine Learning Model Our ML model uses features such as: Current gas injection volume Target gas injection volume Valve open percentage We experimented with various algorithms like Logistic Regression, (Tahmeed bhaia input)Decision Trees, and Random Forests, to achieve optimal predictions.

## Training Process
Preprocessing: Clean and normalize historical data. Feature Engineering: Extract key indicators of hydrate formation. Model Training: Train the model using a portion of historical data. Evaluation: Test the model’s accuracy using unseen data. Frontend The front end of HydraWatch serves as the user-facing dashboard where lease operators can monitor real-time data, visualize patterns, and receive alerts about hydrate formation. It was built using Next.js, a powerful React framework, for seamless integration of components and server-side rendering to ensure fast loading times and responsiveness.

## Key Features of the Frontend:
Real-Time Data Visualization:
Interactive charts and graphs dynamically update to display live data from gas pipelines, such as gas injection volumes and valve percentages. Visual cues like color-coded alerts ensure anomalies are easily identifiable. User-Friendly Interface: Clean and modern design with intuitive navigation. Custom components styled with HTML, CSS, and JavaScript to enhance usability and provide a professional look.

## Responsive Design:
Fully optimized for different screen sizes, ensuring lease operators can monitor pipeline data on desktops, tablets, or mobile devices. Integration with Backend APIs: Fetches predictions and real-time data from the Flask backend using RESTful APIs. Smooth communication ensures a seamless user experience.

## Frontend Workflow:
Users interact with the dashboard to view real-time pipeline metrics. Alerts and predictions are displayed alongside the data, providing actionable insights in an easy-to-digest format.

## Backend
The backend is the backbone of HydraWatch, handling data ingestion, storage, prediction, and communication with the frontend. It was built using Flask, a lightweight Python framework, for its simplicity and compatibility with machine learning integrations.

## Key Features of the Backend:
Data Processing:
Processes CSV files or real-time data inputs from IoT sensors. Stores the data securely in an SQLite database using the SQLAlchemy toolkit for easy querying, retrieval and management.

## Machine Learning Integration:
Utilizes a trained Scikit-learn model exported as a .pkl file. Processes incoming data and predicts whether hydrate formation is likely to occur. Sends these predictions to the frontend for visualization.

## API Development:
RESTful API endpoints were created to handle: Uploading CSV files. Fetching processed data for visualization. Returning predictions to the frontend. Alert System: If the machine learning model detects significant deviations indicating hydrate formation, an alert is generated and sent to the frontend. Backend Workflow: The Flask backend receives data (via CSV uploads or direct input). It preprocesses the data, queries the database, and feeds it to the trained machine learning model. Predictions and processed metrics are sent back to the frontend through RESTful APIs

## Frontend-Backend Collaboration
Data Flow:
The frontend uploads CSV files via API endpoints exposed by the Flask backend. The backend processes the files, stores the data, and generates predictions, which are then fetched by the frontend. Real-Time Monitoring: Data visualization components on the frontend rely on API responses from the backend to display live updates.

## Predictive Insights:
Predictions from the machine learning model are displayed on the frontend, helping operators quickly identify and act on potential issues. What is Next for HydraWatch Implement a more sophisticated machine learning model (e.g., neural networks) to improve predictive accuracy.

Integrate IoT sensors to fetch real-time data directly from gas pipelines.
Add support for SMS/email alerts for lease operators. Create a mobile application for monitoring on the go.
