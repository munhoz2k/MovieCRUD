import { app } from './app';
import { routes } from './routes';

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server UP on: http://localhost:${PORT}/`);
});
