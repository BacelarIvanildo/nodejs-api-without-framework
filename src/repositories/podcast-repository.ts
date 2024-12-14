import fs from "fs"
import path from "path"
import {PodCastModel} from "../models/podcast-model"


const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repoPodCast = async (podcastName?: string): Promise<PodCastModel[]> => {
    const language = "utf-8"
    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if (podcastName)
    {
        jsonFile = jsonFile.filter((podcast: PodCastModel) =>  podcast.podcastName == podcastName)
    }
    return jsonFile;
}
