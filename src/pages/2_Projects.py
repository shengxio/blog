import streamlit as st

st.set_page_config(page_title="Projects", page_icon="💼",layout="wide")

st.title("Projects")

# Add your custom CSS for project cards
st.markdown("""
    <style>
    .project-card {
        background-color: var(--st-color-secondary-background-color);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        border: 1px solid var(--st-color-secondary-background-border);
    }
    </style>
""", unsafe_allow_html=True)

# List of projects with updated tags aligned with skills
projects = [
    {
        "title": "MiMinions.ai: Empowering Users with LLM-Based Agent Services",
        "description": "MiMinions.ai is an innovative startup project aimed at redefining how users interact with artificial intelligence. Leveraging large language models (LLMs), the platform enables users to create, own, develop, and trade intelligent agents tailored to their needs. MiMinions.ai aspires to democratize access to advanced AI capabilities, fostering a vibrant ecosystem where users can customize and monetize their agents while exploring new frontiers in AI-driven services. Currently in progress, the project promises to be a game-changer in the world of AI interactivity and ownership.",
        "image": "",
        "tags": ["Product Development", "Solution Architecture", "Research & Development", "Python", "FastAPI", "AWS", "React", "Docker", "Open API"]
    },
    {
        "title": "Lanterns.fun: A Browser Extension Chatbot for Rational Content Consumption",
        "description": "Lanterns.fun is a browser extension chatbot designed to illuminate the way users engage with online content. It helps users critically analyze articles, identify bias, and maintain rational perspectives while consuming digital information. By providing concise summaries, highlighting key points, and offering fact-checking tools, Lanterns.fun empowers users to navigate complex topics and make informed decisions. Built with the goal of fostering thoughtful engagement, Lanterns.fun is a tool for anyone striving to read online content more rationally.",
        "image": "",
        "tags": ["System Design", "Data Analytics", "Python", "JavaScript", "HTML", "CSS", "Flask", "Web-Scraping"]
    },
    {
        "title": "Lamp: Exploring Machine Learning for Content Truthfulness and Accuracy",
        "description": "Lamp is an ongoing project that harnesses the potential of machine learning to assess the truthfulness and accuracy of online content. Currently in development, Lamp aims to analyze articles, detect bias, and cross-reference claims with verified data sources to provide users with insights into the reliability of digital information. Once completed, it aspires to become a vital tool in combating misinformation and enhancing digital literacy for online users.",
        "image": "",
        "tags": ["Data Science", "Feature Engineering", "Python", "Scikit-learn", "Spacy", "FastAPI", "React", "AWS"]
    },
    {
        "title": "Product Temperature Prediction for Cold Chain Vehicles",
        "description": "This project involved developing a comprehensive temperature prediction system tailored for cold chain vehicles to ensure product integrity during transportation. The project encompassed data collection from IoT sensors, design of predictive models using machine learning algorithms, and implementation of real-time monitoring solutions. Advanced analytics were utilized to forecast temperature fluctuations and alert stakeholders to potential deviations. This proactive approach improved logistics and minimized risks of spoilage, ensuring the consistent quality of temperature-sensitive products.",
        "image": "project1.jpg",
        "tags": ["Data Analytics", "Machine Learning", "Industrial Automation", "Python", "Scikit-learn", "pandas", "Matplotlib", "FastAPI", "AWS"]
    },
    {
        "title": "Transportation Vehicle Co-pilot demo",
        "description": "Developed a Transportation Vehicle Co-pilot demo integrating machine learning and large language models to provide context-aware navigation, real-time weather insights, and predictive guidance. This solution interprets natural language commands, adapts to driver preferences, and continuously improves through learning from historical trip data, resulting in enhanced route recommendations and a more intuitive user experience.",
        "image": "",
        "tags": ["Product Development", "Data Science", "Python", "Scikit-learn", "Keras", "FastAPI", "pandas", "Docker"]
    },
    {
        "title": "Autonomous Algae Incubation System",
        "description": "Developed an autonomous algae incubation system that optimally regulates environmental conditions such as temperature, lighting, nutrient flow, and CO₂ concentration. Using real-time sensor inputs and automated control loops, the system dynamically adapts to maintain ideal growth parameters, improving algae yields and supporting sustainable biofuel and bioproduct production.",
        "image": "",
        "tags": ["System Design", "Industrial Automation", "Python", "System Design", "Data Structure", "Robotics", "pandas"]
    },
    {
        "title": "Meeting Stickers: NLP-Driven Insights for Government Meeting Notes",
        "description": "GovNotes Analyzer is a project that harnesses the power of natural language processing (NLP) to process and analyze meeting notes from government sources. By extracting key insights and actionable items, the tool simplifies complex discussions into detailed, digestible outputs. Designed to enhance transparency and efficiency, GovNotes Analyzer aids stakeholders in identifying priorities and driving meaningful actions from government proceedings.",
        "image": "",
        "tags": ["Data Analytics", "Feature Engineering", "Python", "Spacy", "FastAPI", "Streamlit"]
    },
    {
        "title": "Genetic Engineering Challenges - Kaggle",
        "description": "This project focused on developing an advanced prediction system to identify the origin of genetic sequences and determine the laboratory responsible for their engineering. It included the analysis of vast genomic datasets, feature extraction, and the application of machine learning models capable of distinguishing subtle differences in genetic modifications. The project aimed to enhance traceability and security in genetic research, ensuring proper attribution and aiding regulatory compliance. The resulting solution provided high accuracy in source identification, contributing to transparency and accountability in biotechnology.",
        "image": "project2.jpg",
        "tags": ["Data Science", "Research & Development", "Python", "Scikit-learn", "pandas", "Jupyter Notebook", "Seaborn", "Matplotlib"]
    },
    {
        "title": "Residential and Industrial Load Analysis & Arc Flash Study",
        "description": "This project involved conducting comprehensive electrical load analyses for both residential and industrial facilities. The aim was to assess and optimize power distribution systems to ensure reliability and efficiency. A detailed short circuit study was performed to evaluate the system's response to electrical faults and identify potential hazards. Additionally, an arc flash study was conducted to enhance workplace safety by determining incident energy levels and establishing appropriate protection measures. The results supported the design of robust electrical infrastructures, ensuring compliance with safety standards and regulations.",
        "image": "project4.jpg",
        "tags": ["Industrial Automation", "System Design", "Python", "PLC", "Data Structure"]
    },
    {
        "title": "End-to-End Electrical Heat Tracing for Oil and Gas Pipelines",
        "description": "This project entailed the complete implementation of electrical heat tracing systems for oil and gas pipelines to prevent freezing and maintain optimal flow temperatures. It covered initial project planning, system design, and selection of suitable heat tracing technologies. The scope also included prototyping and testing to ensure the system met the rigorous standards required by the oil and gas industry. The project advanced to installation and integration phases, followed by comprehensive quality assurance (QA) and commissioning procedures. The end result delivered reliable, energy-efficient thermal management solutions for critical pipeline infrastructure.",
        "image": "project5.jpg",
        "tags": ["Project Management", "Industrial Automation", "VBA", "Data Structure"]
    },
    {
        "title": "Product Design for Low and Medium Voltage Switchgears",
        "description": "This project involved the comprehensive design and development of low and medium voltage switchgears tailored for industrial and commercial applications. The project encompassed requirements analysis, electrical and mechanical design, and adherence to industry standards for safety and performance. Prototyping and rigorous testing were conducted to ensure reliability and robustness under various operational conditions. Quality assurance (QA) and quality control (QC) processes were integrated throughout the project to verify compliance with safety norms and performance standards. These measures ensured that each unit met stringent quality benchmarks before delivery. The final products were optimized for scalability, energy efficiency, and ease of maintenance, providing clients with high-quality, cost-effective power distribution solutions.",
        "image": "project6.jpg",
        "tags": ["Product Development", "Industrial Automation", "System Design", "Data Structure"]
    },
    {
        "title": "Solar and LED Street Light Design & Delivery",
        "description": "This project focused on the complete end-to-end development of solar-powered and LED street lighting solutions. It encompassed the design phase, where energy-efficient and cost-effective prototypes were created, followed by strategic outsourcing of production components. Quality assurance and quality control (QA/QC) processes were rigorously applied throughout the project to ensure that the final products met high standards of performance and durability. The project culminated in the successful delivery and installation of the street lighting systems, contributing to sustainable and efficient urban and rural infrastructure.",
        "image": "project3.jpg",
        "tags": ["Project Management", "Product Development", "Data Structure"]
    }
]

# Create a list of all unique tags from projects
all_tags = set()
for project in projects:
    all_tags.update(project["tags"])

# Convert to sorted list for consistent display
all_tags = sorted(list(all_tags))

# Create two columns for the grid
filter_col, col1, col2 = st.columns([1,2,2])

# Create filter section
with filter_col:
    selected_tags = st.multiselect("Filter Projects by Skills:", all_tags)

# Distribute filtered projects across columns
filtered_projects = [
    project for project in projects 
    if not selected_tags or any(tag in project["tags"] for tag in selected_tags)
]

for i, project in enumerate(filtered_projects):
    with [col1, col2][i % 2]:
        st.markdown(f"""
            <div class="project-card">
                <h3>{project['title']}</h3>
                <p>{project['description']}</p>
                <p><small><strong>Skills:</strong> {' • '.join(project['tags'])}</small></p>
            </div>
        """, unsafe_allow_html=True)