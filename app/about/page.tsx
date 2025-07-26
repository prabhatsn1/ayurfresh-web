"use client";

import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Container, Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Park,
  People,
  TrendingUp,
  Handshake,
  Agriculture,
  LocalFlorist,
} from "@mui/icons-material";

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ValueCard = ({ value, index }: { value: Value; index: number }) => {
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
          <Box sx={{ mb: 2 }}>{value.icon}</Box>
          <Typography
            variant="h6"
            sx={{ mb: 2, color: "#2E7D32", fontWeight: 600 }}
          >
            {value.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#424242", lineHeight: 1.6 }}
          >
            {value.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function About() {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [missionRef, missionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const values = [
    {
      title: "Empowerment through Knowledge",
      description:
        "Providing farmers with cutting-edge agricultural knowledge, modern farming techniques, and digital tools to enhance their capabilities.",
      icon: <People sx={{ fontSize: 48, color: "#4CAF50" }} />,
    },
    {
      title: "Sustainable Income Growth",
      description:
        "Creating long-term, sustainable pathways for agricultural income growth through improved productivity and market access.",
      icon: <TrendingUp sx={{ fontSize: 48, color: "#4CAF50" }} />,
    },
    {
      title: "Inclusive Value Chains",
      description:
        "Building comprehensive value chains from seed to market that include and benefit all stakeholders in the agricultural ecosystem.",
      icon: <Handshake sx={{ fontSize: 48, color: "#4CAF50" }} />,
    },
    {
      title: "Environmental Stewardship",
      description:
        "Promoting eco-friendly farming practices that protect our environment while ensuring productive and profitable agriculture.",
      icon: <Park sx={{ fontSize: 48, color: "#4CAF50" }} />,
    },
    {
      title: "Innovation in Agriculture",
      description:
        "Leveraging technology and innovation to solve traditional farming challenges and create new opportunities for growth.",
      icon: <Agriculture sx={{ fontSize: 48, color: "#4CAF50" }} />,
    },
    {
      title: "Community Building",
      description:
        "Fostering strong agricultural communities that support each other and work together towards common prosperity.",
      icon: <LocalFlorist sx={{ fontSize: 48, color: "#4CAF50" }} />,
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
              🌾 About AyurFresh
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
              Transforming rural livelihoods through sustainable agriculture and
              farmer empowerment
            </Typography>
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
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                color: "#1B5E20",
                fontWeight: 600,
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#424242",
                maxWidth: "900px",
                mx: "auto",
                lineHeight: 1.8,
                fontWeight: 400,
                mb: 4,
              }}
            >
              AyurFresh is committed to transforming rural livelihoods by
              strengthening the capabilities of small and marginal farmers. We
              believe that sustainable agriculture is the foundation of food
              security and rural prosperity.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#424242",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.7,
                fontSize: "1.1rem",
              }}
            >
              By connecting farmers with modern tools, best practices, and
              broader markets, we enable them to thrive in a changing
              agricultural landscape. Our holistic approach addresses every
              aspect of farming - from soil health to market access.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      {/* Values Section */}
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
                mb: 2,
                color: "#1B5E20",
                fontWeight: 600,
              }}
            >
              Our Core Values
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                mb: 6,
                color: "#424242",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              The principles that guide our mission to empower farmers and
              transform agriculture
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 4,
            }}
          >
            {values.map((value, index) => (
              <ValueCard value={value} index={index} key={index} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Impact Section */}
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
              Building a Sustainable Future
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}
            >
              Through innovation, education, and community support, we&apos;re
              creating lasting change in rural agriculture. Join us in our
              mission to empower farmers and build food security for generations
              to come.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      <Footer />
    </>
  );
}
