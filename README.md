# Code coverage

[![Coverage Status](https://coveralls.io/repos/github/juholehtimaki/COMP.SE.200-2020-assignment/badge.svg?branch=main)](https://coveralls.io/github/juholehtimaki/COMP.SE.200-2020-assignment?branch=main)

# Software testing assignment

Juho Lehtimäki and Hannes Aaltonen

Found bugs/faults:

- filter.js
  - if no elements in the array match the predicate, the function will return an array containing an empty array `[[ ]]` (should be just an empty array), this also happens when filtering an empty array
  - can cause a lot of problems as the items are usually filtered using some kind of predicate (e.g. price < 10)
  - severity major?
