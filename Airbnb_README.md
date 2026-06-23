# Predicting Airbnb Listing Prices in Melbourne

## 💡 Executive Summary
This project develops a reliable predictive modeling framework to estimate optimal pricing for Airbnb listings in Melbourne, Australia, using a dataset of 7,000 listings and over 60 listing, host, review, and geospatial features. Following a comprehensive data cleaning, imputation, and feature engineering pipeline, nine individual regression models (including Linear, Ridge, Lasso, Elastic Net, SVR, Decision Trees, Random Forest, Gradient Boosting, XGBoost, and LightGBM) were trained and hyperparameter-tuned using 10-fold cross-validation. To maximize predictive accuracy, four ensemble strategies (voting and stacking) were developed. The Stacking Regressor utilizing the top 5 base models (LightGBM, Random Forest, Gradient Boosting, SVR, and XGBoost) emerged as the final recommended model, achieving a Mean Absolute Error (MAE) of 0.21968 on the holdout test dataset on the log scale, providing a robust tool for hosts, guests, and property investors to evaluate property listings.

## 📌 Project Objective
The goal of this project is to build a high-precision regression framework to estimate Airbnb listing prices in Melbourne. By understanding localized pricing dynamics, host behaviors, and property capacity features, this analysis aims to identify the key drivers of property valuation and support strategic decisions for hosts (competitive pricing), guests (fair price evaluation), and real estate investors.

## 📊 Dataset Overview
The dataset contains information on **7,000 listings** (combining train and test sets) and includes 62 initial columns:
* **Target Variable:** `price` (log-transformed as `log_price` for training)
* **Structural/Capacity Features:** `accommodates`, `bedrooms`, `bathrooms`, `beds`
* **Host Features:** `host_response_time`, `host_response_rate`, `host_acceptance_rate`, `host_is_superhost`, `host_identity_verified`
* **Calendar/Availability Features:** `availability_30`, `availability_60`, `availability_90`, `availability_365`
* **Reviews:** `number_of_reviews`, `number_of_reviews_ltm`, `review_scores_rating`, `review_scores_location`, `review_scores_value`

## 🛠️ Data Preprocessing & Engineering
To ensure high data quality and model performance, the following steps were taken:
* **Cleaning:** Stripped symbols (`$`, `%`) and handled textual formats in `bathrooms` to convert them to numeric.
* **Imputation:** Systematically applied mean imputation for normal variables, mode for categorical variables, and median for skewed variables (e.g., beds, review ratings). Imputed `availability_365` using `availability_90 * 4` proxy.
* **Encoding:** Implemented binary mapping for boolean flags, ordinal encoding for `host_response_time`, and grouped high-cardinality nominal variables like `property_type` (into 6 major groups) and `neighbourhood_cleansed` (top 5 + Other) before applying dummy encoding.
* **Feature Engineering:** Created ratios and indicators (`bed_to_bath_ratio`, `guest_comfort_score`, `room_density`, `review_density`, `availability_ratio`, `superhost_verified`, `occupancy_proxy`).
* **Geospatial & Text Features:** Calculated Haversine distances to Melbourne's CBD and the nearest major train station. Extracted polarity and subjectivity from `description` and `host_about` using TextBlob sentiment analysis.
* **Log Transformation:** Applied `log1p` transformation to the right-skewed `price` variable to compress the scale and reduce the leverage of extreme outliers.

## 🤖 Modeling & Performance
We compared nine individual regression models and four ensemble methods, evaluated using Mean Absolute Error (MAE) and ranked by their average rank:

| Model | Training MAE | Test MAE | Rank (Train/Test) | Status |
| :--- | :---: | :---: | :---: | :--- |
| **Stacking Regressor (Top 5)** | **0.05384** | **0.21968** | **1 / 2** | ✅ Highly Accurate & Stable |
| **Stacking Regressor (All)** | 0.05725 | 0.21802 | 2 / 1 | ✅ Top Test Performance |
| **Voting Regressor (Top 5)** | 0.10726 | 0.22674 | 3 / 3 | Stable Ensembling |
| **LightGBM (lgbm)** | 0.23676 | 0.22731 | 5 / 4 | Strongest Individual Tree Model |
| **Gradient Boosting (gbm)** | 0.24070 | 0.22794 | 6 / 5 | High Generalization |
| **Random Forest (rf)** | 0.24985 | 0.23186 | 7 / 6 | Robust Bagging Model |
| **XGBoost (xgb)** | 0.27831 | 0.25496 | 8 / 7 | Moderate Performance |
| **Voting Regressor (All)** | 0.21353 | 0.26157 | 4 / 8 | Ensembled Averaging |
| **Support Vector Regressor (svr)** | 0.30083 | 0.27864 | 9 / 9 | Linearized Kernel SVR |
| **Ridge Regression** | 0.30811 | 0.28100 | 10 / 10 | High Bias / Underfitting |
| **Linear Regression (lr)** | 0.31490 | 0.28938 | 11 / 11 | High Bias / Underfitting |
| **Decision Tree (dt)** | 0.34412 | 0.31850 | 12 / 12 | Tree Overfitting |
| **Lasso Regression** | 0.53046 | 0.49690 | 13 / 13 | High Bias (Excluded features) |
| **Elastic Net** | 0.53046 | 0.49690 | 13 / 13 | High Bias / Underfitting |

### Key Findings:
* **Ensemble models** (voting and stacking) yielded the best accuracy, with the Stacking Regressor achieving the lowest errors.
* **Tree-based models** (LightGBM, GBM, Random Forest) performed exceptionally well, capturing non-linear relationships and interactions.
* **Linear models** (Ridge, Lasso, Elastic Net, Linear Regression) performed poorly, indicating they could not capture the complex dynamics of pricing.

## 💡 Conclusion & Recommendation
* The **Stacking Regressor (Top 5)** is the recommended model for deployment. It combines the strengths of tree-based models and SVR using a meta-learner (Linear Regression), yielding a highly stable and generalizable model.
* The meta-learner assigned the highest weights to **LightGBM (0.61)** and **Random Forest (0.40)**, showing they do the heavy lifting, while **XGBoost (-0.23)** acts as a corrective signal.
* Feature importance analysis indicates that property capacity (`accommodates`, `bedrooms`, `bathrooms`) and room types (`Private room` vs. `Entire home`) are the most critical pricing drivers. Engineered geospatial features (`cbd_distance_km`, `min_station_distance_km`) also add significant value.

## 🛠️ Tools Used
- **Language**: Python
- **Libraries**: `pandas`, `numpy`, `scikit-learn`, `xgboost`, `lightgbm`, `geopandas`, `textblob`, `matplotlib`, `seaborn`
- **Jupyter Notebook**

## 🚀 Author
Gia Bao Hoang
