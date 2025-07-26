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
  Agriculture,
  Park,
  TrendingUp,
  Groups,
  LocalFlorist,
  Science,
} from "@mui/icons-material";

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  impact: string;
}

interface Stat {
  number: string;
  label: string;
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
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
        variant="outlined"
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
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            {project.icon}
            <Typography
              variant="h5"
              sx={{ ml: 2, color: "#2E7D32", fontWeight: 600 }}
            >
              {project.title}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ mb: 2, color: "#424242", lineHeight: 1.6 }}
          >
            {project.description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            {project.tags.map((tag: string, tagIndex: number) => (
              <Chip
                key={tagIndex}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: "#E8F5E8",
                  color: "#2E7D32",
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#558B2F", fontWeight: 500 }}
          >
            Impact: {project.impact}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const StatCard = ({ stat, index }: { stat: Stat; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: 3,
          borderRadius: 3,
          background: "linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)",
          color: "white",
          boxShadow: "0 8px 24px rgba(76, 175, 80, 0.3)",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          {stat.number}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {stat.label}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default function Projects() {
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [statsRef, statsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "Capacity Building Program",
      description:
        "Comprehensive training sessions covering modern farming techniques, financial literacy, digital agriculture tools, and sustainable agri-business management for local farmers across rural communities.",
      icon: <Groups sx={{ fontSize: 32, color: "#4CAF50" }} />,
      tags: ["Training", "Education", "Skill Development"],
      impact: "2,500+ farmers trained annually",
    },
    {
      title: "High-Yield Seeds Initiative",
      description:
        "Strategic distribution of premium quality, climate-resistant seeds along with organic fertilizers and bio-pesticides to significantly increase per-hectare productivity and crop quality.",
      icon: <LocalFlorist sx={{ fontSize: 32, color: "#4CAF50" }} />,
      tags: ["Seeds", "Productivity", "Sustainability"],
      impact: "40% increase in crop yield",
    },
    {
      title: "Market Access Network",
      description:
        "Establishing direct connections between farmers and regional/national buyers through digital platforms, ensuring fair pricing, eliminating middlemen, and providing stable market demand.",
      icon: <TrendingUp sx={{ fontSize: 32, color: "#4CAF50" }} />,
      tags: ["Market", "Digital Platform", "Fair Trade"],
      impact: "₹50 crore in farmer revenue",
    },
    {
      title: "Sustainable Farming Practices",
      description:
        "Promoting eco-friendly farming methods including organic cultivation, water conservation techniques, crop rotation, and integrated pest management to protect soil health and environment.",
      icon: <Park sx={{ fontSize: 32, color: "#4CAF50" }} />,
      tags: ["Organic", "Conservation", "Environment"],
      impact: "60% reduction in chemical usage",
    },
    {
      title: "Smart Agriculture Technology",
      description:
        "Implementing IoT sensors, drone monitoring, soil analysis tools, and mobile apps to help farmers make data-driven decisions for optimal crop management and resource utilization.",
      icon: <Science sx={{ fontSize: 32, color: "#4CAF50" }} />,
      tags: ["Technology", "IoT", "Data Analytics"],
      impact: "30% water conservation achieved",
    },
    {
      title: "Community Farming Cooperatives",
      description:
        "Establishing farmer cooperatives to enable collective bargaining, shared resources, bulk purchasing of inputs, and collaborative farming practices for better economies of scale.",
      icon: <Agriculture sx={{ fontSize: 32, color: "#4CAF50" }} />,
      tags: ["Cooperative", "Community", "Collective"],
      impact: "500+ cooperative groups formed",
    },
  ];

  const stats = [
    { number: "15K+", label: "Farmers Impacted" },
    { number: "85%", label: "Income Increase" },
    { number: "200+", label: "Villages Covered" },
    { number: "₹100Cr", label: "Economic Impact" },
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
            ref={headerRef}
            initial={{ opacity: 0, y: 100 }}
            animate={
              headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
            }
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
              🌱 Agricultural Projects & Initiatives
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
              Transforming rural agriculture through innovation, sustainability,
              and community empowerment
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
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
            Our Impact in Numbers
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 4,
            }}
          >
            {stats.map((stat, index) => (
              <StatCard stat={stat} index={index} key={index} />
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* Projects Section */}
      <Box sx={{ backgroundColor: "#f8fdf6", py: 8 }}>
        <Container maxWidth="lg">
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
                mb: 2,
                color: "#1B5E20",
                fontWeight: 600,
              }}
            >
              Our Key Initiatives
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
              Comprehensive programs designed to address every aspect of modern
              agriculture
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={index} />
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
              Join Our Agricultural Revolution
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Together, we can build a sustainable future for farming
              communities
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
                <Box
                  sx={{
                    px: 4,
                    py: 2,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: 2,
                    cursor: "pointer",
                    border: "2px solid rgba(255,255,255,0.3)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.3)",
                    },
                  }}
                >
                  <Typography variant="button" sx={{ fontWeight: 600 }}>
                    Get Involved
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Footer />
    </>
  );
}
