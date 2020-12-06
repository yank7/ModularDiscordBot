import ICommand from "./ICommand"
import Query from "../model/Query";
import Discord from "discord.js";

export default class QuoteCommand implements ICommand{

    execute(query: Query, bot: Discord.Client, msg:Discord.Message): void {
        console.log("cmdName: " + query.getCmdName() );
        console.log("Bot: " + bot.user?.tag);
    }
}