import React from 'react'
import { Typography, Box, Stack, capitalize} from '@pankod/refine-mui';

import{useDelete, useGetIdentity, useShow} from '@pankod/refine-core';

import {useParams, useNavigate, } from '@pankod/refine-react-router-v6';

import { ChatBubble,Delete, Edit, Phone,Place,Star } from '@mui/icons-material';

import { CustomButton } from 'components';
 
function checkImage(url: any) {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const AdventureDetails = () => {
  const navigate = useNavigate();
  const {data: user} =useGetIdentity();
  const {id} = useParams();
  const {mutate} =useDelete();
  const {queryResult} = useShow();

  const {data, isLoading, isError} =queryResult;

  const adventureDetails=data?.data ??{};
  if(isLoading) return <div>Loading..</div>
  if(isError) return <div>Error..</div>
  const isCurrentUser = user.email === adventureDetails.creator.email; //can be negated to see how it looks from user perspective

  const handleDeleteAdventure = () => {
    
    const response = window.confirm(
        "Are you sure you want to delete this adventure?",
    );
    if (response) {
        mutate(
            {
                resource: "adventures",
                id: id as string,
            },
            {
                onSuccess: () => {
                    navigate("/adventures");
                },
            },
        );
    }
};
 

  return (
    <Box
        borderRadius="14px"
        padding="19px"
        bgcolor="#FCFCFC"
        width="fit-content"
    >
        <Typography fontSize={24} fontWeight={650} color="#11142D">
            Details
        </Typography>

        <Box
            mt="19px"
            display="flex"
            flexDirection={{ xs: "column", lg: "row" }}
            gap={3}
        >
            <Box flex={1} maxWidth={764}>
                <img
                    src={adventureDetails.photo}
                    alt="adventure_details-img"
                    height={546}
                    style={{ objectFit: "cover", borderRadius: "9px" }}
                    className="adventure_details-img"
                />

                <Box mt="14px">
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        alignItems="center"
                    >
                        <Typography
                            fontSize={17}
                            fontWeight={450}
                            color="#11142D"
                            textTransform="capitalize"
                        >
                            {adventureDetails.adventureType}
                        </Typography>
                        <Box>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <Star
                                    key={`star-${item}`}
                                    sx={{ color: "#F2C94C" }}
                                />
                            ))}
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                        alignItems="center"
                        gap={1.5}
                    >
                        <Box>
                            <Typography
                                fontSize={21}
                                fontWeight={550}
                                mt="9px"
                                color="#11142D"
                            >
                                {adventureDetails.title}
                            </Typography>
                            <Stack
                                mt={0.5}
                                direction="row"
                                alignItems="center"
                                gap={0.5}
                            >
                                <Place sx={{ color: "#808191" }} />
                                <Typography fontSize={13} color="#808191">
                                    {adventureDetails.location}
                                </Typography>
                            </Stack>
                        </Box>

                        <Box>
                            <Typography
                                fontSize={15}
                                fontWeight={550}
                                mt="9px"
                                color="#11142D"
                            >
                                Points
                            </Typography>
                            <Stack
                                direction="row"
                                alignItems="flex-end"
                                gap={1}
                            >
                                <Typography
                                    fontSize={24}
                                    fontWeight={650}
                                    color="#475BE8"
                                >
                                    {adventureDetails.points}
                                </Typography>
                                <Typography
                                    fontSize={13}
                                    color="#808191"
                                    mb={0.5}
                                >
                                    
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>

                    <Stack mt="24px" direction="column" gap="9px">
                        <Typography fontSize={17} color="#11142D">
                            About
                        </Typography>
                        <Typography fontSize={13} color="#808191">
                            {adventureDetails.description}
                        </Typography>
                    </Stack>
                </Box>
            </Box>

            <Box
                width="100%"
                flex={1}
                maxWidth={326}
                display="flex"
                flexDirection="column"
                gap="19px"
            >
                <Stack
                    width="100%"
                    p={2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    border="1px solid #E4E4E4"
                    borderRadius={1.5}
                >
                    <Stack
                        mt={2}
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                    >
                        <img
                            src={
                                checkImage(adventureDetails.creator.avatar)
                                    ? adventureDetails.creator.avatar
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            }
                            alt="avatar"
                            width={90}
                            height={90}
                            style={{
                                borderRadius: "100%",
                                objectFit: "cover",
                            }}
                        />

                        <Box mt="14px">
                            <Typography
                                fontSize={17}
                                fontWeight={550}
                                color="#11142D"
                            >
                                {adventureDetails.creator.name}
                            </Typography>
                            <Typography
                                mt="5px"
                                fontSize={13}
                                fontWeight={350}
                                color="#808191"
                            >
                                Creator
                            </Typography>
                        </Box>

                        <Stack
                            mt="14px"
                            direction="row"
                            alignItems="center"
                            gap={1}
                        >
                            <Place sx={{ color: "#808191" }} />
                            <Typography
                                fontSize={13}
                                fontWeight={350}
                                color="#808191"
                            >
                                Suceava
                            </Typography>
                        </Stack>

                        <Typography
                            mt={1}
                            fontSize={15}
                            fontWeight={550}
                            color="#11142D"
                        >
                            {adventureDetails.creator.allAdventures.length}{" "}
                            Adventures
                        </Typography>
                    </Stack>

                    <Stack
                        width="100%"
                        mt="24px"
                        direction="row"
                        flexWrap="wrap"
                        gap={2}
                    >
                        <CustomButton
                            title={!isCurrentUser ? "Message" : "Edit"}
                            backgroundColor="#475BE8"
                            color="#FCFCFC"
                            fullWidth
                            icon={
                                !isCurrentUser ? <ChatBubble /> : <Edit />
                            }
                            handleClick={() => {
                                if (isCurrentUser) {
                                    navigate(
                                        `/adventures/edit/${adventureDetails._id}`,
                                    );
                                }
                            }}
                        />
                        <CustomButton
                            title={!isCurrentUser ? "Call" : "Delete"}
                            backgroundColor={
                                !isCurrentUser ? "#2ED480" : "#d42e2e"
                            }
                            color="#FCFCFC"
                            fullWidth
                            icon={!isCurrentUser ? <Phone /> : <Delete />}
                            handleClick={() => {
                                if (isCurrentUser) handleDeleteAdventure();
                            }}
                        />
                    </Stack>
                </Stack>

                <Stack>
                    <img
                        src="https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=47.63916&lon=26.22952&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*"
                        width="100%"
                        height={306}
                        style={{ borderRadius: 10, objectFit: "cover" }}
                    />
                </Stack>

                <Box>
                    <CustomButton
                        title="Apply now"
                        backgroundColor="#475BE8"
                        color="#FCFCFC"
                        fullWidth
                    />
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default AdventureDetails