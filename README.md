## mInsights - Server API rebuild (v2.3)
This new build still uses most of the older (v2) controller functions but with a sanitized code base.

### To-Do
- [ ] app.v2.js - add conditional passport auth (MS ADAL vs DB user auth) should be easy to swap
- [ ] Verify the passport auth using jwt
- [ ] Bring over following routes
  - [ ] auth.routes (verify the need for this)
  - [ ] bot.routes
  - [ ] conversations.routes
  - [ ] healthhub,routes
  - [ ] metrics.routes
  - [ ] intentDocumentation.routes
  - [ ] etc
- [ ] Bring over following controllers