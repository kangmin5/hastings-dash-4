import React from 'react';
import type {FC} from 'react';
export const RequireSpan: FC<{ must: string, type: any }> = ({ must, type }) => {
    if (!type || type != 'required') return null;
    return <span className="text-xs text-black-400">
      {`${must} 필수값입니다.`}
    </span>
  }