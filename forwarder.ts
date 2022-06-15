import { opine } from "./deps.ts";

export class Forwarder {
    
    private app = opine();

    public constructor(private port: number, private targetURL: string, private pathToCertFile: string, private pathToCertKeyFile: string) {}

    public activate() {
        this.app.get('/', (req: any, res: any) => {
            const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url='${this.targetURL}'" /></head><body><p>Redirecting to https: <a href="${this.targetURL}">${this.targetURL}</a></p></body></html>`
            res.send(html);
        });
        
        if ((port.toString()).indexOf('443') === -1) {
            this.app.listen(port, () => console.log(`server will forward requests from http://localhost:${this.port} to ${targetURL} 🚀`));        
        } else {
            this.app.listen({ port, certFile: this.pathToCertFile, keyFile: this.pathToCertKeyFile }, () => console.log(`server is listening on https://localhost:${this.port} 🚀`));
        }
    }

}

const port = Number(Deno.args[0])
const targetURL = Deno.args[1] 
const pathToCertFile = Deno.args[2] // only relevant if you want to forward from an https port like *443
const pathToCertKeyFile = Deno.args[3] // only relevant if you want to forward from an https port like *443

const forwarder = new Forwarder(port, targetURL, pathToCertFile, pathToCertKeyFile)
forwarder.activate()

