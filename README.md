# Easy Discord
An easy way to make discord bots!

## How to install?
```
npm i @dxy_seer/easydiscord
```
## How to use?

Use the following code to use the library!
This library will be updated every so often!

### Starter code
```
const cli = require('@dxy_seer/easydiscord');
var prefix = 'ed!';
var token = 'Secret token!';

cli.log('Yes');
cli.send('channel', `${prefix}hi`, 'Hello!');


cli.login(token);
```
#### Options
cli.log('Hello world') 
Will display: ED -> Hello world

cli.login(token) 
Will display: ED -> Bot online! (Check discord if the bot is online!)

cli.send('channel', `${prefix}hi`, 'hello!');
Will display: hello! (In a discord channel where **${prefix}hi** was used)

cli.send('reply', `${prefix}hi`, 'hello!');
Will display: @user, hello! (In a discord channel where **${prefix}hi** was used)