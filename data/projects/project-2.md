---
title: "Market Sentiment Analysis"
date: "2024-11-20"
summary: "Automated pipeline for analyzing social media sentiment to predict market trends."
tags: ["data-analysis", "nlp", "automation"]
skills: ["Python", "Pandas", "Scikit-Learn", "AWS Lambda"]
image: "/projects/project-2.jpg"
featured: true
---

## Overview
Traders often miss broad social sentiment trends. This tool aggregates data from Twitter and Reddit to provide a sentiment score for potential investments.

## Technical Approach
The pipeline triggers AWS Lambda functions on a schedule to scrape data using custom APIs. Text is processed using a fine-tuned BERT model to classify sentiment, and results are stored in a DynamoDB table for rapid access.

## Results
- **Accuracy**: Achieved 85% correlation with major market movements during backtesting.
- **Scalability**: Processes over 500k posts daily with minimal costs.

## Links
- [GitHub](https://github.com/example/market-sentiment)
