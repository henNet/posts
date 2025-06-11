import { Pool } from "pg";

const url =
  "postgresql://neondb_owner:npg_eiqZYo9OMEA3@ep-hidden-field-ac6we90b-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require";

const database = new Pool({
  connectionString: url,
});

export default database;
