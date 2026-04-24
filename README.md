# @next-trace/diabuddy-mobile

DiaBuddy mobile app — Expo 53, React Native 0.79, React 19. Thin client — business logic lives in the BE (`next-trace/diabuddy-user-api`).

## Development

```bash
pnpm install
pnpm start          # Metro / Expo dev client
pnpm web            # Expo web preview
pnpm ios            # requires Xcode
pnpm android        # requires Android SDK
```

## Builds

Use EAS Build (`eas build --platform ios|android`) — not GitHub Actions.

## Dependencies

- `@next-trace/diabuddy-design-system` — tokens + logo assets only (no React primitives; RN provides its own). Installed via GitHub tag (`github:next-trace/diabuddy-design-system#vX.Y.Z`).
