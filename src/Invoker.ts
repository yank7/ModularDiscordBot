export class Invoker {
    private commandMap: Map<string, ICommand>

    constructor() {
        this.commandMap = new Map<string, ICommand>();
    }

    public register(cmdName: string, cmd: ICommand): void {
        this.commandMap.set(cmdName, cmd);
    }

    public execute(cmdName: string): void {
        const cmd: ICommand | undefined = this.commandMap.get(cmdName);

        if(cmd === undefined) {
            throw new Error("No command registered for " + cmdName);
        } else {
            cmd.execute()
        }
    }
}