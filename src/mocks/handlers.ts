import {http, HttpResponse } from 'msw'
import { ClientMap } from '../services/clientService.ts';
import {Client} from "../services/types.ts";
const clientMap = new ClientMap();
export const handlers = [


    http.get('/client', () => {
        return HttpResponse.json(clientMap.getClients() as Client[])
    }),

    http.post('/client', ({request}) => {
        const response = request.body;
        clientMap.addClient(response as unknown as Client);
        return new HttpResponse(null, {status: 201})
    }),

    http.put('/client/:id', ({request, params}) => {
        const { id } = params;
        const response = request.body;
        const result = clientMap.updateClient(id as string, response as unknown as Client);
        if (result) {
            return HttpResponse.json(result)
        } else {
            return new HttpResponse(null, {status: 404})
        }
    }),

    http.delete('/client/:id', ({params}) => {
        const { id } = params;
        const result = clientMap.removeClient(id as string);
        if (result) {
            return new HttpResponse(null, {status: 204})
        } else {
            return new HttpResponse(null, {status: 404})
        }
    }),
]
