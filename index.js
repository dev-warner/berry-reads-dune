import Twit from "twit";

const twit = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

const start = new Date("2021-04-30T23:07:57.706Z");
const date = new Date();

const differenceInTime = date.getTime() - start.getTime();
const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)) - 1;

await twit.post("statuses/update", {
  status: `
  @porksmith you have been summoned for jury duney #BerryReadsDune

  Days since I started annoying Berry Boi: ${differenceInDays}`,
});

console.log(`Done annoying Matt Berry 🐛`);
