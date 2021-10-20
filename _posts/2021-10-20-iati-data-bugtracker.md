---
layout: post
title: IATI Data Bugtracker
comments: true
author:
  - andy
excerpt: A public log of issues with IATI data and metadata
image: /assets/img/posts/screenshot-bugtracker.png
image_caption: IATI Data Bugtracker
image_url: "https://bugtracker.codeforiati.org"
---

## Summary

IATI Data Bugtracker is a public log of issues with IATI data and metadata. It makes these issues more transparent by making them public and shared. Anyone can create an issue, or comment on an existing one – you just need a GitHub account.

Issues are automatically organised according to the publisher, so it should be easy to see related or repeated issues. Issues are also automatically bumped every 30 days, to ensure they’re kept up-to-date and don’t become stale.

Submitters are encouraged to contact the publisher using a template email, to ensure the publisher is also made aware of the issue.

## Rationale

It is widely acknowledged that data quality issues exist within IATI data, and that these issues can be a barrier to data use. They need to be addressed by publishers, in order to make the data more reliable and usable. The IATI Validator is a step forward in tackling data quality issues, through automatic schema and ruleset validation.

Many data issues are more nuanced, and are therefore harder to spot automatically. Publish What You Fund’s Aid Transparency Index attempts to publicly address data quality issues by manually reviewing IATI data for some of the biggest publishers. Within the IATI Secretariat, the Technical Team’s Business Analysts also do a lot of good work to try and address data quality issues. This is not done publicly, though – it’s conducted between the secretariat and the publisher. It seems likely that a transparent process would be more effective in getting issues resolved.

## How it works

First, it’s worth saying that the current approach is very much a minimum viable product. We’ve tried to do as little work as possible to get something off the ground and working, just to try and test whether the concept is workable and useful.

We have [templates in place for different types of issue](https://github.com/codeforIATI/iati-data-bugtracker/issues/new/choose). These help us get clear reports from data users about the problems they’re experiencing.
We ask the data user to also contact the publisher directly and let them know about the problem. We’ve provided [an email template](https://github.com/codeforIATI/iati-data-bugtracker/blob/main/email-template.md) for doing so, and we ask the user to confirm that they have indeed contacted the publisher.
Issues are automatically labelled with the publisher’s name (so we can easily see a list of all issues that relate to a particular publisher)
After 30 days of inactivity, a bot will check in, to ask if the issue is still valid.
If someone replies to say the issue is still valid, it’s automatically moved to "Long-standing issues". If the issue is instead resolved, it’s moved to “Fixed!”
There’s [a project board](https://github.com/codeforIATI/iati-data-bugtracker/projects/1), for an overview of the status of all issues

Issues are also shown on [Code for IATI Analytics](https://analytics.codeforiati.org) (we’ll talk more about this in a later blog) e.g. on [the Australia – DFAT publisher page](https://analytics.codeforiati.org/publisher/ausgov.html#p_github_issues). Only live issues are shown – resolved issues are removed.

## Results

A small number of people started using this bugtracker in April 2020, as a way to maintain a public log of data issues. We’ve made some improvements to the workflow since then, and have successfully resolved a small number of data issues. Please take a look at [the project board](https://github.com/codeforIATI/iati-data-bugtracker/projects/1) if you’d like more details on how it has worked so far.

A special thanks to Shi Blank from d-portal, who is the number one contributor, and has successfully facilitated a number of successful resolutions.

