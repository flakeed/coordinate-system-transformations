# Coordinate System Conversion and Distance Calculation
**Status**: *Completed* 

## Project Overview

This project demonstrates conversions between different coordinate systems and performs distance calculations in those systems. The systems include:
- 2D Cartesian and Polar systems.
- 3D Cartesian and Spherical systems.

It also benchmarks the performance of distance calculations in these systems with a large set of random points.

## Features

- **Coordinate System Conversions**:
  - 2D: Polar to Cartesian and vice versa.
  - 3D: Spherical to Cartesian and vice versa.
  
- **Distance Calculations**:
  - Cartesian 2D distance.
  - Cartesian 3D distance.
  - Polar 2D distance.
  - Spherical 3D distance (both volumetric and great-circle distances).

- **Benchmarking**:
  - Performance benchmarking of distance calculations with a large dataset (configurable).

  ## Project structure

## How to Run

- ### 1. Conversion Accuracy Tests

  To verify the accuracy of coordinate conversions:

  ```bash
  node test/conversion_test.js
  ```

- ### 2. Benchmarking Performance

  To benchmark the performance of distance calculations with a large number of random points:

  ```bash
  node test/benchmark_test.
  ```

  You can modify the number of points in benchmark_test.js to adjust the test size.
