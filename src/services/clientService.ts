import {Client} from "./types.ts";

export class ClientMap extends Map<string, Client> {
    constructor() {
        const clientsString = sessionStorage.getItem('clients');
        const clients = clientsString ? JSON.parse(clientsString) : [];
        super(clients);
    }

    private saveClients(client: Client) {
        let existingClients = JSON.parse(sessionStorage.getItem('clients') || '[]');
        existingClients.push(client);
        sessionStorage.setItem('clients', JSON.stringify(existingClients));
    }

    public addClient(client: Client) {
        client.id = Date.now().toString();
        this.saveClients(client)
        return client;
    }

    public updateClient(id: string, client: Client) {
        if (this.has(id)) {
            this.set(id, client);
            this.saveClients(client);
            return client;
        } else {
            return null;
        }
    }

    public removeClient(id: string) {
        const clientsString = sessionStorage.getItem('clients');
        let clients = clientsString ? JSON.parse(clientsString) : [];

        const index = clients.findIndex((client: Client) => client.id === id);

        if (index !== -1) {
            const removedClients = clients.splice(index, 1);
            sessionStorage.setItem('clients', JSON.stringify(clients));
            return removedClients[0];
        } else {
            return null;
        }
    }

    public getClients() {
        const clientsString = sessionStorage.getItem('clients');
        return clientsString ? JSON.parse(clientsString) : []
    }
}
