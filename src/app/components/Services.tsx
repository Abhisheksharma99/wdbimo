import { 
  Home, Fish, Leaf, Factory, Beer, Egg, Recycle, Trash2, 
  Droplet, Beef, Building, Mountain
} from 'lucide-react'

const services = [
  {
    title: "Poultry Shed",
    description: "State-of-the-art poultry sheds designed for optimal bird health and productivity.",
    icon: Home
  },
  {
    title: "Fish and Poultry",
    description: "Integrated solutions for fish and poultry farming, maximizing yield and quality.",
    icon: Fish
  },
  {
    title: "Hydroponics Agriculture Structure",
    description: "Advanced hydroponic systems for sustainable and efficient crop production.",
    icon: Leaf
  },
  {
    title: "Sugar Plants",
    description: "Efficient and modern sugar processing plants for high-quality sugar production.",
    icon: Factory
  },
  {
    title: "Distillery/Breweries",
    description: "State-of-the-art facilities for the production of alcoholic beverages and spirits.",
    icon: Beer
  },
  {
    title: "Poultry Farms",
    description: "Comprehensive poultry farming solutions for optimal bird health and egg production.",
    icon: Egg
  },
  {
    title: "Sewage Treatment Plants",
    description: "Advanced systems for efficient and environmentally friendly sewage treatment.",
    icon: Droplet
  },
  {
    title: "Agri-waste Management",
    description: "Innovative solutions for managing and recycling agricultural waste products.",
    icon: Recycle
  },
  {
    title: "Gaushalas",
    description: "Modern cow shelters designed for the welfare and care of cattle.",
    icon: Beef
  },
  {
    title: "Slaughter House",
    description: "Hygienic and efficient facilities for humane animal processing.",
    icon: Building
  },
  {
    title: "City Municipal Waste",
    description: "Comprehensive solutions for city municipal waste management and processing.",
    icon: Trash2
  },
  {
    title: "Landfills",
    description: "Engineered sites for the safe disposal and management of waste materials.",
    icon: Mountain
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl border border-emerald-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-amber-500 mr-3" />
                  <h3 className="text-xl font-semibold text-emerald-700">{service.title}</h3>
                </div>
                <p className="text-emerald-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}