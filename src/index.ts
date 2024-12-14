import express, { urlencoded, json } from 'express';
import morgan from 'morgan';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan(':date[iso] | :method | :url | :status | :res[content-length] - :response-time ms'));

// default route
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
    console.info(`Server is running on : http://localhost:${PORT}`);
});
