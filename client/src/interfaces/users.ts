import { BaseKey } from '@pankod/refine-core';
import { ReactNode } from 'react';

export interface PeopleCardProp {
    id?: BaseKey | undefined,
    name: string,
    email: string,
    avatar: string,
    noOfAdventures: number
}

export interface InfoBarProps {
    icon: ReactNode,
    name: string
}
