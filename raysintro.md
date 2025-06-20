Daily work with 
```bash
stencil start
stencil start -v Fantasy
```

Deploying up to BigCommerce
```bash
stencil bundle
```
The bundle command will notify you of its progress and completion. The resulting .zip file will be located in the theme directory.

The "stencil push" command allows you to both bundle your theme and upload it to the store, with a single terminal command. To run stencil push, you must first:
```bash
stencil push
stencil push -a Fantasy
```
push -a to pick a theme variation
push -d to delete the oldest theme
push -c to pick a specific channel
- push -allc to apply to all channels