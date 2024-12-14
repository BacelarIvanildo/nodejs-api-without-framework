import * as http from "http"
import {getFilterEpisodies, getListEpisodies} from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes"
import { HttpMethod } from "./utils/http-methods"


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) =>{
    //queryString
    const baseUrl = request.url?.split("?")[0]   

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodies(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodies(request, response);
    }
}