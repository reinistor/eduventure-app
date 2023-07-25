import { BaseKey } from '@pankod/refine-core';

export interface FormFieldProp {
  title: string,
  labelName: string
}

export interface FormValues {
    title: string,
    description: string,
    adventureType: string,
    location: string,
    points: number | undefined,
}

export interface AdventureCardProps {
  id?: BaseKey | undefined,
  title: string,
  location: string,
  points: string,
  photo: string,
}
