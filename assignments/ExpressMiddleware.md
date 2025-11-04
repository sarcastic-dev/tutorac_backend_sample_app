# 🧩 Express.js Middleware Tasks

## 🎯 Objective

Understand how **middlewares** work in Express, create your own **application-level middleware**, and implement a centralized **error-handling middleware** to manage runtime errors gracefully.

---

## 🧠 What You’ll Learn

- What a middleware is and how it fits in the request–response cycle
- How to use `next()` to move between multiple middlewares
- How to build and apply **Application-level middlewares**
- How to handle errors globally using an **Error-handling middleware**

---

## 🪜 Task 1: Create a Custom Middleware

### 🧩 Goal

Create a simple middleware that logs every incoming request.

### Steps

1. Create a new Express app (`middleware-demo.js`).
2. Define a custom middleware function that:
   - Logs the HTTP method (e.g., GET, POST)
   - Logs the URL (e.g., `/users`)
   - Logs the current timestamp
3. Use `app.use()` to apply it globally.
4. Add 2 routes: `/` and `/about`.
5. Check the terminal after each request to see your logs.

### 💡 Example Output

📦 GET request received at / on 2025-10-28T14:35:00.000Z
📦 GET request received at /about on 2025-10-28T14:35:05.000Z

---

## 🪜 Task 2: Application-Level Middleware

### 🧩 Goal

Learn how to use middlewares that apply to **all routes** or **specific routes**.

### Steps

1. Add a **second middleware** that adds a property `req.requestTime = new Date().toISOString()`.
2. Use it **globally** with `app.use()`.
3. In your routes, return both a message and the `req.requestTime` value.

#### Example Response

````json
{
  "message": "Welcome to the Home Page",
  "requestedAt": "2025-10-28T14:35:00.000Z"
}

	4.	Now, modify it so the middleware only applies to one specific route (e.g., /about).
	5.	Observe the difference: / should not have requestedAt, /about should.

⸻

🪜 Task 3: Error-Handling Middleware

🧩 Goal

Learn to handle application errors gracefully without crashing the server.

Steps
	1.	Add a route /fail that intentionally throws an error:
	•	For example: access a property of undefined or throw new Error("Something broke!").
	2.	Create an error-handling middleware (must have 4 parameters):

```js
app.use((err, req, res, next) => {
  console.error("🚨 Error caught:", err.message);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message
  });
});

⸻

````
