import type { PlaywrightTestConfig } from '@playwright/test'; 

const config: PlaywrightTestConfig = {

  testMatch: ["tests/frame.test.ts"],
  use:{
    headless: false,
    screenshot: "on",
    video: "retain-on-failure",


  },
  retries: 0,
  reporter:[["dot"],["html",{

  open: "never"
  }
]]
};


export default config;
