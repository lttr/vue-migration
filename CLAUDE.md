# Vue Migration Testing

## Dev Servers

- nuxt-bridge (Vue 2.7): port 5002
- nuxt4 (Vue 3): port 5001

## Testing Changes

After modifying components, **always** verify with browser-console:

```bash
browser-console --url http://localhost:5001/path/  # nuxt4
browser-console --url http://localhost:5002/path/  # nuxt-bridge
```

Check for:
- Hydration mismatches (stale server cache → restart dev server)
- Vue warnings (`[Vue warn]`)
- Runtime errors (`[PAGEERROR]`)

## Console Tool Options

- `--wait MS` — wait time after load (default: 3000)
- `--level warn,error` — filter by level
- `--no-exit` — keep streaming after load
