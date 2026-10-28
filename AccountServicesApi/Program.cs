
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AngularDev", policy =>
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("AngularDev");

var account = new
{
    AccountId = 1,
    AccountName = "Everyday Checking",
    AccountNumber = "**** 4821",
    AvailableBalance = 12840.75m,
    Currency = "USD"
};

var transactions = new[]
{
    new {
        Id = 1,
        Date = "2026-10-24",
        Description = "Payroll deposit",
        Amount = 3250.00m
    },
    new {
        Id = 2,
        Date = "2026-10-23",
        Description = "Utility payment",
        Amount = -124.60m
    },
    new {
        Id = 3,
        Date = "2026-10-21",
        Description = "Grocery purchase",
        Amount = -86.42m
    }
};

app.MapGet("/api/accounts", () => Results.Ok(account));

app.MapGet("/api/transactions",
    () => Results.Ok(transactions));

app.MapGet("/api/health",
    () => Results.Ok(new { Status = "Healthy" }));

app.Run();
