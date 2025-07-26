"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Email, Phone, LocationOn, Schedule } from "@mui/icons-material";
import { useState } from "react";

interface ContactInfo {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const ContactCard = ({ info, index }: { info: ContactInfo; index: number }) => {
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
            transform: "translateY(-4px)",
            boxShadow: "0 8px 16px rgba(76, 175, 80, 0.15)",
            borderColor: "#4CAF50",
          },
        }}
      >
        <CardContent sx={{ p: 3, textAlign: "center" }}>
          <Box sx={{ mb: 2 }}>{info.icon}</Box>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              color: "#2E7D32",
              fontWeight: 600,
            }}
          >
            {info.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#424242", lineHeight: 1.6 }}
          >
            {info.content}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formRef, formInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      title: "Email Us",
      content: "contact@ayurfresh.com\nsupport@ayurfresh.com",
      icon: <Email sx={{ fontSize: 40, color: "#4CAF50" }} />,
    },
    {
      title: "Call Us",
      content: "+91 98765 43210\n+91 87654 32109",
      icon: <Phone sx={{ fontSize: 40, color: "#4CAF50" }} />,
    },
    {
      title: "Visit Us",
      content:
        "123 Agriculture Hub\nRural Development Center\nBangalore, Karnataka",
      icon: <LocationOn sx={{ fontSize: 40, color: "#4CAF50" }} />,
    },
    {
      title: "Office Hours",
      content:
        "Monday - Friday: 9AM - 6PM\nSaturday: 9AM - 2PM\nSunday: Closed",
      icon: <Schedule sx={{ fontSize: 40, color: "#4CAF50" }} />,
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
              📞 Contact Us
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                color: "#2E7D32",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Get in touch with us to learn more about our agricultural
              initiatives
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Info Section */}
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
            How to Reach Us
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
            mb: 8,
          }}
        >
          {contactInfo.map((info, index) => (
            <ContactCard info={info} index={index} key={index} />
          ))}
        </Box>
      </Container>

      {/* Contact Form Section */}
      <Box sx={{ backgroundColor: "#f8fdf6", py: 8 }}>
        <Container maxWidth="md">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
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
              Send us a Message
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                mb: 6,
                color: "#424242",
                maxWidth: "500px",
                mx: "auto",
              }}
            >
              Have questions about our programs or want to get involved?
              We&apos;d love to hear from you!
            </Typography>

            <Card
              sx={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fdf6 100%)",
                border: "2px solid #e8f5e8",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(76, 175, 80, 0.1)",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Box sx={{ textAlign: "center", py: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#2E7D32",
                          mb: 2,
                          fontWeight: 600,
                        }}
                      >
                        🌟 Message Sent Successfully!
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#424242" }}>
                        Thank you for reaching out! We&apos;ll get back to you
                        within 24 hours.
                      </Typography>
                    </Box>
                  </motion.div>
                ) : (
                  <Box
                    component="form"
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <TextField
                      label="Full Name"
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#4CAF50",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#4CAF50",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#4CAF50",
                        },
                      }}
                    />
                    <TextField
                      label="Email Address"
                      required
                      type="email"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#4CAF50",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#4CAF50",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#4CAF50",
                        },
                      }}
                    />
                    <TextField
                      label="Phone Number (Optional)"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#4CAF50",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#4CAF50",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#4CAF50",
                        },
                      }}
                    />
                    <TextField
                      label="Message"
                      required
                      multiline
                      minRows={4}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#4CAF50",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#4CAF50",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#4CAF50",
                        },
                      }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          py: 2,
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          borderRadius: 2,
                          background:
                            "linear-gradient(135deg, #4CAF50, #66BB6A)",
                          boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #388E3C, #4CAF50)",
                            boxShadow: "0 6px 16px rgba(76, 175, 80, 0.4)",
                          },
                        }}
                      >
                        Send Message 🌱
                      </Button>
                    </motion.div>
                  </Box>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
