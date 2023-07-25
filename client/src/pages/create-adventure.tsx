import {useState} from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import { Field, FieldValues, useForm } from '@pankod/refine-react-hook-form';
import { useNavigate } from '@pankod/refine-react-router-v6';
import Form from 'components/common/Form';


const CreateAdventure = () => {
  const navigate =  useNavigate();
  const {data: user}= useGetIdentity();
  const [adventureImage, setAdventureImage]= useState({name: '',url:''})
  const { refineCore: {onFinish, formLoading}, register, handleSubmit } = useForm();

  //preluam fisierul si citim 
  const handleImageChange = (file: File) => {
    const reader = (readFile: File) => new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.readAsDataURL(readFile);
    });

    reader(file).then((result: string) => setAdventureImage({ name: file?.name, url: result }));
  };

  //receive data from form and sending to backend to create a record in database
  const onFinishHandler= async (data:FieldValues) => {
    if(!adventureImage.name) return alert('Please select an image');
    await onFinish({...data,photo: adventureImage.url,email:user.email});
  };

  return (
    <Form
      type="Create"
      register= {register}
      onFinish= {onFinish}
      formLoading = {formLoading}
      handleSubmit ={handleSubmit}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      adventureImage= {adventureImage}

    />
  )
}

export default CreateAdventure