/**
 *  The dotenv.config.ts allows easy env file usage.
 *
 *  # Usage
 *  If you need access to .env variable simply put:
 *  import env from "<path_to/dotenv.config>".
 *
 *  Right after this, you can access the variable with:
 *  env.<SOME_VARIABLE>
 *
 *  # Variable declaration
 *  To be able to access the defined variables in .env,
 *  it needs to be added here.
 */

import * as dotenv from "dotenv";

dotenv.config();

export default {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN ?? '',
    DISCORD_PREFIX: process.env.DISCORD_PREFIX ?? ''
}