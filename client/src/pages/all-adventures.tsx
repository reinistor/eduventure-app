import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";

import {Box, Stack, TextField, Typography , Select, MenuItem} from '@pankod/refine-mui';
import { useNavigate } from "@pankod/refine-react-router-v6";
import { eduventure } from "assets";

import { AdventureCard, CustomButton } from "components";
import { useMemo } from "react";

const AllAdventures = () => {

  const navigate = useNavigate();

  const{
    tableQueryResult: {data,isLoading,isError},
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter, setSorter,
    filters, setFilters,
  }= useTable(); 

 const AllAdventures = data?.data ?? [];

 const currentPoints=sorter.find((item)=>item.field==="points")?.order;
 
 
 const toggleSort=(field: string)=> {
  setSorter([{field,order:currentPoints==='asc'? 'desc':'asc'}]);
 };

 const currentFilterValues= useMemo(()=>{
  const logicalFilters = filters.flatMap((item) =>
            ("field" in item ? item : []));
        
  return {
    title: logicalFilters.find((item)=>item.field==='title')?.value || '',
    adventureType:logicalFilters.find((item) => item.field === "adventureType")?.value || "",
  };
 },[filters]);

 if(isLoading) return <Typography>Loading..</Typography>
 if(isError) return <Typography>Error..</Typography>

  return (
    <Box>
      <Box mt="19px" sx={{display: 'flex', flexwrap:'wrap',gap:3}}>
        <Stack direction ="column" width="100%">
        <Typography fontSize={24} fontWeight={690} color="#11142d">
          {!AllAdventures.length ? 'There are no adventures right now!' : 'All Adventures'}</Typography>
          <Box mb={2} mt={3} display="flex" width="80%" justifyContent="space-between" flexWrap="wrap">
            <Box display="flex" gap={2} flexWrap="wrap" mb={{xs:'19px',sm:0}}>
            <CustomButton
              title={`Sort by points ${currentPoints === 'asc' ? '↑' : '↓'}`}
              handleClick={() => toggleSort('points')}
              backgroundColor="#475be8"
              color="#fcfcfc"
/>
              <TextField variant="outlined"
              color="info"
              placeholder="Search by name"
              value={currentFilterValues.title}
              onChange={(e)=>{
                setFilters([
                  {
                      field: "title",
                      operator: "contains",
                      value: e.currentTarget.value
                          ? e.currentTarget.value
                          : undefined,
                  },
              ]);
          }}
              />
              <Select variant="outlined"
              color="info"
              displayEmpty
              required
              inputProps={{'aria-label':'Without label'}}
              defaultValue=""
              value={currentFilterValues.adventureType}
              onChange={(e)=>{
                setFilters([
                  {
                      field: "adventureType",
                      operator: "eq",
                      value: e.target.value
                  }   
                  ], 'replace')
                }}
            
              >
                <MenuItem value="">All</MenuItem>
                {['Project','Internship','Job','Competition','Challenge','Workshop','Event','Social'].map((type)=>(
                  <MenuItem key={type} value={type.toLowerCase()}>{type}</MenuItem>
                ))}

              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>



      <Stack direction = "row" justifyContent="space-between" alignItems="center">
        
        <CustomButton 
        title="Add adventure"
        handleClick= {() => navigate('/adventures/create')}
        backgroundColor= "#476cf8"
        color="#fcfcfc"
        icon={<Add/>}
        />
      </Stack>
      <Box mt="19px" sx={{display:'flex', flexWrap: 'wrap', gap:3}}>
        {AllAdventures.map((adventure)=> (
          <AdventureCard 
          key={adventure._id}
          id={adventure._id}
          title={adventure.title}
          points={adventure.points}
          location={adventure.location}
          photo={adventure.photo}
          />
          ))}
      </Box>
      {AllAdventures.length >0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          <CustomButton
          title="Previous"
          handleClick={()=>setCurrent((prev)=>prev-1)} 
          backgroundColor="#475be8"
          color="#fcfcfc"
          disabled={!(current>1)} // daca suntem pe prima pagina
          />
          <Box display={{xs: 'hide', sm:'flex'}}
          alignItems="center" gap="4px">
              Page{' '} <strong>{current} of{pageCount}</strong>
          </Box>
          <CustomButton
          title="Next Page"
          handleClick={()=>setCurrent((prev)=>prev+1)} 
          backgroundColor="#475be8"
          color="#fcfcfc"
          disabled={(current===pageCount)}
          />
          <Select variant="outlined"
              color="info"
              displayEmpty
              required
              inputProps={{'aria-label':'Without label'}}
              defaultValue={10}
              onChange={(e)=>setPageSize(e.target.value ? Number(e.target.value):10)}
              >
                {[10,20,30,40,50].map((size)=>(
                  <MenuItem key={size} value={size}>Show {size}</MenuItem>
                ))}
                <MenuItem value="">All</MenuItem>

              </Select>
        </Box>
      )}
    </Box>
  )
}

export default AllAdventures