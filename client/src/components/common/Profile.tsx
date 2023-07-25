import React from 'react'
import { Email, Phone, Place } from '@mui/icons-material';
import { Box, Stack, Typography } from '@pankod/refine-mui';

import AdventureCard from './AdventureCard';
import { AdventureProps, ProfileProps } from 'interfaces/common';

// function checkImage(url: any) {
//   let img = new Image();
//   img.src = url;
//   return img.width !== 0 && img.height !== 0;
// }

const Profile = ({ type, name, avatar, email, adventures }: ProfileProps) => (
  <Box>
    <Typography fontSize={24} fontWeight={690} color="#11142D">{type} Profile</Typography>

    <Box
      mt="19px"
      borderRadius="14px"
      padding="19px"
      bgcolor="#FCFCFC"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2.3,
        }}
      >
        <img
  src="https://res.cloudinary.com/dcgoxerld/image/upload/v1686413857/ludoddqkc6taold5hi7x.jpg"
  alt="abstract"
  className="my_profile-bg"
  style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
/>

        <Box
          flex={1}
          sx={{ marginTop: { md: '58px' }, marginLeft: { xs: '20px', md: '0px' } }}
        >
          <Box flex={1} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap="20px">
            <img
             // src={checkImage(avatar) ? avatar : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"}
              width={78}
              height={78}
              alt=""
              className="my_profile_user-img"
            />

            <Box flex={1} display="flex" flexDirection="column" justifyContent="space-between" gap="30px">
              <Stack direction="column">
                <Typography fontSize={21} fontWeight={580} color="#11142D">{name}</Typography>
                <Typography fontSize={15} color="#808191">Software Engineer</Typography>
              </Stack>

              <Stack direction="column" gap="30px">
              <Stack gap="15px">
                  <Typography fontSize={15} fontWeight={500} color="#808191">About</Typography>
                  <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                    <Place sx={{ color: '#11142D' }} />
                    <Typography fontSize={14} color="#11142D">Software Engineering Bachelor Student currently working at Blue Ocean Robotics ApS.
I consider myself a Data Science Enthusiast, being passionate about AI/ML/DL, as well as Web development and Robotics and I would like to apply my 
skills in order to solve real world problems and gain proficiency in the field. --------------

*Back-end development :

*Front-end development :

*Database Technologies:

*Data Science :

</Typography>
                  </Box>
                </Stack>
                <Stack gap="15px">
                  <Typography fontSize={13} fontWeight={500} color="#808191">Address</Typography>
                  <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                    <Place sx={{ color: '#11142D' }} />
                    <Typography fontSize={13} color="#11142D">Strada Stațiunii 19, Suceava, Romania</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" flexWrap="wrap" gap="20px" pb={4}>
                  <Stack flex={1} gap="15px">
                    <Typography fontSize={13} fontWeight={480} color="#808191">Phone Number</Typography>
                    <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                      <Phone sx={{ color: '#11142D' }} />
                      <Typography fontSize={13} color="#11142D" noWrap>+40 763 110 100</Typography>
                    </Box>
                  </Stack>

                  <Stack flex={1} gap="15px">
                    <Typography fontSize={13} fontWeight={480} color="#808191">Email</Typography>
                    <Box display="flex" flexDirection="row" alignItems="center" gap="10px">
                      <Email sx={{ color: '#11142D' }} />
                      <Typography fontSize={13} color="#11142D">{email}</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    {adventures.length > 0 && (
    <Box
      mt={2.5}
      borderRadius="14px"
      padding="19px"
      bgcolor="#FCFCFC"
    >
      <Typography fontSize={15} fontWeight={580} color="#11142D">{type} Projects</Typography>

      <Box
        mt={2.5}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2.5,
        }}
      >
        {adventures?.map((adventure: AdventureProps) => (
          <AdventureCard key={adventure._id} id={adventure._id}
            title={adventure.title}
            location={adventure.location}
            points={adventure.points}
            photo={adventure.photo}
          />
        ))}
      </Box>
    </Box>
    )}
  </Box>
);

export default Profile;