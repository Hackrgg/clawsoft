$ErrorActionPreference = "Stop"

function Read-DotEnvValue {
  param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$Key
  )

  if (-not (Test-Path -LiteralPath $Path)) { return $null }
  $line = Get-Content -LiteralPath $Path | Where-Object { $_ -match "^\s*$([regex]::Escape($Key))\s*=" } | Select-Object -First 1
  if (-not $line) { return $null }
  return ($line -split "=", 2)[1].Trim()
}

function Set-DotEnvValue {
  param(
    [Parameter(Mandatory = $true)][string]$Path,
    [Parameter(Mandatory = $true)][string]$Key,
    [Parameter(Mandatory = $true)][string]$Value
  )

  $content = @()
  if (Test-Path -LiteralPath $Path) {
    $content = Get-Content -LiteralPath $Path
  }

  $updated = $false
  $out = foreach ($line in $content) {
    if ($line -match "^\s*$([regex]::Escape($Key))\s*=") {
      $updated = $true
      "$Key=$Value"
    } else {
      $line
    }
  }

  if (-not $updated) {
    $out += "$Key=$Value"
  }

  $out | Set-Content -Encoding UTF8 -LiteralPath $Path
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$envFile = Join-Path $repoRoot ".env.local"

$token = Read-DotEnvValue -Path $envFile -Key "APPETIZE_API_TOKEN"
if ([string]::IsNullOrWhiteSpace($token)) {
  throw "Missing APPETIZE_API_TOKEN in $envFile"
}

$apks = @(
  @{
    Id = "FOODIE"
    Path = "C:\Users\thisi\Desktop\Media & Assets\demo apk\_unpacked\foodie\foodie.apk"
    Env = "NEXT_PUBLIC_APPETIZE_FOODIE_URL"
    Note = "Foodie demo"
  },
  @{
    Id = "EBASKET"
    Path = "C:\Users\thisi\Desktop\Media & Assets\demo apk\_unpacked\ebasket\ebasket_customer_V3_3.apk"
    Env = "NEXT_PUBLIC_APPETIZE_EBASKET_URL"
    Note = "eBasket demo"
  },
  @{
    Id = "SMARTGYM"
    Path = "C:\Users\thisi\Desktop\Media & Assets\demo apk\_unpacked\smartgym\SmartGym AI.apk"
    Env = "NEXT_PUBLIC_APPETIZE_SMARTGYM_URL"
    Note = "SmartGym AI demo"
  },
  @{
    Id = "NUTRISCAN"
    Path = "C:\Users\thisi\Desktop\Media & Assets\demo apk\_unpacked\nutri\nutri scan"
    Env = "NEXT_PUBLIC_APPETIZE_NUTRISCAN_URL"
    Note = "NutriScan AI demo"
  },
  @{
    Id = "SOCIETIFY"
    Path = "C:\Users\thisi\Desktop\Media & Assets\demo apk\_unpacked\sociefy\sociefy.apk"
    Env = "NEXT_PUBLIC_APPETIZE_SOCIETIFY_URL"
    Note = "Societify demo"
  }
)

foreach ($apk in $apks) {
  if (-not (Test-Path -LiteralPath $apk.Path)) {
    throw "Missing file: $($apk.Path)"
  }

  Write-Host "Uploading $($apk.Id)..."
  $respJson = & curl.exe -sS -X POST "https://api.appetize.io/v1/apps" `
    -H ("X-API-KEY: " + $token) `
    -F ("file=@" + $apk.Path) `
    -F "platform=android" `
    -F "fileType=apk" `
    -F ("note=" + $apk.Note) `
    -F "timeLimit=40" `
    -F "timeout=120" `
    -F "appPermissions.run=public"

  if ([string]::IsNullOrWhiteSpace($respJson)) {
    throw "Empty response from Appetize for $($apk.Id)"
  }

  $resp = $respJson | ConvertFrom-Json
  $publicKey = $resp.publicKey
  if ([string]::IsNullOrWhiteSpace($publicKey)) {
    throw "Upload failed for $($apk.Id). Response: $respJson"
  }

  # Use the public "app" URL by default because some Appetize plans disable embedding.
  # `timeLimit=40` is set at upload time so sessions still hard-stop after 40 seconds.
  $appUrl = "https://appetize.io/app/${publicKey}"
  Set-DotEnvValue -Path $envFile -Key $apk.Env -Value $appUrl
  Write-Host "  -> $($apk.Env) set"
}

Write-Host "Done. Restart `npm run dev` to pick up new NEXT_PUBLIC_* vars."
