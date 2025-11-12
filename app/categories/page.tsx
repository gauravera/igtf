"use client"
import { Navbar } from "@/components/navbar"
import { ChatBot } from "@/components/chat-bot"

export default function CategoriesPage() {
  const categories = [
    {
      name: "Hardware & Tools",
      description: "Industrial and commercial hardware, power tools, hand tools, and equipment",
      icon: "🔧",
    },
    {
      name: "Toys",
      description: "Educational toys, electronic toys, games, and entertainment products",
      icon: "🧸",
    },
    {
      name: "Chemical",
      description: "Industrial chemicals, specialty chemicals, and chemical products",
      icon: "⚗️",
    },
    {
      name: "Electronics & Components",
      description: "Electronic components, consumer electronics, and digital devices",
      icon: "💻",
    },
    {
      name: "Auto Parts",
      description: "Automotive parts, accessories, and vehicle components",
      icon: "🚗",
    },
    {
      name: "Construction Material",
      description: "Building materials, construction equipment, and architectural products",
      icon: "🏗️",
    },
    {
      name: "Agriculture & Equipment's",
      description: "Agricultural machinery, farming equipment, and agri-products",
      icon: "🌾",
    },
    {
      name: "Plastic & Packaging",
      description: "Plastic products, packaging materials, and container solutions",
      icon: "📦",
    },
    {
      name: "Sports",
      description: "Sports equipment, fitness gear, and athletic accessories",
      icon: "⚽",
    },
    {
      name: "Food & Beverage",
      description: "Food products, beverages, and culinary equipment",
      icon: "🍽️",
    },
    {
      name: "Pharma",
      description: "Pharmaceutical products, medicines, and healthcare solutions",
      icon: "💊",
    },
    {
      name: "Surgical Devices",
      description: "Medical devices, surgical instruments, and healthcare equipment",
      icon: "🏥",
    },
    {
      name: "Gifting & Stationary",
      description: "Gift items, stationery products, and office supplies",
      icon: "🎁",
    },
    {
      name: "Furniture",
      description: "Home and office furniture, decor, and furnishing solutions",
      icon: "🪑",
    },
    {
      name: "Kitchen Wear",
      description: "Kitchenware, cooking utensils, and culinary accessories",
      icon: "🍳",
    },
    {
      name: "Spices",
      description: "Spices, herbs, and food ingredients",
      icon: "🌶️",
    },
    {
      name: "Footwear",
      description: "Shoes, sandals, and footwear accessories",
      icon: "👟",
    },
    {
      name: "Home Décor",
      description: "Home decoration items, interior accessories, and lifestyle products",
      icon: "🏡",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 animate-fade-in">Exhibition Categories</h1>
            <p className="text-xl text-muted-foreground animate-fade-in-delay-1">
              Explore 16 dynamic sectors representing diverse industries
            </p>
          </div>
        </section>

        {/* Categories Ticker */}
        <section className="py-8 bg-primary text-primary-foreground overflow-hidden">
          <div className="whitespace-nowrap animate-scroll">
            <span className="inline-block px-8 text-lg">
              Hardware & Tools | Toys | Chemical | Electronics & Components | Auto Parts | Construction Material |
              Agriculture & Equipment's | Plastic & Packaging | Sports | Food & Beverage | Pharma | Surgical Devices |
              Gifting & Stationary | Furniture | Kitchen Wear | Spices | Footwear | Home Décor |
            </span>
            <span className="inline-block px-8 text-lg">
              Hardware & Tools | Toys | Chemical | Electronics & Components | Auto Parts | Construction Material |
              Agriculture & Equipment's | Plastic & Packaging | Sports | Food & Beverage | Pharma | Surgical Devices |
              Gifting & Stationary | Furniture | Kitchen Wear | Spices | Footwear | Home Décor |
            </span>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <div
                  key={category.name}
                  className="bg-muted/30 p-6 rounded-lg scroll-animate-card hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-serif text-xl mb-3">{category.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Find Your Industry Sector</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Register as an exhibitor in your category and connect with thousands of trade buyers from around the world
            </p>
            <a href="/exhibition">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-all duration-500 font-medium text-lg">
                Register Now
              </button>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-background border-t">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-serif text-xl mb-4">Indo Global Trade Fair</h4>
                <p className="text-sm text-muted-foreground">
                  Connecting Indian Enterprise with the World through strategic B2B trade platforms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="/" className="hover:text-primary transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-primary transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/exhibition" className="hover:text-primary transition-colors">
                      Exhibition
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" className="hover:text-primary transition-colors">
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Email: info@indoglobaltradefair.com</li>
                  <li>Phone: +91 XXX XXX XXXX</li>
                  <li>
                    <a href="/career" className="hover:text-primary transition-colors">
                      Career Opportunities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-8 border-t text-muted-foreground text-sm">
              <p>© 2025 Indo Global Trade Fair. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <ChatBot />
    </div>
  )
}
