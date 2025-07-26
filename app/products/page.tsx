"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Agriculture,
  Star,
  LocalShipping,
  Nature,
  Schedule,
  LocationOn,
} from "@mui/icons-material";

interface Product {
  name: string;
  category: string;
  description: string;
  image: string;
  price: string;
  unit: string;
  availability: string;
  origin: string;
  quality: string[];
  rating: number;
}

const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: "100%",
          background: "linear-gradient(135deg, #f8fdf6 0%, #ffffff 100%)",
          border: "2px solid #e8f5e8",
          borderRadius: 3,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 16px 32px rgba(76, 175, 80, 0.2)",
            borderColor: "#4CAF50",
          },
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image={product.image}
          alt={product.name}
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
          }}
        />
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography
              variant="h5"
              sx={{ color: "#2E7D32", fontWeight: 600, flexGrow: 1 }}
            >
              {product.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Star sx={{ color: "#FFD700", fontSize: 20 }} />
              <Typography variant="body2" sx={{ ml: 0.5, fontWeight: 500 }}>
                {product.rating}
              </Typography>
            </Box>
          </Box>

          <Chip
            label={product.category}
            size="small"
            sx={{
              backgroundColor: "#E8F5E8",
              color: "#2E7D32",
              fontWeight: 500,
              mb: 2,
            }}
          />

          <Typography
            variant="body2"
            sx={{ color: "#424242", lineHeight: 1.6, mb: 2 }}
          >
            {product.description}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {product.quality.map((quality: string, qualityIndex: number) => (
              <Chip
                key={qualityIndex}
                label={quality}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "#4CAF50",
                  color: "#4CAF50",
                  fontSize: "0.75rem",
                }}
              />
            ))}
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOn sx={{ fontSize: 16, color: "#666", mr: 1 }} />
              <Typography variant="body2" sx={{ color: "#666" }}>
                Origin: {product.origin}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Schedule sx={{ fontSize: 16, color: "#666", mr: 1 }} />
              <Typography variant="body2" sx={{ color: "#666" }}>
                {product.availability}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#2E7D32", fontWeight: 700 }}
              >
                {product.price}
              </Typography>
              <Typography variant="caption" sx={{ color: "#666" }}>
                per {product.unit}
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="small"
              sx={{
                background: "linear-gradient(135deg, #4CAF50, #66BB6A)",
                "&:hover": {
                  background: "linear-gradient(135deg, #388E3C, #4CAF50)",
                },
              }}
            >
              Contact Seller
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CategorySection = ({
  category,
  products,
  index,
}: {
  category: string;
  products: Product[];
  index: number;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          color: "#1B5E20",
          fontWeight: 600,
          borderBottom: "3px solid #4CAF50",
          paddingBottom: 1,
          display: "inline-block",
        }}
      >
        {category}
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, productIndex) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={productIndex}>
            <ProductCard product={product} index={productIndex} />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default function Products() {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const grains = [
    {
      name: "Premium Basmati Rice",
      category: "Grains",
      description:
        "Aromatic long-grain basmati rice, aged for perfect texture and flavor. Ideal for biryanis and traditional dishes.",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80",
      price: "₹120",
      unit: "kg",
      availability: "Available Year Round",
      origin: "Punjab, India",
      quality: ["Organic", "Premium Quality", "Non-GMO"],
      rating: 4.8,
    },
    {
      name: "Brown Rice",
      category: "Grains",
      description:
        "Nutritious whole grain brown rice packed with fiber and essential nutrients. Perfect for health-conscious consumers.",
      image:
        "https://images.unsplash.com/photo-1613728913341-8f29b02b8253?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹85",
      unit: "kg",
      availability: "Available Year Round",
      origin: "Tamil Nadu, India",
      quality: ["Organic", "High Fiber", "Unpolished"],
      rating: 4.6,
    },
    {
      name: "Wheat Flour",
      category: "Grains",
      description:
        "Fresh stone-ground whole wheat flour from premium quality wheat. Perfect for rotis, bread, and baking.",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80",
      price: "₹45",
      unit: "kg",
      availability: "Available Year Round",
      origin: "Haryana, India",
      quality: ["Stone Ground", "Fresh", "Whole Grain"],
      rating: 4.7,
    },
  ];

  const vegetables = [
    {
      name: "Fresh Tomatoes",
      category: "Vegetables",
      description:
        "Vine-ripened organic tomatoes with rich flavor and vibrant color. Perfect for cooking and salads.",
      image:
        "https://images.unsplash.com/photo-1706170498506-afc404332030?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹35",
      unit: "kg",
      availability: "October - March",
      origin: "Karnataka, India",
      quality: ["Organic", "Vine Ripened", "Fresh"],
      rating: 4.9,
    },
    {
      name: "Green Bell Peppers",
      category: "Vegetables",
      description:
        "Crisp and fresh green bell peppers, rich in vitamins and perfect for stir-fries and salads.",
      image:
        "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&q=80",
      price: "₹60",
      unit: "kg",
      availability: "Year Round",
      origin: "Himachal Pradesh, India",
      quality: ["Fresh", "Pesticide Free", "Crisp"],
      rating: 4.5,
    },
    {
      name: "Organic Carrots",
      category: "Vegetables",
      description:
        "Sweet and crunchy organic carrots, rich in beta-carotene and perfect for both raw consumption and cooking.",
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80",
      price: "₹40",
      unit: "kg",
      availability: "November - February",
      origin: "Punjab, India",
      quality: ["Organic", "Sweet", "High Beta-Carotene"],
      rating: 4.7,
    },
    {
      name: "Fresh Spinach",
      category: "Vegetables",
      description:
        "Tender and nutritious fresh spinach leaves, packed with iron and vitamins. Ideal for healthy meals.",
      image:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80",
      price: "₹25",
      unit: "bundle",
      availability: "October - March",
      origin: "Maharashtra, India",
      quality: ["Fresh", "Iron Rich", "Tender Leaves"],
      rating: 4.6,
    },
    {
      name: "Red Onions",
      category: "Vegetables",
      description:
        "Premium quality red onions with strong flavor and excellent storage life. Essential for Indian cooking.",
      image:
        "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&q=80",
      price: "₹30",
      unit: "kg",
      availability: "Year Round",
      origin: "Maharashtra, India",
      quality: ["Premium", "Long Storage", "Strong Flavor"],
      rating: 4.4,
    },
    {
      name: "Cauliflower",
      category: "Vegetables",
      description:
        "Fresh white cauliflower heads with tight florets. Perfect for curries, stir-fries, and healthy preparations.",
      image:
        "https://images.unsplash.com/photo-1692956706779-576c151ec712?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹35",
      unit: "piece",
      availability: "November - February",
      origin: "Punjab, India",
      quality: ["Fresh", "White", "Tight Florets"],
      rating: 4.5,
    },
  ];

  const fruits = [
    {
      name: "Alphonso Mangoes",
      category: "Fruits",
      description:
        "The king of mangoes! Sweet, aromatic Alphonso mangoes from the Konkan region. Premium quality and taste.",
      image:
        "https://plus.unsplash.com/premium_photo-1674382739389-338645e7dd8c?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "₹450",
      unit: "dozen",
      availability: "March - May",
      origin: "Maharashtra, India",
      quality: ["Premium", "Sweet", "Aromatic"],
      rating: 5.0,
    },
    {
      name: "Fresh Bananas",
      category: "Fruits",
      description:
        "Naturally ripened bananas with perfect sweetness. Rich in potassium and perfect for daily consumption.",
      image:
        "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&q=80",
      price: "₹40",
      unit: "dozen",
      availability: "Year Round",
      origin: "Tamil Nadu, India",
      quality: ["Naturally Ripened", "Sweet", "Rich in Potassium"],
      rating: 4.6,
    },
    {
      name: "Pomegranates",
      category: "Fruits",
      description:
        "Ruby red pomegranates with juicy arils. Packed with antioxidants and perfect for healthy snacking.",
      image:
        "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=500&q=80",
      price: "₹180",
      unit: "kg",
      availability: "October - February",
      origin: "Maharashtra, India",
      quality: ["Antioxidant Rich", "Juicy", "Premium"],
      rating: 4.8,
    },
  ];

  const productCategories = [
    { name: "Fresh Grains & Cereals", products: grains },
    { name: "Garden Fresh Vegetables", products: vegetables },
    { name: "Seasonal Fruits", products: fruits },
  ];

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #E8F5E8 0%, #C8E6C9 50%, #A5D6A7 100%)",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234CAF50" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3,
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                mb: 3,
                color: "#1B5E20",
                fontWeight: 700,
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              🛒 Farm Fresh Products
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                color: "#2E7D32",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Discover premium quality agricultural products directly from our
              partner farmers
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
            mb: 8,
          }}
        >
          {[
            {
              icon: <Nature />,
              title: "100% Organic",
              desc: "Naturally grown products",
            },
            {
              icon: <LocalShipping />,
              title: "Fresh Delivery",
              desc: "Direct from farm to you",
            },
            {
              icon: <Star />,
              title: "Premium Quality",
              desc: "Carefully selected products",
            },
            {
              icon: <Agriculture />,
              title: "Support Farmers",
              desc: "Directly helping farming communities",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", p: 3 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    p: 2,
                    borderRadius: "50%",
                    backgroundColor: "#E8F5E8",
                    color: "#4CAF50",
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {feature.desc}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Products Sections */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        {productCategories.map((category, index) => (
          <Box key={index} sx={{ mb: 8 }}>
            <CategorySection
              category={category.name}
              products={category.products}
              index={index}
            />
          </Box>
        ))}
      </Container>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: "#f8fdf6", py: 8 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: "center",
                p: 6,
                borderRadius: 4,
                background: "linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%)",
                color: "white",
                boxShadow: "0 16px 32px rgba(76, 175, 80, 0.3)",
              }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Want to List Your Products?
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Join our marketplace and connect directly with customers
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 2,
                  backgroundColor: "white",
                  color: "#4CAF50",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                Become a Seller
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
