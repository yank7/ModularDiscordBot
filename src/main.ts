import {Invoker} from "./Invoker";
import {QuoteCommand} from "./commands/QuoteCommand"

const ManagerCmd = new Invoker();

ManagerCmd.register("quote", new QuoteCommand());

