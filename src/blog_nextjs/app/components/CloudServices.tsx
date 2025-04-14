interface CloudServicesProps {
  platforms: {
    [key: string]: string[];
  };
}

export default function CloudServices({ platforms }: CloudServicesProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Cloud Platforms & Services</h2>
      
      <div className="space-y-8">
        {Object.entries(platforms).map(([platform, services]) => (
          <div key={platform} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                platform === 'AWS' ? 'bg-orange-100 text-orange-600' :
                platform === 'Azure' ? 'bg-blue-100 text-blue-600' :
                'bg-green-100 text-green-600'
              }`}>
                {platform === 'AWS' ? 'A' : platform === 'Azure' ? 'Az' : 'G'}
              </div>
              <h3 className="text-xl font-semibold">{platform}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-md px-3 py-2 text-sm flex items-center"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 