import { PORT } from './common/config.ts';
import app from './app.ts';

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
