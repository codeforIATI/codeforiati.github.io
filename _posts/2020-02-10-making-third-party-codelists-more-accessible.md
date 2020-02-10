---
layout: post
title: Making codelists more accessible
comments: true
author: mark
excerpt: This post introduces a new site to access replicated codelists, which may be useful for those using IATI data.
image: /assets/img/posts/screenshot-codelists.png
imageCaption: The French version of the replicated codelists site
imageURL: "https://codelists.codeforiati.org"
---

When using IATI data, there are a number of reference codelists that are needed to make sense of the data. Some of these codelists are controlled by IATI directly, but others are controlled by a number of other organisations: for example, the Country codelist (the ISO-managed list of countries) or the Sector codelist (the list of OECD DAC Purpose Codes). IATI maintains copies of these codelists – called replicated codelists – but there are a number of reasons why, as users of IATI data, we would often have to construct our own versions directly from the source. We built the replicated codelists interface to share this work with others who could stand to benefit from it.

## Aims and additional functionality

We had three main aims in building this new interface. We wanted to ensure that replicated codelists are:

 * as up to date as possible;
 * provided in formats that are most useful for users of IATI data (including via an intuitive API);
 * accessible in multiple languages - initially in English and French, with scope to expand the range of supported languages depending on availability of translated codelists.

We’ve gone through most of the replicated codelists to ensure they are fully up to date and consistent with the source, including adding in historical codes that have subsequently been withdrawn, and adding in official French translations. The entire interface can be switched from English to French (with thanks to [Yohanna Loucheur](https://twitter.com/YohannaLoucheur)!) and codelists can be downloaded in a range of formats (including Excel) in either language. We added in a codelist for [Humanitarian Global Cluster codes](https://codelists.codeforiati.org/HumanitarianGlobalClusters/), and a link to a separate set of work around [exchange rates data](https://codelists.codeforiati.org/ExchangeRates/) - vital reference data when working with IATI data. We made all codelists accessible through [a simple API for developers](https://codelists.codeforiati.org/api/). Finally, we have a workflow in place to ensure that everything is kept up to date and consistent whenever the source codelists change.

## Next steps

We already [sent our proposed updates to the underlying codelists to IATI](https://github.com/IATI/IATI-Codelists-NonEmbedded/pulls), who can decide whether they would like to incorporate these changes.

Let us know if you think this is useful for accessing codelists, and what else you think should be included! We have logged [a number of issues we plan to work on here](https://github.com/codeforIATI/codelists/issues).
