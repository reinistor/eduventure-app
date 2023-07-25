import { TitleProps, useRouterContext } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import React from "react";

import { edu, eduventure } from 'assets';
export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={edu} alt="eduventure" width="27px" />
        ) : (
          <img src={eduventure} alt="eduventure" width="138px" />
        )}
      </Link>
    </Button>
  );
};
