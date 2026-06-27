import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
 // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  //    [
  //   'playwright-html',
  //   {
  //     testFolder: 'tests',
  //     title: 'Playwright HTML Report',
  //     project: 'QA Tests',
  //     release: '9.87.6',
  //     testEnvironment: 'DEV',
  //     outputFolder: 'playwright-html-report',
  //     embedAssets: true,
  //     embedAttachments: true,
  //     minifyAssets: true,
  //     startServer: true
  //   }
  // ]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot:'on',
    headless:true,
    baseURL:'https://naveenautomationlabs.com/opencart/index.php?route=account/login'
  },

  metadata:{
    appUsername:'bbhhhdhd@gmail.com',
    appPassword:'Admin@123'
  },

  /* Configure projects for major browsers */
  projects: [
  {
    name: 'Google Chrome',
    use: {
      channel: 'chrome',
      viewport: null,
      launchOptions: {
        args: ['--start-maximized'],
        ignoreDefaultArgs: ['--window-size=1280,720']
      }
    }
  },

  // {
  //   name: 'Microsoft Edge',
  //   use: {
  //     channel: 'msedge',
  //     viewport: null,
  //     launchOptions: {
  //       args: ['--start-maximized'],
  //       ignoreDefaultArgs: ['--window-size=1280,720']
  //     }
  //   }
  // },

  // {
  //   name: 'Chromium',
  //   use: {
  //     browserName: 'chromium',
  //     viewport: { width: 1920, height: 1080 },
  //     launchOptions: {
  //       args: [],
  //       ignoreDefaultArgs: ['--window-size=1280,720']
  //     }
  //   }
  // },

  // {
  //   name: 'Firefox',
  //   use: {
  //     browserName: 'firefox',
  //     viewport: { width: 1920, height: 1080 },       
  //     launchOptions: {
  //       args: [],
  //       ignoreDefaultArgs: ['--window-size=1280,720']
  //     }
  //   }
  // },

  // {
  //   name: 'WebKit',
  //   use: {
  //     browserName: 'webkit',
  //     viewport: { width: 1920, height: 1080 },      
  //     launchOptions: {
  //       args: [],
  //       ignoreDefaultArgs: ['--window-size=1280,720']
  //     }
  //   }
  // }
  ],


});
