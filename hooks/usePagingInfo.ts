import React from 'react';
import { Util } from '../interfaces';

interface ReturnType {
  pagingInfo: Util.PagingInfo;
  setPageIndex: (pageIndex: number) => void;
  setFilter: (filter: Util.PagingFilter) => void;
}

export default function(props?: { pageSize?: number } ): ReturnType {
  
  const [pagingInfo, setPagingInfo] = React.useState<Util.PagingInfo>({ 
    pageIndex: 0, 
    pageSize: props?.pageSize || 5,
    filter: []
  });

  const setFilter = (filter: Util.PagingFilter) => {
    const newFilter = pagingInfo.filter || [];
    const existedFilter = newFilter.find(f => f.key === filter.key);
    if (existedFilter) {
      existedFilter.comparison = filter.comparison;
      existedFilter.value = filter.value;
    } else {
      newFilter.push(filter);
    }
    setPagingInfo(prev => ({...prev, filter: newFilter}));
  };

  const setPageIndex = (pageIndex: number) => {
    setPagingInfo(prev => ({...prev, pageIndex}));
  }

  return {
    pagingInfo,
    setPageIndex,
    setFilter
  }
};