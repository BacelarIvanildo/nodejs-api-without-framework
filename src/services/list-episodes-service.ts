import { PodCastTransferModel } from "../models/podcast-transfer-model";
import { repoPodCast } from "../repositories/podcast-repository";
import { HttpStatusCode } from "../utils/http-statuscode";

export const serviceListEpisodes = async (): Promise<PodCastTransferModel> => {
  let responseFormat: PodCastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repoPodCast();

  responseFormat.statusCode =
    data.length > 0 ? HttpStatusCode.Ok : HttpStatusCode.NoContent;

  responseFormat.body = data;

  return responseFormat;
};
