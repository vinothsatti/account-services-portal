## JAWS Screen Reader Demonstration

This video demonstrates screen-reader accessibility testing
of the Account Services Portal using JAWS on Windows.

[Watch the JAWS Screen Reader Demonstration](accessibility-demo/jaws-screen-reader-demo.mp4)

# Account Services Portal

An accessibility-focused, full-stack portfolio application built with **Angular 22, TypeScript, Bootstrap, and ASP.NET Core 8 Web API**.

The project demonstrates front-end development, REST API integration, semantic HTML, accessible form design, and responsive UI implementation.

## Application Screenshot

![Account Services Portal dashboard](screenshots/dashboard.png)

## Technology Stack

- **Frontend:** Angular 22, TypeScript, HTML5, CSS3, Bootstrap
- **Backend:** ASP.NET Core 8, C#
- **API:** RESTful HTTP endpoints returning JSON
- **Accessibility:** WCAG 2.1 AA-oriented design, ARIA attributes, keyboard navigation, axe DevTools

## Features

- Account overview with account details and available balance
- Recent transactions retrieved from the ASP.NET Core API
- Service-request form with required-field validation
- Dynamic feedback messages and a list of submitted requests
- Responsive layout using Bootstrap
- Fictional financial data for demonstration purposes

Service requests are stored in client-side memory and are not submitted to the API or persisted.

## Accessibility Implementation

The application includes:

- Semantic HTML landmarks and heading hierarchy
- Skip-to-main-content navigation
- Keyboard-accessible links and form controls
- Visible keyboard focus indicators
- Explicit form labels and required-field indicators
- `aria-invalid` and `aria-describedby` for validation feedback
- Status messages for form submission
- Labeled navigation and table column headers

## Accessibility Testing

### Automated Testing

- **Tool:** axe DevTools (axe-core 4.13.0)
- **Standard selected:** WCAG 2.1 AA
- **Result:** 0 automated accessibility violations detected on the scanned page state

### Manual Testing

- Keyboard navigation: Passed
- Skip navigation: Passed
- Form validation and submission feedback: Passed

Automated testing does not establish full WCAG 2.1 AA conformance. Additional screen-reader and interaction-state testing may be necessary.

## Running the Application Locally

### Prerequisites

- Node.js and npm
- Angular CLI
- .NET 8 SDK

### Start the Backend

From the `AccountServicesApi` directory:

```powershell
dotnet run --urls http://localhost:5000
```

### Start the Frontend

From the `account-services-ui` directory:

```powershell
npm.cmd install
ng.cmd serve
```

Open http://localhost:4200 in your browser.

The Angular frontend communicates with the ASP.NET Core API at http://localhost:5000.

Both applications must be running to load the account and transaction data.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/accounts` | Retrieves fictional account information |
| GET | `/api/transactions` | Retrieves recent fictional transactions |
| GET | `/api/health` | Returns API health status |

## Project Structure

```text
AccountServicesPortal/
├── account-services-ui/
│   ├── src/
│   ├── angular.json
│   └── package.json
├── AccountServicesApi/
│   ├── Program.cs
│   └── AccountServicesApi.csproj
├── screenshots/
│   └── dashboard.png
├── .gitignore
└── README.md
```

## Disclaimer

This is an independent portfolio demonstration using fictional data. It is not affiliated with any financial institution or government agency.
