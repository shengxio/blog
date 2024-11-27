import streamlit as st

st.set_page_config(page_title="Contact", page_icon="📧")

st.title("Contact Me")

with st.form("contact_form"):
    name = st.text_input("Name")
    email = st.text_input("Email")
    message = st.text_area("Message")
    submit_button = st.form_submit_button("Send")
    
    if submit_button:
        st.success("Thanks for your message! I'll get back to you soon.")

# Social media links
st.write("---")
cols = st.columns(3)
with cols[0]:
    st.markdown("[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](YOUR_LINKEDIN_URL)")
with cols[1]:
    st.markdown("[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](YOUR_GITHUB_URL)")
with cols[2]:
    st.markdown("[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:YOUR_EMAIL@EMAIL.COM)") 