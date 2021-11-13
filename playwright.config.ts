// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';
import { expect } from "@playwright/test";
import { matchers } from "expect-playwright"

expect.extend(matchers)

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Chrome Stable',
      use: {
        browserName: 'chromium',
        // Test against Chrome Stable channel.
        channel: 'chrome',
      },
    }
  ],
};
export default config;