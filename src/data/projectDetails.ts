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
        title: "Uncovered seasonal and hourly ordering patterns",
        description: "Identified a strong Q4 sales surge peaking in December with 28.1K orders ($4.6M sales) and discovered twin daily order peaks at 11 AM–1 PM and 6 PM–8 PM, establishing optimal marketing and advertising windows."
      },
      {
        title: "Segmented product portfolio via K-Means",
        description: "Clustered 19 SKUs into two distinct profiles—high-volume, low-priced accessories (e.g. AAA Batteries) and low-volume, high-priced premium electronics (e.g. MacBook Pro leading at $8M or 22% of sales)—to optimize inventory prioritization."
      },
      {
        title: "Developed sales quantity forecaster",
        description: "Trained and compared Linear Regression and Decision Tree models, with the Decision Tree model outperforming (R²: 0.776, MAE: 0.046) to project future sales volumes and prevent stockouts."
      }
    ],
    dashboards: [
      {
        title: "Dashboard 1 — Temporal Sales & Seasonality",
        subtitle: "Monthly sales trends, daily order fluctuations, and hourly purchase spikes.",
        image: "/dashboards/sales.png",
        points: [
          "Q4 holiday seasons drive major revenue spikes, with December reaching a peak of 28,137 orders and $4.6M in sales (average monthly sales stand at $2.87M).",
          "Hourly orders concentrate heavily around lunch (11 AM–1 PM) and dinner (6 PM–8 PM), indicating ideal digital advertising and promotion windows.",
          "Daily order patterns show regular weekly cycles, reflecting differences in consumer shopping behavior between weekdays and weekends."
        ]
      },
      {
        title: "Dashboard 2 — Product Performance & Association Analysis",
        subtitle: "Product sales quantities, revenue contributions, and co-purchase basket analysis.",
        points: [
          "Low-cost accessories dominate overall quantities, led by AAA Batteries (31K packs) and AA Batteries (27.6K packs), whereas premium electronics drive revenue.",
          "MacBook Pro Laptop is the single largest revenue driver, contributing $8M (22% of total sales), followed by iPhone, ThinkPad, and Google Phone.",
          "Basket analysis identified strong co-purchase pairs, notably iPhone & Lightning Charging Cable (1,002 pairs) and Google Phone & USB-C Cable (985 pairs), presenting bundle opportunities."
        ]
      },
      {
        title: "Dashboard 3 — Predictive Model & Clustering Analytics",
        subtitle: "K-Means product clustering and sales forecasting model comparison.",
        points: [
          "K-Means successfully grouped the 19 SKUs into Cluster 1 (high-turnover, low-price accessories) and Cluster 2 (low-turnover, premium-priced electronics).",
          "The K-Means cluster labels were fed as features to train predictive models, improving accuracy for both regression and decision trees.",
          "The Decision Tree model achieved superior performance (R²: 0.776, MAE: 0.046) over Linear Regression (R²: 0.763, MAE: 0.048) and was selected to forecast sales quantities."
        ]
      }
    ],
    recommendations: [
      {
        title: "Optimize inventory and stock prioritization",
        description: "Deploy the Decision Tree model to forecast peak Q4 demand. Heavily stock high-turnover Cluster 1 items (AAA/AA Batteries) to avoid stockouts, while reducing or discontinuing low-performing SKUs like LG Dryers."
      },
      {
        title: "Execute time-targeted bundle promotions",
        description: "Launch time-limited flash sales during daily peak hours (11 AM–1 PM and 6 PM–8 PM). Offer pre-packaged bundle deals for frequently co-purchased items (e.g., iPhone paired with Lightning Cable) to boost average order value."
      },
      {
        title: "Target marketing and expand geodistribution",
        description: "Allocate ad budgets during peak lunchtime/evening hours. Focus marketing on top sales regions like California (San Francisco). Strategically expand warehouses to densely populated neighboring states like Florida, Illinois, and Pennsylvania."
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
    tools: [
      "Python",
      "Scikit-Learn",
      "XGBoost"
    ],
    techniques: [
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
    primaryLink: "https://github.com/baohg2/Airbnb---Predict-listing-prices-in-Melbourne-Australia/blob/main/Predicting%20Airbnb%20Listing%20Price%20in%20Melbourne.ipynb",
    primaryLinkLabel: "View Notebook",
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
    tools: [
      "Python",
      "Pandas",
      "Scikit-Learn"
    ],
    techniques: [
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
