# About

A fork of reveal JS, hacked and butchered to make a slideshow for Polymer In Production.

Need to NAP-ify the styles. 

# Instructions

### How set up

`npm install`

### How to run

`npm start`

### Speaker Notes:

Press `s`

### Danger!

When interacting with the components, focus gets put on the iframes, so need to click back on the document before navigating

# Notes:

**Polymer In Production**

**Sections**

***Intro - MG***
- Who is NAP
- Polymer - what is it?

***D.Bod spiel - DB***
- Set scene (failed previous attempts)
- "Smoking Gun" - data analysis & change in design approach (atomic)
- Opportunity (header and footer), end with product page

***Mid way through project - bit risky (browser support) - MG***

***Components - show them. - MG + RG***
- Price -> Product - RG
- HTWI, nap-live, forms, wishlist - MG

***Unit testing (WCT, test-fixture) -MG***

***Bower module (build, Vulcanise etc) - RG***

***Structured Data - Google DevRel / Testing - RG***

***Monitoring - has it rendered? - MG***

***Gotchas: - MG***

- Hard to get going - 0.5 vs 1.0
- Safari CORS Hell
- IE11 - Only options in 'select'
- WebComponentReady - which is part of polyfill
- Polyfil can be complex and can caused unresolved style jumping - see video

***Whats next: - RG***
- build was probably wrong
- repo per element - better build, test and versioning
- Polyfill - conditional
- Perf testing
- Polyserve
- Seed-elements for starting - move to versioning each element - don’t bundle in the bower module.
- Skeleton CSS / Unresolved styles


***Resources - RG***

- Slack
- Polycasts YouTube
- Polymer docs
- Twitter - Eric, Rob etc
https://elements.polymer-project.org/

***Demo the actual page! - DB***
