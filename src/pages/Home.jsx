import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import "../index.css"; // Import the global styles

function Home() {
  const navigate = useNavigate()

  return (
    <Box sx={{ pt: 8, backgroundColor: '#2c604a', color: 'white' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #4eab65, #015148)',
          color: 'white',
          py: 8,
          mb: 6,
          borderRadius: 2,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white' }}>
            Fresh from Our Garden to Your Table
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'white' }}>
            Discover the freshest vegetables grown right here at GEMS Our Own Indian School
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/shop')}
            sx={{ mt: 4 }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ mb: 6, color: 'white' }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ color: 'white' }}>
            Hydroponic Technology
          </Typography>
          <Typography sx={{ color: 'white' }}>
            Our state-of-the-art hydroponic system grows vegetables without soil,
            using mineral nutrient solutions in water. This results in faster growth,
            higher yields, and consistently high-quality produce.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ color: 'white' }}>
            100% Organic
          </Typography>
          <Typography sx={{ color: 'white' }}>
            We grow our vegetables using organic nutrients and natural pest control
            methods. No harmful pesticides or chemicals are used in our garden,
            ensuring you get the healthiest produce possible.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom color="primary" sx={{ color: 'white' }}>
            Student-Run Initiative
          </Typography>
          <Typography sx={{ color: 'white' }}>
            Our garden is maintained by students who learn valuable skills in
            sustainable agriculture, business management, and environmental
            stewardship. Your purchase supports student education!
          </Typography>
        </Grid>
      </Grid>

      {/* Benefits Section */}
      <Box sx={{ bgcolor: '#2c604a', py: 6, borderRadius: 2, color: 'white' }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ color: 'white' }}>
            Why Choose Our Vegetables?
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                🌱 Fresh & Local
              </Typography>
              <Typography sx={{ color: 'white' }}>
                Harvested daily from our school garden
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                💧 Water Efficient
              </Typography>
              <Typography sx={{ color: 'white' }}>
                Uses 90% less water than traditional farming
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                🌿 Pesticide-Free
              </Typography>
              <Typography sx={{ color: 'white' }}>
                Grown without harmful chemicals
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                💚 Supports Education
              </Typography>
              <Typography sx={{ color: 'white' }}>
                Proceeds support school gardening programs
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home