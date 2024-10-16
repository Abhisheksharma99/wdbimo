export default function Footer() {
    return (
      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Wdbimo India pvt ltd</h3>
              <p>Innovative agricultural solutions for modern farming</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-green-200">Home</a></li>
                <li><a href="#services" className="hover:text-green-200">Services</a></li>
                <li><a href="#clients" className="hover:text-green-200">Clients</a></li>
                <li><a href="#contact" className="hover:text-green-200">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p>Email: info@Wdbimo.com</p>
              <p>Phone: +91 9871838391</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Wdbimo India pvt ltd. All rights reserved.</p>
            <p>Designed and developed by: <a href="https://abhishek-sharma-portfolio.netlify.app/">Abhishek Sharma </a></p>
          </div>
        </div>
      </footer>
    )
  }