export class Config {
    server: {
        url: string,
        port: number
    };
  
    constructor() 
    {
        this.server = {
            url: 'http://localhost',
            port: 3000
        };
    }
    /**
     * urlServer
     */
    public urlServer() {
        return this.server.url+':'+this.server.port;
    }

    
  }