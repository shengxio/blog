import streamlit as st
import pandas as pd
import plotly.express as px


st.set_page_config(page_title="Skills and Services", page_icon="🛠️",layout="wide")

skill_col, service_col = st.columns(2)

with skill_col:
    st.title("Skills")
    st.subheader("Programming")
    skills = {
        "Python": 95,
        "HTML": 85,
        "JavaScript": 80,
        "CSS": 75,
        "SQL": 90
    }
    
    # Create data for radar chart
    skill_data = pd.DataFrame({
        'Skill': skills.keys(),
        'Score': skills.values()
    })
    
    # Create radar chart using plotly
    fig = px.line_polar(skill_data, r='Score', theta='Skill', line_close=True)
    fig.update_traces(fill='toself')
    fig.update_layout(
        polar=dict(
            radialaxis=dict(
                visible=True,
                range=[0, 100]
            )
        ),
        showlegend=False
    )
    st.plotly_chart(fig, use_container_width=True)
        
    st.subheader("Frameworks")
    frameworks = {
        "Streamlit": 90,
        "Gradio": 85,
        "Flask": 80,
        "FastAPI": 85,
        "pydantic": 85,
        "React": 75,
        "Keras": 85,
        "Scikit-learn": 90,
        "Spacy": 80,
        "Seaborn": 90,
        "Matplotlib": 90
    }
    
    skill_data = pd.DataFrame({
        'Framework': frameworks.keys(),
        'Score': frameworks.values()
    })
    
    # Create radar chart using plotly
    fig = px.line_polar(skill_data, r='Score', theta='Framework', line_close=True)
    fig.update_traces(fill='toself')
    fig.update_layout(
        polar=dict(
            radialaxis=dict(
                visible=True,
                range=[0, 100]
            )
        ),
        showlegend=False
    )
    st.plotly_chart(fig, use_container_width=True)
        
    st.subheader("Tools")
    tools = {
        "Git": 90,
        "Docker": 85,
        "AWS": 80,
        "Azure": 85,
        "GCP": 80
    }
    
    skill_data = pd.DataFrame({
        'Tool': tools.keys(),
        'Score': tools.values()
    })
    
    # Create radar chart using plotly
    fig = px.line_polar(skill_data, r='Score', theta='Tool', line_close=True)
    fig.update_traces(fill='toself')
    fig.update_layout(
        polar=dict(
            radialaxis=dict(
                visible=True,
                range=[0, 100]
            )
        ),
        showlegend=False
    )
    st.plotly_chart(fig, use_container_width=True)
    
    environments = []

with service_col:
    st.title('Services')
    servcies = [
        {
            "title": "AI and Machine Learning Solutions",
            "description": "Custom AI model development tailored to your business needs, advanced data analytics, and predictive modeling, including fine-tuning large language models (LLMs) for specific applications."
        },
        {
            "title": "Data Science Consulting",
            "description": "End-to-end data pipeline creation (ETL/ELT) for structured and unstructured data, cloud-based analytics solutions using AWS and GCP, and advanced statistical analysis for actionable insights."
        },
        {
            "title": "Dashboard Design and Visualization",
            "description": "Interactive and scalable dashboards for data-driven decision-making, streamlined visualizations using tools like Plotly, Pydeck, and Streamlit, with a focus on fleet industry-specific reporting interfaces."
        },
        {
            "title": "AI-Powered Curriculum Development",
            "description": "Custom AI and data science training programs for professionals, as well as curriculum design to upskill teams in startups and organizations."
        },
        {
            "title": "Software Engineering for AI Applications",
            "description": "Backend API development using FastAPI, Kubernetes and Helm-based deployments, and Infrastructure as Code (IaC) solutions with Terraform and Azure integration."
        },
        {
            "title": "NLP and Text Analytics",
            "description": "Natural Language Processing for meeting notes, chatbots, and content analysis, including solutions for text truthfulness and accuracy evaluations."
        },
        {
            "title": "Startup and Business Ideation Support",
            "description": "Technical research and AI strategy for startups, MVP development for AI-based projects, and ideation support for leveraging cutting-edge AI technologies."
        },
        {
            "title": "Custom Solutions",
            "description": "Tailored consulting for unique business problems, exploring innovative applications of distributed computing, parallelism, and emerging AI trends."
        }
    ]
    
    for service in servcies:
        with st.container(border=True):
            st.subheader(service["title"])
            st.markdown('**Description**: '+service["description"])
            
