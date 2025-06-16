---
applyTo: "**"
---

# Development Language Rules

## Code Comments and Documentation

- Use English for all code comments, documentation files, and commit messages
- Variable names, function names, and other code identifiers must be in English
- This rule does not apply to web content that will be visible to end users
- User-facing content can be in any language appropriate for the target audience

# Git Workflow and Commit Conventions

Follow these steps when creating commits

1. Check the status of changes

   ```
   git status
   ```

2. If no files are staged yet, stage all changes unless specified otherwise

   ```
   git add .
   ```

3. Alternatively, stage specific files only

   ```
   git add [file-path]
   ```

4. Review staged changes (excluding pnpm-lock.yaml)

   ```
   git --no-pager diff --staged -- . ':(exclude)pnpm-lock.yaml'
   ```

5. Create a commit with a well-formatted message following these guidelines:

   - Use imperative mood as if you are giving a command (e.g., Add, Fix, Update, Remove, Move, Use, Make, Don't)
   - Keep the message concise but descriptive (less than 50 characters)
   - Omit articles (a, an, the)

Commit Message Examples:

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
