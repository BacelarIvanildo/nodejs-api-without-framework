import { repoPodCast } from "../repositories/podcast-repository"
import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { HttpStatusCode } from "../utils/http-statuscode";


export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodCastTransferModel> => {


    let responseFormat: PodCastTransferModel = {
        statusCode: 0,
        body: []
    }

    const queryString: string = podcastName?.split("?p=")[1] || ""
    const data = await repoPodCast(queryString);

    responseFormat.statusCode =data.length > 0 ? HttpStatusCode.Ok : HttpStatusCode.NoContent;

    responseFormat.body = data;

    return responseFormat;
}