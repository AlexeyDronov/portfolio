---
title: "IMDb Data Analysis with Spark"
date: "2026-03-28"
summary: "Distributed Spark pipeline for extracting insights from 41M+ IMDb records, with a head-to-head benchmark of Scala RDD vs PySpark SQL APIs."
tags: ["big data", "distributed pipeline"]
skills: ["Python", "PySpark", "Scala", "Apache Spark", "Docker"]
featured: true
image: "/project-2-img.png"
---

## Overview

A university project extended into a full benchmarking study, processing the IMDb dataset to extract insights about genre growth trends, top-rated directors, and the most prolific crew members across decades.

The original implementation used the **Scala Spark RDD API** with optimisations including `HashPartitioner`, early filtering, and `reduceByKey` aggregations — achieving a **95% grade**. This was later re-implemented in **PySpark SQL/DataFrame API** on the full 2.28 GB, 41M+ record dataset, with additional optimisations (Adaptive Query Execution, column pruning, broadcast joins) and packaged as a reproducible Docker container with a CLI benchmarking tool.

## Results

Both implementations were benchmarked across 10 trials on identical Spark configurations and business logic.

| Task | Scala RDD (mean) | PySpark SQL (mean) |
| ---- | ---------------- | ------------------ |
| Task 1 | 3.51 s | 0.20 s |
| Task 2 | 11.08 s | 4.17 s |
| Task 3 | 17.97 s | 1.86 s |
| Task 4 | 26.70 s | 8.18 s |
| **Total** | **59.26 s** | **14.41 s** |

PySpark SQL achieved a **75.7% average runtime reduction** (59.26s → 14.41s), primarily driven by the Catalyst optimiser's query planning and Tungsten's cache-aware memory management — advantages the low-level RDD API cannot leverage.

## Links

Source code and setup instructions on [GitHub](https://github.com/AlexeyDronov/IMDb-Analysis-Scala)