import mySQL from 'mysql';

export const Connection = async() => {
    try {
        await mySQL.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "apsensyscare"
        });
        console.log("connected")
    } catch (error) {
        console.log(`error while connection ${error.message}`)
    }
}
export default Connection;