# **Mojiatsume Contribution Guidelines**

Welcome, and thank you for your interest in contributing to the Mojiatsume project\!

This document is a guide to help you through the process of contributing. Following these guidelines helps us maintain a high-quality codebase, keep the workflow organized, and makes the development process smoother for everyone involved.

## **1\. Code of Conduct**

All contributors are expected to adhere to our [**Code of Conduct**](https://www.google.com/search?q=CODE_OF_CONDUCT.md). Please read it to ensure our community remains a welcoming and respectful place.

## **2\. Getting Started: Your Local Setup**

### **Prerequisites**

* Node.js (v20.x or later)  
* npm or yarn  
* Git  
* A running PostgreSQL database instance

### **Setup Steps**

1. **Fork** the repository.  
2. **Clone** your fork locally.  
3. **Install dependencies** (npm install or yarn install).  
4. **Set up environment variables** by copying .env.example to .env.local and filling in the values.  
5. **Run the database migration** (npx prisma migrate dev).  
6. **Run the development server** (npm run dev).

## **3\. The Contribution Workflow**

### **Step 1: Find or Create an Issue**

* All work must be tied to a GitHub issue.  
* Discuss new features or bugs in an issue before starting work.  
* Assign the issue to yourself or comment on it.

### **Step 2: Create a Branch**

* Branch from main.  
* Use the naming convention: feature/short-description, bugfix/issue-123-description, or chore/description.

### **Step 3: Write Your Code**

* Follow the Coding Standards outlined below.  
* Comment complex logic.

### **Step 4: Commit Your Changes**

* Use the **Conventional Commits** specification (e.g., feat: Add user avatar upload).

### **Step 5: Open a Pull Request (PR)**

* Push your branch to your fork.  
* Fill out the PR template completely, including a clear title, description, and a link to the issue (Closes \#123).  
* Include screenshots/GIFs for all UI changes.

### **Step 6: Code Review**

* A maintainer will review your PR. Be open to feedback and collaboration.

## **4\. Coding Standards & Style Guide**

### **Language & Frameworks**

* All code must be in **TypeScript**. Avoid any.  
* We use **Next.js** with the App Router.  
* All database interactions must go through **Prisma**.

### **Formatting & Linting**

* We use **ESLint** and **Prettier**.  
* Run npm run lint and npm run format before committing.

### **Styling**

* All styling must be done using **Tailwind CSS**.  
* Adhere strictly to the Design System and tailwind.config.js.

### **Accessibility (a11y)**

* Accessibility is a core requirement.  
* Use semantic HTML.  
* Ensure keyboard navigability and visible focus states.  
* Ensure sufficient color contrast (WCAG AA).  
* Use ARIA attributes where necessary.  
* Provide descriptive alt tags for all images.

## **5\. Communication**

* **GitHub Issues**: For bug reports, feature requests, and task tracking.  
* **Discord Server**: For general discussion and collaboration.

Thank you again for your contribution\!

