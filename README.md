# My website

A basic resume/CV website to demonstrate various skills and other things.

## To deploy

Run the "Deploy" workflow which will check everything is working then deploy to cloudflare pages. Alternatively running "deploy:cloudflare" will attempt to perform the same steps

```
task deploy:cloudflare
```

## Starting the dev server

```
task dev:start
```

## Before opening a PR

- Run through the entire CI pipeline and make sure there are no errors
- Ensure that any tests (unit, integration) are updated to expect the new content
