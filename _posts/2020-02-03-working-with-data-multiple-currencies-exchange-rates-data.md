---
layout: post
title: "Working with data in multiple currencies: exchange rates data"
comments: true
author: mark
excerpt: This post discusses tools developed to make it easier to use data published in different currencies.
image: /img/posts/screenshot-exchange-rate-calculator.png
imageCaption: "Exchange rates calculator, with links to underlying dataset"
imageURL: "https://exchangerates.codeforiati.org"
---

IATI data is published in different currencies by different organisations - data often comes out of each organisation’s own financial system. That’s great, because it provides a great deal of detail and precision, but it also presents a challenge for data users. In order to compare data published in different currencies, we need to convert to a common or "base" currency.

One option is to simply use annual averages, but in environments where currencies can vary substantially, this is not always accurate enough for the use case. As an alternative, there are services such as [Open Exchange Rates](https://openexchangerates.org/), which even has a free plan, but with a limited number of requests allowed (1,000 per month). This can become problematic when dealing with very large datasets - the new IATI Datastore suggests there are currently about 4.5 million transactions in IATI data.

## Building a service for supporting use at country level

For building IATI integrations in Bangladesh and Liberia, we therefore settled on another approach. We set [up a service](https://morph.io/markbrough/exchangerates-scraper) to extract exchange rates data from the **U.S. Federal Reserve (FRED)**, containing daily data for a number of currencies. It also captures monthly averages data from the **OECD** in a broader range of currencies and for a longer historical period, which can be used as a fallback option. The service checks for new data from both sources each night and puts all the data into a single dataset. This can either be downloaded as a spreadsheet, or accessed via an API which developers can query (for example, “give me only the new rates since the last time I checked”).

We also set up a [simple online exchange rates calculator](https://exchangerates.codeforiati.org/) so you can see how it works.

## Selecting the best date

As the dataset contains exchange rates data from multiple sources, we need some logic in the target system to decide which source to use. For example: we prefer FRED rates (as they are daily rates, and so more accurate), and then fall back to using OECD rates (which are monthly), if no FRED exchange rate is available within a reasonable timeframe.

## Next steps

There are a couple of things that could potentially be useful to add. For example, we could incorporate more sources (e.g. IMF or AfDB rates), which could potentially also open up a number of additional currencies. Depending on exactly how the data from other sources is published, the maintenance could become a bit more challenging -- everything works very smoothly and automatically at the moment, so we would be keen to keep things manageable to ensure everything is sustainable.

Let us know what you think below, or if you have specific bug reports or feature requests, [you can add them on the Github Issues page](https://github.com/codeforIATI/exchangerates-scraper/issues).
