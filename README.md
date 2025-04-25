This is a real-time Ride Allocation System that simulates assigning available drivers to passengers requesting rides, with visual feedback through a clean and interactive web interface. It’s built using the MERN stack (MongoDB, Express, Node.js) on the backend and Vanilla JavaScript + HTML/CSS on the frontend.

📦 Features
🚘 Assigns available drivers to passengers on ride request

🔄 Rides are completed automatically after 30 seconds

🧑‍✈️ Drivers show status as Available or On Ride

👦 Passengers show status as Waiting, Assigned, or Completed

⏱️ Live countdown timer for ongoing rides

🕒 Real-time clock in the top-right corner

🔄 Auto-refresh every 2 seconds to reflect live data

🧼 Clean, responsive, and visually categorized UI

💡 Technologies Used
Backend: Node.js, Express.js, MongoDB, Mongoose

Frontend: HTML, CSS, Vanilla JavaScript

Database Models: Driver, Passenger, Ride

🛠️ How It Works
Passenger submits a ride request through the frontend.

The system checks for an available driver.

If a driver is found:

A Ride is created and assigned.

The driver is marked as unavailable.

The passenger is marked as assigned.

After 30 seconds, the ride is marked completed, and:

The driver becomes available again.

The passenger’s status updates to completed.

📂 Project Structure
pgsql
Copy
Edit
├── models/
│   ├── Driver.js
│   ├── Passenger.js
│   └── Ride.js
├── routes/
│   ├── drivers.js
│   ├── passengers.js
│   └── rides.js
├── public/
│   └── index.html
├── server.js

🙋‍♂️ Developed by Rahul Balachandar

Project done for academic learning purposes as part of DBMS project.

📸 Output Screenshots:


![Screenshot 2025-04-19 214133](https://github.com/user-attachments/assets/8b542c79-048a-4af4-b5fe-88b8fabc0420)
![Screenshot 2025-04-19 214601](https://github.com/user-attachments/assets/d333f034-3b6e-4e3e-8112-398dadeda236)
![Screenshot 2025-04-19 214704](https://github.com/user-attachments/assets/70748c56-46a0-42f3-9158-1b39cb8b0c36)


Backend Database - MongoDB Compass:

![Screenshot 2025-04-25 221941](https://github.com/user-attachments/assets/f27dd1d8-4aaf-4207-a6d7-7b41f3386f34)
![Screenshot 2025-04-25 221949](https://github.com/user-attachments/assets/4e72f49a-0428-4cb5-b118-cc6b7be5928f)
![Screenshot 2025-04-25 222006](https://github.com/user-attachments/assets/73597924-b938-4834-8e08-c53c2e628579)
![Screenshot 2025-04-25 222014](https://github.com/user-attachments/assets/c27c8aad-87b1-467a-ae8a-830a42ddfc64)



