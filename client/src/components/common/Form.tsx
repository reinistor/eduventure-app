import {Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button, fontWeight} from '@pankod/refine-mui';
import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({type,register,handleSubmit,handleImageChange,formLoading,onFinishHandler,adventureImage}:FormProps) => {
  return (
    <Box>
      <Typography fontSize={24} fontWeight={690} color="#11142d">
        {type} an Adventure
      </Typography>
      <Box mt="2.4" borderRadius="14px"
      padding="19px" bgcolor="#fcfcfc">
        <form style={{marginTop: '19px', width:'100%', display: 'flex', flexDirection:'column', gap:'19px'}}
        onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{fontWeight:490, margin:'9px 0', fontSize: 15, color:"#11142d"}}>Enter name of adventure</FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register('title', {required:true})}
            />
          </FormControl>
          <FormControl>
            <FormHelperText sx={{fontWeight:490, margin:'9px 0', fontSize: 15, color:"#11142d"}}>Describe the adventure</FormHelperText>
            <TextareaAutosize
              minRows={4}
              required
              placeholder="Type description"
              color="info"
              style={{width:'100%', background: 'transparent', fontSize: '15px', borderColor: 'rgba(0,0,0,0.230',borderRadius:5,padding:10, color:'#919191'}}
              {...register('description', {required:true})}
            />
          </FormControl>
          <Stack direction="row" gap={3}>
            <FormControl sx={{flex:1}}>
              <FormHelperText sx={{fontWeight:500, margin: '9px 0', fontSize:15, color:'#11142d'}}>
                Select Adventure Type
              </FormHelperText>
              <Select 
              variant='outlined' 
              color="info" 
              displayEmpty 
              required 
              inputProps={{'aria-label':'Without label'}} 
              defaultValue="project"
              {...register('adventureType', {required:true})}>
                <MenuItem value="project"> Project</MenuItem>
                <MenuItem value="internship"> Internship</MenuItem>
                <MenuItem value="job"> Job</MenuItem>
                <MenuItem value="competition"> Competition</MenuItem>
                <MenuItem value="challenge"> Challenge</MenuItem>
                <MenuItem value="workshop"> Workshop</MenuItem>
                <MenuItem value="event"> Event</MenuItem>
                <MenuItem value="social"> Social</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
            <FormHelperText sx={{fontWeight:490, margin:'9px 0', fontSize: 15, color:"#11142d"}}>Enter Adventure reward</FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              type="number"
              variant="outlined"
              {...register('points', {required:true})}
            />
          </FormControl>
          </Stack>
          <FormControl>
            <FormHelperText sx={{fontWeight:490, margin:'9px 0', fontSize: 15, color:"#11142d"}}>Enter location</FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              //type="number"
              variant="outlined"
              {...register('location', {required:true})}
            />
          </FormControl>
          <Stack direction="column" gap={1}
          justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#11142d" fontSize={15} fontWeight={490} my="9px">Adventure Photo</Typography>
              <Button component ="label" sx={{width:'fit-content',color:"#2ff490",textTransform:'capitalize', fontSize: 15}}>
                Upload
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) =>{
                    //@ts-ignore
                    handleImageChange(e.target.files[0])
                  }}
                />
              </Button>
            </Stack>
            <Typography fontSize={13} color="#808919" sx={{wordBreak:'break-all'}}>{adventureImage?.name}</Typography>
          </Stack>
          <CustomButton
            type="submit"
            title={formLoading? 'Submitting..' : 'Submit'}
            backgroundColor="#474be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  )
}

export default Form