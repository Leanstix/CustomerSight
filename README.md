# customersight

## Overview

**customersight** is an advanced visitor tracking system designed to capture and recognize faces of individuals visiting a store. It maintains a tally of each visitor's number of visits, helping store management improve customer service, enhance security, and gain valuable insights into visitor behavior.

## Features

- **Real-time Face Detection and Recognition**: Uses state-of-the-art algorithms to accurately detect and recognize faces.
- **Visit Counting**: Automatically tallies the number of visits per individual.
- **Data Privacy**: Ensures all captured data remains within the store's infrastructure.
- **Customizable**: Tailored to meet the specific needs of different retail environments.
- **Integration Friendly**: Easily integrates with existing systems and databases.

## Technology Stack

### Backend

- **Languages**: Python, C, JavaScript (Node.js)
- **Frameworks**: Flask (Python), Express (Node.js)
- **Libraries**: OpenCV, Dlib, SQLAlchemy
- **Database**: MySQL, PostgreSQL, SQLite
- **Cloud Services**: AWS, Google Cloud, Azure
- **Containerization**: Docker

### Frontend

- **Languages**: HTML, CSS, JavaScript
- **Frameworks**: React.js
- **Styling**: Bootstrap, Tailwind CSS

## Infrastructure

### Branching and Merging

- **Git Flow**:
  - `master`: Production-ready code.
  - `develop`: Integration branch for features.
  - `feature/<feature-name>`: Individual feature branches.
  - `release/<version-number>`: Final testing and bug fixes before release.
  - `hotfix/<issue-number>`: Critical bug fixes.

### Deployment

- **CI/CD Tools**: GitHub Actions, Jenkins
- **Environments**:
  - Development: Automatic deployment of `develop` branch.
  - Staging: Deployment of release branches.
  - Production: Deployment of `master` branch.

### Data Population

- **Initial Data**: Scripts to seed the database with sample data.
- **Real-Time Data Capture**: Integrated APIs for live data collection.
- **Backup and Recovery**: Regular database backups.

### Testing

- **Automated Testing**:
  - Unit Tests: `pytest` for Python, `jest` for JavaScript.
  - Integration Tests: Selenium for end-to-end testing.
- **Manual Testing**: Exploratory and User Acceptance Testing (UAT).
- **Code Quality**: `pylint`, `flake8`, `ESLint`.
- **Monitoring**: Prometheus, Grafana
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)

## Existing Solutions

### Comparison

- **Amazon Rekognition**: Cloud-based, pay-as-you-go, limited customization.
- **Face++**: Cloud-based, privacy concerns, developer-friendly.
- **Microsoft Azure Face API**: Cloud-based, integration with Azure services, unpredictable costs.
- **OpenFace**: Open-source, high flexibility, requires expertise.
- **Trueface**: On-device processing, high licensing costs, general solution.

### Reimplementation Justification

- **Customization**: Tailored to specific needs.
- **Cost Efficiency**: More economical in the long term.
- **Data Privacy**: Ensures data remains within the store's control.
- **Integration**: Seamlessly integrates with existing systems.

## Installation

### Prerequisites

- Python 3.x
- Node.js
- MySQL/PostgreSQL/SQLite
- Docker

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-repo/customersight.git
    cd customersight
    ```

2. **Backend Setup**:
    - **Python**:
        ```bash
        cd backend
        python -m venv venv
        source venv/bin/activate
        pip install -r requirements.txt
        ```
    - **Node.js**:
        ```bash
        cd node-backend
        npm install
        ```

3. **Frontend Setup**:
    ```bash
    cd frontend
    npm install
    ```

4. **Database Setup**:
    - Configure your database in `backend/config.py`.
    - Run migrations:
        ```bash
        flask db upgrade
        ```

5. **Run the Application**:
    - **Backend**:
        ```bash
        cd backend
        flask run
        ```
    - **Frontend**:
        ```bash
        cd frontend
        npm start
        ```

## Usage

- Access the application at `http://localhost:3000`.
- Use the admin panel to manage visitor data and track visits.
- Customize settings and integrations via the backend API.

## Contributing

- **Fork the Repository**
- **Create a Feature Branch**: `git checkout -b feature/YourFeature`
- **Commit Your Changes**: `git commit -m 'Add some feature'`
- **Push to the Branch**: `git push origin feature/YourFeature`
- **Open a Pull Request**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, please contact [leanstixx@gmail.com](mailto:leanstixx@gmail.com).