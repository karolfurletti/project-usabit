import {Client} from "./types.ts";

export class ClientMap extends Map<string, Client> {
    constructor() {
        const clientsString = sessionStorage.getItem('clients');
        const clients = clientsString ? JSON.parse(clientsString) : [];
        super(clients);
    }

    private saveClients() {
        sessionStorage.setItem('clients', JSON.stringify(Array.from(this.entries())));
    }

    public addClient(client: Client) {
        client.id = Date.now().toString();
        this.set(client.id, client);
        this.saveClients();
        return client;
    }

    public updateClient(id: string, client: Client) {
        if (this.has(id)) {
            this.set(id, client);
            this.saveClients();
            return client;
        } else {
            return null;
        }
    }

    public removeClient(id: string) {
        const removedClient = this.get(id);
        if (removedClient) {
            this.delete(id);
            this.saveClients();
        }
        return removedClient;
    }

    public getClients() {
        return Array.from(this.values());
    }
}
