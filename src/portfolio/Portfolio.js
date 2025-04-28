import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Link,
  Container,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Work,
  School,
  Build,
  Star,
  Code,
  MailOutline,
  LinkedIn,
} from "@mui/icons-material";

// Create custom CSS for animations
const fadeInStyle = {
  animation: "fadeIn 1s ease-out",
};

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5", // Light grey background
      paper: "#ffffff", // Pure white for cards to stand out
    },
    text: {
      primary: "#333333", // Dark text for primary information
      secondary: "#0077b6", // Muted blue for secondary text and links
    },
    primary: {
      main: "#0077b6", // Blue for primary buttons and highlights
    },
    secondary: {
      main: "#64ffda", // Teal for accents
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h3: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "2.2rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1.4rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.2rem",
    },
    caption: {
      fontSize: "1rem",
    },
  },
});

// Adding keyframe for fade-in animation
const style = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    document
      .getElementById(sections[newValue].title.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    {
      title: "Objective",
      icon: <Code />,
      content: `An Enthusiastic Web Developer who loves to build things over the internet using cutting-edge techs and contribute to the community which backs him. Believes in "Solve Together!"`,
    },
    {
      title: "Experience",
      icon: <Work />,
      content: (
        <>
          <ExperienceItem
            title="Software Development Engineer II - Jio Platform Limited"
            date="Feb 2023 – Present"
            description={[
              "Developed and optimized front-end interfaces for Campaign Management System.",
              "Built Real-time Inventory Management System dashboards.",
              "Integrated InsightsAI chatbot for natural language report generation.",
            ]}
          />
          <ExperienceItem
            title="Software Engineer - Frontend - BYJU's"
            date="Feb 2022 – Nov 2022"
            description={[
              "Developed new initiatives for BYJU's Classes Teacher tech team.",
              "Handled critical sprint deliverables.",
              "Worked on frontend unit test cases.",
            ]}
          />
          <ExperienceItem
            title="Software Engineer Intern - BYJU's"
            date="Aug 2021 – Feb 2022"
            description={[
              "Upgraded outdated Webpack version.",
              "Prepared Error Flow Documents for support teams.",
              "Worked on Monthly Progress Report feature and visualization POCs.",
            ]}
          />
        </>
      ),
    },
    {
      title: "Education",
      icon: <School />,
      content: (
        <>
          <Typography variant="h6" color="text.primary">
            Bachelor of Technology - Pondicherry University
          </Typography>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            color="text.primary"
          >
            Aug 2016 – Sept 2020 | GPA: 8.2
          </Typography>
          <Typography color="text.primary">
            Computer Science and Engineering
          </Typography>
        </>
      ),
    },
    {
      title: "Skills",
      icon: <Build />,
      content: `ReactJS, HTML, CSS, JavaScript, ES6, Redux, SCSS, CSS-IN-JS, Material UI, GIT, Azure, JIRA, Jest, VS Code, Chrome Dev Tools, NodeJS, GitHub, PDF Kit, SVG, Java, C.`,
    },
    {
      title: "Awards",
      icon: <Star />,
      content: (
        <ul>
          <li>Spotlight Award (Aug 2024)</li>
          <li>Best Team Award (2024-2025)</li>
          <li>Tech X Award (2022)</li>
        </ul>
      ),
    },
    {
      title: "Certificates",
      icon: <Star />,
      content: (
        <ul>
          <li>JavaScript (Basic) - HackerRank</li>
          <li>Java (Intermediate) - HackerRank</li>
          <li>Node.js Essential Training - LinkedIn Learning</li>
        </ul>
      ),
    },
    {
      title: "Achievements",
      icon: <Star />,
      content: (
        <ul>
          <li>Cyber Security Workshop - TACW College</li>
          <li>Internet of Things Workshop - LANSA Informatics Pvt. Ltd.</li>
        </ul>
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <style>{style}</style> {/* Add the fade-in animation keyframe */}
      <Container
        maxWidth="md"
        sx={{
          py: 8,
          backgroundColor: "background.default",
          minHeight: "100vh",
        }}
      >
        {/* Header Section */}
        <Box
          mb={8}
          textAlign="center"
          sx={{
            width: "100%",
            backgroundImage: "url(/path/to/your/image.jpg)",
            backgroundSize: "cover",
            padding: "50px 0",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            color="text.primary"
            sx={fadeInStyle}
          >
            Pazhanivel Kaliyamoorthy
          </Typography>
          <Typography
            variant="body1"
            mb={3}
            color="text.primary"
            sx={fadeInStyle}
          >
            Bangalore, India |{" "}
            <Link
              href="mailto:pazhanivel2806@gmail.com"
              underline="hover"
              color="primary"
            >
              pazhanivel2806@gmail.com
            </Link>{" "}
            |{" "}
            <Link
              href="https://linkedin.com/in/pazhanivel-kaliyamoorthy"
              target="_blank"
              underline="hover"
              color="primary"
            >
              LinkedIn
            </Link>
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 2,
              fontWeight: "bold",
              fontSize: "1rem",
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": {
                borderColor: "primary.main",
                backgroundColor: "#e3f2fd",
              },
              animation: "fadeIn 1s ease-out",
            }}
            href={require("./resume.pdf")} // This links to the resume PDF in the src folder
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </Button>
        </Box>

        {/* Tabs Fixed at the Top */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: "background.default",
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="Portfolio Sections"
            centered
            sx={{ borderBottom: 2, borderColor: "divider" }}
          >
            {sections.map((section, index) => (
              <Tab key={section.title} label={section.title} />
            ))}
          </Tabs>
        </Box>

        {/* Sections with Smooth Fade-In */}
        <Box mb={6}>
          {sections.map((section, index) => (
            <Box
              key={section.title}
              id={section.title.toLowerCase()}
              sx={{
                padding: 3,
                marginBottom: 3,
                backgroundColor: "background.paper",
                borderRadius: 2,
                boxShadow: 2,
                animation: "fadeIn 1s ease-out",
              }}
            >
              <Typography variant="h4" gutterBottom color="text.secondary">
                {section.title}
              </Typography>
              <Card
                sx={{
                  backgroundColor: "background.paper",
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 3,
                }}
              >
                <CardContent>{section.content}</CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

function ExperienceItem({ title, date, description }) {
  return (
    <Box mb={3}>
      <Typography variant="h6" color="text.primary">
        {title}
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        color="text.secondary"
      >
        {date}
      </Typography>
      <ul>
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </Box>
  );
}
