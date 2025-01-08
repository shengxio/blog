import streamlit as st
import pandas as pd
import plotly.express as px


st.set_page_config(page_title="Skills and Services", page_icon="🛠️",layout="wide")

skill_col, service_col = st.columns([2,3])

with skill_col:
    st.title("Skills")
    
    # Role Functions
    st.subheader("Role Functions")
    roles = {
        "Project Management": 7,
        "Product Development": 9,
        "System Design": 9,
        "Data Analytics": 10,
        "Data Science": 7,
        "Feature Engineering": 8,
        "Team Leadership": 8,
        "Solution Architecture": 9,
        "Industrial Automation": 9,
        "Research & Development": 7
    }
    
    # Display role functions as progress bars
    for role, score in roles.items():
        left, mid, right = st.columns([2, 3, 1])
        with left:
            st.write(f"**{role}**")
        with mid:
            st.progress(score/10)
        with right:
            st.write(f"{score}")
    st.divider()
    
    # programming skills
    st.subheader("Programming")
    skills = {
        "Python": 10,
        "HTML": 8,
        "JavaScript": 6,
        "CSS": 7,
        "SQL": 9,
        "PLC": 7
    }
    
    # Display programming skills as progress bars
    for skill, score in skills.items():
        left, mid,right = st.columns([1, 4, 1])
        with left:
            st.write(f"**{skill}**")
        with mid:
            st.progress(score/10)
        with right:
            st.write(f"{score}")
    st.divider()
    
    # Libraries
    st.subheader("Libraries")
    libraries = {
        "Streamlit": 9,
        "Gradio": 9,
        "Flask": 6,
        "FastAPI": 9,
        "pydantic": 9,
        "pandas": 9,
        "React": 7,
        "Keras": 7,
        "Scikit-learn": 8,
        "Spacy": 6,
        "Seaborn": 8,
        "Matplotlib": 9
    }
    
    # Display libraries as progress bars
    for lib, score in libraries.items():
        left, mid, right = st.columns([1, 4,1])
        with left:
            st.write(f"**{lib}**")
        with mid:
            st.progress(score/10)
        with right:
            st.write(f"{score}")
    st.divider()
    
    # Deployment conditions
    st.subheader("Deployment")
    deployments = {
        "Azure": ["App Service", "Functions", "AKS", "Key Vault", "Cosmos DB", "AI Studio", "Event Hub", "Machine Learning", "Cognitive Service"],
        "AWS": ["EC2", "DynamoDB", "API Gateway", "SNS", "Step Function", 
                "Cognito", "Secrets Manager", "IAM", "ACM", "S3", "VPC", "Route53", "DocumentDB", "ECR", "Lambda"],
        "GCP": ["Cloud Function", "App Engine", "Cloud Run", "Cloud Pub/Sub", "Apigee API", "Firestore DB", "API Gateway", "Cloud Endpoint", "Cloud logging"]
    }
    
    # Display cloud platforms and their services
    for platform, services in deployments.items():
        with st.expander(f"{platform} ({len(services)})"):
            cols = st.columns(3)
            for idx, service in enumerate(services):
                with cols[idx % 3]:
                    with st.container(border=True):
                        st.markdown(f"**{service}**")
    st.divider()

    # Common programming tools
    st.subheader("Tools")
    tools = {
        "Git": 9,
        "Docker": 7,
        "Jupyter Notebook": 9,
        "Google Collab": 7,
        "Open API": 7,
        "Data Structure": 10,
        "Web-Scraping": 8
    }
    
    # Display tools as progress bars
    for tool, score in tools.items():
        left, mid, right = st.columns([1, 4, 1])
        with left:
            st.write(f"**{tool}**")
        with mid:
            st.progress(score/10)
        with right:
            st.write(f"{score}")
    

    
    environments = []

with service_col:
    servcies = [
        {
            "title": "AI and Machine Learning Solutions",
            "description": "Custom AI model development tailored to your business needs, advanced data analytics, and predictive modeling, including fine-tuning large language models (LLMs) for specific applications.",
            "tags": ["Data Science", "Feature Engineering", "Python", "Keras", "Scikit-learn", "pandas", "AWS", "Azure", "GCP", "Jupyter Notebook", "Data Structure"]
        },
        {
            "title": "Data Science Consulting",
            "description": "End-to-end data pipeline creation (ETL/ELT) for structured and unstructured data, cloud-based analytics solutions using AWS and GCP, and advanced statistical analysis for actionable insights.",
            "tags": ["Data Analytics", "Data Science", "Python", "SQL", "pandas", "AWS", "GCP", "Data Structure", "Matplotlib", "Seaborn"]
        },
        {
            "title": "Dashboard Design and Visualization",
            "description": "Interactive and scalable dashboards for data-driven decision-making, streamlined visualizations using tools like Plotly, Pydeck, and Streamlit, with a focus on fleet industry-specific reporting interfaces.",
            "tags": ["System Design", "Data Analytics", "Python", "Streamlit", "HTML", "CSS", "JavaScript", "React", "Matplotlib", "Seaborn"]
        },
        {
            "title": "AI-Powered Curriculum Development",
            "description": "Custom AI and data science training programs for professionals, as well as curriculum design to upskill teams in startups and organizations.",
            "tags": ["Product Development", "Team Leadership", "Python", "Jupyter Notebook", "Google Collab", "Keras", "Scikit-learn", "pandas"]
        },
        {
            "title": "Software Engineering for AI Applications",
            "description": "Backend API development using FastAPI, Kubernetes and Helm-based deployments, and Infrastructure as Code (IaC) solutions with Terraform and Azure integration.",
            "tags": ["Solution Architecture", "System Design", "Python", "FastAPI", "Docker", "Azure", "AWS", "pydantic", "Git"]
        },
        {
            "title": "NLP and Text Analytics",
            "description": "Natural Language Processing for meeting notes, chatbots, and content analysis, including solutions for text truthfulness and accuracy evaluations.",
            "tags": ["Data Science", "Feature Engineering", "Python", "Spacy", "Flask", "FastAPI", "Open API", "Web-Scraping"]
        },
        {
            "title": "Startup and Business Ideation Support",
            "description": "Technical research and AI strategy for startups, MVP development for AI-based projects, and ideation support for leveraging cutting-edge AI technologies.",
            "tags": ["Project Management", "Product Development", "Research & Development", "Python", "Gradio", "Streamlit", "FastAPI", "Git", "Docker"]
        },
        {
            "title": "Custom Solutions",
            "description": "Tailored consulting for unique business problems, exploring innovative applications of distributed computing, parallelism, and emerging AI trends.",
            "tags": ["Solution Architecture", "Industrial Automation", "Python", "AWS", "Azure", "GCP", "Docker", "Data Structure"]
        }
    ]
    
    st.title('Services')
    # Create a list of all unique tags
    all_tags = set()
    for service in servcies:
        all_tags.update(service["tags"])
    
    # Convert to sorted list for consistent display
    all_tags = sorted(list(all_tags))
    
    # Create multiselect for filtering
    selected_tags = st.multiselect("Filter Services by Skills:", all_tags)
    
    # Display services based on selected tags
    for service in servcies:
        # Show all services if no tags selected, or show services that have any of the selected tags
        if not selected_tags or any(tag in service["tags"] for tag in selected_tags):
            with st.container(border=True):
                st.subheader(service["title"])
                st.markdown('**Description**: '+service["description"])
                st.markdown('**Skills**: ' + ', '.join(service["tags"]))
            
