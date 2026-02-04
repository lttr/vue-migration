---
status: draft
---

# Vue Migration Testing Monorepo Setup

## Goal

pnpm monorepo with 2 minimal Nuxt apps for component migration testing.

## Structure

```
vue-migration/
├── pnpm-workspace.yaml
├── package.json              # root, private
├── packages/
│   ├── nuxt-bridge/          # Vue 2.7 + Nuxt Bridge
│   │   ├── nuxt.config.ts
│   │   ├── package.json
│   │   └── pages/
│   │       └── index.vue
│   └── nuxt4/                # Vue 3.5 + Nuxt 4
│       ├── nuxt.config.ts
│       ├── package.json
│       └── app/              # Nuxt 4 uses app/ dir
│           ├── app.vue
│           └── pages/
│               └── index.vue
└── components/               # source components to copy between projects
```

## Steps

1. Create root `package.json` + `pnpm-workspace.yaml`
2. Scaffold `packages/nuxt-bridge/` with minimal Nuxt Bridge setup
3. Scaffold `packages/nuxt4/` with minimal Nuxt 4 setup
4. Run `pnpm install` at root
5. Verify both dev servers start

## Key Versions

| Package | nuxt-bridge | nuxt4 |
|---------|-------------|-------|
| nuxt | 2.17.3 | ^4.0.0 |
| vue | 2.7.x | ^3.5.0 |
| @nuxt/bridge | ^3.6.1 | - |

## Verification

```bash
cd packages/nuxt-bridge && pnpm dev  # should start on :3000
cd packages/nuxt4 && pnpm dev        # should start on :3000
```

## Notes

- **No shared workspace package** - Vue 2.7 and 3.5 have incompatible SFC compilers
- **Migration workflow**: Write component in `components/`, copy to each project, adapt syntax
- **TypeScript enabled** in both projects
