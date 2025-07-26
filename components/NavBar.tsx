"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Agriculture } from "@mui/icons-material";

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background:
            "linear-gradient(135deg, #2E7D32 0%, #4CAF50 50%, #66BB6A 100%)",
          borderBottom: "3px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(76, 175, 80, 0.3)",
        }}
      >
        <Toolbar sx={{ py: 1 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Agriculture sx={{ fontSize: 32, mr: 1, color: "#E8F5E8" }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #FFFFFF, #E8F5E8)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  letterSpacing: "0.5px",
                }}
              >
                🌱 AyurFresh
              </Typography>
            </Link>
          </motion.div>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
            }}
          >
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color="inherit"
                    component={Link}
                    href={item.href}
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 600,
                      fontSize: "1rem",
                      position: "relative",
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.9)",
                      border: isActive
                        ? "2px solid rgba(255,255,255,0.3)"
                        : "2px solid transparent",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.15)",
                        color: "#FFFFFF",
                        border: "2px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 4px 12px rgba(255,255,255,0.2)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        width: isActive ? "80%" : "0%",
                        height: "3px",
                        backgroundColor: "#E8F5E8",
                        borderRadius: "2px",
                        transform: "translateX(-50%)",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "80%",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              );
            })}
          </Box>

          {/* Mobile menu placeholder - could be expanded later */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button
              color="inherit"
              sx={{
                minWidth: "auto",
                p: 1,
                borderRadius: 2,
                backgroundColor: "rgba(255,255,255,0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              ☰
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
