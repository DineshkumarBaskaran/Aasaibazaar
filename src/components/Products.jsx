import React from 'react';

const products = [
  {
    id: 1,
    name: 'Palm Jaggery Block',
    description: 'Pure and natural palm jaggery in traditional block',
    oldPrice: '₹499',
    newPrice: '₹399',
    discount: '20% OFF',
    image: '/images/cubes.jpg',
    whatsapp: '919487224491',
    productName: 'Palm Jaggery Block'
  },
  {
    id: 2,
    name: 'Palm Jaggery Cubes',
    description: 'Convenient palm jaggery cubes for easy use',
    oldPrice: '₹560',
    newPrice: '₹448',
    discount: '20% OFF',
    image: '/images/blocks.jpg',
    whatsapp: '919487224491',
    productName: 'Palm Jaggery Cubes'
  },
  {
    id: 3,
    name: 'Jaggery Sweets',
    description: 'Traditional sweets made with organic palm jaggery',
    oldPrice: '₹560',
    newPrice: '₹448',
    discount: '20% OFF',
    image: '/images/jaggery.jpg',
    whatsapp: '919487224491',
    productName: 'Jaggery Sweets'
  }
];

const Products = () => {
  const handleWhatsApp = (phone, productName) => {
    const message = `Welcome to Aassaibazaar! 🎉

I'm interested in purchasing your product. Please provide the following details:

Name: 
Mobile Number: 
Product Name: ${productName}
Quantity: 

Thank you!`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <h2 className="display-4 fw-bold text-center mb-5 text-green">Our Products</h2>
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <span className="position-absolute top-0 end-0 bg-warning text-white px-2 py-1 m-2 rounded">
                    {product.discount}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <div className="d-flex align-items-center mb-3">
                    <span className="text-decoration-line-through bg-danger text-white px-1 py-1 m-1 rounded me-2">{product.oldPrice}</span>
                    <span className="fw-bold text-green fs-5">{product.newPrice}</span>
                  </div>
                  <button
                    onClick={() => handleWhatsApp(product.whatsapp, product.name)}
                    className="btn btn-primary w-100"
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 