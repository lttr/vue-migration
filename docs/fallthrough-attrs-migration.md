# Vue 3 Fallthrough Attrs Migration
w 

Vue 3 auto-applies parent `@events` to child root element. Vue 2 ignored them.

## Find Problems

```bash
# @event on custom components - may fire unexpectedly in Vue 3
rg '@\w+="' -g '*.vue' | rg '<[A-Z]'

# Components with internal handlers - check if parent also adds same event
rg '@click="' -g '**/components/**/*.vue' -l
```

Cross-check: does child emit it? If not → behavior change.
