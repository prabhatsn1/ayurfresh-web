"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CalendarToday,
  TrendingUp,
  Groups,
  Agriculture,
  Announcement,
  EmojiEvents,
} from "@mui/icons-material";

interface NewsItem {
  date: string;
  title: string;
  content: string;
  category: string;
  icon: React.ReactNode;
}

const NewsCard = ({ news, index }: { news: NewsItem; index: number }) => {
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
          mb: 4,
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
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            {news.icon}
            <Box sx={{ ml: 2, flex: 1 }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#2E7D32",
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                {news.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Chip
                  label={news.category}
                  size="small"
                  sx={{
                    backgroundColor: "#E8F5E8",
                    color: "#2E7D32",
                    fontWeight: 500,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#666",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CalendarToday sx={{ fontSize: 16, mr: 0.5 }} />
                  {news.date}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="body1"
            sx={{ color: "#424242", lineHeight: 1.7 }}
          >
            {news.content}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function News() {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const newsItems = [
    {
      date: "June 2025",
      title: "Farmers' Workshop on Modern Cultivation Techniques",
      content:
        "Over 100 local farmers participated in our comprehensive hands-on workshop dedicated to new sustainable agriculture practices and access to government schemes. The workshop covered advanced irrigation methods, organic farming techniques, and digital tools for crop monitoring. Participants received training materials and starter kits to implement these practices on their farms.",
      category: "Workshop",
      icon: <Groups sx={{ fontSize: 32, color: "#4CAF50" }} />,
    },
    {
      date: "May 2025",
      title: "Launch of Agro Market Linkage Project",
      content:
        "Our team has successfully established direct links between farmer producer organizations and urban buyers, improving profitability for the 2025 season. This initiative eliminates middlemen, ensuring farmers receive fair prices for their produce while providing consumers with fresh, quality agricultural products directly from the source.",
      category: "Market Access",
      icon: <TrendingUp sx={{ fontSize: 32, color: "#4CAF50" }} />,
    },
    {
      date: "April 2025",
      title: "Smart Agriculture Technology Pilot Program",
      content:
        "AyurFresh launched an innovative pilot program introducing IoT sensors and drone monitoring systems to 50 farms across rural Karnataka. Early results show a 25% increase in crop yield and 30% reduction in water usage. The technology helps farmers make data-driven decisions about irrigation, fertilization, and pest control.",
      category: "Technology",
      icon: <Agriculture sx={{ fontSize: 32, color: "#4CAF50" }} />,
    },
    {
      date: "March 2025",
      title: "Recognition Award for Sustainable Farming Initiative",
      content:
        "AyurFresh received the 'Excellence in Rural Development' award from the Karnataka State Government for our outstanding contribution to sustainable farming practices. The award recognizes our efforts in promoting organic farming, water conservation, and farmer capacity building across 200+ villages.",
      category: "Achievement",
      icon: <EmojiEvents sx={{ fontSize: 32, color: "#4CAF50" }} />,
    },
    {
      date: "February 2025",
      title: "Community Farming Cooperatives Expansion",
      content:
        "We successfully established 25 new farmer cooperatives this quarter, bringing the total to 500+ cooperative groups. These cooperatives enable collective bargaining, shared resources, and bulk purchasing of inputs, resulting in significant cost savings and improved market access for member farmers.",
      category: "Community",
      icon: <Groups sx={{ fontSize: 32, color: "#4CAF50" }} />,
    },
    {
      date: "January 2025",
      title: "New Partnership with Agricultural Universities",
      content:
        "AyurFresh partnered with leading agricultural universities to provide research-backed farming solutions and continuous education programs. This collaboration brings cutting-edge agricultural research directly to farmers' fields, ensuring they have access to the latest scientific developments in farming practices.",
      category: "Partnership",
      icon: <Announcement sx={{ fontSize: 32, color: "#4CAF50" }} />,
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
          minHeight: "50vh",
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
              📰 News & Updates
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                color: "#2E7D32",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Stay updated with our latest agricultural initiatives and
              community impact stories
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* News Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "#1B5E20",
              fontWeight: 600,
            }}
          >
            Latest Updates from AyurFresh
          </Typography>
        </motion.div>

        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          {newsItems.map((news, index) => (
            <NewsCard news={news} index={index} key={index} />
          ))}
        </Box>
      </Container>

      {/* Call to Action Section */}
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
                Stay Connected with Us
              </Typography>
              <Typography
                variant="h6"
                sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}
              >
                Subscribe to our newsletter to receive the latest updates on
                agricultural innovations, farmer success stories, and upcoming
                programs directly in your inbox.
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Together, we&apos;re growing a sustainable future for
                agriculture
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
