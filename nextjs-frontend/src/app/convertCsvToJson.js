const csv = require("csvtojson");
const fs = require("fs");
const path = require("path");

async function convertCsvToJson() {
    const csvFolderPath = path.join(__dirname, "../../../machine-learning/normalized-data");
    const jsonFolderPath = path.join(__dirname, "../../public/json");

    // Ensure JSON folder exists
    if (!fs.existsSync(jsonFolderPath)) {
        fs.mkdirSync(jsonFolderPath);
    }

    const files = fs.readdirSync(csvFolderPath);

    for (const file of files) {
        if (file.endsWith(".csv")) {
            const csvFilePath = path.join(csvFolderPath, file);
            const jsonFilePath = path.join(jsonFolderPath, file.replace(".csv", ".json"));

            const jsonArray = await csv().fromFile(csvFilePath);
            fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArray, null, 2));
            console.log(`Converted ${file} to JSON.`);
        }
    }
}

convertCsvToJson().catch((err) => console.error("Error converting CSV to JSON:", err));
