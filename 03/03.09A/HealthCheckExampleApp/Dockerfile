FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build-env

WORKDIR /app

COPY ["HealthCheckExampleApp.csproj", ""]
RUN dotnet restore "./HealthCheckExampleApp.csproj"

COPY . .

RUN dotnet publish "HealthCheckExampleApp.csproj"  -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim

WORKDIR /app
COPY --from=build-env /app/out .

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["dotnet", "HealthCheckExampleApp.dll"]