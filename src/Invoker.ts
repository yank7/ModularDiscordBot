import Query from "./model/Query";
import ICommand from "./commands/ICommand";
import Discord from "discord.js";

export default class Invoker {
    private commandMap: Map<string, ICommand>

    constructor() {
        this.commandMap = new Map<string, ICommand>();
    }

    public register(cmdName: string, cmd: ICommand): void {
        this.commandMap.set(cmdName, cmd);
    }

    public execute(query: Query, bot: Discord.Client, msg: Discord.Message): void {
        const cmd:ICommand | undefined = this.commandMap.get(query.getCmdName());

        if(cmd === undefined) {
            throw new Error("No command registered for " + query.getCmdName());
        } else {
            cmd.execute(query, bot, msg);
        }
    }
}