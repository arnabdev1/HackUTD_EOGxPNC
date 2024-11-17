import fs from "fs";
import path from "path";

export default function handler(req, res) {
    try {
        const jsonFolderPath = path.join(process.cwd(), "public/json");
        const files = fs.readdirSync(jsonFolderPath);
        const result = {};

        files.forEach((file) => {
            if (file.endsWith(".json")) {
                const filePath = path.join(jsonFolderPath, file);
                const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

                // Convert JSON to string array
                const stringArray = jsonData.map((item) => JSON.stringify(item));
                result[file.replace(".json", "")] = stringArray;
            }
        });

        res.status(200).json(result);
    } catch (error) {
        console.error("Error loading JSON files:", error);
        res.status(500).json({ error: "Failed to load data" });
    }
}
