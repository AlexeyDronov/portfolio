---
title: "Financial Market Prediction with LLMs"
date: "2025-8-21"
summary: "Multimodal financial market prediction pipeline combining ETF stock data with LLM-extracted sentiment."
tags: ["machine-learning", "financial modelling"]
skills: ["Python", "PyTorch", "Optuna", "Pandas"]
image: "/project-1-img.png"
featured: true
---

## Overview
Financial market prediction is one of the most difficult and computationally expensive machine learning (ML) objectives. Current research shows that ML models for market prediction can greatly benefit from exogenous signals such as processed sentiment. In this dissertation research project, I explore the three popular forecasting models, develop sentiment extraction methods, provide a robust feature engineering pipeline and optimise hyperparameters. Results show a **16% MAE reduction**.

## Technical Approach
The multimodal pipeline consists of several components, designed in isolation to promote best testing and engineering practices. Below is an outline of those main components:

- **Data Collection Unit** - this component gathers large quantities of hourly market data for several ETF (Exchange Traded Fund) tickers using Alpaca API web socket. Sentiment data, which consists of US presidents' tweets, is collected via scraping and open-source datasets.
- **Pre-Processing & Feature Engineering Unit** - a component responsible for deriving technical indicators (e.g., moving averages, RSI, etc.), integrating sentiment scores, and ingesting temporal features (calendar-based features like day of the week)
- **Sentiment Extraction Unit** – a component responsible for deriving sentiment scores from unstructured tweets using FinBERT and FinGPT models. FinGPT model was custom-prompted to produce a 6-way classification schema.
- **Modelling Unit** – a component consisting of LSTM/GRU/TFT models responsible for producing multi-horizon hourly predictions.
- **Hyperparameter Tuning Unit** – a component responsible for tuning the hyperparameters of the ML models on training and validation datasets.
- **Evaluation Unit** – a component responsible for evaluating the pipeline on the held-out test dataset.
- **CLI Interface** – an easy-to-use CLI for managing experiments.

## Results
- Developed a **novel custom classification schema** with gating mechanics for FinGPT LLM, allowing for a more robust capture of sentiment signals.
- **Reduced the MAE by 16%** compared to the baseline setup without sentiment inclusion.

## Links
- [Check out this GitHub repo!](https://github.com/AlexeyDronov/financial-market-prediction-llm)