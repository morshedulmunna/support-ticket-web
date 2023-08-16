[Live Website](https://support-ticket-system-asf.vercel.app/)

# Customer Support Management System

Version: 0.1

Product Category: Web Application

Phase: Documentation

Date: 14th August,2023 

# **Introduction:**

Create a Support Management System (SMS) that enables efficient communication and resolution of customer problems. The system will facilitate customers in reporting issues, allow administrators to manage and assign these issues, and provide a feedback loop for improved customer satisfaction.

### **System Languages**

**Front End: (React),** Next.js, Tailwind CSS (any framework), Redux

**Back End: (NodeJS),** Nest.js, Prisma (ORM)

**Database:** PostgreSQL.

User Mind Map: <Link>

## **1. Front-end Development:**

### **Technologies:**

**React:** A JavaScript library for building user interfaces.

**Next.js:** A framework for server rendered React applications.

**Tailwind CSS:** A utility-first CSS framework for building responsive designs.

**Redux:** A state management library for managing the global state of the application.

## **2. Back-end Development:**

### **Technologies:**

**Node.js:** A JavaScript runtime for server-side development.Nest.js: A progressive Node.js framework for building scalable applications.

**Prisma:** A modern database toolkit and ORM.

**PostgreSQL:** A powerful open-source relational database.



# Project Features 

### **Customer Portal**

- Customers can create an account or log in to the system.
    - Register
    - Sign in!
    - Email validation after register.
    - forget password.
    - google login.
    - Facebook login
- Customers can submit problems, providing a description and selecting a problem type from a predefined list or choosing “Other” for unspecified issues.
- Customer can view a dashboard displaying a list of problems / unresolved / resolved.
- Customer can filter and sort problems based on different parameters such as status, priority.

### **Admin Portal**

- Admins can log in using their credentials.
- Admins can view a dashboard displaying a list of unresolved problems, categorized by type.
- Admins can filter and sort problems based on different parameters such as status, priority.
- Admins can assign problems to specific admins based on their expertise (admin specialization).

### **Assistant Specialization**

- Each a**ssistant** has a specialized problem type they are responsible for.
- An a**ssistant** can only receive problems that match their specialization.

### **Problem Handling**

- a**ssistant and admin** can open a problem to view its details and history.
- a**ssistant and admin** can send replies to customers’ problem reports, providing updates or solutions.
- Customers receive reply to notifications when a**ssistant and admin** reply to their problems.
- Customers can reply to admin messages to provide feedback or ask further questions.

### **Feedback Loop**

- After the problem is resolved, customers can provide feedback on the overall support experience.
- Admins can view and respond to customer feedback.
