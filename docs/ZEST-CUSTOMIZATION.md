# Zest customization and daily updates

This checkout is branded for **Zest** with warm saffron, amber, terracotta,
charcoal, and cream colors. Restaurant settings can still override the name
and logo at runtime from **Settings > General**.

## Keep the fork updated

1. Fork `Raktim94/nodedr-restaurant-pos` on GitHub.
2. Push this customized checkout to your fork.
3. Keep `.github/workflows/upstream-sync.yml` in the fork.
4. The workflow checks upstream every day at 08:45 IST and when manually
   dispatched from the Actions tab.
5. If upstream changed, it creates an `automation/upstream-sync-YYYYMMDD`
   pull request in your fork.
6. Review the pull request, resolve any conflicts involving Zest files, run
   `pnpm lint`, `pnpm typecheck`, and `pnpm build`, then merge it.

The workflow intentionally opens a pull request instead of replacing your
branch automatically. Upstream changes can modify the same UI files as your
branding, and silently merging those changes could remove your restaurant
customizations or introduce an untested workflow change.

The source repository does not run this job against itself. After forking,
the workflow's default `UPSTREAM_REPOSITORY` value points back to the official
project. Change that value only if you use a different upstream repository.

## Automatic running updates

The root Docker Compose deployment follows the Zest-owned `edge` images
automatically. The updater checks every five minutes and replaces the backend
and web containers only when the image digest changes. PostgreSQL data and
uploads remain in Docker volumes.

GitHub Actions publishes those images after changes reach `master`. The first
run requires GitHub Actions package publishing to succeed. Keep
`AUTO_UPDATE=true` in `.env` to enable this behavior, or set it to `false` to
update manually with:

```powershell
docker compose up -d --build
```

Never point the updater at `ghcr.io/raktim94/nodedr-restaurant-pos-*`; those
are upstream images and will restore the original branding.
