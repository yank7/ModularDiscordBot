import env from "./config/dotenv.config";
import Discord from "discord.js";

import Invoker from "./Invoker";
import Query from "./model/Query";
import QuoteCommand from "./commands/QuoteCommand";

const invoke = new Invoker();
const client = new Discord.Client();

invoke.register("quote", new QuoteCommand());

client.on("message", (msg) => {
    const query = new Query(msg.content);

    if (query.isValid()) {
        try {
            invoke.execute(query, client, msg);
        } catch (e) {
            console.log(e.toString());
        }
    }
});

client.on("ready", () => {
    console.log("Ready");
    client.user?.setPresence({activity: {name: "On Geek Tu?"}});
});

client.login(env.DISCORD_TOKEN).then();

