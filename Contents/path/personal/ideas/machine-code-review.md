# Machine Code Review

## Flow
- User/company registers
- Requests for a rule, in simple English
- Our developers write that rule
- He only sees that rule's metadata in his panel
- He connects his GitHub repo(s) to these rules (OAuth)
- He sets some GitHub hooks for CRUD in code (commits)
- We clone the repo once, and analyze it once
- On each push, we pull and analyze the code
- We send analysis results to his email, and show it on dashboard

---
It can be called `macore`
