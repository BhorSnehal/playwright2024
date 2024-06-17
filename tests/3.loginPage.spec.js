import {test,expect} from '@playwright/test'

test("veirfy the login functionality with valid credentials",async({page})=>{
    //visit page
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //enter 
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    //validation
    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})
//invalid credentials
test(" veirfy the login functionality with invalid credentials",async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //enter 
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admi')
    await page.locator('button[type="submit"]').click()
    //
    await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText("Invalid credentials")

})
