---
title: DIterator - easy IATI activity access for Python3.
tags:
    - tools
    - library
    - python
link: https://github.com/davidmegginson/diterator

DIterator is a simple library for reading and processing IATI activities from the D-Portal API or directly from an XML file. It uses wrapper classes for activities and their contents, to make the main information easily accessible via properties, and uses constant memory instead of parsing the entire XML file at once (so a huge XML file won't blow up your system).
