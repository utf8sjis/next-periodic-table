---
applyTo: "**"
---

# Commit Message Convention

## Guidelines

- Use imperative mood as if you are giving a command (e.g., Add, Fix, Update, Remove, Move, Use, Make, Don't)
- Keep the message concise but descriptive (less than 50 characters)
- Omit articles (a, an, the)

## Examples

```
Add hover effect to element cells
Fix periodic table grid alignment for lanthanide series
Update actinoid element data with correct atomic weights
Remove unused CSS variables from component stylesheets
Move element search functionality to main navigation header
Use CSS variables for element category colors
Make element cards responsive on mobile and tablet views
Don't use inline styles for element highlight effects
```

## Working with Git

When checking staged changes, use the following command to exclude the `pnpm-lock.yaml` file:

```
git --no-pager diff --staged -- . ':(exclude)pnpm-lock.yaml'
```
