export interface ProjectDetailData {
  id: string;
  title: string;
  subtitle: string;
  overview?: string;
  primaryLink: string;
  primaryLinkLabel: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  kpis: {
    value: string;
    description: string;
  }[];
  tools: string[];
  techniques: string[];
  results: {
    title: string;
    description: string;
  }[];
  dashboards?: {
    title: string;
    subtitle: string;
    points: string[];
    image?: string;
  }[];
  recommendations?: {
    title: string;
    description: string;
  }[];
  objective?: string;
  executiveSummary?: string[];
}

export const projectDetails: Record<string, ProjectDetailData> = {
  "australia-demographics": {
    id: "australia-demographics",
    title: "Australia’s Demographic Transformation (1996–2016)",
    subtitle: "A data analytics project exploring how Australia's population composition changed over two decades from migration origin and age structure to regional distribution and workforce implications.",
    primaryLink: "https://github.com/baohg2/Australia-Demographic-Dashboard/blob/main/Report/Australian%20Demographic%20Report.pdf",
    primaryLinkLabel: "View Report",
    secondaryLink: "https://github.com/baohg2/Australia-Demographic-Dashboard/blob/main/Dashboard/Australian%20Demographic%20Dashboard.pbix",
    secondaryLinkLabel: "View Dashboard",
    kpis: [
      {
        value: "3",
        description: "dashboards visualizing Australia's demographic and migration changes in 20 years"
      },
      {
        value: "~30%",
        description: "of the population are foreign-born, driving 60% of total national population increase"
      },
      {
        value: "2",
        description: "migrant origin groups compared, younger working-age Asian vs aging European"
      }
    ],
    tools: [
      "Power BI",
      "DAX",
      "Power Query"
    ],
    techniques: [
      "ETL / Data Transformation",
      "Data Modelling",
      "Demographic Segmentation",
      "Data Visualization"
    ],
    results: [
      {
        title: "Identified Australia's demographic shift",
        description: "Australia population growth from 18M to 24M (+33%) across five census years, revealing that foreign-born residents grew nearly 3x faster than Australian-born, reshaping age, gender, settlement distributions across states."
      },
      {
        title: "Discovered migration transition",
        description: "Asian-born residents more than tripled to 2.94M, overtaking European-born (2.38M) as the largest migrant group by 2016, transforming Australia's workforce composition and increasing demand for urban infrastructure."
      },
      {
        title: "Highlighted a growing split between young migrants and ageing settlers",
        description: "71% of Asian-born migrants are of working age, helping fill labour gaps across the economy. Meanwhile, 78% of European-born migrants are elderly, adding pressure on aged care services alongside a domestic ageing trend."
      }
    ],
    dashboards: [
      {
        title: "Dashboard 1 — Australia's Population Overview 1996–2016",
        subtitle: "Population growth, population pyramid, geographic distribution, age and gender structure.",
        image: "/dashboards/demographics-1.png",
        points: [
          "Population grew from 18M to 24M (+33%), driven by immigration and urbanization.",
          "Working-age group made up 53% of the population in 2016, but the elderly share quietly climbed from 12% to 15%, signaling future pressure on healthcare and pensions.",
          "The population pyramid shifted over time, wider at older age groups by 2016, reflecting falling birth rates and longer life expectancy.",
          "Gender split remained equal and stable throughout, consistent with a developed country's birth and mortality patterns.",
          "NSW and Victoria consistently led in population size, following by Victoria and Queensland, driven by urban migration and international settlement."
        ]
      },
      {
        title: "Dashboard 2 - Demographic Distribution: Top 10 Countries of Birth",
        subtitle: "Discover population trends, age group and gender composition, and regional settlement patterns among top 10 migrant origins",
        image: "/dashboards/demographics-2.png",
        points: [
          "Foreign-born share grew significantly 4.2M → 7M (+66%), indicating nearly 1 in 3 Australians were born overseas.",
          "India and China emerged as rising contenders, challenging England's historical position.",
          "China and Philippines consistently show female-skewed migration, reflecting labour demand in healthcare, education, and services sectors.",
          "Newer migrant groups like China, Indian, Malaysia has contributed highly to the working force with over 70%.",
          "The vast majority of top 10 country migrants settle in New South Wales and Victoria, putting pressure in infrastructure."
        ]
      },
      {
        title: "Dashboard 3 - Shifting in Migrant Origin 1996–2016",
        subtitle: "A comparison of Asian vs European migration over two decades.",
        image: "/dashboards/demographics-3.png",
        points: [
          "Asian-born residents grew by 248% to 2.94M, overtaking European-born (2.38M) by 2016.",
          "Asian-born migrants offset the ageing domestic workforce, with 71% at working age compared to only 62% of the Australian-born base.",
          "78% of European-born migrants are elderly (65+), reflecting legacy post-WWII migration waves and indicating significant future aged care demands.",
          "Both cohorts settle in Eastern states, though Asian-born migrants concentrate heavily in Sydney and Melbourne, linked to education and skilled visa pathways.",
          "European migration flatlined or declined in share, while Asian migration maintains an upward exponential curve, transforming Australia's multicultural landscape, reshaping labour supply and service demand."
        ]
      }
    ],
    recommendations: [
      {
        title: "Expand skilled migration frameworks",
        description: "Build on Migration Strategy 2023 with practical skills recognition reforms, bridging programs and cultural mentorships to channel migrants into high-demand industries and prevent brain waste."
      },
      {
        title: "Scale aged care capacity",
        description: "Introduce an Essential Skills Visa to ease provider sponsorship costs and invest in technology-driven aging-in-place solutions to meet growing demand without overburdening the younger workforce."
      },
      {
        title: "Invest in east-coast urban infrastructure",
        description: "Partner with the private sector early to fund housing, transport and public services in NSW and Victoria, and develop satellite cities with high-speed links as long-term relief for affordability pressures."
      }
    ]
  },
  "dibs-sales-analysis": {
    id: "dibs-sales-analysis",
    title: "Sales Analysis & Predictive Modeling",
    subtitle: "Sales performance analysis, identify seasonal and regional sales patterns, uncover trends in customer behaviour and develop a predictive model to forecast sales quantities and support strategic decision-making.",
    overview: "Analyzed 186,894 historical online sales transactions to uncover patterns in customer behaviour, identify top and underperforming products, and develop a machine learning model capable of forecasting sales quantities. Findings are translated into actionable recommendations across inventory management, sales strategy, marketing, and market expansion.",
    primaryLink: "https://github.com/baohg2/DIBS---Sales-Analysis-and-Predictive-Modelling",
    primaryLinkLabel: "View Repository",
    secondaryLink: "https://github.com/baohg2/DIBS---Sales-Analysis-and-Predictive-Modelling/blob/main/Report/DIBS%20-%20Sales%20Analysis%20and%20Predictive%20Modelling.pdf",
    secondaryLinkLabel: "View Report",
    kpis: [
      {
        value: "$36M+",
        description: "total retail sales analyzed across 12 monthly transactional datasets in 2019."
      },
      {
        value: "77.6%",
        description: "forecasting accuracy (R² score) achieved using the optimized Decision Tree model to predict sales quantities."
      },
      {
        value: "2",
        description: "distinct product clusters identified via K-Means: high-turnover accessories vs. premium electronics."
      }
    ],
    tools: [
      "R",
      "tidyverse",
      "ggplot2"
    ],
    techniques: [
      "Predictive Modeling",
      "Customer Segmentation",
      "Sales Forecasting",
      "Exploratory Data Analysis"
    ],
    results: [
      {
        title: "Identified 2 major seasonal and regional patterns",
        description: "December holiday surge and California dominance"
      },
      {
        title: "Revealed two daily peak ordering advertisement",
        description: "11AM–1PM and 6PM–8PM for higher customer engagement"
      },
      {
        title: "Discovered high-frequent co-purchased product pairs",
        description: "Notably iPhone and Lightning Charging Cable"
      }
    ],
    dashboards: [
      {
        title: "1. Sales Analysis and Customer Behavior",
        subtitle: "Temporal trends, regional sales distribution, and customer purchase patterns.",
        image: "/dashboards/sales.png",
        points: [
          "Q4 holiday seasons drive major revenue spikes, with December reaching a peak of 28,137 orders and $4.6M in sales (average monthly sales stand at $2.87M).",
          "Hourly orders concentrate heavily around lunch (11 AM–1 PM) and dinner (6 PM–8 PM), indicating ideal digital advertising and promotion windows.",
          "California leads total sales at 39.8%, with San Francisco as the top-performing city, followed by Texas and New York (both at 13.5%)."
        ]
      },
      {
        title: "2. Predictive Modeling",
        subtitle: "K-Means product clustering and sales forecasting model comparison.",
        points: [
          "K-Means successfully grouped the 19 SKUs into Cluster 1 (high-turnover, low-price accessories) and Cluster 2 (low-turnover, premium-priced electronics).",
          "The K-Means cluster labels were fed as features to train predictive models, improving accuracy for both regression and decision trees.",
          "The Decision Tree model achieved superior performance (R²: 0.776, MAE: 0.046) over Linear Regression (R²: 0.763, MAE: 0.048) and was selected to forecast sales quantities."
        ]
      },
      {
        title: "3. Insights and Recommendation",
        subtitle: "Actionable recommendations across inventory, sales, marketing, and market expansion.",
        points: [
          "Inventory Management — Use the Decision Tree model to forecast demand for peak seasons (Q4). Prioritise stock for high-turnover, low-price items (e.g. AAA Batteries). Review and reduce or discontinue low-performing SKUs such as LG Dryers.",
          "Sales Strategy — Run targeted seasonal promotions in Q4 and time-limited flash sales during peak hours (11AM–1PM, 6PM–8PM). Bundle frequently co-purchased products (e.g. iPhone + Lightning Charging Cable).",
          "Marketing — Focus campaigns on high-value regions (San Francisco, California) and peak ad windows. Use K-means cluster insights to personalise messaging for each product segment and implement cross-selling strategies.",
          "Market Expansion — Enter densely populated states proximate to existing markets - Florida, Pennsylvania, and Illinois - leveraging existing warehouse and logistics infrastructure."
        ]
      }
    ]
  },
  "credit-card-defaults": {
    id: "credit-card-defaults",
    title: "Predictive Analysis of Credit Card Defaults",
    subtitle: "Develops a predictive machine learning framework to identify credit card default risks using a dataset of 10,000 customers and 23 financial and demographic features.",
    primaryLink: "https://github.com/baohg2/Predictive-Analysis-of-Credit-Card-Defaults/blob/main/Predictive%20Analysis%20of%20Credit%20Card%20Defaults.ipynb",
    primaryLinkLabel: "View Notebook",
    kpis: [
      {
        value: "10K",
        description: "customer profiles analyzed"
      },
      {
        value: "80.4%",
        description: "accuracy score from Logistic Regression, outperformed KNN with higher generalization"
      },
      {
        value: "Enhanced credit risk assessments",
        description: "supporting lending decisions and improving risk management"
      }
    ],
    tools: [
      "Python",
      "StandardScaler",
      "Logistic Regression",
      "KNN"
    ],
    techniques: [
      "Data Cleaning",
      "Data Imputation",
      "Feature Engineering",
      "Dummy Encoding",
      "Model training",
      "Machine Learning"
    ],
    results: [],
    objective: "The goal of this project is to predict the likelihood of credit card clients defaulting on their payments. By moving beyond traditional binary classification, this analysis aims to refine risk assessment by identifying specific individuals likely to default, thereby enhancing the precision of financial risk management strategies.",
    executiveSummary: [
      "Identifies default risks across 10,000 customers using 23 financial and demographic features.",
      "Employs data preprocessing pipelines including data imputation and categorical encoding.",
      "Logistic Regression with 80% accuracy was recommended, outperforming KNN.",
      "The model predicts customer's default likelihood, supporting better lending decisions and enhance risk management."
    ],
    dashboards: [
      {
        title: "1. Data Preprocessing & Feature Engineering",
        subtitle: "Mode imputation for nominal/categorical classes, education category consolidation, and gender/marriage transformations",
        points: [
          "Identified and classified 23 predictors into 14 numerical, 7 ordinal, and 2 nominal features to guide appropriate preprocessing strategies.",
          "Handled missing values systematically:\n- mean imputation for continuous variables (**bill statements**, **payment amounts**)\n- mode imputation for categorical variables (**demographic** and **repayment status**).",
          "Consolidated invalid value in **education levels** (0, 5, 6) into a single 'Others' (4) category, reducing noise and complexity.",
          "Reassigned undefined **marriage status** values (0) to 'Others' (3) and applied dummy encoding with multicollinearity protection (drop_first=True)."
        ]
      },
      {
        title: "2. Model Training & Validation",
        subtitle: "Dataset splitting, feature scaling, and machine learning classifier setup",
        points: [
          "### Create train-test set and validation set",
          "Use first 7,000 records for training and testing models.",
          "Use the last 3,000 records for validation.",
          "### Train-test splitting",
          "70% train, 30% test split.",
          "random_state = 31 for reproducibility.",
          "stratify = y to preserve class proportion.",
          "### Feature Standardization",
          "Standardize features using StandardScaler to achieve zero mean and unit variance.",
          "Fit and transform the training set, then transform the test and validation sets to prevent data leakage.",
          "### Machine Learning Classifier Setup",
          "Configure Logistic Regression with C=100.0 and lbfgs solver.",
          "Set up K-Nearest Neighbors (KNN) classifier with 5 neighbors and Minkowski distance metric."
        ]
      },
      {
        title: "3. Model Evaluation and Comparison",
        subtitle: "Performance metrics comparison and analysis for classification models",
        points: [
          "### Model 1: Logistic Regression",
          "Train Accuracy: 82.0%",
          "Test Accuracy: 80.4%",
          "Validation Accuracy: 80.8%",
          "Demonstrated excellent generalization with a minimal 1.6% gap between training and testing performance.",
          "Maintained stable accuracy on the holdout validation dataset, confirming robustness for real-world application.",
          "### Model 2: K-Nearest Neighbors (KNN)",
          "Train Accuracy: 84.2%",
          "Test Accuracy: 78.4%",
          "Validation Accuracy: 78.2%",
          "Showed clear signs of overfitting, capturing noise in the training set that did not generalize to unseen data.",
          "Exhibited lower performance on both test and validation datasets compared to Logistic Regression."
        ]
      },
      {
        title: "4. Model Recommendation",
        subtitle: "Operational deployment recommendations for credit risk management",
        points: [
          "### Logistic Regression is the recommended model",
          "Superior generalization performance on unseen test (80.4%) and validation (80.8%) datasets.",
          "Mitigates overfitting risk, exhibiting a stable accuracy gap of only 1.6% between training and testing.",
          "Highly interpretable coefficients, allowing risk managers to identify and explain key risk factors behind defaults.",
          "Transparent and explainable decision boundaries, which are critical for regulatory compliance and strategic lending decisions."
        ]
      }
    ]
  },
  "airbnb-price-prediction": {
    id: "airbnb-price-prediction",
    title: "Airbnb Price Prediction in Melbourne",
    subtitle: "A data cleaning and predictive modeling project targeting Airbnb listing price dynamics in Melbourne, Australia to identify key valuation drivers.",
    primaryLink: "https://github.com/baohg2/Airbnb---Predict-listing-prices-in-Melbourne-Australia/blob/main/Predicting%20Airbnb%20Listing%20Price%20in%20Melbourne.ipynb",
    primaryLinkLabel: "View Notebook",
    kpis: [
      {
        value: "7,000",
        description: "Airbnb listings analyzed across Melbourne, Australia"
      },
      {
        value: "0.218",
        description: "optimal holdout test MAE score achieved using the Stacking Regressor"
      },
      {
        value: "5",
        description: "base models ensembled (LightGBM, Random Forest, GBM, SVR, XGBoost) to maximize accuracy"
      }
    ],
    tools: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "LightGBM",
      "XGBoost",
      "TextBlob"
    ],
    techniques: [
      "Stacking Ensemble",
      "Hyperparameter Tuning",
      "Geospatial Analysis",
      "Sentiment Analysis",
      "Log Transformation",
      "Feature Engineering"
    ],
    results: [
      {
        title: "Built High-Precision Ensemble Model",
        description: "Developed a Stacking Regressor combining five tuned base models, achieving a holdout test MAE of 0.218 on the log scale, significantly outperforming any individual model."
      },
      {
        title: "Identified Primary Pricing Drivers",
        description: "Confirmed that physical capacity features (accommodates, bedrooms, bathrooms) and room type (Entire home vs. Private room) are the single most critical price predictors."
      },
      {
        title: "Captured Location & Sentiment Premiums",
        description: "Validated that engineered geospatial features (CBD and station distances) and text sentiment polarity from descriptions directly scale property listing valuations."
      }
    ],
    objective: "The goal of this project is to build a high-precision regression framework to estimate Airbnb listing prices in Melbourne. By understanding localized pricing dynamics, host behaviors, and property capacity features, this analysis aims to identify the key drivers of property valuation and support strategic decisions for hosts (competitive pricing), guests (fair price evaluation), and real estate investors.",
    executiveSummary: [
      "Develops a predictive modeling framework to estimate optimal pricing for Airbnb listings in Melbourne using 7,000 listings and over 60 features.",
      "Performs a comprehensive data cleaning, imputation, and feature engineering pipeline, including geospatial and text sentiment analysis.",
      "Compares nine individual regression models and four ensemble models using 10-fold cross-validation.",
      "Recommends a Stacking Regressor combining the top 5 base models, achieving a Mean Absolute Error (MAE) of 0.21968 on the holdout test set on the log scale."
    ],
    dashboards: [
      {
        title: "1. Data Preprocessing & Feature Engineering",
        subtitle: "Cleaning string values, systematic missing data imputation, and advanced feature extraction",
        points: [
          "Stripped symbols ($, %) and cleaned textual bathrooms format into numeric types.",
          "Imputed missing values: mean for normal distributions, mode for categorical variables, and median for skewed distributions (beds, bedrooms, review ratings).",
          "Engineered structural features: **bed_to_bath_ratio**, **guest_comfort_score**, **room_density**, **review_density**, and **occupancy_proxy**.",
          "Computed geospatial features: Haversine distance to CBD and nearest train stations, keeping minimum distance.",
          "Conducted text analysis on **host_about** and **description** to extract sentiment polarity and subjectivity."
        ]
      },
      {
        title: "2. Model Training & Validation",
        subtitle: "Base regressors setup, randomized search with 10-fold cross-validation, and log transformation",
        points: [
          "### Target Log Transformation",
          "Applied log1p transformation to price to compress the right-skewed scale and reduce outlier impact.",
          "### Train-Test Splitting",
          "Split the dataset into training and holdout test sets to evaluate performance and prevent data leakage.",
          "### Hyperparameter Tuning",
          "Tuned nine base regressors (Ridge, Lasso, Elastic Net, Decision Trees, Random Forest, GBM, XGBoost, LightGBM, SVR) using RandomizedSearchCV.",
          "Configured 10-fold cross-validation with negative mean absolute error (MAE) as the optimization metric."
        ]
      },
      {
        title: "3. Model Evaluation and Comparison",
        subtitle: "Individual regressor and ensemble performance metrics comparison",
        points: [
          "### Base Model Comparison",
          "LightGBM emerged as the strongest individual model (MAE: 0.22731), closely followed by GBM (MAE: 0.22794) and Random Forest (MAE: 0.23186).",
          "Support Vector Regression (MAE: 0.27864) and XGBoost (MAE: 0.25496) performed moderately.",
          "Simpler models (Lasso/Ridge/Elastic Net) underperformed, showing very high MAE values (~0.49690).",
          "### Ensemble Performance",
          "Voting and stacking ensembles outperformed all individual regressors, providing higher accuracy and stability.",
          "Stacking Regressor (All Models) achieved the best test MAE of 0.21802, while Stacking Regressor (Top 5 Models) achieved 0.21968."
        ]
      },
      {
        title: "4. Model Recommendation & Insights",
        subtitle: "Final stacking ensemble details and property price drivers",
        points: [
          "### Recommended Model",
          "The Stacking Regressor utilizing the top 5 base models (LGBM, RF, GBM, SVR, XGBoost) is recommended for deployment.",
          "Meta-learner weights: LightGBM (0.61) and Random Forest (0.40) contribute most, while XGBoost (-0.23) acts as a corrective signal.",
          "### Key Pricing Drivers",
          "Capacity features (accommodates, bedrooms, bathrooms) are the strongest positive price predictors.",
          "Room type (Entire home vs. Private room) is the single most impactful categorical pricing factor.",
          "Engineered distance metrics (distance to CBD and train stations) significantly scale listing valuations."
        ]
      }
    ]
  }
};
