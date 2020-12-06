import Query from "../model/Query";
import Discord from "discord.js"

/**
 * Commands Interface
 */
export default interface ICommand {
    execute(query: Query, bot: Discord.Client, msg: Discord.Message): void;
}