import database from "@/database/database";

export default async function Database() {
  const url = "select * from bsaa";
  const responseDB = await database.query(url);

  return (
    <div>
      {responseDB.rows.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h3>{item.gender}</h3>
        </div>
      ))}
    </div>
  );
}
