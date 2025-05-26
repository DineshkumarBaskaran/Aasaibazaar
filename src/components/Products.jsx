import React from 'react';
import cubesImage from '../assets/images/cubes.jpg';
import blocksImage from '../assets/images/block.jpg';
import jaggeryImage from '../assets/images/jaggery.jpg';

const products = [
  {
    id: 1,
    name: 'Palm Jaggery Block',
    description: 'Pure and natural palm jaggery in traditional block',
    price1kg: {
      originalPrice: '₹500',
      sellingPrice: '₹399',
      discount: '20% OFF'
    },
    image: blocksImage,
    whatsapp: '919487224491',
    productName: 'Palm Jaggery Block'
  },
  {
    id: 2,
    name: 'Palm Jaggery Cubes',
    description: 'Convenient palm jaggery cubes for easy use',
    price1kg: {
      originalPrice: '₹600',
      sellingPrice: '₹449',
      discount: '25% OFF'
    },
    image: cubesImage,
    whatsapp: '919487224491',
    productName: 'Palm Jaggery Cubes'
  },
  {
  id: 3,
  name: 'Palm Jaggery Block',
  description: 'Pure and natural palm jaggery in traditional block',
  price5kg: {
    originalPrice: '₹ 2500',
    sellingPrice: '₹1900',
    discount: '24% OFF'
  },
  image: jaggeryImage,
  whatsapp: '919487224491',
  productName: 'Palm Jaggery Block'
},
{
  id: 4,
  name: 'Palm Jaggery Cubes',
  description: 'Convenient palm jaggery cubes for easy use',
  price5kg: {
    originalPrice: '₹3000',
    sellingPrice: '₹2100',
    discount: '30% OFF'
  },
  image: cubesImage,
  whatsapp: '919487224491',
  productName: 'Palm Jaggery Cubes'
},
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
          {products.map((product, index) => (
            <div key={product.id} className="col-md-3" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <span className="position-absolute top-0 end-0 bg-warning text-black px-2 py-1 m-2 rounded">
                    {product.price1kg ? product.price1kg.discount : product.price5kg.discount}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  
                  {product.price1kg && (
                    <div className="mb-3">
                      <h6 className="mb-2">1 KG Pack</h6>
                      <div className="d-flex align-items-center">
                        <span className="text-decoration-line-through bg-danger text-white px-1 py-1 m-1 rounded me-2">{product.price1kg.originalPrice}</span>
                        <span className="fw-bold text-green fs-5">{product.price1kg.sellingPrice}</span>
                        <span className="ms-2 bg-warning text-black px-2 py-1 rounded">{product.price1kg.discount}</span>
                      </div>
                    </div>
                  )}
                  
                  {product.price5kg && (
                    <div className="mb-3">
                      <h6 className="mb-2">5 KG Pack</h6>
                      <div className="d-flex align-items-center">
                        <span className="text-decoration-line-through bg-danger text-white px-1 py-1 m-1 rounded me-2">{product.price5kg.originalPrice}</span>
                        <span className="fw-bold text-green fs-5">{product.price5kg.sellingPrice}</span>
                        <span className="ms-2 bg-warning text-black px-2 py-1 rounded">{product.price5kg.discount}</span>
                      </div>
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleWhatsApp(product.whatsapp, product.name)}
                    className="btn btn-primary w-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 400}
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