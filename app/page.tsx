export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-8">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:shengxio@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                      shengxio@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Canada</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <a href="https://www.linkedin.com/in/sheng-xiong-ding/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <a href="https://github.com/shengxio" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                I am a versatile Data Scientist and Solutions Architect with extensive experience in both software development and industrial automation. My expertise spans across multiple domains, from developing AI-powered applications to implementing industrial control systems.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">In the realm of AI and Machine Learning, I specialize in:</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Developing and deploying machine learning models for predictive analytics and natural language processing</li>
                <li>Creating intelligent systems using large language models for content analysis and automation</li>
                <li>Building scalable data pipelines and APIs using modern frameworks like FastAPI and Flask</li>
                <li>Implementing cloud-native solutions across AWS, Azure, and GCP platforms</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">My industrial automation background includes:</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Designing and implementing PLC-based control systems</li>
                <li>Developing temperature prediction and monitoring systems for cold chain logistics</li>
                <li>Creating autonomous environmental control systems for industrial applications</li>
                <li>Implementing electrical systems for various industrial applications</li>
              </ul>

              <p className="mb-4">
                I bring a unique combination of skills that bridge the gap between traditional industrial systems and modern AI solutions. My projects demonstrate this versatility - from developing AI-powered co-pilot systems for transportation to implementing autonomous bioreactor control systems.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">My technical expertise includes:</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Programming: Advanced proficiency in Python, with strong capabilities in web technologies (HTML, CSS, JavaScript)</li>
                <li>Libraries & Frameworks: Extensive experience with data science tools (pandas, Scikit-learn) and web frameworks (FastAPI, Flask, Streamlit)</li>
                <li>Cloud Platforms: Comprehensive knowledge of cloud services across AWS, Azure, and GCP</li>
                <li>Industrial Systems: Deep understanding of PLC programming and industrial automation</li>
              </ul>

              <p className="mb-4">
                I am passionate about creating solutions that combine cutting-edge AI technologies with practical industrial applications. Whether it's developing intelligent agents for process automation or implementing smart control systems, I focus on delivering robust, scalable, and efficient solutions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 