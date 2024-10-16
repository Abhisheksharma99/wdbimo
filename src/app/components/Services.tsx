
const services = [
  {
    title: "Poultry Shed",
    description: "State-of-the-art poultry sheds designed for optimal bird health and productivity."
  },
  {
    title: "Fish and Poultry",
    description: "Integrated solutions for fish and poultry farming, maximizing yield and quality."
  },
  {
    title: "Hydroponics Agriculture Structure",
    description: "Advanced hydroponic systems for sustainable and efficient crop production."
  },
  {
    title: "Sugar Plants",
    description: "Efficient and modern sugar processing plants for high-quality sugar production."
  },
  {
    title: "Distillery/Breweries",
    description: "State-of-the-art facilities for the production of alcoholic beverages and spirits."
  },
  {
    title: "Poultry Farms",
    description: "Comprehensive poultry farming solutions for optimal bird health and egg production."
  },
  {
    title: "Sewage Treatment Plants",
    description: "Advanced systems for efficient and environmentally friendly sewage treatment."
  },
  {
    title: "Agri-waste Management",
    description: "Innovative solutions for managing and recycling agricultural waste products."
  },
  {
    title: "Gaushalas",
    description: "Modern cow shelters designed for the welfare and care of cattle."
  },
  {
    title: "Slaughter House",
    description: "Hygienic and efficient facilities for humane animal processing."
  },
  {
    title: "City Municiple Waste",
    description: "Comprehensive solutions for city miniciple waste"
  },
  {
    title: "LandFills",
    description: "Designated sites used for the disposal of waste materials by burying them underground"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}