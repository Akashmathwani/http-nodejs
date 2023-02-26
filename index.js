const { Telegraf } = require("telegraf");

const startBot = async () => {
  const bot = new Telegraf("6095973837:AAEhSgjOZkoZEOGYDUo9RqgjlcsdUw522_Y");
  bot.start((ctx) => ctx.reply("Hello world"));

  bot.command("status", async (ctx) => {
    try {
      await ctx.reply(`Google service: ✅`);
    } catch (error) {
      console.error(error);
    }
  });
  console.log("STARTING BOT");
  try {
    await bot.launch();
    console.log("Bot started successfully");
  } catch (error) {
    console.error(error);
  }
};
console.log("RUNNING  SCRIPT ..");

startBot();
