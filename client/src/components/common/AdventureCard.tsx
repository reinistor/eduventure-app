import {Place} from '@mui/icons-material';
import {Link} from '@pankod/refine-react-router-v6';
import { Typography, Box, Card, CardMedia, CardContent, Stack, borderRadius} from '@pankod/refine-mui';

import { AdventureCardProps } from 'interfaces/adventure';

const AdventureCard = ({id, title,location,points,photo}:AdventureCardProps) => {
  return (
    <Card
      component={Link}
      to={`/adventures/show/${id}`}
      sx={{
        maxWidth:'320px',
        padding: '9px',
        '&:hover': {
          boxShadow: '0 22px 45px 2px rgba(176,176,176,0.1)'
        },
        cursor: 'pointer',
        
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card image"
        sx={{borderRadius: '9px'}}
      />
      <CardContent sx={{display: 'flex',flexDirection:'row',justifyContent:'space-between',gap: '9px', paddingX:'4px'}}>
        <Stack direction="column" gap={1}>
          <Typography fontSize={15} fontWeight={500} color="#11142d">{title}</Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place 
              sx={{fontSize: 17,color:'#11142d', 
              marginTop:0.5}}
            />
            <Typography fontSize={13} color="#808191">{location}</Typography>
          </Stack>
        </Stack>
        <Box px={.5} py={0.5} borderRadius={1} bgcolor="#dadefa" height="fit-content">
          <Typography fontSize={11} fontWeight={550} color="#475be8">{points} EduPoints</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AdventureCard