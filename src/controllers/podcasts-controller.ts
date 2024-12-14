import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodCastTransferModel } from "../models/podcast-transfer-model";

const DEFAULT_CONTENT = {"Content-Type": ContentType.ApplicationJson}


export const getListEpisodies = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodCastTransferModel = await serviceListEpisodes();
  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));
  res.end();
};

export const getFilterEpisodies = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodCastTransferModel = await serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));
  res.end();
};
