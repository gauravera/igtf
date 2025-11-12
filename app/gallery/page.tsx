"use client"
import { Navbar } from "@/components/navbar"
import { ChatBot } from "@/components/chat-bot"

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 animate-fade-in">Gallery</h1>
            <p className="text-xl text-muted-foreground animate-fade-in-delay-1">
              Explore highlights from our previous exhibitions
            </p>
          </div>
        </section>

        {/* Gallery Grid - Placeholder for images */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Exhibition Moments</h2>
              <p className="text-muted-foreground">
                Please upload your gallery images to showcase your exhibition highlights
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Placeholder for gallery images */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-muted/30 rounded-lg overflow-hidden scroll-animate-card hover:scale-105 transition-all duration-500 flex items-center justify-center"
                >
                  <p className="text-muted-foreground text-sm">Gallery Image {item}</p>
                </div>
              ))}
            </div>
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
                    <a href="/categories" className="hover:text-primary transition-colors">
                      Categories
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
