import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// Connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(5000, () => console.log("Server open and connected to database"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map