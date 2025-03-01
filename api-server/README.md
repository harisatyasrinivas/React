Here is a simple **Node.js** server using **Express.js** that serves API requests. 
This server listens on port `5555` and provides basic endpoints to handle **GET, POST, PUT, and DELETE** requests.

---

### Features:
- **GET /api/task** → Returns a sample JSON response.
- **POST /api/task** → Accepts JSON task and returns it.
- **PUT /api/task/:id** → Updates an task based on ID.
- **DELETE /api/task/:id** → Deletes an task based on ID.

---

**Install Express.js**:
   ```sh
   npm install express
   ```

### Running the Server:
Run the following command in the terminal:
```sh
node server.js
```
Your API server will be live at **http://localhost:3000**.

---

### Testing the API:
You can test it using **Postman**, **cURL**, or a browser:
1. **Fetch Data** (GET)
   ```sh
   curl http://localhost:5555/api/task
   ```

2. **Add Data** (POST)
   ```sh
   curl -X POST http://localhost:5555/api/task -H "Content-Type: application/json" -d '{"name":"New Item"}'
   ```

3. **Update Data** (PUT)
   ```sh
   curl -X PUT http://localhost:5555/api/task/1 -H "Content-Type: application/json" -d '{"name":"Updated Item"}'
   ```

4. **Delete Data** (DELETE)
   ```sh
   curl -X DELETE http://localhost:5555/api/task/1
   ```
