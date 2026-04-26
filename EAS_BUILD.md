# EAS Build + Submit — Mobile Publishing Pipeline

This repo builds the Nexdoz mobile app for iOS App Store, Google Play, and Xiaomi GetApps via Expo's cloud build service. Linux-friendly: no macOS needed for any step.

## One-time setup

```bash
# 1. Install EAS CLI globally
pnpm i -g eas-cli

# 2. Login (creates Expo account if needed)
eas login

# 3. Initialize the project on Expo (creates the EAS projectId)
eas init --id auto

# This writes the projectId into app.json -> extra.eas.projectId.
# Replace REPLACE_WITH_EAS_PROJECT_ID_AFTER_eas_init in app.json.

# 4. Generate an access token for CI
# https://expo.dev/accounts/<you>/settings/access-tokens
# Store as GitHub repo secret EXPO_TOKEN.
```

## Apple Developer Program ($99/yr, no Mac needed)

1. Enroll: https://developer.apple.com/programs (1–3 days approval)
2. In `developer.apple.com/account/resources/identifiers`, create an App ID:
   - Bundle ID: `com.nexdoz.mobile`
   - Capabilities: HealthKit (if integrating CGM), Push Notifications, Sign in with Apple
3. In `appstoreconnect.apple.com`, create a new app:
   - Platform: iOS
   - Name: Nexdoz
   - Primary language: English
   - Bundle ID: `com.nexdoz.mobile`
   - SKU: `nexdoz-mobile-001`
4. Capture the **App Store Connect App ID** (the numeric `id` in the app's URL) → put in `eas.json` `submit.production.ios.ascAppId`
5. Capture **Apple Team ID** from `developer.apple.com` membership page → `eas.json` `submit.production.ios.appleTeamId`
6. Apple ID email → `eas.json` `submit.production.ios.appleId`
7. EAS handles certificates + provisioning profiles automatically (`eas credentials`)

## Google Play Console ($25 one-time)

1. Enroll: https://play.google.com/console (~1 day)
2. Create app:
   - Package: `com.nexdoz.mobile`
   - Default language: English
   - Free or paid: Free for v1
3. Create a service account in Google Cloud Console with Play Developer API role
4. Download the JSON key → save as `play-service-account.json` in the repo root (gitignored)
5. Encode + store as Expo secret: `eas secret:create --scope project --name GOOGLE_SERVICE_ACCOUNT_KEY --type file --value ./play-service-account.json`

## Xiaomi Mi Developer (international GetApps, free)

1. Enroll: https://global.developer.mi.com (1–3 days)
2. Create app: `com.nexdoz.mobile`, category Health & Fitness
3. **No Expo Submit integration** — manual upload via Mi Developer Console
4. Use the same `.aab` from `eas build --platform android` for upload

## Build profiles

| Profile | Distribution | Use when |
|---|---|---|
| `development` | Internal | Active dev with Expo Dev Client + Expo Go on user's iPhone |
| `preview` | Internal | TestFlight beta + Play Internal track for stakeholder review |
| `production` | Store | Submitting to App Store + Play Store + Xiaomi GetApps |

## Build locally (or via GitHub Actions)

```bash
# Local
eas build --platform all --profile production

# CI (manual trigger)
gh workflow run eas-build.yml -f profile=production -f platform=all
```

## Submit to stores

```bash
# iOS → TestFlight (then promote to App Store via Connect)
eas submit --platform ios --latest

# Android → Play Internal track (then promote via Play Console)
eas submit --platform android --latest --track internal

# Xiaomi: manual upload via Mi Developer Console
# Download the .aab from the EAS Build output, upload to GetApps
```

## Local QA on Linux box (no macOS)

| Target | How |
|---|---|
| iOS dev workflow | User's own iPhone + Expo Go app (free, scan QR) |
| iOS production smoke test | EAS Build → TestFlight → install on real iPhone |
| iOS-Safari engine for web layer | Playwright WebKit Docker (`mcr.microsoft.com/playwright:v1.54.2-noble`) — proven working on this box |
| Android (Pixel-class) | Existing AVDs `Pixel_7_API_34`, `Nexdoz_API35` + `adb install <eas-built.apk>` |
| Xiaomi/MIUI real | Real Xiaomi device + adb (best signal) OR BrowserStack App Live ($39/mo) |
| Xiaomi/MIUI emulated | Sideload MIUI ROM onto AVD (free, fiddly) OR Genymotion MIUI variant |

## Required GitHub secret

| Secret | Where |
|---|---|
| `EXPO_TOKEN` | https://expo.dev/accounts/<you>/settings/access-tokens |

## Required EAS secrets (set via `eas secret:create`)

- `GOOGLE_SERVICE_ACCOUNT_KEY` (file) — for Play submit
- Apple credentials (managed by EAS automatically after first `eas build` interactive setup)

## After-merge replacement checklist

Before the first production build, replace these placeholders:

- [ ] `app.json` → `extra.eas.projectId` (run `eas init --id auto`)
- [ ] `eas.json` → `submit.production.ios.appleId`
- [ ] `eas.json` → `submit.production.ios.ascAppId`
- [ ] `eas.json` → `submit.production.ios.appleTeamId`
- [ ] Add `play-service-account.json` to repo root (gitignored)
