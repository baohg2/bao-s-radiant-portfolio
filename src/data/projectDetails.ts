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
