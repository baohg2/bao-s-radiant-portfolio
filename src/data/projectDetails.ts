export interface ProjectDetailData {
  id: string;
  title: string;
  subtitle: string;
  primaryLink: string;
  primaryLinkLabel: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  kpis: {
    value: string;
    description: string;
  }[];
  techStack: string[];
  results: {
    title: string;
    description: string;
  }[];
}

export const projectDetails: Record<string, ProjectDetailData> = {
  "australia-demographics": {
    id: "australia-demographics",
    title: "Australia’s Demographic Transformation (1996–2016)",
    subtitle: "Uncovers how migration, age structure, gender composition and regional settlement shifted between 1996 and 2016, and highlights implications for infrastructure, workforce planning and public policy.",
    primaryLink: "https://github.com/baohg2/Australia-Demographic-Dashboard",
    primaryLinkLabel: "View Full Report",
    secondaryLink: "https://github.com/baohg2/Australia-Demographic-Dashboard", // Keep it pointing to repo if dashboard is not separate
    secondaryLinkLabel: "View Power BI Dashboard",
    kpis: [
      {
        value: "3",
        description: "dashboards built to visualise 20 years of Australian demographic and migration trends."
      },
      {
        value: "33%",
        description: "population growth analysed, with overseas-born groups driving 60% of total increase."
      },
      {
        value: "2",
        description: "migrant cohorts compared, revealing a younger Asian workforce vs. an ageing European group."
      }
    ],
    techStack: [
      "Power BI",
      "DAX",
      "Power Query",
      "ETL / Data Transformation",
      "Data Modelling",
      "Demographic Segmentation",
      "Data Visualization"
    ],
    results: [
      {
        title: "Revealed Australia’s major demographic shift",
        description: "Identified a 33% national population increase (18M -> 24M) and showed that 60% of this growth was driven by overseas-born residents, reshaping age, gender and settlement patterns across states."
      }
    ]
  },
  "dibs-sales-analysis": {
    id: "dibs-sales-analysis",
    title: "DIBS Sales Analysis & Predictive Modelling",
    subtitle: "A data-driven analysis of DIBS Retail Company's sales performance, uncovering trends in customer behaviour and developing a predictive model to forecast sales quantities and support strategic decision-making.",
    primaryLink: "https://github.com/baohg2/DIBS---Sales-Analysis-and-Predictive-Modelling",
    primaryLinkLabel: "View GitHub Repository",
    secondaryLink: "https://github.com/baohg2/DIBS---Sales-Analysis-and-Predictive-Modelling",
    secondaryLinkLabel: "View R Markdown Report",
    kpis: [
      {
        value: "14.5K+",
        description: "historical retail transaction records analyzed, cleaned, and pre-processed."
      },
      {
        value: "88%",
        description: "model accuracy achieved using regression trees to predict customer sales quantities."
      },
      {
        value: "4",
        description: "key customer purchasing segments identified based on frequency and average basket size."
      }
    ],
    techStack: [
      "R",
      "tidyverse",
      "ggplot2",
      "Predictive Modeling",
      "Customer Segmentation",
      "Sales Forecasting",
      "Exploratory Data Analysis"
    ],
    results: [
      {
        title: "Sales quantity forecasting",
        description: "Developed a predictive model to forecast sales quantities per transaction, allowing retail managers to optimize inventory and decrease stockouts by up to 22%."
      },
      {
        title: "Customer purchasing insights",
        description: "Identified clear demographic and seasonal trends in sales, showing purchase spikes around holidays and specific product categories favored by key segments."
      }
    ]
  },
  "credit-card-defaults": {
    id: "credit-card-defaults",
    title: "Predictive Analysis of Credit Card Defaults",
    subtitle: "Develops a predictive machine learning framework to identify credit card default risks using a dataset of 10,000 customers and 23 financial and demographic features.",
    primaryLink: "https://github.com/baohg2/Predictive-Analysis-of-Credit-Card-Defaults",
    primaryLinkLabel: "View GitHub Repository",
    kpis: [
      {
        value: "10K",
        description: "customer profiles analyzed across 23 different demographic and payment variables."
      },
      {
        value: "84%",
        description: "ROC-AUC classification score achieved using Random Forest & XGBoost models."
      },
      {
        value: "23",
        description: "financial and demographic features engineered and ranked by risk predictive power."
      }
    ],
    techStack: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "Feature Engineering",
      "Risk Analytics",
      "Credit Classification"
    ],
    results: [
      {
        title: "Default risk identification",
        description: "Engineered a machine learning pipeline that identifies high-risk customers, allowing credit card issuers to flag defaults early and adjust credit limits dynamically."
      },
      {
        title: "Feature importance extraction",
        description: "Discovered that previous payment delays and utilization ratio are the strongest indicators of default risk, while demographic factors had negligible predictive power."
      }
    ]
  },
  "airbnb-price-prediction": {
    id: "airbnb-price-prediction",
    title: "Airbnb Price Prediction in Melbourne",
    subtitle: "A data cleaning and predictive modeling project targeting Airbnb listing price dynamics in Melbourne, Australia to identify key valuation drivers.",
    primaryLink: "https://github.com/baohg2/Airbnb---Predict-listing-prices-in-Melbourne-Australia",
    primaryLinkLabel: "View GitHub Repository",
    kpis: [
      {
        value: "15+",
        description: "listing features processed, including location, property type, reviews, and amenities."
      },
      {
        value: "91%",
        description: "of missing data resolved through imputation and structured feature engineering."
      },
      {
        value: "12%",
        description: "variance reduction in price predictions by controlling for high-influence geographic factors."
      }
    ],
    techStack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Regression Modeling",
      "Data Cleaning",
      "Feature Imputation"
    ],
    results: [
      {
        title: "Melbourne listing price valuation",
        description: "Built a regression model that accurately estimates Airbnb prices in Melbourne based on localized geo-data, number of bedrooms, and host rating history."
      },
      {
        title: "Identified price drivers",
        description: "Confirmed that proximity to the central business district (CBD) and rating scores are the most significant positive drivers of listing prices."
      }
    ]
  }
};
