# CascadeShield

### AI-Based Microservice Failure Prediction and Containment Platform

CascadeShield is a Web Technology project that monitors microservices, tracks service dependencies, detects failure propagation, and aims to predict and contain cascading failures using AI.

## Current Architecture

```text
User :5001
     ↓
Order :5002
     ↓
Payment :5003
     ↓
Inventory :5004

Tech Stack
- Node.js
- Express.js
- MySQL
- REST APIs
- React (planned)
- Python / ML (planned)
- Prometheus & Grafana (planned)

Current Progress
- ✅ Node.js backend
- ✅ MySQL database
- ✅ 4 microservices
- ✅ Health monitoring
- ✅ Inter-service communication
- ✅ Order → Payment → Inventory dependency
- ✅ Basic failure propagation

Upcoming
- Telemetry & monitoring
- Failure simulation
- AI failure prediction
- Cascade risk analysis
- Automated failure containment
- React dashboard
