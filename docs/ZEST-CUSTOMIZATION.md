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
