import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        <b>Welcome to <i>Sole & Style</i> </b>:
        At <i>Sole & Style</i>, we're passionate about delivering an exceptional shopping experience that combines quality products with top-notch customer service. Our journey began with a simple idea: to provide a curated selection of fashion and lifestyle products that inspire and empower our customers.
        Founded in 2023, <i>Sole & Style</i> has quickly grown from a small startup to a trusted name in the industry. Our team of dedicated professionals works tirelessly to bring you the latest trends and timeless classics, all handpicked with care.
        We believe in offering only the best to our customers. From sourcing materials to crafting the final product, quality is at the heart of everything we do. Our commitment to excellence extends beyond our products; it's ingrained in our customer service, shipping, and return policies.
        As stewards of the environment, we're committed to sustainable and ethical practices. We partner with suppliers who share our values, ensuring fair wages and safe working conditions for all involved. Additionally, we strive to minimize our environmental footprint by using eco-friendly packaging and reducing waste wherever possible.
        We're more than just a brand; we're a community of like-minded individuals who share a passion for fashion, sustainability, and making a positive impact. Connect with us on social media to stay updated on the latest news, promotions, and behind-the-scenes glimpses into life at <i>Sole & Style</i>.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage