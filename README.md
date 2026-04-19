# Playwright Automation Portfolio

A test automation framework built with Playwright and TypeScript.

## Tech Stack
- Playwright v1.59
- TypeScript
- GitHub Actions (CI/CD)

## Test Coverage
- Login page functional tests
- Valid login flow
- Invalid login error handling
- UI element visibility checks

## How to Run

Install dependencies:
npm install
npx playwright install

Run all tests:
npx playwright test

Run with visible browser:
npx playwright test --headed

View HTML report:
npx playwright show-report

## CI/CD
Tests run automatically on every push to main branch via GitHub Actions.