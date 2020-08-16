---
layout: post
title: A status dashboard for IATI services
comments: true
author: andy
excerpt: Sometimes, web services break. They stop working. For all sorts of reasons. This code runs automated tests on various IATI services, to check they are performing as expected.
image: /assets/img/posts/screenshot-status.png
imageCaption: Screenshot of the status dashboard
imageURL: "https://status.codeforiati.org"
---

Sometimes, web services break. They stop working. For all sorts of reasons.

A server fails; Some piece of data gets corrupted; something unexpected causes a blockage in [the tubes](https://en.wikipedia.org/wiki/Series_of_tubes).

These incidents are unpredictable, and can cause disruption for users. So it’s common for online service owners to automatically monitor the status of their services, as well as provide a public dashboard showing the current status. This ensures issues are caught as early as possible, and incidents are communicated and dealt with transparently.

[Facebook has one](https://developers.facebook.com/status/dashboard/). [Twitter has one](https://api.twitterstat.us/). [Dropbox has one](https://status.dropbox.com/). [Github has one](https://www.githubstatus.com/). In fact: check it yourself. Think of an online service, and then do a search for their status dashboard. Chances are, you’ll probably find one.

IATI provides a number of services, but there’s no central status dashboard. So we had a go at making one.

It’s here:

> [https://status.codeforiati.org/](https://status.codeforiati.org/)

It’s based on [open source code](https://github.com/IATI/IATI-Website-Tests) created by the IATI Secretariat's technical team [a number of years ago](https://github.com/IATI/IATI-Website-Tests/graphs/contributors). This code runs automated tests on various IATI services, to check they are performing as expected. For example:

 * It checks the dashboard appears to have been updated recently
 * It checks the validator correctly identifies some invalid XML as such
 * It checks the datastore returns CSV when requested

…and lots more things besides.

We took this code, fixed a couple of bugs, scheduled it to run daily, and added [a public website](https://status.codeforiati.org/) so anyone can see the current status. We also added [an RSS feed](https://status.codeforiati.org/feed.xml), and a badge that shows the status right now:

![Current status](https://status.codeforiati.org/status.svg)

It’s easy enough to extend with new checks. For example, d-portal tests are minimal, and there are no tests in place for the new datastore or new validator. We think this is a fundamental service that should be provided by all service providers, to inform users of any issues in using different services. We’d be very happy for the IATI Secretariat to adopt this, if they (and their users) find it useful!
