import {http, HttpResponse } from 'msw'
import { ClientMap } from '../services/clientService.ts';
import {Client} from "../services/types.ts";
const clientMap = new ClientMap();
export const handlers = [

    http.get('api/client', () => {
        return HttpResponse.json(clientMap.getClients() as Client[])
    }),

    http.post('api/client', async ({request}) => {
        const response = await request.json()
        clientMap.addClient(response as unknown as Client);
        return new HttpResponse(null, {status: 201})
    }),

    http.put('api/client/:id', ({request, params}) => {
        const { id } = params;
        const response = request.body;
        const result = clientMap.updateClient(id as string, response as unknown as Client);
        if (result) {
            return HttpResponse.json(result)
        } else {
            return new HttpResponse(null, {status: 404})
        }
    }),

    http.delete('api/client/:id', async ({params}) => {
        const {id} = params
        const result = clientMap.removeClient(id as string);
        if (result) {
            return new HttpResponse(null, {status: 200})
        } else {
            return new HttpResponse(null, {status: 404})
        }
    }),
]
