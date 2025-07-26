"use client";

import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Agriculture, TrendingUp, Groups, Park } from "@mui/icons-material";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
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
      <Card
        sx={{
          height: "100%",
          background: "linear-gradient(135deg, #f8fdf6 0%, #ffffff 100%)",
          border: "2px solid #e8f5e8",
          borderRadius: 3,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 24px rgba(76, 175, 80, 0.15)",
            borderColor: "#4CAF50",
          },
        }}
      >
        <CardContent sx={{ p: 3, textAlign: "center" }}>
          <Box sx={{ mb: 2 }}>{feature.icon}</Box>
          <Typography
            variant="h6"
            sx={{ mb: 2, color: "#2E7D32", fontWeight: 600 }}
          >
            {feature.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#424242", lineHeight: 1.6 }}
          >
            {feature.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Home() {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [missionRef, missionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      title: "Modern Farming Technology",
      description:
        "Adopting advanced cultivation methods to raise farmers' income through innovative agricultural practices.",
      icon: <Agriculture sx={{ fontSize: 48, color: "#4CAF50" }} />,
    },
    {
      title: "Raising Productivity",
      description:
        "Increasing per-hectare yield with high-quality seeds and organic fertilizers for sustainable growth.",
      icon: <TrendingUp sx={{ fontSize: 48, color: "#4CAF50" }} />,
    },
    {
      title: "Market Linkages",
      description:
        "Facilitating input supply and robust product marketing to ensure fair prices for farmers.",
      icon: <Groups sx={{ fontSize: 48, color: "#4CAF50" }} />,
    },
    {
      title: "Sustainable Practices",
      description:
        "Promoting eco-friendly farming methods that protect the environment while boosting productivity.",
      icon: <Park sx={{ fontSize: 48, color: "#4CAF50" }} />,
    },
  ];

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #E8F5E8 0%, #C8E6C9 50%, #A5D6A7 100%)",
          minHeight: "90vh",
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
            <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    background:
                      "linear-gradient(135deg, #1B5E20, #2E7D32, #4CAF50)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 800,
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    fontSize: { xs: "3rem", md: "4.5rem" },
                  }}
                >
                  🌱 AyurFresh
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    color: "#2E7D32",
                    fontWeight: 500,
                    maxWidth: "800px",
                    mx: "auto",
                    lineHeight: 1.4,
                  }}
                >
                  Improving the social and economic status of small and marginal
                  farmers
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/contact"
                  sx={{
                    px: 6,
                    py: 2,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    borderRadius: 3,
                    background: "linear-gradient(135deg, #4CAF50, #66BB6A)",
                    boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #388E3C, #4CAF50)",
                      boxShadow: "0 12px 32px rgba(76, 175, 80, 0.4)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          ref={missionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: "#1B5E20",
                fontWeight: 600,
                position: "relative",
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#424242",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              We are dedicated to the holistic upliftment of small and marginal
              farmers through{" "}
              <strong style={{ color: "#2E7D32" }}>capacity building</strong>,
              expanding product variety and market access, and promoting modern
              agribusiness and trade.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Strategies Section */}
      <Box sx={{ backgroundColor: "#f8fdf6", py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                mb: 6,
                color: "#1B5E20",
                fontWeight: 600,
              }}
            >
              Our Strategies
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard feature={feature} index={index} key={index} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
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
              Ready to Transform Agriculture?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join us in creating sustainable farming solutions for a better
              tomorrow
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  component={Link}
                  href="/projects"
                  sx={{
                    px: 4,
                    py: 2,
                    color: "white",
                    borderColor: "rgba(255,255,255,0.5)",
                    borderWidth: 2,
                    fontWeight: 600,
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  View Projects
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  href="/about"
                  sx={{
                    px: 4,
                    py: 2,
                    backgroundColor: "white",
                    color: "#4CAF50",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Footer />
    </>
  );
}
