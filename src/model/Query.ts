import env from "../config/dotenv.config";

export default class Query {
    cmdName: string;
    cmdArgs: string[];
    isACmd: boolean;
    msgQuery: string;

    constructor(msg: string) {
        this.cmdName = "";
        this.cmdArgs = [];
        this.isACmd = false;
        this.msgQuery = msg;

        if (this.cmdStartsWithPrefix()) {
            this.parse();
            this.isACmd = true;
        } else {
            this.isACmd = false;
        }
    }

    private cmdStartsWithPrefix(): boolean {
        return this.msgQuery.startsWith(env.DISCORD_PREFIX);
    }

    private parse(): void {
        const cmdParts:RegExpMatchArray | null = this.msgQuery.match(/"(.*?)"|[\S]+/gm);
        if (cmdParts) {
            this.cmdName = cmdParts[0].substr(env.DISCORD_PREFIX.length);
            cmdParts.forEach((item, index) => {
                if (index !== 0){
                    if (item.charAt(0) === '"' && item.charAt(item.length-1) === '"') {
                        item = item.slice(1, -1);
                    }
                    this.cmdArgs.push(item);
                }
            });
        }
    }

    public isValid(): boolean {
        return this.isACmd;
    }

    public getCmdName(): string {
        return this.cmdName;
    }
}