// frontend/test-automation.js

const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function runTest() {
  const chromeOptions = new chrome.Options();

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  try {
    await driver.get("http://192.168.56.1:5000"); // Ganti dengan port frontend yang sesuai

    await driver.findElement(By.id("nama")).sendKeys("John Doe");
    await driver.findElement(By.id("email")).sendKeys("john@example.com");
    await driver.findElement(By.id("telpon")).sendKeys("123456789");

    await driver.findElement(By.css('input[type="submit"]')).click();

    await driver.wait(until.elementLocated(By.id("successMessage")), 5000);

    console.log("Test berhasil dilakukan!");
  } catch (error) {
    console.error("Test gagal:", error);
  } finally {
    await driver.quit();
  }
}

runTest();
