require('dotenv').config(); // 記得 npm install dotenv

module.exports = {
  //... 其他省略
  
  channels: {
    messenger: {
      enabled: true,
      path: '/',
      pageId: process.env.MESSENGER_PAGE_ID,
      accessToken: process.env.MESSENGER_ACCESS_TOKEN,
      verifyToken: process.env.MESSENGER_VERIFY_TOKEN,
      appId: process.env.MESSENGER_APP_ID,
      appSecret: process.env.MESSENGER_APP_SECRET,
    },
  },
};